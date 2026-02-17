---
title: "Is there an AI in team? Using AI in Software Engineering"
description: "My thoughts on if and how we can start implementing AI in our engineering teams."
pubDate: "Feb 02 2025"
heroImage: "./assets/is-there-ai-in-team.webp"
category: "people"
tags: ["process", "ai", "teams"]
featured: false
---

Artificial Intelligence (AI) tools have become increasingly common in software engineering, promising to streamline development and improve productivity. Over the past few months, I’ve been experimenting with tools like **Cline**, **GitHub Copilot**, **Cursor**. These tools can be incredibly powerful, but using them effectively requires understanding their limitations. We've been joking at Open Social for years now that we still haven't invented "human cloning" and we are somewhat limited by the resources we have, so is AI going to "finally" fix this once and for all, or perhaps even replace us?

This post dives into how I'm approaching using AI within the context of **Drupal** development at Open Social.

## AI as your newest hire

When I first started using AI tools like GitHub Copilot and Claude, I noticed that their outputs lacked the quality I perhaps expected it to have. While they were fast, eager, and capable of generating working solutions, they reminded me of new developers navigating their first weeks on the job.

The first time you see it provide output that looks like it has the potential to "work," it's so exciting. It's like you're pair programming with a new developer that grasps some of the fundamentals but gets lost in the nuances; the quality felt similar to that of a junior developer referencing patterns in our codebase we would consider technical debt.

Working with Drupal in a context like Open Social requires a deep understanding of not only the platform but also the stricter standards we’ve imposed to ensure quality. These tools lack that intrinsic understanding, as almost any new developer would at first, as these are standards imposed by us at Open Social and differ from most working places, even those in the Drupal ecosystem.

For example, we are currently moving away from hooks in the `.module` file to object-oriented techniques that are more in line with modern practices. While this will [become available in Drupal 11.1](https://www.drupal.org/node/3442349), it's a fairly new choice for the Drupal ecosystem as well as within Open Social. We even do this using [Hux](https://www.drupal.org/project/hux) as we are working with versions before Drupal 11.1 still.

This highlighted a key issue: AI doesn’t inherently know the history behind decisions or the rationale for avoiding certain approaches, nor is this widely available in the data it seems to be trained on. It's not even in our full code base yet. We can't expect this from a new developer, so how can we expect AI to understand?

**How to Put AI on Your Team**

In software development, [**context is important**](https://www.ronaldtebrake.nl/blog/context-is-key-but-missing/). When we onboard a new developer, we don't just hand them the repository and hope for the best; we guide them through the intricacies of our codebase, our workflows, and our culture. But bringing an AI model into the fold comes with its own set of challenges. An AI tool might quickly learn your entire codebase that means it will also learn about your technical debt, while it won’t automatically grasp your engineering culture, project history, or the reasoning behind established best practices.

Instead, AI depends on structured guidance; predefined rules, curated patterns, and clear context—to generate relevant suggestions. In some ways, this process can favor more senior developers, who already know what “good” looks like and can refine an AI-generated proposal. However, several emerging tools aim to bridge this gap for all experience levels. For example, **Copilot Workspaces**[^1] and **Cline**[^2] now provide features that allow a developer to plan before implementation, enabling a more deliberate, pair-programming-like approach when working alongside AI tools. Similarly, platforms like **Cursor**[^3] (with “Cursor Rules”) let teams encode their best practices into the AI itself, so generated code is more likely to adhere to team standards.

Yet each tool’s approach to governance differs, and not all are compatible with every IDE. Our teams, for instance, use multiple editors, so something like Cline—which currently supports only Visual Studio Code—wouldn’t cover everyone. This brings up broader concerns about cost, licensing, privacy, and the security of intellectual property. At the same time, we want to uphold our principle of autonomy and trust. Simply banning AI tools would run counter to innovation; instead, we need to incorporate AI responsibly and ensure it genuinely raises quality and productivity.

That’s why establishing clear **AI governance structures**[^4] is critical. These policies define precisely how AI can be used, what kind of data it can train on, and which guardrails developers must respect whilst also increasing adoption. By setting these boundaries, we can safeguard security, maintain team autonomy, and ensure AI remains a valuable collaborator rather than an unpredictable wildcard. Ultimately, careful integration of AI—supported by the right policies, tools, and cultural alignment—has the potential to make our teams more efficient, more creative, and even more cohesive.

## Final Thoughts

AI has the potential to be a game-changer in software development, currently not as a replacement for human expertise, but as a buddy that enhances productivity and creativity. By embedding AI responsibly into our workflows, we can find that balance between automation and human judgment not just focussing on output but on outcome, making AI a true team player in engineering rather than just another tool. 
Remember, there might not be an I in team; But I do see there is room for AI in our teams and I'm really looking forward to explore this space even more, so in my next posts, I'll dive deeper into some of the tools I've been testing.

### References

[^1]: [Copilot Workspace](https://githubnext.com/projects/copilot-workspace)

[^2]: [Cline AI](https://marketplace.visualstudio.com/items?itemName=cline.ai)

[^3]: [Cursor Documentation](https://www.cursor.sh/docs)

[^4]: [Empower developers with AI policy and governance](https://resources.github.com/learn/pathways/copilot/essentials/empower-developers-with-ai-policy-and-governance)
