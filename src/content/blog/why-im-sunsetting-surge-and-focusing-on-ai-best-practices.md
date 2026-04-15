---
title: "Why I’m Sunsetting Surge and Focusing on AI Best Practices"
description: "Why I’m sunsetting Surge and putting my energy into AI Best Practices for Drupal."
pubDate: "Apr 15 2026"
heroImage: "./assets/pexels-hernan-pauccara-466676-1210273.jpg"
heroImageAlt: "Sunset horizon representing the shift from Surge to AI Best Practices"
heroImageCredit:
  photoBy: "Photo by Hernan Pauccara from Pexels"
  url: "https://www.pexels.com/photo/frozen-wave-against-sunlight-1210273/"
category: "process"
tags: ["drupal", "ai", "ai-best-practices", "surge", "developer-experience", "workflows", "mcp", "skills"]
featured: false
---

For a while, I have been thinking about where to put my energy in Drupal’s AI space.

That thinking led me to **Surge**. It started from a need I still believe in deeply: Drupal developers need a better way to work with AI in the tools they already use. Not as a vague promise, but in a practical, repeatable way. In DDEV. In Docker. In Cursor. In Claude. In whatever setup helps people build, maintain, and contribute well.

That part has not changed.

## Why I started Surge

Surge came from a simple idea: Drupal needs a more complete AI starter kit, something closer to Laravel Boost. I wrote about that direction in *Embracing an AI Coding Starter Kit for Drupal*.[^1]

Not just a pile of prompts. Not just a workflow for a single tool. Not a thousand repositories scattered around. Something more joined up. Something that helps developers go from zero to useful without spending hours stitching together context, tools, conventions, and guesswork.

A lot of that thinking came from earlier experiments: the AI Skills project[^2] as a shared skills library, and my proof of concept for a local Drupal API MCP server[^3]. Both helped clarify how Drupal-specific context can be made available to humans and agents.

Those explorations were valuable. They helped me better understand both the problem space and what Surge could become.

## What changed

Over time, I started to feel that I was solving the right problem in the wrong place.

While DrupalCon Chicago was underway, the buzz around it and the conversations in Slack helped me sharpen something that had already been present in Surge from the start. A few exchanges with webchick[^4] especially helped clarify it.

Surge was always meant to help move Drupal’s AI developer experience forward. But the more I pushed on it, the clearer it became that it was still another parallel effort.

That, and the energy, is what made *AI Best Practices for Drupal* click for me.[^5]

Not because it changed the problem. 
Because it is the better place to solve it.

## Why I’m sunsetting Surge

I am sunsetting Surge and focusing my efforts on **AI Best Practices**.

Not because I stopped believing in the ideas behind Surge. Quite the opposite.

I still believe Drupal needs better AI workflows, stronger foundations, clearer conventions, and tooling that meets developers where they already work.

What changed is my view of where that work belongs.

I realised that solving this well matters more than owning the container for it.

I care more about Drupal having a coherent answer than I do about keeping a separate effort alive.

## The direction I want to help build

Looking back, Surge still carried a mindset of building the umbrella first and connecting everything underneath it later.

That was useful exploration. But I no longer think Drupal needs another umbrella.

I think Drupal needs a strong default.

A sane starting point. A setup that works. A workflow people can trust. A path to productivity that does not begin with a dozen tool choices and a lot of guesswork.

That matters because good defaults create better feedback loops. More people use them. More people test them. More people improve them. And when the useful parts move upstream, the ecosystem gets stronger.

Power users will always customise, and they should. But the default experience still needs to be clear and useful.

## What excites me about AI Best Practices

What excites me about AI Best Practices is the chance to help shape that default in the open, where the community is already gathering and the project already has traction.

For me, the goal is not to build another wrapper around everything.

It is to help create a shared starting point that is simple, opinionated, and practical.

People should not have to make a dozen early choices about models, coding agents, harnesses, skills, DDEV, Drush, or Composer before they even know which parts matter for their use case.

The role of this project, as I see it, is to bring together the pieces that make that possible: AGENTS.md, MCP and Tool API integrations, Skills, documentation, guidelines, and workflows. Maybe even a CLI[^6], if that turns out to be part of the right experience.

If we get that balance right, we get both: a fast, approachable path for most people and a flexible foundation for teams and individuals who want more control.

That is the direction[^7] I want to help build now, and I am encouraged by how many pieces are already taking shape.

People are already contributing skills, documentation, feedback, evals, and more to the project. 

There is a meta for [a CLI in the Core Community Initiative](https://www.drupal.org/project/drupal/issues/3582246), if that proves to be part of the right path. 

Acquia has also stepped up to sponsor upcoming development work on [drupal/mcp_server](https://www.drupal.org/project/mcp_server), which could help expose Drupal capabilities to AI systems more directly.

There is still a lot to figure out, but that is exactly why this feels like the right place to contribute and learn from everybody else.

## What this means for me

Sunsetting Surge does not mean abandoning the ideas behind it.

It means taking the parts that still matter and putting that energy into a shared direction instead of a parallel effort.

That feels like the right move.

Surge helped me explore the space.  
AI Best Practices is where I want to help build what comes next.

If you are thinking about the same questions, I would love for you to join the discussion and help shape it.

## References

[^1]: [Embracing an AI Coding Starter Kit for Drupal](/blog/embracing-ai-coding-starter-kit-drupal/)
[^2]: [AI Skills](https://www.drupal.org/project/ai_skills)
[^3]: [Version-Aware Drupal Docs for AI](/blog/building-local-drupal-api-mcp-server/)
[^4]: [webchick](http://webchick.net/)
[^5]: [AI Best Practices for Drupal](https://www.drupal.org/project/ai_best_practices)
[^6]: [A command line tool for interfacing with Drupal.org](https://github.com/mglaman/drupalorg-cli)
[^7]: [Determine project "boundaries" - Comment #3 by webchick on the project vision](https://www.drupal.org/project/ai_best_practices/issues/3584914#comment-16551458)