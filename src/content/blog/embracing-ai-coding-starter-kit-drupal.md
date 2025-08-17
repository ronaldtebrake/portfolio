---
title: "Embracing an AI Coding Starter Kit for Drupal (Inspired by Laravel Boost)"
description: "Exploring how Drupal can leverage AI assistance through a unified coding starter kit, inspired by Laravel's innovative approach."
pubDate: "Aug 17 2025"
heroImage: "./assets/ai-starterkit.webp"
category: "process"
tags: ["ai", "drupal", "development"]
featured: true
---

Artificial Intelligence is rapidly changing how we write and maintain code. Recently, the Laravel community unveiled Laravel Boost, an "AI coding starter kit" that tightly integrates AI assistance into the development workflow. This forward-thinking approach has sparked excitement - and it presents a huge opportunity for Drupal. As a Drupal developer, it's clear that we can supercharge our productivity by giving AI the right tools and context to generate Drupal-specific code. In this post, we'll explore what Laravel Boost offers, examine Drupal's current (but fragmented) AI solutions, and envision how a Drupal AI coding starter kit could revolutionize our development experience.

## Learning from Laravel's Boost Example

Laravel Boost demonstrates the power of an officially supported AI integration. Announced at Laracon US 2025, Boost is a Composer package that developers can install to enhance AI pair-programming in Laravel. Its main features are impressive:

**Laravel-Specific AI Server & Tools**: Boost runs a Laravel-focused MCP (Model Context Protocol) server with over 15 specialized "tools" that an AI agent can use. These tools let the AI safely query the database, execute code (via Tinker), read logs, search documentation, and more - all within the boundaries of your project. This means the AI can understand and manipulate a Laravel app's internals just like a developer would (for example, checking the DB schema or running artisan commands).

**Ingested Documentation with Semantic Search**: All of Laravel's official docs (and those of popular packages like Livewire, Inertia, etc.) have been ingested and vectorized for semantic search. In practice, this dramatically reduces hallucinations because the AI can fetch up-to-date, version-specific documentation on demand. When asked about a framework feature, Boost's AI will pull the exact guidance from Laravel 10, 11, or 12 docs as needed, rather than guessing.

**Curated AI Guidelines**: The Laravel team curated AI coding guidelines that teach the AI how to write code in the "Laravel way". Boost can generate configuration files for various AI tools (Cursor, Claude, GitHub Copilot, etc.) with these rules baked in. The guidelines cover Laravel's coding style and even framework-specific conventions across different versions. For example, it knows to prefer certain design patterns, use the latest APIs, and even to write tests for new code.

## The Current State of AI in Drupal Development

So, where does Drupal stand today with AI-assisted coding? Drupal developers have begun experimenting with AI, but the solutions are currently fragmented and experimental. A few notable efforts include:

**Claude Code module**: A contributed module that integrates Anthropic's Claude AI assistant into Drupal workflows. It provides a CLAUDE.md file with Drupal-specific best practices and setup instructions for the AI. With a companion DDEV environment add-on, developers can chat with Claude about their Drupal code. It's a great start, but it's tailored specifically to Claude.

**MCP & Context7**: Some Drupalists use MCP servers to feed real-time Drupal documentation to AI. For example, Context7 can serve version-specific docs and code examples, but it doesn’t cover coding standards from drupal.org. The Drupal MCP module can expose a site’s content or Drush commands to AI and make sure you can leverage your own custom commands, but there is no unified approach for AI there.

**Custom AI "Rules" for Drupal**: Developers maintain their own guidelines for tools like Cursor to enforce Drupal standards (API usage, dependency injection, OWASP security practices, etc.). These rules are powerful, but duplicated and inconsistent across tools.

Looking at this landscape, the pattern is clear: Drupal's AI tooling is strong in pieces but siloed. There’s no central integration tying everything together. That creates duplicated effort and inconsistent guidance. It also makes it harder for AI to stay aligned with the latest official standards.

## Envisioning a Drupal AI Coding Starter Kit

If Drupal had its own AI starter kit, it should feel simple, unified, and community-driven. Here’s what that could mean in practice:

- **Seamless setup:** Installing the kit should be as easy as adding a module or Composer package. One command, and your AI tool of choice is ready to “speak Drupal.”  

- **Shared best practices:** Instead of scattered, tool-specific rules, Drupal could provide a single set of AI guidelines that capture our coding standards, security practices, and version-specific recommendations. These could extend into contrib, so modules like Commerce or Paragraphs can add their own AI knowledge.  

- **Direct access to Drupal knowledge:** AI should be able to tap into Drupal’s documentation and API reference, ensuring its suggestions are accurate, version-aware, and grounded in official sources.  

- **Actionable tools:** Beyond code suggestions, the kit could let AI perform safe, sandboxed developer tasks; like running Drush commands, scaffolding modules, or checking logs and streamlining the build-and-test cycle.

- **Community-powered evolution:** Just as Drupal thrives on collaboration, so could its AI kit. As coding standards change and new modules emerge, the community could update and extend the shared AI knowledge base, keeping it fresh and reliable. We already have the community powered Drupal MCP server, it feels like a great opportunity we can potentially use.

The result would be a consistent, trusted layer that turns today’s fragmented AI experiments into a powerful, unified experience for every Drupal developer.

## The Road Ahead: Unlocking Drupal's AI Potential

By drawing inspiration from Laravel Boost and building on our own experiments, we could create a Drupal AI coding starter kit that improves productivity and consistency. The benefits could include faster scaffolding, automated refactoring, and better adherence to standards.

That said, there are challenges. Keeping AI configs in sync with Drupal’s fast-moving APIs, avoiding overreliance on generated code, and ensuring community governance around “official” AI rules will be critical. A starter kit would need to balance convenience with careful guardrails.

If done well, though, AI in Drupal would not feel like a black box. It would be an extension of our shared standards and values. The code AI generates could reflect not just one developer’s rules, but the collective knowledge of the Drupal community.

## Conclusion

The opportunity for Drupal to have its own AI coding starter kit is significant. The discussion has already started in the community (See [AI coding starterkit proposal](https://www.drupal.org/project/ai_initiative/issues/3541110)), and the momentum is building. With a unified approach, Drupal can keep pace with evolving developer expectations while staying rooted in community-driven standards.

### References

- [AI coding starterkit proposal](https://www.drupal.org/project/ai_initiative/issues/3541110) - Drupal.org
- [Laravel Boost, your AI coding starter kit](https://laravel-news.com/laravel-boost-ai-coding-starter-kit) - Laravel News
- [Laravel Boost Introduction and Features](https://github.com/laravel/boost) - GitHub
- [Claude Code Module Introduces AI Integration for Drupal](https://www.thedroptimes.com/47809/claude-code-module-introduces-ai-integration-drupal-development) - The Drop Times
- [Claude Code meets Drupal](https://dri.es/claude-code-meets-drupal) - Dries Buytaert
- [Context7 MCP Service](https://mcp.aibase.com) - AIbase
- [Drupal MCP Module](https://drupalmcp.io) - Drupal MCP
- [Drupal 10 Module Development Rules](https://cursor.directory/rules/drupal) - Cursor Directory
- [Cursor AI Project Rules for Modern Development](https://github.com/ivangrynenko/cursorrules) - ivangrynenko
