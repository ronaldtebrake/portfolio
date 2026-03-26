---
title: "git bla(i)me: intent-aware blame for AI-generated code"
description: "If agents write more of our code, engineering shifts toward intent, verification, and accountability—we need the SDLC to preserve context, evidence, and trails so changes stay reviewable and maintainable."
pubDate: "Feb 14 2026"
heroImage: "./assets/agent-trace-update.png"
category: "process"
tags: ["git", "ai", "agent-trace", "workflow", "code-review"]
featured: false
---

If agents end up writing most of our code, the role of engineers will shift, where our roles have never been “just” about writing code. We define intent and constraints, orchestrate agent work, verify results, and stay accountable for the outcomes.

That does not change with AI.

What does change is the amount of code and change we can now produce, and how easy it becomes to lose the context behind it.

That is why I think we need to rethink part of the SDLC for agent workflows. Not only around the diff itself, but around the artifacts that explain the diff: intent, context, reasoning, and evidence that the result actually worked.

- That matters for review.  
- It matters for audits.  
- It matters for incident response.  
- And it matters a lot for maintainers.

Because maintainers are often the people who end up carrying code they did not write, decisions they did not make, and context that was never captured nor communicated.

So the question becomes:

If agents write more of our code, how do we make sure the value is still reviewable, reconstructable, and maintainable later?

For me, that means getting more disciplined about three things:

- the context we give the agent
- the evidence we use to verify the outcome
- the trail we preserve so somebody else can understand it later

## Context is the missing artifact

When you look at a line in Git blame, you usually do not want a person. You want the reason behind the line.

That reason usually exists, but it is scattered.

A bit of it is in tickets.  
A bit of it is in PR comments.  
A bit of it is in chat.  
A bit of it is in your IDE.  
A bit of it is in the agent conversation itself.

That is part of why I find the idea of a context graph[^1] interesting. The core idea is simple: decisions leave traces, and those traces should be searchable later, not lost across tools and people's heads. The same idea shows up in software agent workflows too[^2]. If we keep throwing away context, we make future understanding more expensive.

The ecosystem is already moving in this direction. Entire[^3], for example, treats agent sessions as part of the commit story, not as something disposable around it.

That feels right to me.

## Agent Trace in one paragraph

Agent Trace[^4] is an open specification for recording attribution data for AI generated code. It is not a product and it does not define where traces need to live. It focuses on attribution, with goals like interoperability, file and line level granularity, extensibility, and human readability. It is not trying to answer legal ownership, training data provenance, or code quality by itself.

That makes it useful as a building block.

Not the full answer, but a way to connect code back to the conversation and tool context that produced it.

## My proof of concept

My working take is simple:

Agent conversations should be treated more like build artifacts.

They should be linked to commits with stable identifiers, and paired with verification evidence, so changes remain reviewable and reconstructable later.

In my proof of concept, I store one trace record per commit using git notes. That keeps the normal history clean, while still attaching trace data to the revision.

A simplified example:

```json
{
  "vcs": { "type": "git", "revision": "82d2b3c..." },
  "files": [
    {
      "path": "src/data/demo.json",
      "conversations": [
        {
          "url": "file:///.../agent-transcripts/<id>.txt",
          "ranges": [{ "start_line": 243, "end_line": 251 }]
        }
      ]
    }
  ],
  "metadata": { "conversation_id": "<id>" }
}
```

Here is a demo of the proof of concept in action[^5]:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/DF7AwQ-9ZSY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

What I like about this approach is that it gives me a stable way to move from a commit, or even a line, back to the context that created it.

Not only the final code, but the conversation, the steps the agent took, the tools it used, and the model behind the output.

That gives me something Git blame cannot give me on its own.

## Why this matters for maintainers

For me, this is where things get really practical.

Maintainers often step into code long after it was written. Sometimes they are reviewing it for the first time. Sometimes they are debugging it months later. Sometimes they are trying to understand whether a risky change was intentional, verified, or just accepted because the diff looked plausible.

That is where traces could help.

Not because maintainers want to read every prompt.

But because maintainers need a faster path to the answer behind a line:

- what was this trying to do  
- what constraints mattered  
- what else was considered  
- what verification was done  
- what should I trust here, and what should I check again

That changes the value of blame.

Git blame today is often a path to who and when.  
Intent aware blame could make it a path to why.

And for maintainers, that can mean less archaeology.

It can make inherited code easier to review.  
It can make incidents easier to reconstruct.  
It can make risky changes easier to challenge.  
And it can make it easier to mentor contributors, because the reasoning is no longer trapped in one person's IDE session.

If we care about maintainability, that matters.

## Autonomy needs an evidence layer

Git blame is not going away.

People still use it to move from a line to a commit, from a commit to a PR, and from a PR to the surrounding context. That still makes sense in an agent workflow too.

What changes is what that commit can point to.

If agents write more of the code, then commits and PRs become decision boundaries.

- A place to gate risk.  
- A place to attach evidence.  
- A place to preserve context.  
- A stable anchor for rollback, audit, and incident response.

That is why I think traces matter most when they are paired with verification.

The trace explains intent.  
Verification proves the outcome.

That relationship matters more than prompt history by itself.

## What this could unlock

I think there are at least three practical upgrades here.

### 1. Better review

Review becomes less about guessing intent from a diff and more about checking the reasoning behind a change against actual evidence.

If a change touches permissions, migrations, or API contracts, I want to know what the agent was asked to do, what constraints it was given, and what was done to verify the result.

That does not replace review. It gives review more context.

### 2. Better support for maintainers

This is the part I care about most.

A maintainer should not have to reverse engineer every change from scratch.

If traces are attached cleanly to commits, a maintainer can move from a line to the decision context behind it. That makes it easier to understand inherited code, review risky changes, debug regressions, and decide what deserves more scrutiny.

It can also reduce one of the worst costs of AI generated code: plausible changes with weak understanding behind them.

### 3. Better routing and automation

Today, a lot of automation is still path based. But risk is not always path based.

With traces and some lightweight risk scoring, review could be routed more by intent: auth flows, migrations, data access, API behavior, security changes.

That means low risk work can move faster, while higher risk work reaches the right humans sooner.

## Why I hope this becomes a standard

I do not think we need one more closed tool for this.

What I hope for is a shared pattern:

- agents emit traces in a common format  
- teams store them however they want  
- platforms like GitHub and GitLab expose that context where people already review code
- OpenTelemetry in mind, for observability in more than just the above tooling[^6]

That way, the benefit is not locked into one vendor workflow.

And for maintainers, that matters too. The whole point is to reduce hidden context, not move it into one more silo.

## What I am curious about

Right now, traces feel like documentation with operational value.

That is already useful.

But I am curious whether they can become more than that.

Can they become actionable inputs for routing, approvals, CI, and incident response?  
Can they help maintainers make better decisions faster?  
Can they become part of how we keep AI generated code understandable over time?

I think they can.

And I think maintainers are one of the clearest reasons why.

[^1]: https://foundationcapital.com/context-graphs-ais-trillion-dollar-opportunity/
[^2]: https://cognition.ai/blog/agent-trace
[^3]: https://entire.io/
[^4]: https://agent-trace.dev/
[^5]: https://www.youtube.com/watch?v=DF7AwQ-9ZSY
[^6]: https://github.com/cursor/agent-trace/issues/6
