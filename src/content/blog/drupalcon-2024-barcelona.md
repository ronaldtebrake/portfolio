---
title: "DrupalCon Barcelona 2024 recap"
description: "Everything about my experiences at DrupalCon Barcelona 2024."
pubDate: "Oct 03 2024"
heroImage: "./assets/antoni-gaudi-community-experience-building-dall-e.webp"
category: "product"
tags: ["events"]
---

I had a wonderful time reconnecting with my peers at DrupalCon Barcelona 2024! From reuniting with old friends and making new connections to gaining insights into the future of Drupal, the event offered a lovely balance of networking and professional development, giving me all kinds of inspiration and motivation. So much so, I decided it’s about time I start sharing more through my own blog, and here we are.

## A Glimpse Into the Future: The Driesnote and More

The highlight of the event was Dries Buytaert's keynote, where he unveiled the future of Drupal, particularly the Drupal CMS (formerly known as the Starshot) initiative. Seeing the potential of Drupal evolve into a no-code solution was inspiring. AI-powered tools that can automate everything from content migration to feature creation will fundamentally change the way people work with Drupal, making it more accessible to non-developers. This was more than just a demo; it was a glimpse into a future where site-building is easier, faster, and more intuitive.

Does that help distributions like Open Social? At first glance, it might seem far-fetched, and I have to admit I was a bit skeptical. Where recipes are becoming the new way of installing sets of dependencies and configuration, we're still trying to be an out-of-the-box solution for communities. Our community’s end users aren’t site builders, and we don’t need them to leverage most of those capabilities within our product.

However, if you look deeper, a lot of the amazing work done for Drupal CMS we *will* be able to leverage. It's not that Drupal stops caring about Drupal Core, developers, or enterprise users. In order to create Drupal CMS, investments in the ecosystem will need to continue.

I believe, similar to how Dries reflected on Gaudí's life’s work, the Sagrada Familia, and how it’s not just Gaudí’s legacy but also the work of many other craftsmen, Drupal CMS kickstarts a bunch of new, shiny features. Some we can directly use, but if anything, it serves as great inspiration for us to continue our efforts working on our community experience platform, following in the footsteps of those man-made marvels in Drupal core and the contrib ecosystem.

After taking some time to digest everything I've learned, here are some of the exciting marvels that truly resonated with me.

## Access Policy API

Kristiaan's session on the Access Policy API was perhaps my biggest highlight. Hearing Kristiaan talk about the API opened up my mind to a whole new range of possibilities for managing access within our communities.

> Drupal has moved from an RBAC (Role-Based Access Control) to a PBAC (Policy-Based Access Control) system where permissions are calculated based on a set of policies applied in a given context.

We now have tools available to dynamically add or revoke permissions. Instead of trying to fiddle with roles, permissions, or other attributes, we can create policies based on dynamic sets of conditions. These policies, being tagged services, can be prioritized, enabling us to determine a wide range of policies that can be applied to the business rules in our product while ensuring we fully understand what happened, in what order, and why.

I’ll dive deeper into this in future blog posts, as it truly deserves a more in-depth look.

## Experience Builder

One of the other sessions I attended focused on the new Experience Builder for Drupal. This tool is poised to be a game-changer, especially for content editors and site builders. It provides a seamless, user-friendly interface where users can build complex site layouts without needing to code. The Experience Builder offers a visual way to customize the site by dragging and dropping components, setting up reusable templates, and managing layouts in real time. This truly empowers non-developers to take full control of their site’s look and feel without compromising on flexibility or functionality.

My mind couldn’t help but wonder how we can leverage all of the amazing work done there to ensure our content editors can use the Experience Builder to create amazing dashboards and landing pages within our product. Currently using Layout Builder for this, it comes with a very Drupal-admin-like UI. Just seeing the current status of the Experience Builder, I can’t wait to give it a go and see how we can use it within our product.

## Artificial Intelligence

One of the main focuses was the responsible implementation of AI, emphasizing transparency and the importance of a “human-in-the-loop” approach. A Q&A session and panel discussion on Drupal AI brought forward both excitement and concerns, showing the community’s dedication to ethical AI integration. This approach ensures AI remains an empowering tool while respecting user autonomy and security.

As Open Social has been working closely with FreelyGive, the maintainers of the Drupal AI module, we have already made significant progress in integrating AI. The insights shared in Barcelona highlighted the importance of using AI responsibly—keeping users informed and involved at every step. This approach will likely shape AI-driven tools for Drupal in ways that build on transparency and trust, helping to ease any worries about its impact on content management.

While many demos, understandably, were dedicated to Drupal CMS, the groundwork here is usable for many more use cases. AI can help create more dynamic and personalized experiences by tailoring content to individual user interests, enhancing community engagement. For instance, AI-powered recommendations, adaptive search, and behavior-based content delivery can ensure users find relevant discussions, events, and resources, making the platform feel more intuitive and responsive. Automation tools for content moderation and user support can streamline operations, allowing community managers to focus on nurturing real interactions. By embedding ethical, transparent AI into these experiences, Drupal is set to empower us to build more connected, vibrant, and user-centric communities.

## Looking Forward

As the event concluded with the announcement that Vienna will host DrupalCon Europe 2025, I found myself already looking forward to the next opportunity to reunite with the community and continue pushing Drupal to new heights. Whether it was through sessions, networking, or exploring the city, this year’s DrupalCon Barcelona truly showcased the best of what our community has to offer.

You can expect a lot more in-depth posts about the above, so stay tuned.