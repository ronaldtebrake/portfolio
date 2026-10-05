---
title: "MCP Apps in Drupal: exploring interactive interfaces beyond text"
description: "Exploring how MCP Apps can add interactive interfaces to Drupal tools exposed through Tool API and MCP Server."
pubDate: "Oct 5 2026"
heroImage: "./assets/pexels-ron-lach-10276039.jpg"
heroImageAlt: "Film negatives laid out on a light table"
heroImageCredit:
  photoBy: "Photo by Ron Lach from Pexels"
  url: "https://www.pexels.com/photo/camera-film-on-light-table-10276039/"
category: "product"
tags: ["drupal", "ai", "webmcp", "mcp", "tool-api", "mcp-apps", "drupalcon"]
featured: true
---

In my previous post about [WebMCP and Drupal](/blog/webmcp-and-drupal/), I ended with something I wanted to explore further: **Tool API**. It seemed like the piece that could let Drupal expose the same capability in different places, without having to implement the operation again for every interface.

Scott Falconer described that nicely [on LinkedIn](https://lnkd.in/p/eb_wQjbE):

> Drupal’s business logic and capabilities should be reusable across interfaces, whether that’s a person using a form or an agent working through MCP or WebMCP, etc.

DrupalCon Rotterdam only added to that. There was a lot of interest around Tool API, and Scott's [behind-the-scenes look at one of the DriesNote demos](https://www.youtube.com/watch?v=4mpfnfprbJo) shows some of this work in practice and the reasoning behind it. The plans for the Rosetta Sprint take that idea further, aiming to make Drupal's capabilities reusable across agents, frontends and other systems.

After the WebMCP experiment, I wanted to move closer to that shared layer and look at Tool API directly. Not only to see how well it could support these different integrations, but also to find out where the rough edges are when the same Drupal capability is used from somewhere else.

Getting my hands dirty seemed like the best way to contribute useful feedback.

## The same operation, different ways to use it

Let's take a step back. As mentioned, [Tool API](https://www.drupal.org/project/tool) is at the heart of this. It lets a module define an operation with typed inputs and outputs, validation and access checks. That operation can then be reused from different places.

For example, a module might provide an operation to search a collection of photos. A Drupal form can use it, a workflow can use it, and an agent can use it. Each of those consumers needs a way to work with Tool API, but the search logic itself does not need to be implemented again.

[MCP Server Tool Bridge](https://www.drupal.org/project/mcp_server_tool_bridge) already provides one of those integrations. It exposes selected Tool API tools through MCP, converts their input definitions into the JSON Schema an MCP client can understand, and runs the tool's access check before executing it.

The [DriesNote demos](https://www.drupal.org/blog/proof-not-promises-watch-the-six-demos-from-the-driesnote-rotterdam) showed this from several angles. The photo and album capabilities could be used from a normal form, without AI, and then reused by an agent.

[WebMCP](https://webmachinelearning.github.io/webmcp/) lets a web application expose tools to agents working with the page. [MCP Server](https://www.drupal.org/project/mcp_server) exposes Drupal capabilities over MCP to clients outside the normal Drupal interface.

## A tool does not remove the need for an interface

With MCP Server, an agent can call Drupal tools directly. The user no longer needs to be on a Drupal page for the agent to search content, update something or run another operation exposed through Tool API.

But the user is still there, working with the agent, in who knows what kind of interface.

Suppose I am working with an agent on an article and ask:

> Update the hero for ‘A weekend of discovery in Rotterdam’.

The agent can use a Drupal tool to search the media library and find five good options.

But what should happen next?

When I am working with something visual like images, I expect to see them. I want an interface that allows me to compare the options, select one and continue from there. A list of filenames or five text descriptions might contain the same information, but it is not a good way to make that choice.

The same applies to other types of tools. If I ask for a content report, the numbers might answer my question. But if I want to understand how they changed over time, filter the results or compare different content types, I would rather see and interact with that data directly.

This is where text responses start to become limiting. The agent has access to the Drupal capability, but some tasks still need a visual and interactive part for the person working with it.

[MCP can already return images](https://modelcontextprotocol.io/extensions/apps/overview), but what I am looking for goes a step further. I want the interface around those results as well: something I can see, interact with, and use to continue the same operation.

That is where MCP Apps comes in.

## What MCP Apps adds

With [MCP Apps](https://modelcontextprotocol.io/extensions/apps/overview), a tool can point to an interactive application that the host renders alongside the conversation.

That application is not generated by the model for every response. It is a frontend provided by the MCP server, with its own HTML and JavaScript. The tool gives it data, and the person can interact with it.

A tool links to its interface through metadata:

```json
{
  "_meta": {
    "ui": {
      "resourceUri": "ui://drupal/media-picker"
    }
  }
}
```

The `ui://` URI points to a resource on the MCP server that contains the application. A supporting host can load that resource in a sandboxed iframe and pass the tool input and result to it.

That resource is served as HTML for an MCP App, using the `text/html;profile=mcp-app` MIME type. The [MCP Apps protocol overview](https://apps.extensions.modelcontextprotocol.io/api/documents/overview.html) explains the full flow.

It's not just about viewing, the interaction can continue from inside the app as well. A chart could request another data set after changing a filter. A media picker could call a tool after the user selects an image. 

So what does Drupal already have to make this work?

## MCP Apps in Drupal

[Drupal's MCP Server](https://www.drupal.org/project/mcp_server) already uses the official PHP MCP SDK. The SDK already includes [support for MCP extensions, including MCP Apps](https://github.com/modelcontextprotocol/php-sdk/blob/main/docs/extensions.md).

So a lot of the protocol work is already there:

- the MCP Apps extension
- `ui://` resources
- the `text/html;profile=mcp-app` resource type
- tool metadata that links a tool to an app
- checking whether the connected client supports the extension
- metadata for things such as permissions and Content Security Policy

Drupal already has the other half too. [MCP Server](https://www.drupal.org/project/mcp_server) exposes tools and resources, while [MCP Server Tool Bridge](https://www.drupal.org/project/mcp_server_tool_bridge) turns Tool API plugins into MCP tools.

That left me with a fairly small question: how much glue is actually missing between those pieces?

Turns out, surprisingly little.

For the proof of concept I only needed to connect metadata through the existing layers. A Tool API plugin needs to be able to describe the MCP App it belongs to, the Tool Bridge needs to carry that metadata into the MCP tool, and MCP Server needs to expose the `ui://` resource through the PHP SDK.

The Drupal tool itself does not need to know how to render an MCP App. It can keep doing what it already does.

That is exactly what I wanted to test.

## Demo time!

You can find the code over at [ronaldtebrake/drupal_mcp_apps](https://github.com/ronaldtebrake/drupal_mcp_apps).

<div class="not-prose blog-embed-wide my-10">
<iframe width="100%" height="720" src="https://www.youtube.com/embed/7CX6Ovw0PAM" title="Updating a Drupal hero image through Tool API, MCP Server and an MCP App" loading="lazy" style="border: 0; border-radius: 1rem; min-height: 720px;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<p><em>Recording of the Codex demo: the agent finds the article, the MCP App shows the matching images, and Drupal saves a new unpublished revision.</em></p>

For the demo I used the same hero example from earlier, and built on top of the [Agent Access recipe](https://www.drupal.org/project/agent_access). The module creates some demo content and Media items, exposes the required tools through Tool API, and provides a small MCP App for choosing the new hero.

In Codex I can simply ask:

> Update the hero for ‘A weekend of discovery in Rotterdam’.

The agent finds the article and uses Drupal's tool to open the media picker.

Instead of getting five filenames back, I get the actual images. I can compare them, select one, edit the article-specific alt text and compare the current hero with the proposed one.

When I confirm the change, the interesting part is what happens back in Drupal.

The hero update itself now composes existing Tool Belt tools through Tool API. It uses the field tools to update the Media reference and alt text, the revision tool to create a new revision, and the save tool to persist it.

So even inside this small demo, the MCP App is not introducing another way to edit Drupal content. It is calling a workflow that reuses the same generic Drupal tools that can be used from other Tool API consumers as well.

Each Tool Belt operation still runs its own access check, while the small hero workflow keeps the checks that are specific to this interaction, such as only allowing draft content and making sure the selected Media is accessible.

So the flow becomes:

```text
Prompt in Codex
    ↓
Tool API
    ↓
MCP Server Tool Bridge
    ↓
MCP tool result
    ↓
ui://drupal/media-picker
    ↓
I choose the image
    ↓
Hero update workflow
    ↓
Tool Belt tools
    ↓
Drupal creates the new revision
```

That is probably my favourite part of the demo.

The MCP App adds the visual interaction. Tool API gives us the reusable operations. Tool Belt already provides much of the Drupal content logic we need. Drupal still owns the content, revisions and access checks.

## Contributing back

The proof of concept also made the missing pieces much clearer.

I currently carry three small patches in the demo repository, and I will contribute these back to the modules they belong to:

- **[Tool API](https://github.com/ronaldtebrake/drupal_mcp_apps/blob/main/patches/tool-mcp-apps.patch)**: allow a tool definition and its result to carry metadata that is not part of the tool's normal output
- **[MCP Server Tool Bridge](https://github.com/ronaldtebrake/drupal_mcp_apps/blob/main/patches/mcp_server_tool_bridge-mcp-apps.patch)**: carry that metadata from Tool API into the generated MCP tool and its result
- **[MCP Server](https://github.com/ronaldtebrake/drupal_mcp_apps/blob/main/patches/mcp_server-mcp-apps.patch)**: enable the PHP SDK's MCP Apps extension and preserve the metadata needed for MCP tools and resources

These patches were enough to prove the integration. My next step is to bring the changes back to the projects they belong to, discuss the approach with the maintainers and adapt them where needed.

With those three relatively small changes, the demo can use the existing Drupal plugin system, Tool API, Tool Bridge and MCP Server to provide the media picker. The fact that it only needed this thin layer of glue gave me a lot of appreciation for how much solid groundwork is already there across the ecosystem.

## Looking forward to the Rosetta Sprint

This is also why I am excited about the Rosetta Sprint.

In the [DriesNote](https://www.drupal.org/blog/driesnote-rotterdam), Dries proposed bringing key maintainers together for four days to work on a shared way to describe Drupal's capabilities. The idea is to describe them once, in a form that agents, other systems and people can all use.

That is close to what this experiment has been about. Tool API, Typed Data, MCP, WebMCP and MCP Apps sit at different points in the same picture.

We do not need to choose between tools and interfaces, or between people and agents. The capability can stay in Drupal, while the interaction changes depending on where and how it is used.

Building this demo gave me a much deeper understanding of how these pieces fit together. I can now see much more clearly how Tool API can become the shared layer.

That also makes the goals of the Rosetta Sprint feel much more tangible to me, and I am looking forward to helping turn those goals into something consistent across Drupal.

## References

* [WebMCP and Drupal](/blog/webmcp-and-drupal/)
* [Scott Falconer on LinkedIn](https://lnkd.in/p/eb_wQjbE)
* [Behind-the-scenes look at the DriesNote demo](https://www.youtube.com/watch?v=4mpfnfprbJo)
* [Tool API](https://www.drupal.org/project/tool)
* [MCP Server Tool Bridge](https://www.drupal.org/project/mcp_server_tool_bridge)
* [DriesNote demos](https://www.drupal.org/blog/proof-not-promises-watch-the-six-demos-from-the-driesnote-rotterdam)
* [WebMCP specification](https://webmachinelearning.github.io/webmcp/)
* [MCP Server](https://www.drupal.org/project/mcp_server)
* [MCP Apps overview](https://modelcontextprotocol.io/extensions/apps/overview)
* [MCP Apps protocol overview](https://apps.extensions.modelcontextprotocol.io/api/documents/overview.html)
* [PHP MCP SDK extensions](https://github.com/modelcontextprotocol/php-sdk/blob/main/docs/extensions.md)
* [Drupal MCP Apps demo](https://github.com/ronaldtebrake/drupal_mcp_apps)
* [Updating a Drupal hero image through Tool API, MCP Server and an MCP App](https://youtu.be/7CX6Ovw0PAM)
* [Agent Access](https://www.drupal.org/project/agent_access)
* [DriesNote Rotterdam](https://www.drupal.org/blog/driesnote-rotterdam)
* [Drupal AI after the DriesNote: what you can use today and what comes next](https://www.drupal.org/about/ai/initiatives/blog/drupal-ai-after-the-driesnote-rotterdam-what-you-can-use-today-and-what-comes-next)