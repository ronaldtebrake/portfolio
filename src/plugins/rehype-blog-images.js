import { visit } from 'unist-util-visit';

function isOnlyImageChild(parent, img) {
  if (parent.tagName !== 'p') return false;

  const meaningfulChildren = parent.children.filter(
    (child) =>
      child.type === 'element' ||
      (child.type === 'text' && child.value.trim() !== ''),
  );

  return meaningfulChildren.length === 1 && meaningfulChildren[0] === img;
}

function imageTrigger(img, alt) {
  const src = img.properties?.src;
  if (typeof src === 'string' && src.length > 0) {
    img.properties['data-full-src'] = src;
  }

  return {
    type: 'element',
    tagName: 'button',
    properties: {
      type: 'button',
      className: ['blog-image-link'],
      title: 'View full size image',
      'aria-label': alt ? `View full size: ${alt}` : 'View full size image',
    },
    children: [img],
  };
}

function wideFigure(link) {
  return {
    type: 'element',
    tagName: 'figure',
    properties: {
      className: ['not-prose', 'blog-embed-wide', 'my-10'],
    },
    children: [link],
  };
}

function enhanceLinkedImage(linkNode) {
  const img = linkNode.children?.find(
    (child) => child.type === 'element' && child.tagName === 'img',
  );
  if (!img) return null;

  const meaningfulChildren = linkNode.children.filter(
    (child) =>
      child.type === 'element' ||
      (child.type === 'text' && child.value.trim() !== ''),
  );
  if (meaningfulChildren.length !== 1) return null;

  return wideFigure(imageTrigger(img, img.properties?.alt));
}

function enhanceStandaloneImage(img) {
  const src = img.properties?.src;
  if (typeof src !== 'string' || src.length === 0) return null;

  return wideFigure(imageTrigger(img, img.properties?.alt));
}

export function rehypeBlogImages() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (!parent) return;

      if (node.tagName === 'a') {
        const figure = enhanceLinkedImage(node);
        if (figure) {
          parent.children[index] = figure;
        }
        return;
      }

      if (node.tagName !== 'img' || parent.tagName === 'button') return;

      const link = enhanceStandaloneImage(node);
      if (!link) return;

      if (isOnlyImageChild(parent, node)) {
        parent.tagName = 'figure';
        parent.properties = link.properties;
        parent.children = link.children;
        return;
      }

      parent.children[index] = link;
    });
  };
}
