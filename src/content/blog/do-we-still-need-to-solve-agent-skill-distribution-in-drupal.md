---
title: "Do We Still Need to Solve Agent Skill Distribution in Drupal?"
description: "As the agent ecosystem develops better ways to package, discover and deliver Skills, Drupal may not need to build its own orchestration layer."
pubDate: "Aug 17 2026"
heroImage: "./assets/pexels-cottonbro-7095819.jpg"
heroImageAlt: "Musical notes on a music sheet stand, a metaphor for orchestrating"
heroImageCredit:
  photoBy: "Photo by cottonbro studio from Pexels"
  url: "https://www.pexels.com/photo/musical-notes-on-music-sheet-stand-7095819/"
category: "product"
tags: ["drupal", "ai", "agent-skills", "mcp", "ai-best-practices", "distribution", "agent-plugins", "discovery"]
featured: false
---

I have spent quite some time thinking about how we get Drupal knowledge into AI coding agents.

First through Agent Skills. Then through Surge. More recently through AI Best Practices.

A recurring problem has been distribution. Writing a useful Skill is one thing. Getting that Skill into the agent that needs it is another.

For a while I thought Drupal needed to solve this ourselves. I am starting to question that.

Instead of asking:

> How do we copy every Drupal Skill into every agent?

Maybe we should ask:

> How do we publish good Drupal capabilities so agents can discover them?

Skills over MCP, Agent Plugins and Agentic Resource Discovery now address different parts of this problem. That makes me less convinced Drupal should build its own orchestration layer.

## Skills and MCP complement each other

Agent Skills and MCP solve different problems.

A **Skill** gives an agent knowledge and a workflow: how to approach a task, which conventions to follow and which mistakes to avoid. With progressive disclosure, the agent can load the full Skill only when needed.

**MCP** gives the agent access to capabilities. An MCP server can expose tools the agent can call to inspect or change an external system.

In simple terms:

```
Skill
  ↓
How should I do this?

MCP
  ↓
What can I actually do?
```

Imagine an agent working with Drupal Canvas.

MCP could give it tools to create a page, place components and update their properties. A Skill could teach the agent how Canvas components should be structured and how props and slots should be used.

The agent needs both knowledge and capability. The awkward part has been getting both into the agent.

## Drupal already has a good MCP lifecycle

On the MCP side, Drupal already has a model that fits our ecosystem.

A Drupal module can implement a tool through Tool API. Drupal discovers that tool because it is part of the installed application. The Drupal MCP Server can then expose those tools to an external agent.

```
Drupal module
      ↓
Tool API
      ↓
Drupal discovers tools
      ↓
Drupal MCP Server
      ↓
Agent harness
```

A Contrib maintainer builds Drupal functionality, Drupal handles discovery, and the MCP server integrates with the agent. The module does not need to understand how Claude, Codex or Cursor configures individual tools.

Skills do not have the same lifecycle.

## Canvas shows the Skill distribution problem

[Drupal Canvas Tools](https://www.drupal.org/project/canvas_tools) exposes Tool API operations for working with Canvas. Through Drupal's MCP server, an external agent can use those tools.

Then we have [`drupal-canvas/skills`](https://github.com/drupal-canvas/skills), containing Agent Skills for Canvas development, with its own installation path:

```
npx skills add drupal-canvas/skills
```

There is also the [Drupal Canvas Plugin](https://www.drupal.org/project/drupal_canvas_plugin), with Canvas Skills and agents distributed through DevKit and a Claude marketplace.

So today a developer may encounter three paths:

```
Canvas Tools
  → Drupal module
  → Tool API + MCP

Canvas Skills
  → GitHub
  → npx skills

Drupal Canvas Plugin
  → DevKit / marketplace
```

From a developer's perspective, the question becomes:

> Which ones do I need, and how do I get them into my agent?

## A Skill in a Contrib module is not enough

Imagine a Contrib module provides both Tool API integrations and a Skill explaining how those tools should be used.

That ownership model makes sense: the maintainers of the functionality also maintain the knowledge needed to use it.

But installing the module only gets the tools into the agent through Drupal and MCP. The Skill sitting next to the PHP code still needs to be installed, copied or discovered somehow.

Surge tried to solve this. Some of that thinking moved into AI Best Practices, where we discussed discovering Skills from Composer packages and Drupal modules and synchronising them into `.agents/skills`.

It works, but it makes Drupal responsible for another orchestration layer. Meanwhile, the wider ecosystem is working on the same problem.

## Skills over MCP

The MCP project now has a [Skills Over MCP Working Group](https://modelcontextprotocol.io/community/working-groups/skills-over-mcp).

The idea is close to what Drupal needs: an MCP server could expose both tools and the Skills that teach an agent how to use them. The working group is developing SEP-2640, a proposed Skills extension that serves Skills over MCP using the Resources primitive.

```
Drupal MCP Server
      ↓
Tools + Skill catalog
      ↓
Agent sees available Skills
      ↓
Agent loads relevant Skill
```

Our MCP server already sits in front of Tool API. If this approach becomes widely supported, a Drupal module could expose both its tools and related Skills through the same MCP connection, without a separate Skill installation path.

## Agent Plugins solves packaging, not installation

[Agent Plugins](https://agent-plugins.org/) takes a different approach. It defines a portable package format containing Agent Skills and MCP server configuration.

For example:

```
drupal-canvas/
├── plugin.json
├── skills/
│   └── canvas-development/
│       └── SKILL.md
└── mcp.json
```

Skills over MCP asks how Skills can be discovered and consumed through an MCP connection. Agent Plugins asks how related capabilities can be **packaged together**.

But there is an important limitation for our distribution problem: Agent Plugins does not standardise how a plugin gets installed. The specification deliberately leaves installation sources, registries and marketplaces to the client.

So the installation path still depends on the agent harness. Different clients support their own marketplaces, repositories, local paths or installation tooling.

For Drupal, Agent Plugins could give us a portable package format, but installation and discovery would still depend on the surrounding ecosystem. Packaging alone does not solve distribution.

## And then there is discovery

There is still the question of how an agent knows that a Drupal capability exists.

[Agentic Resource Discovery](https://agenticresourcediscovery.org/), or ARD, lets a client ask what is available for a task. A discovery service can return matching Skills, MCP servers, plugins or other resources, which are then consumed through their own protocols.

That suggests a different model from scanning Composer packages and copying everything into an agent directory.

If discovery models such as ARD mature, Drupal.org could eventually become one source of trusted Drupal agent capabilities. How those capabilities are produced can remain open. A project might publish an Agent Plugin, expose Skills through MCP, maintain Skills alongside the project, or rely on a curated set from AI Best Practices.

Drupal does not need to build this catalog now. The useful shift is from **aggregation** to **publishing**.

## What does this mean for AI Best Practices?

I am inclined to remove the custom aggregation and orchestration we brought over from Surge.

The wider ecosystem is developing primitives that overlap strongly with what we would otherwise build:

1. **Skills over MCP** could deliver Skills through an existing MCP connection, alongside the tools they relate to.
2. **Agent Plugins** provide a portable package format, although installation still depends on the agent client.
3. **ARD** focuses on runtime discovery of Skills, MCP servers, plugins and other capabilities.

None of these provides a complete distribution model today. But together they make me hesitant to build a Drupal-specific resolver while the ecosystem is still working out how these pieces fit together.

For now, I think AI Best Practices should take a simpler approach:

* Keep Drupal Skills standards-compliant and publish them normally.
* Use existing installation tooling rather than introduce a Drupal-specific installer.
* Follow, test and contribute to Skills over MCP, Agent Plugins and discovery standards.
* Focus our own effort on Drupal-specific problems: what agents should know about Drupal, how we validate that knowledge, and how Core and Contrib can publish capabilities agents can trust.

Surge aimed to get the right Drupal knowledge into the agent at the right moment. At the time, I thought that required Drupal to build an orchestrator in the middle.[^1]

I no longer think that is the problem Drupal needs to own.

## References

[^1]: [Why I'm Sunsetting Surge and Focusing on AI Best Practices](/blog/why-im-sunsetting-surge-and-focusing-on-ai-best-practices/)

* [Skills over MCP Working Group](https://modelcontextprotocol.io/community/working-groups/skills-over-mcp)
* [AAIF: Skills Over MCP](https://aaif.io/blog/skills-over-mcp)
* [Agent Plugins](https://agent-plugins.org/)
* [Agentic Resource Discovery](https://agenticresourcediscovery.org/)
* [Drupal Canvas Tools](https://www.drupal.org/project/canvas_tools)
* [Drupal Canvas Skills](https://github.com/drupal-canvas/skills)
* [Drupal Canvas Plugin](https://www.drupal.org/project/drupal_canvas_plugin)
* [MCP Server](https://www.drupal.org/project/mcp_server)
* [AI Best Practices](https://git.drupalcode.org/project/ai_best_practices)
