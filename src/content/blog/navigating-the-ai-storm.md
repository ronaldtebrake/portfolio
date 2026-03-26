---
title: "Navigating the AI Storm"
description: "On Drupal, open source, and AI: we are already in the AI storm. What do we owe each other as submitters, reviewers, and maintainers?"
pubDate: "Mar 26 2026"
heroImage: "./assets/pexels-jplenio-1118874.jpg"
heroImageAlt: "Silhouette of a small boat on water at sunset"
heroImageCredit:
  photoBy: "Johannes Plenio"
  url: "https://www.pexels.com/photo/silhouette-photography-of-boat-on-water-during-sunset-1118874/"
category: "process"
tags: ["ai", "drupal", "open-source", "maintainability", "community", "responsibility"]
featured: true
---

_A response to [the Driesnote](https://www.youtube.com/watch?v=EU6n7D91m_M) and the question of whether we are in or out_

When Dries talked about AI, he framed it as the storm, but also as the way through the storm. That feels true. AI is not something small on the side anymore. It is changing how we build, how we write, how we review, and how we work together. Drupal is right in the middle of it. 
If AI is the storm, then Drupal is the ship we are trying to keep afloat, and maintainers are often the people at the helm.

So if the question is whether I am in or out, the answer is that I am already in. The harder part is figuring out how to move through it responsibly.

## What we owe each other in the storm

For me, one thing still stays the same. No matter how code is written, the submitter and reviewer are still accountable for what we ship. That is the same spirit as “never submit code you do not understand”[^4]. That does not really change. AI does not remove responsibility. If anything, it makes that responsibility heavier, because the amount of code, content, and changes that can now be produced is growing much faster than our ability to fully understand and review it.

At the same time, our responsibility is not only about the code that lands in a merge request. We also have responsibility toward the wider community. AI brings real concerns around environment, ethics, copyright, and more. Those discussions matter, they are part of the responsibility too. Drupal does not just need to move forward. It needs to move forward in a way that still reflects the values of open source.

So the question I keep coming back to is: what responsibility do we have while we are in this storm?

## Process, scale, and welcome

If we look at the process side, AI is really stress testing how we work at a large scale. Inside companies we can adjust our SDLC with processes, guidelines, knowledge, and tools. We can decide how far we want to go, where to put checks, how to review, and what quality bar we expect.

Inside Open Social, I can help steer some of this more directly. In open source, that is harder.

## Maintainability and maintainers

There is also another angle that I think matters even more over time, and that is maintainability and thus the responsibility of maintainers.

In open source, maintainers are often the people at the helm. They help steer the project, keep the ship stable, and make sure new contributions do not punch holes in the hull.

That responsibility matters even more with AI. AI helps us produce more code, but understanding does not grow at the same speed.

AI is adding something new that is being called comprehension debt[^2], or cognitive and intent debt[^3]. 

And when that happens in open source, it is usually maintainers who have to carry most of that burden.

As Addy Osmani describes in Comprehension Debt - the hidden cost of AI generated code[^2]

> The right question for now isn’t “how do we generate more code?” It’s “how do we actually understand more of what we’re shipping?” so we can make sure our users get a consistently high quality experience.

So how do we deal with that in OSS? 
More gates, changes to issue processes, or more automation may help with quality, but they also come with trade offs.
Imagine being a first time contributor and your main interaction is with AI and automation. That is not a very welcoming experience to come aboard. 
This is not only about protecting quality. It is also about helping people join, learn, and grow.

## Purgatory, then adaptation

I personally think we are in a bit of a purgatory. AI is moving faster than our tools and processes. Git, GitLab, and GitHub were built for a world where humans wrote most of the code. That world is changing. GitHub for example is now discussing how to respond to rising volumes of low quality, abandoned, and often AI generated contributions, and is exploring more controls, triage tools, and transparency for AI assisted contributions[^1].

And it should change. We should change too.

But it is also hard when the tools to deal with this are not there yet.

## Keep talking, keep moving forward

For me, the way forward is not one answer. It is a mix of things.

- We should keep having these discussions.
- We should help people who use AI deliver better quality. That is one of the reasons I am working on an AI coding starter kit for Drupal, Surge[^5].
- And we should improve our tools and processes so we get more transparency and trust to help deal with this storm.

That last part is especially interesting to me. If we get better ways to understand how code was created, what decisions were made, and what context was used, that could really help maintainers. It will not solve everything, but it might give OSS a better way to deal with the reality we are already in.

I have been playing with that kind of transparency in a small proof of concept; I wrote it up in [git bla(i)me: intent-aware blame for AI-generated code](/blog/git-blame-intent-aware-agents/). 
Tooling like this, once added to our OSS toolset, could help us navigate the storm a bit better. It already helps me find direction.

So yes, AI is the storm.

It is disrupting a lot of what we built. It is putting pressure on open source collaboration culture. It is exposing weak spots in our tools, our processes, and sometimes even our assumptions.

But the answer cannot just be fear, and it cannot just be hype.

Part of the answer has to be responsibility.

Responsibility for what we submit.

Responsibility for what we approve.

Responsibility for the community.

Responsibility for the maintainers.

Responsibility for the future health of OSS.

Responsibility for not looking away from the harder parts of AI either, including ethics, environment, copyright and other concerns.

We may not have the full answer yet. I definitely do not.
But I do know what direction I want to keep moving in.

Maybe that is also why the name Surge feels right to me. A surge is a force that pushes forward. That is what I hope we can be in this storm, together.

So I keep talking. I keep learning. I keep using AI. I keep improving the tools. I keep supporting maintainers. I keep taking responsibility.

And I keep moving forward. I hope we can do that together.

Eventually, we will find land.

[EDIT]
Since publishing this post, a new Drupal project was created at DrupalCon Chicago: AI Best Practices for Drupal[^6]. The goal is to provide a canonical place for opinionated Drupal best practice guidance for AI agents across core and contrib. In that spirit of doing this together, I am rallying behind that shared effort and contributing best practice guidance there as well.

### References

[^1]: [Managing AI-generated contributions (GitHub community discussion)](https://github.com/orgs/community/discussions/185387)

[^2]: [Comprehension debt — Addy Osmani](https://addyosmani.com/blog/comprehension-debt/)

[^3]: [From Technical Debt to Cognitive and Intent Debt: Rethinking Software Health in the Age of AI - Margaret-Anne Storey](https://arxiv.org/abs/2603.22106)

[^4]: [Never submit code you do not understand — Dries Buytaert](https://dri.es/never-submit-code-you-do-not-understand)

[^5]: [Surge - An AI coding starter kit for Drupal development](https://www.drupal.org/project/surge)

[^6]: [AI Best Practices for Drupal](https://www.drupal.org/project/ai_best_practices)