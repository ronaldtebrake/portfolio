---
title: "Context is key, but often missing"
description: "A Story About Decisions and Documentation and how I became my own worst enemy"
pubDate: "Nov 30 2024"
heroImage: "./assets/A-minimalistic-featured-image-for-a-blog-post-visually-reflecting-how-context-clarifies-a-story.webp"
category: "process"
tags: ["documentation"]
featured: true
---

## A Story About Decisions and Documentation

Imagine this: You’re deep into a sprint on a project that’s been running for a few years. You open the codebase, eager to solve a bug, only to be met with a decision that stops you in your tracks. 

The function is insanely complex, and the choice of technology seems odd. You dig through the repository, commits, pull requests, search through Slack history, and even corner a senior developer for answers. But there’s no explanation—just silence and frustration. *Why did we choose this approach?* 

Eventually, you patch the bug with your best guess. But in the back of your mind, doubt lingers: *Did I miss something important? Am I breaking an assumption I don’t understand or know about?*

This isn’t just a one-off annoyance. It’s a story many developers know all too well. Decisions made without context has its effect on teams, timelines, and morale. And often, the person struggling is you: six months or a year down the road, facing your own undocumented choices.

### The day I became my own worst enemy

Way in the early stages of Open Social we we're tasked with creating an activity stream, as you can imagine quite a vital piece of a social community. Time was tight, and decisions were made left right and center. We wanted to make sure this works without too many constraints on shared hosting, using what Drupal had to offer, to the best of our still evolving capabilities. Only just learning how to best work with a new Drupal major version, 8 at the time. I was so proud to see this as value being delivered.

Fast forward. We're now running in to performance issues, it's just not scalable. Trying to retrace our steps, trying to understand why certain components were built the way they were. And then it hit me: *I was the part of the team who refined, designed and create it*. 

But could I remember why it was done the way it was? Nope. Was there a note, a Slack thread, or even a vague comment in the code? Also nope. My future self was left stranded by my past self’s haste.

## Why Documenting Decisions Matters

Every project is shaped by countless decisions. What language to use, which library or module to adopt, how to structure an API. These choices don’t happen in a vacuum. They’re shaped by constraints: deadlines, budgets, resources, knowledge, and tools. But those constraints evolve, and without context, decisions can quickly look arbitrary or even wrong.

This is why documenting decisions is so imporant. Whether they’re about design, architecture, or tooling. It’s not just about creating a historical record; it’s about preserving *context*. What problem were you trying to solve? Why did you choose this particular approach? What trade-offs or risks did you accept or why were there boundaries in the first place?

It’s a small investment that pays massive dividends when the project grows, the team changes, or the tech landscape shifts.

## Decision records

That’s where Decision Records (DRs) come to the rescue.

Decision records are simple yet powerful documents that capture the context, reasoning, and consequences of important decisions.

At their core, Decision Records are concise. They provide a snapshot of:

- The problem or context: What led to the need for a decision?
- The decision itself: What was chosen and implemented?
- The alternatives considered: What other options were evaluated, and why were they not selected?
- The consequences: What are the expected benefits, trade-offs, and risks?

This format allows an DR to serve as a standalone artifact, offering a clear explanation of the decision and its implications, even to someone unfamiliar with the project’s history. 

Rather than changing them, you deprecate them and create a new one. Preserving them in a log, allow you to see why decisions changed over time. 

### Tips for starting with decision records

#### **1. Start small, and use a template**
You don’t need to write a novel. Start small. Use a template, there are plenty of templates out there and you can hit the ground running.
We're using https://adr.github.io/madr/#full-template from the GitHub ADR organization.

#### **2. Remove friction **
Store decision records in your existing tools—whether that’s a Git repository, a wiki, or a shared folder. The easier it is to access, the more likely you’ll use it.

#### **3. Make it part of your workflow**
Tie decision documentation to specific moments in your process. Don't expect these to be written down all of a sudden.
Make a necessary artifact as part of your software development life cycle. Whether that is through your definition of done, or some place else.

#### **4. Encourage feedback**
For bigger decisions, like architecture or process changes, first write a request for comments (RFC) and share it with your team, the outcome can be captured in a new decision record. This builds consensus and helps surface better ideas. Don't make it all about the decision.

### A gift to your future self

The story I shared earlier isn’t unique. We’ve all been there staring at a decision we don’t understand, losing time and momentum as we try to make sense of it. 

By embracing decision records, you’re not just documenting the past. You’re building a foundation. It shapes the culture of your team. 
It allows your team (and you) to work faster, smarter, and with confidence. Context is key, and with a little effort, it doesn’t have to be missing.

So the next time you make a decision, take a moment to write it down. Trust me: your future self will thank you.