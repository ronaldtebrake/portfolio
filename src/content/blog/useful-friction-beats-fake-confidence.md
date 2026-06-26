---
title: "Useful friction beats fake confidence"
description: "Why agentic software delivery could do with an evidence trail."
pubDate: "Jun 25 2026"
heroImage: "./assets/pexels-riciardus-303040.jpg"
heroImageAlt: "View from a rock climber looking up a cliff face, following a rope through protection anchors set by a lead climber above"
heroImageCredit:
  photoBy: "Photo by Riccardo from Pexels"
  url: "https://www.pexels.com/photo/person-mountain-climbing-303040/"
category: "process"
tags: ["ai", "agentic-workflow", "loop-engineering", "code-review", "signals", "sdlc", "evidence-trail", "cognitive-debt"]
featured: true
---

## Why agentic software delivery needs an Evidence Trail

Loop engineering is becoming a useful way to describe where software delivery is going. Kent C. Dodds has a clear explanation of it in his [Loop Engineering](https://www.youtube.com/watch?v=jCZKiHrUNT4) video, but the basic idea is simple enough. It starts with a trigger, does some work, observes the result, and keeps going until it reaches a stop condition.

That small shift changes the shape of the work. A prompt gives an agent a task. A loop gives it room to work through a problem. The better the loop, the more useful work it can do before a human has to step back in. That is the promise. But it also changes where the pressure lands, because once the loop can do more of the work, the human is no longer only reviewing code. They are reviewing the output of a process they may not have seen.

That shift makes me think less of delivery as a straight pipeline and more of climbing with a rope. In climbing, friction is not the enemy. The right friction is what makes movement possible at height: enough freedom to keep moving, enough resistance to catch a bad step.

When you work alone, that can still feel manageable. Review is mostly you stepping back into your own loop. You still remember what you asked for, why you asked for it, and where you were willing to take risk. The loop may have done work while you were away, but the story of the work still starts with you.

In a team, the reviewer is often entering a loop they did not live through. They did not see the original ambiguity, the failed checks, the retries, the assumptions, or the small decisions that shaped the final result. They only see what the loop left behind: a pull request, a diff, a summary, and a green checkmark. 

This is where fake confidence starts. A clean summary can make the change feel smaller than it is. A green checkmark can make the path feel more certain than it was. A tidy pull request can hide the fact that the reviewer is being asked to trust a process they cannot inspect.

Agentic delivery does not need more summaries. It needs evidence that travels with the work. An Evidence Trail gives loops the evidence to keep going when the work is bounded, and gives humans a clear reason to step in when intent, evidence, blast radius, cost, or understanding breaks down.

A summary can orient a reviewer, but it should not be the thing the reviewer is asked to trust. It should be an index into the Evidence Trail: the intent, decisions, tests, traces, inspected files, changed files, blast radius, and unresolved uncertainty behind the change.

Matt Pocock described a useful context engineering metaphor:

> "Primary source: the source of truth. Raw data. Transcripts. Code. Secondary source: one step removed."

That is the trade-off here too. Primary sources are richer but expensive: code, tests, logs, traces, transcripts, screenshots, failed runs, decisions, and raw agent activity. Secondary sources are cheaper but lossy: summaries, compactions, generated notes, and PR descriptions.

A good Evidence Trail should not pretend the secondary source is enough. It should connect compressed guidance back to primary evidence. The Evidence Trail is what lets the loop expand without asking the team to surrender judgment.

## The loop changes the SDLC

Agentic software delivery is not simply the old SDLC running faster. The work does not disappear; it moves.

Implementation shrinks. Specification expands. Validation expands. Review carries more weight. Learning needs to become more deliberate. Less of the work lives in typing code by hand, and more of it lives in deciding what should happen, checking whether it did, understanding what changed, and knowing when the loop should stop.

That matters because the old process had a lot of friction in the middle. Some of that was waste, and I do not want to romanticize slower delivery. Long handoffs do not guarantee quality. But some friction did useful work.

A vague ticket slowed down when an engineer hit the ambiguity. A risky design choice became visible because somebody had to integrate it. A missing edge case appeared during debugging. The work had weight, and that weight created moments where the team could notice what was unclear.

Agentic workflows remove a lot of that weight. That is great when the work is clear, bounded, and easy to verify. It is much more dangerous when the work is fuzzy, crosses boundaries, or depends on context that lives in people's heads.

The agent does not always stop where a human would stop. It fills the gap, makes a reasonable guess, and produces a coherent result. Sometimes that result is right. Sometimes it is the wrong version of right.

So the question is not whether we should use loops. We will. The question is how to expand the loop without expanding the blind spot.

## Loops are not free

There is also a cost side to this, and it matters because loops make motion easier.

Loop engineering is often framed as spending compute so humans can spend attention where it matters more. That is the promise. Let the loop handle the repeatable work, the checks, the retries, and the cleanup, so humans can come back for judgment.

But that trade only works when the loop is doing something worth the cost. A loop that burns through compute, produces a weak pull request, and leaves the reviewer with all the hard questions did not really save time. It moved the cost downstream.

That is why the goal is not to make agents loop for the sake of looping. A good loop spends compute when it buys back human attention. It runs another check when that check increases trust. It asks for a second perspective when the risk justifies it. It continues when the work is still safe, bounded, and useful.

And it stops when the next step would only create motion. Motion is not progress.

## Cognitive surrender becomes cognitive debt

As loops create more work, review becomes the place where a lot of hidden context suddenly needs to be rebuilt. The pull request looks complete. The summary is clean. The tests are green. The diff is not huge. There are six more agent-created changes waiting.

The pressure is subtle. Nobody is explicitly asked to abandon judgment. The loop's success signals make it easy for everyone to treat verification as already handled somewhere else. The person who ran the loop may stop when tests pass rather than when intent is verified. The reviewer may give the change a lighter read than they would have given a human-written change in an unfamiliar part of the system.

That is cognitive surrender. Not laziness. Not incompetence. More like a small handoff of judgment at each step in the chain. A moment where the system feels confident enough that the human stops pushing back.

Once or twice, that is probably fine. But repeated across a team, across releases, across many small changes, it starts to accumulate. The team ships more, but understands less. More assumptions live inside agent runs, summaries, and generated changes instead of inside shared team memory. The codebase moves, but the team's mental model falls behind. That is cognitive debt.

Unlike technical debt, it does not always show up as messy code. Sometimes the code is clean. The tests are passing. The architecture still looks reasonable. The debt is in the gap between what the system now does and what the team can confidently explain.

This is why useful friction matters. Not because we want to make agentic delivery slower, but because we need the system to keep humans cognitively engaged at the moments where judgment matters.

## Useful friction expands the loop

Useful friction is not a meeting by default. It is not a new ceremony. It is not asking humans to manually inspect everything an agent does.

It is closer to a belay than a brake. It does not exist to stop movement. It exists to make movement safer, so the loop can go further without turning every mistake into a bad merge.

That sounds backwards at first. We usually think friction slows things down. But the right friction can make the loop wider because it gives the loop a way to know whether it is still on safe ground. If the intent is clear, impact is small, evidence is strong, and rollback is easy, the loop should keep going. 

When the loop crosses into ambiguity, risk, weak evidence, high cost, or weak understanding, the system should add resistance. Sometimes that resistance happens before review: the agent starts to drift, the prompt needs tightening, or the evidence is too weak to continue safely. Sometimes it happens during review, when the reviewer sees that the blast radius is larger than the diff suggests, or that the loop stayed close to the original intent in code but drifted in product meaning.

That is the role of the Evidence Trail. It gives the loop enough context to continue safely, and gives humans a clear reason to re-enter when the work starts to drift.

That matters even more when one person can start several loops at the same time. Review can no longer depend on someone remembering the path each loop took. The path has to travel with the work.

The diff shows the final shape of the code. The Evidence Trail shows enough of the path to know whether the team should trust that shape.

When loops do more of the path to the code, the missing context needs to become an artifact. Otherwise review becomes archaeology.

## Where attention goes next

Once the path travels with the work, useful friction can become more precise. It does not slow every change down equally. It adds resistance where the loop is moving beyond what the team can safely trust.

A small change with clear intent, strong evidence, and easy rollback can keep moving. A change that crosses an ownership boundary, spends a lot of cost for little proof, makes a product assumption, or touches poorly understood code should slow down.

Those are not metrics yet. They are signals. They help the team decide what should happen next: continue the loop, gather better evidence, ask for human judgment, route the review to the right person, or turn the change into something the team needs to learn from.

Without the trail, those signals become guesses. With the trail, they become inspectable.

Some signals route attention back into the pull request. Others point beyond it. They show where the team needs to keep learning.

## The learning loop

Signals help route attention in the moment, but they also point to something longer-lived. 

Earlier, I described cognitive debt as the gap between what the system now does and what the team can confidently explain. When a change has high impact, visible drift, a new pattern, unclear ownership, or touches code the team does not understand well enough, the loop should leave something behind for the team, not just for the reviewer.

That does not mean turning every change into documentation. Most changes should simply ship. But some changes should create a short note, review prompt, or small learning artifact that helps the next person understand the pattern, risk, or decision.

Code review was never just about checking code quality. It was also about maintaining mental alignment.

If loops are going to change the system faster, we need loops that help human understanding keep up.

## Keep the (right) tension

Agentic software delivery will make teams faster. I believe that. 

What the work must carry is the team’s ability to make good decisions while moving faster.

That ability does not survive on summaries alone. It needs intent, evidence, constraints, review signals, and learning loops. It needs the right kind of friction: the friction that makes unclear intent visible, pauses a loop when evidence is missing, routes risky changes to the right humans, prevents compute from turning into noise, and turns important changes into shared understanding.

The old friction lived in implementation. The new friction lives in specification, validation, review, learning, and cost control. The question is not whether the rope creates resistance. The question is whether that resistance appears in the right place.

Expand the loops, carefully. Give agents signals that let them keep going when the work is safe. Give reviewers the context to trust or challenge the path. Give teams learning loops so understanding does not rot behind the speed.

Useful friction beats fake confidence because software was never only about code. It was always about the shared understanding around it.

If the work moves faster than understanding can travel, the team does not really move faster. It only moves with less grip.

## Further reading

These pieces helped shape the thinking behind this post.

* [Kent C. Dodds](https://www.youtube.com/watch?v=jCZKiHrUNT4) and [Addy Osmani](https://addyosmani.com/blog/loop-engineering/) on loop engineering.
* [Lauren Tan](https://x.com/poteto/status/2069824386283319343) on trustworthy loops and verification artifacts.
* [DX](https://newsletter.getdx.com/p/revisiting-the-dx-core-4) on outcome metrics versus diagnostic signals.
* [Matt Pocock](https://x.com/mattpocockuk/status/2062825992486269441) on primary and secondary sources in context engineering.
* [Addy Osmani](https://addyosmani.com/blog/intent-debt/) on intent debt and [not outsourcing learning](https://addyosmani.com/blog/dont-outsource-learning/).
