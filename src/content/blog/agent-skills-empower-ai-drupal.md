---
title: "Agent Skills: A New Way to Empower AI in Drupal"
description: "Exploring Agent Skills, an open standard for packaging AI knowledge into reusable skills, and how the Drupal community is adopting this approach to make AI coding assistants smarter and more efficient."
pubDate: "Jan 10 2026"
heroImage: "./assets/agent-skills.png"
category: "product"
tags: ["ai", "drupal", "agent-skills"]
featured: false
---

# Agent Skills: A New Way to Empower AI in Drupal

Artificial Intelligence is moving fast, and new concepts keep emerging that change how we work with it. One concept I've been exploring lately is Agent Skills. This is an open standard introduced by Anthropic for packaging domain-specific knowledge for AI into reusable skills. In short, a skill is a bundle of instructions or code that an AI agent can load when needed, instead of having everything hard coded upfront. If you haven't heard of Agent Skills yet, I highly recommend the talk [Don't Build Agents, Build Skills Instead](https://www.youtube.com/watch?v=CEvIs9y1uog) by Anthropic's Barry Zhang and Mahesh Murag. It explains the rationale behind this approach very clearly. In this post, I'll explain what Agent Skills are and why they matter, and then dive into how we're starting to use this concept in the Drupal community.

## What Are Agent Skills (and Why Use Them)?

Agent Skills are essentially folders containing instructions, scripts, and resources that an AI agent can discover and load dynamically when they're relevant. Think of them as small apps or training manuals that give an AI specialized expertise in a specific domain. For example, one skill might teach an AI how to work with Excel spreadsheets, while another might encode your organization's coding guidelines. Most parts of these skills live outside the main system prompt. The agent will pull them in only when needed based on the metadata, which is a key difference from stuffing all knowledge into the prompt from the start.

Why is this helpful? For one, it keeps the AI's context slim and focused. Each skill provides a short name and description, static metadata that the AI can see, but the detailed instructions or scripts remain separate until invoked. The AI can decide, based on the task at hand, to load a particular skill by name. This means we can give the AI lots of potential knowledge without filling up its context with tons of text by default. In practical terms, this approach is far more token efficient, since only the necessary data is pulled into the prompt. It can even improve the quality of responses by reducing clutter or contradictory info in the AI's input. The AI isn't drowning in irrelevant details, it only sees the skill details when it actually needs them. This dynamic discovery of context, sometimes called dynamic context discovery, is a clever way to manage token usage and ensure the AI stays on track.

Another big benefit is that skills are modular and shareable. They are just files, often Markdown and scripts, that can be versioned and distributed. Anthropic spun off the Agent Skills concept as an open specification on [agentskills.io](https://agentskills.io/), and it's already being adopted by many AI tools. Not only Claude, but also other coding agents like OpenAI Codex, Cursor, OpenCode, and more. In other words, skills are becoming a common language so that different AI agents can all use the same skill packs. This portability is great. You could write a skill once and use it with various AI assistants. It shifts the focus from building one-off, monolithic agents to building a library of reusable skills that any agent can grab when needed. As the Anthropic team put it, it's about going from brittle, custom agents to lightweight skills that can be shared, versioned, and loaded on the fly.

## Bringing Agent Skills to Drupal

So how does this idea translate to the Drupal world? 

The Drupal community has been quick to see the potential. Just days ago, a proposal was put forward for first class support for Agent Skills in Drupal. The idea is that we, as a community, can curate a set of Drupal specific skills and tooling so any AI assistant can readily use them. This would prevent every developer from having to reinvent their own ad hoc AI setup. As the issue states, it would be great to have a community maintained baseline of shareable skills to kickstart our development setups and establish good patterns. In fact, others had already begun experimenting and sharing their skills. Building on these ideas, we're starting to formalize things under Drupal's umbrella and it got me excited to start contributing and trying, as this is a perfect addition to Surge, the place where I'm trying to start an AI coding standard kit for Drupal development.

## Distribution of skills

To make sharing easier, I helped create a project called [Agentic Skills on Drupal.org](https://git.drupalcode.org/project/ai_skills). This is essentially a curated library of Drupal focused Agent Skills following the Agent Skills specification. We store these skill files in a standard location. Currently we use a `.claude/skills` directory as there is no standardized directory yet, and that is the directory many AI tools recognize. The library can include anything from general Drupal coding guidelines to domain-specific skills. For example, a skill for working with Drupal's configuration system, or a skill for interacting with the Drupal.org issue queue.

Each contributed skill in this library is automatically validated against the specification when someone creates a merge request. We built a validator in PHP based on the official [spec validator](https://github.com/agentskills/agentskills/blob/main/skills-ref/src/skills_ref/validator.py), to ensure every skill meets the format. This validation step helps maintain quality and consistency across the shared skills. The Agentic Skills library is our answer to the distribution challenge. It's a central place where Drupal developers can contribute and obtain ready made skills for Drupal work.

## Aggregation and control

Once you have a library of available skills, you probably don't want to load every single skill into your project all at once, as Agents will be able to automatically discover them. Not every project needs every skill, or you might have your own custom tweaks to tailor skills to your projects needs. This is where configuration and aggregation come in.

I've added a tool to Drupal Surge to help with this. This allows you to collect and configure the skills you want for your project, and copy them into your project's skills folder, all based on Composer and PHP. With Surge, you can pick which skills to include, rather than blindly pulling in the entire library. For example, if you have your own coding standards, you probably don't need any curated  skill that might be in the library loaded on your system. Surge lets you specify that. It scans for any skills provided by your enabled modules or by the Agentic Skills library, and then aggregates only the ones you've chosen into the `.claude/skills` directory that the agent will actually use. This gives developers control and keeps the AI's skill set tailored to the project's needs.

The ability to configure skill selection is important for a few reasons:

- Relevance  
You avoid noise from skills that don't apply. Your AI agent only sees Drupal skills that match what you're working with.
- Customization  
It's possible you have a custom or modified skill for your project. You can use that instead of a generic one. Surge can include your local or project specific skills alongside community ones and doesn't touch the existing skills you already have.
- Efficiency  
Fewer skills loaded means less for the agent to scan through, which ties back to keeping context efficient.

## Conclusion

Agent Skills represent a fresh approach to integrating AI with Drupal development. We can equip our AI tools with modular, on demand knowledge of our ecosystem. As a result, a coding agent can have the right skills for the job. 

By adopting the open Agent Skills specification, we keep our AI context dynamic and efficient, only pulling in what's needed when it's needed and it's supported by many tools already, allowing you to pick whichever Agent you want.

There are still challenges to work through. We need to refine how skills are distributed, so they're easier to find, share and version. We need to refine how they're aggregated, right now it's aggregated from `.claude/skills` or `surge/skills` directories, but we should standardize on this, and hopefully the specification helps us there. But the work has begun. With a shared library of skills and tools like Surge for assembly, we're laying the groundwork. This collaboration between open standards and open source community know how could significantly boost our productivity, while keeping AI outputs aligned with Drupal best practices.

In short, Agent Skills give us a path to make AI development assistants smarter, and our own development experience smoother. A win win for everyone involved in developing with Drupal.

## References

- Anthropic Claude Blog  
Skills explained: How Skills compares to prompts, Projects, MCP, and subagents  
[https://website.claude.com/blog/skills-explained](https://website.claude.com/blog/skills-explained)
- Drupal.org Issue  
Proposal: First class support for agent skills  
[https://www.drupal.org/project/ai/issues/3565489](https://www.drupal.org/project/ai/issues/3565489)
- Cursor Blog  
Dynamic context discovery  
[https://cursor.com/blog/dynamic-context-discovery](https://cursor.com/blog/dynamic-context-discovery)
- Github Agent Skills
Proposal: include a standard folder where agent skills should be #15
[Proposal: include a standard folder where agent skills should be #15](https://github.com/agentskills/agentskills/issues/15)
