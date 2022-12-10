# Ronald te Brake's Blog / Portfolio / Playground.

## Credits because it's build with code or inspiration from:

### Components:
* https://shuffle.dev
* https://www.bestastrothemes.com/theme/m6v3l9-astro-theme-stone/
* Minion - https://codepen.io/AsyrafHussin/pen/wXjpyB

### PWA:
* https://github.com/tatethurston/astrojs-service-worker#readme
* https://github.com/alextim/astro-lib/tree/main/packages/astro-webmanifest#readme

### Open Graph:
* https://aidankinzett.com/blog/astro-open-graph-image/

### Analytics:
* https://usefathom.com/ref/MJRVOF

# TODO:
- [ ] Content
- [ ] Lighthouse check PR GitHub automation
- [ ] Analytics https://usefathom.com/ref/MJRVOF
- [ ] Mastodon / Twitter automation?
- [ ] Sharing snippets
- [ ] Minion of the Month - https://codepen.io/AsyrafHussin/pen/wXjpyB
- [ ] Footer - Newsletter https://convertkit.com/features/forms
- [ ] Comments by Giscus
- [ ] Dark theme (see Nav.astro dark / light commented out)
- [ ] https://codepen.io/ronaldtebrake/pen/XWGbQWL (when we have some categories / content)
- [ ] Filters on category? and add a new section on the home page linking to filters
- [ ] Pagination -> https://rimdev.io/creating-a-pagination-component-with-astro/
- [ ] Table of Contents?
- [ ] Related posts
- [ ] Create a prevous + next blog post underneath a post and use transition:animate="slide" to slide left or right
- [ ] Reading time 


### FAQ
1. How to add a new category?
2. Make sure you add it to the `tailwind.config.cjs`
```
categoryColor: {
    'drupal': '#0077C0',
    'product': 'yellow',
    'processes': 'red',
},
```
AND
```
addComponents({
    ".processes": {
        textDecoration: theme("categoryColor.processes"),
        "&::before": {
            backgroundColor: theme("categoryColor.processes"),
        },
    },
    ".drupal": {
        textDecoration: theme("categoryColor.drupal"),
        "&::before": {
            backgroundColor: theme("categoryColor.drupal"),
        },
    },
    ".product": {
        textDecoration: theme("categoryColor.product"),
        "&::before": {
            backgroundColor: theme("categoryColor.product"),
        },
    },
})
```
3. Add it to `config.ts` as allowed enum option. `category: z.enum(['product', 'drupal', 'processes']),`

This should ensure this category is chosen as class name for the links and it's CSS.