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

Loop engineering is becoming a useful way to describe where software delivery is going. Kent C. Dodds has a clear explanation of it in his [Loop Engineering](https://www.youtube.com/watch?v=jCZKiHrUNT4) video, but the basic idea is simple enough: instead of asking an agent to do one thing and then waiting for the next prompt, you give it a loop. It starts with a trigger, does some work, observes the result, and keeps going until it reaches a stop condition.

That small shift changes the shape of the work. A prompt gives an agent a task. A loop gives it room to work through a problem. It can read feedback, run checks, fix failures, inspect the result, make another change, and only come back when it has either finished the work or reached a boundary.

The better the loop, the more useful work it can do before a human has to step back in. That is the promise. But it also changes where the pressure lands, because once the loop can do more of the work, the human is no longer only reviewing code. They are reviewing the output of a process they may not have seen.

That shift makes me think less of delivery as a straight pipeline and more of climbing with a rope. In climbing, friction is not the enemy. The right friction is what makes movement possible at height: enough freedom to keep moving, enough resistance to catch a bad step.

When you work alone, that can still feel manageable. Review is mostly you stepping back into your own loop. You still remember what you asked for, why you asked for it, and where you were willing to take risk. The loop may have done work while you were away, but the story of the work still starts with you.

In a team, the reviewer is often entering a loop they did not live through. They did not see the original ambiguity, the failed checks, the retries, the assumptions, or the small decisions that shaped the final result. They only see what the loop left behind: a pull request, a diff, a summary, and a green checkmark.

That is where review starts to get heavier. Not because the code is necessarily worse, but because the context is missing. The loop can become better at producing work while the team becomes worse at understanding how that work came to exist. The output looks finished, but the reviewer is still reconstructing the path.

This is where fake confidence starts. A clean summary can make the change feel smaller than it is. A green checkmark can make the path feel more certain than it was. A tidy pull request can hide the fact that the reviewer is being asked to trust a process they cannot inspect.

Agentic delivery does not need more summaries. It needs evidence that travels with the work. An Evidence Trail gives loops the evidence to keep going when the work is bounded, and gives humans a clear reason to step in when intent, evidence, blast radius, cost, or understanding breaks down.

A summary can orient a reviewer, but it should not be the thing the reviewer is asked to trust. It should be an index into the Evidence Trail: the intent, decisions, tests, traces, inspected files, changed files, blast radius, and unresolved uncertainty behind the change.

Matt Pocock described a useful context engineering metaphor:

> "Primary source: the source of truth. Raw data. Transcripts. Code. Secondary source: one step removed."

That is the trade-off here too. Primary sources are richer but expensive: code, tests, logs, traces, transcripts, screenshots, failed runs, decisions, and raw agent activity. Secondary sources are cheaper but lossy: summaries, compactions, generated notes, and PR descriptions.

A good Evidence Trail should not pretend the secondary source is enough. It should connect compressed guidance back to primary evidence, so the reviewer can decide when to trust the summary, when to inspect the source, and when to stop the loop.

The Evidence Trail is what lets the loop expand without asking the team to surrender judgment.

## The loop changes the SDLC

Agentic software delivery is not simply the old SDLC running faster. The work does not disappear; it moves.

Implementation shrinks. Specification expands. Validation expands. Review carries more weight. Learning needs to become more deliberate. Less of the work lives in typing code by hand, and more of it lives in deciding what should happen, checking whether it did, understanding what changed, and knowing when the loop should stop.

That matters because the old process had a lot of friction in the middle. Some of that was waste, and I do not want to romanticize slow delivery. Long handoffs are not quality. Waiting weeks for a simple change is not wisdom. But some friction did useful work.

A vague ticket slowed down when an engineer hit the ambiguity. A risky design choice became visible because somebody had to integrate it. A missing edge case appeared during debugging. The work had weight, and that weight created moments where the team could notice what was unclear.

Agentic workflows remove a lot of that weight. That is great when the work is clear, bounded, and easy to verify. It is much more dangerous when the work is fuzzy, crosses boundaries, or depends on context that lives in people's heads.

The agent does not always stop where a human would stop. It fills the gap, makes a reasonable guess, and produces a coherent result. Sometimes that result is right. Sometimes it is the wrong version of right.

So the question is not whether we should use loops. We will. The question is how to expand the loop without expanding the blind spot.

## Loops are not free

There is also a cost side to this, and it matters because loops make motion easier.

Loop engineering is often framed as spending compute so humans can spend attention where it matters more. That is the promise. Let the loop handle the repeatable work, the checks, the retries, and the cleanup, so humans can come back for judgment.

But that trade only works when the loop is doing something worth the cost. Every retry, browser run, test run, review bot, trace, sub-agent, and CI cycle spends something. Sometimes money. Sometimes time. Sometimes review capacity. Sometimes the mental energy of the person who now has to make sense of a pull request that looks done but still feels unclear.

A loop that burns through compute, produces a weak pull request, and leaves the reviewer with all the hard questions did not really save time. It moved the cost downstream.

That is why the goal is not to make agents loop for the sake of looping. A good loop spends compute when it buys back human attention. It runs another check when that check increases trust. It asks for a second perspective when the risk justifies it. It continues when the work is still safe, bounded, and useful.

And it stops when the next step would only create motion.

Motion is not progress.

## Cognitive surrender becomes cognitive debt

As loops create more work, review becomes the place where a lot of hidden context suddenly needs to be rebuilt. The pull request looks complete. The summary is clean. The tests are green. The diff is not huge. There are six more agent-created changes waiting.

The pressure is subtle. Nobody is explicitly asked to abandon judgment. The loop's success signals make it easy for everyone to treat verification as already handled somewhere else. The person who ran the loop may stop when tests pass rather than when intent is verified. The reviewer may give the change a lighter read than they would have given a human-written change in an unfamiliar part of the system.

That is cognitive surrender.

Not laziness. Not incompetence. More like a small handoff of judgment at each step in the chain. A moment where the system feels confident enough that the human stops pushing back.

Once or twice, that is probably fine. But repeated across a team, across releases, across many small changes, it starts to accumulate. The team ships more, but understands less. More assumptions live inside agent runs, summaries, and generated changes instead of inside shared team memory. The codebase moves, but the team's mental model lags behind.

That is cognitive debt.

Unlike technical debt, it does not always show up as messy code. Sometimes the code is clean. The tests are passing. The architecture still looks reasonable. The debt is in the gap between what the system now does and what the team can confidently explain.

This is why useful friction matters. Not because we want to make agentic delivery slow, but because we need the system to keep humans cognitively engaged at the moments where judgment matters.

## Useful friction expands the loop

Useful friction is not a meeting by default. It is not a new ceremony. It is not asking humans to manually inspect everything an agent does.

It is closer to a belay than a brake. It does not exist to stop movement. It exists to make movement safer, so the loop can go further without turning every mistake into a bad merge.

That sounds backwards at first. We usually think friction slows things down. But the right friction can make the loop wider because it gives the loop a way to know whether it is still on safe ground.

If the intent is clear, impact is small, evidence is strong, and rollback is easy, the loop should keep going. It can fix the failure, update the test, rerun the check, and prepare the change without pulling a human back too early.

When the loop crosses into ambiguity, risk, weak evidence, high cost, or weak understanding, the system should add resistance. Sometimes that resistance happens before review: the loop asks for product clarification because the requirement is underspecified, gathers stronger evidence because the current check is too shallow, or pauses because the change touches multiple owners. Sometimes it happens during review, when the reviewer sees that the blast radius is larger than the diff suggests, or that the loop stayed close to the original intent in code but drifted in product meaning.

That is the role of the Evidence Trail. It gives the loop signals to continue safely, and it gives humans signals to re-enter at the right moment.

Git shows the final shape of the code. The Evidence Trail shows enough of the path to know whether the team should trust that shape.

When loops do more of the path to the code, the missing context needs to become an artifact. Otherwise review becomes archaeology.

## Signals before metrics

This is also why signals come before new metrics.

Existing outcome metrics still matter. Speed, quality, effectiveness, and business impact are still the things we care about. AI activity can help explain what is happening underneath those outcomes, but it should not become the goal by itself.

The first problem in the new SDLC is not reporting. The first problem is attention.

A team does not only need to know how many agent-created pull requests were opened this week. It needs to know where attention should go next. One loop may be safe to continue because the intent is clear, the evidence is strong, and the impact is small. Another may need to stop before review because the work crossed an ownership boundary or spent a lot of compute without producing much proof. A third may deserve to become learning material because the change introduced a new pattern the team will need to recognize later.

A metric is something you aggregate. A signal is something that helps you decide what to do next.

The Evidence Trail is the source those signals come from. Intent drift is not a vibe; it comes from comparing the original intent, the path the agent took, and the final change. Blast radius is not just the size of a diff; it comes from changed files, inspected files, dependencies, ownership, runtime paths, and impact rules. Learning need is not a content calendar; it comes from the importance of the change, the novelty of the pattern, the ownership boundary, and the team's existing understanding.

Without the trail, these signals become guesses. With the trail, they become inspectable.

The same is true at the loop level. If the Evidence Trail captures tool use, tests, traces, decisions, blast radius, cost, and human interventions over time, the team can start to see whether the loop is still operating inside the boundaries that made it safe.

Maybe evidence quality is improving. Maybe blast radius is expanding. Maybe agents are asking for human help at the right moments. Maybe they are spending more compute for weaker proof. The point is not only whether this change drifted from intent. It is whether the loop itself is drifting from the behavior we originally trusted.

That is why better signals are what let the loop expand safely. Metrics can come later, once we understand which signals actually predict trust, review effort, quality, cost, and learning.

## The learning loop

Signals help route attention in the moment, but they also point to something longer-lived. Teams do not only need to review what changed. They need to keep understanding what changed.

A lot of engineering knowledge used to be earned through the work itself. You remember the edge case because you debugged it. You understand the abstraction because you refactored it. You know why the strange code exists because you were there when the trade-off was made.

Agentic delivery can weaken that connection. The team can ship faster while learning less.

That is not just a documentation problem. It is a quality problem. A team that does not understand its system cannot safely review changes to it, respond well to incidents, or tell whether an agent followed the right pattern.

So some changes should leave behind learning material. Not every change; that would become noise. But when a change has high impact, visible drift, a new pattern, unclear ownership, or touches poorly understood code, the system should ask a second question after merge: what does the team need to learn from this?

Sometimes the answer is a short note for support-facing engineers. Sometimes it is a few flashcards for the product and engineering team. Sometimes it is a three-question quiz for the people likely to review similar work next time.

This is not corporate training. It is part of delivery.

If loops are going to change the system faster, we need loops that help humans keep up.

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
