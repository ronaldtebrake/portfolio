---
title: "DrupalCon Barcelona 2024 recap"
description: "Everything about my experiences at DrupalCon Barcelona 2024."
pubDate: "Oct 03 2024"
heroImage: "./assets/antoni-gaudi-community-experience-building-dall-e.webp"
category: "product"
featured: true
---

I had a wonderful time reconnecting with my peers at DrupalCon Barcelona 2024! 
From reuniting with old friends and making new connections, to gaining insights into the future of Drupal, the event offered a lovely balance of networking and professional development, giving me all kinds of inspiration and motivation. 
So much so I decided it's about time I start to share more through my own blog, and here we are.

## A Glimpse Into the Future: The Driesnote and more
The highlight of the event was Dries Buytaert's keynote, where he unveiled the future of Drupal, particularly the Drupal CMS (formerly known as Starshot) initiative. Seeing the potential of Drupal evolve into a no-code solution was great. AI-powered tools that can automate everything from content migration to feature creation will fundamentally change the way people work with Drupal, making it more accessible to non-developers. This was more than just a demo; it was a glimpse into a future where site-building is easier, faster, and more intuitive​.

Does that help distributions like Open Social? At first glance it might seem far-fetched and I have to admit I was a bit sceptical. 
Where recipes are becoming the new way of installing sets of dependencies and configuration, we're still trying to be an out of the box solution for communities. Our communities end users also aren't site builders and we don't need them to leverage most of those capabilities within our product. 

However, if you look deeper, a lot of the amazing work done for Drupal CMS we *will* be able to leverage. It's not that Drupal stops caring about Drupal Core, developers or enterprise users. In order to be able to create Drupal CMS, investments in the ecosystem will need to continue. 

I believe, similar to how Dries reflected on Gaudí's lifes work, the Sagrada Familia, and how it's not just Gaudí's lifeswork but also from all the other craftsme, I feel Drupal CMS kickstarts a bunch of new shiny features. Some we can directly use, but if anything, it serves as great inspiration for us to continue our efforts working on our community experience platform following the footsteps of those man made marvels in Drupal core and the contrib ecosystem.

After taking some time to digest all what I've learned, here are some of the exciting changes that really resonated with me.

## Access Policy API
Kristiaan's session on the Access Policy API was maybe my biggest highlight. Hearing Kristiaan talk about the API opened up my mind to a whole new range of possibilities on how we can deal with access within our communities. 

> Drupal has moved from an RBAC (Role-Based Access Control) to a PBAC (Policy-Based Access Control) system where permissions are calculated based on a set of policies that are applied in a given context.

We now get all the tools available to dynamically add or revoke permissions. Instead of having to try and fiddle around with roles and permissions or other attributes, we can now create policies based on dynamic sets of conditions. 
These policies, being tagged services, can be prioritised, enabling us to determine a wide range of policies that can be applied for the business rules we have in our product whilst ensure we fully understand what happened in what order when.

I'll dive deeper in to this in future blog posts, as this really deserves a more in-depth look.

## Experience builder
One of the other sessions I attended was focused on the new Experience Builder for Drupal. This tool is poised to be a game-changer, especially for content editors and site builders. It provides a seamless, user-friendly interface where users can build complex site layouts without needing to code. The Experience Builder offers a visual way to customize the site by dragging and dropping components, setting up reusable templates, and managing layouts in real time. This truly empowers non-developers to take full control of their site's look and feel without compromising on flexibility or functionality. 

My mind couldn't help but wonder how we can leverage all of the amazing work done there to ensure our content editors can use the experience builder for creating amazing dashboards and landing pages within our product. Currenlty using layout builder for this, it comes with a very Drupal admin like UI. Just seeing where the current status of the experience builder is at, I can't wait to give it a go and see how we can use this within the product.

## Artifical Intelligence
Last but not least, AI was a major focus of this year's DrupalCon, and several sessions highlighted how artificial intelligence is reshaping the landscape for content management. Beyond what was discussed in the Driesnote, multiple sessions dove deeper into the practical applications of AI in Drupal.

We we're fortunate enough to already have a headstart with AI. With Open Social working together closely with Freelygive, the maintainers of the Drupal AI module, so I was curious to see the excitement of others on this topic. I could really feel the excitement, as well as the concerns on the matter during the Drupal AI Q&A / Panel session in the Auditorium. 

It really got me even more excited, but also showed me how doing this responsibly, being transparent, keeping the human-in-the-loop approach, is the way to go. There is so much going on, I can totally understand the concerns and by sharing more in my blog on how we deal with AI ourselves hopefully I can take some of those concerns away.

## Looking forward

As the event concluded with the announcement that Vienna will host DrupalCon Europe 2025, I found myself already looking forward to the next opportunity to reunite with the community and continue pushing Drupal to new heights. Whether it was through sessions, networking, or exploring the city, this year’s DrupalCon Barcelona truly showcased the best of what our community has to offer.

