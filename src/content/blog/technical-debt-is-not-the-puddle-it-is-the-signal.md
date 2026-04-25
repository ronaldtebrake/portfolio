---
title: "Technical Debt is not just the puddle. It is a Signal."
description: "AI can make technical debt cheaper to clean up, but that does not mean we are treating it well."
pubDate: "Apr 25 2026"
heroImage: "./assets/pexels-pranjall-kumar-8719044.jpg"
heroImageAlt: "Tap with dropping water, a visual metaphor for technical debt when the tap is open and the puddle keeps coming back"
heroImageCredit:
  photoBy: "Photo by Pranjall Kumar from Pexels"
  url: "https://www.pexels.com/photo/tap-with-dropping-water-8719044/"
category: "process"
tags: ["technical-debt", "ai", "software-engineering", "code-quality", "maintainability", "comprehension-debt", "intent-debt"]
featured: true
---

There is a tempting story going around right now: AI changes technical debt forever.
Cleanup is cheaper. Refactoring is faster. Old migrations look possible again. The backlog item that used to sit around for months can sometimes be fixed in minutes.
I think there is truth in that.
But even if technical debt becomes cheaper to pay down, that does not mean we are treating it well.
In some ways, AI might make it easier to treat it badly.

## The easy story

The easy story is this:

> Technical debt used to be expensive. AI makes it cheap. So stop talking and start fixing.

I get why that lands. Jonas Drieghe makes that argument in *Technical debt lost its excuse*, and there is a lot I agree with.[^1]
We have all seen the meeting. Engineering brings a list. Product brings a roadmap. Everybody agrees the codebase needs love. It's hard to build a business case for it, it reluctantly gets prioritised, but then the quarter gets busy and the cleanup work quietly disappears.
So yes, if the fix is obvious, fix it. You do not need a meeting to mop up a small puddle.
But if the same puddle keeps appearing, mopping faster is not enough. At some point the question is no longer how quickly you can clean the floor. It is why water keeps getting in.
In Dutch, we would say you are mopping with the tap open.
Technical debt works the same way. The items in the backlog are the puddle. The signal is the leak.

## The puddle is not the whole story

One reason the conversation gets messy is that we use "technical debt" as one big bucket.
Bad code. Missing tests. Outdated documentation. Fragile infrastructure. Unclear ownership. Old patterns nobody wants to copy, but everybody still does.
That bucket is useful because everybody understands the feeling. It is also dangerous, because once everything is technical debt, the phrase stops helping us decide what to do.
The paper *Towards an Ontology of Terms on Technical Debt* is useful here. It describes technical debt as different types, such as architecture debt, code debt, documentation debt, infrastructure debt, people debt, process debt, requirement debt, and test debt.[^2]
The fix depends on the nature of the debt.
Duplicated code might need a refactor. Documentation debt might need ownership. People debt might mean too much knowledge lives in one person's head. Process debt might mean the team keeps rewarding speed over clarity.
AI can help with some of this. It can suggest refactors, draft tests, summarize code, or help with migrations.
But it cannot decide, by itself, why the debt keeps appearing.
That is still our job.

## The debt item is a signal

When we find technical debt, our first instinct is often to ask: how do we get rid of this?
That is a fair question. But I think we should also ask: how did this get here?
Was it a deliberate trade-off? Was it pressure? Missing context? A bad default? A reviewer with too much on their plate? A pattern copied because it was the only example available?
That second question is where the useful signal is.
A code smell tells us something about code. A missing test tells us something about verification. Outdated documentation tells us something about how knowledge is maintained. A decision nobody can explain anymore tells us something about intent.
This is why I like thinking about technical debt as telemetry.
A backlog says: here is a puddle of things to do later.
Telemetry says: here is feedback about the health of the system right now.
If we only remove the artifact, we might remove the evidence.
And with AI, we can remove evidence faster than ever.

## Slop in, slop out

In earlier posts, I wrote about context, intent, and what maintainers need when agents become part of our workflows.[^3][^4]
This is the same problem from a different angle.
An AI tool may not literally learn from your codebase. But it is guided by it. It sees your examples, naming, tests, documentation, and gaps. Those become the path of least resistance.
If the old pattern is everywhere, the tool is likely to follow it. If the tests are thin, the tool will not magically know what matters. If the preferred path is hidden, the shortcut becomes the default.
Slop in, slop out.
That is why AI does not remove the need for engineering discipline and skills. It increases the value of it.
Clear patterns matter more when tools can copy them at scale. Good defaults matter more when agents need a path to follow. Documentation matters more when humans and machines both need context.
AI can reduce the cost of producing and changing code.
It does not automatically reduce the cost of understanding the system.
It may even increase that cost if we use it badly.

## Cheap cleanup can hide expensive learning

Imagine an AI agent opens a pull request that removes duplicated logic across a module. The diff is clean. The tests pass. The reviewer sees a reasonable change.
The cleanup was useful.
But what if the duplication keeps coming back?
Maybe the real issue is not the duplicated code. Maybe nobody knows which abstraction to use. Maybe the good example is hard to find. Maybe the team has two competing patterns and no shared direction.
Then the cleanup was only half the work.
The signal was more useful than the diff.
That is why "just fix it" needs a companion:

> Just fix it, and learn from it.

Not every cleanup needs a meeting. Please no.
But recurring debt deserves attention. Debt in a high-change area deserves attention. Debt that reveals missing ownership deserves attention. Debt that keeps being recreated by humans and agents deserves attention.
The work is not only paying down debt. The work is improving the system that creates or prevents it.

## Understanding is part of quality

Addy Osmani calls this comprehension debt: the gap between how much code exists and how much of it any human genuinely understands.[^5]
That phrase lands for me.
A team can ship more code, with cleaner formatting, better naming, and more complete-looking tests, while understanding less of the system than before.
One study is not the whole story, but the direction is worth taking seriously. Anthropic found that developers using AI assistance scored lower on a follow-up mastery quiz than developers who coded by hand. The nuance matters: developers who used AI to ask questions and build understanding did better than those who delegated too much.[^6]
This is also where intent matters. If the team does not understand the system, AI may create changes nobody can safely review. If the intent is not written down, AI will fill in the blanks.
And it will do so confidently.

## What I want teams to change

If we treat technical debt as telemetry, the conversation changes.
Not: please give us time to clean up invisible things.
But: these signals are slowing down delivery, increasing review risk, and making AI less useful. Here is where the friction comes from. Here is what we can change.
Martin Fowler describes technical debt as cruft that creates extra effort when we need to change the system.[^7]
That extra effort is the interest. But the interest is also information. It shows where the system is harder to change than it should be.
So keep fixing the small things while you are there.
But when the same kind of debt keeps appearing, stop and look at the signal.
Make the preferred path easier than the shortcut.
Document the why, it's great input for both Human and AI.
That is not slowing down. That is protecting the speed you want to keep.

## The narrative I want to flip

AI changes technical debt. It changes the cost of cleanup, the speed of code production, the review burden, and the way patterns spread.
But it does not change the core responsibility.
We are still accountable for what we ship. We are still responsible for the systems we maintain. We are still responsible for understanding the work, or making sure the right understanding is captured and shared.
Technical debt is not just the puddle we accumulate in the codebase.
It is also the trail of signals showing where our system, process, knowledge, and incentives are out of alignment.
AI can help us clean up the puddle faster.
But if we ignore the trail, we will keep producing the same debt.
Only faster.
Cleaner.
And with more confidence.
That might be the most expensive debt of all.

## References

[^1]: [Technical debt lost its excuse](https://madewithlove.com/blog/technical-debt-lost-its-excuse/)

[^2]: [Towards an Ontology of Terms on Technical Debt](https://publica.fraunhofer.de/entities/publication/1360aa6b-51b3-470b-b528-3e65afc77c24)

[^3]: [Context is key, but often missing](/blog/context-is-key-but-missing/)

[^4]: [Beyond the Diff: What Maintainers Need from an Agentic Workflow](/blog/beyond-the-diff/)

[^5]: [Comprehension Debt, the hidden cost of AI generated code](https://addyosmani.com/blog/comprehension-debt/)

[^6]: [How AI assistance impacts the formation of coding skills](https://www.anthropic.com/research/AI-assistance-coding-skills)

[^7]: [Technical Debt](https://martinfowler.com/bliki/TechnicalDebt.html)
