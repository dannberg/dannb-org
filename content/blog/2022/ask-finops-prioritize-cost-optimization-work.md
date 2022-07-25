---
title: "Ask a Finops Practitioner: When to prioritize cost?"
date: 2022-07-25T16:04:46-04:00
description: "Q: Does a company have to be at a certain level of maturity with performance reliability and security before cost becomes a priority?"
url: /blog/2022/ask-finops-prioritize-cost-optimization-work
images: ["/images/blog/2022/07/ana-municio-stones-question-mark.jpg"]
categories:
  - "FinOps"
tags:
  - finops
  - aws
  - gcp
  - azure
  - finance
  - linkedin
  - finops foundation
  - cloud cost optimization
  - ask a finops practitioner
draft: false
---
![Dog wearing glasses working at iPad](/images/blog/2022/07/ana-municio-stones-question-mark.jpg)
_Photo by [Ana Municio](https://unsplash.com/@lamunix) on [Unsplash](https://unsplash.com/photos/PbzntH58GLQ)_


**Author's Note:** I'm starting a new article series that I'm calling "_Ask a FinOps Practitioner._" I'll often get messages from members of the community with specific questions, given my role as [Ambassador](https://www.finops.org/ambassadors/) at the FinOps Foundation, host of the [NYC FinOps Meetup](https://www.meetup.com/new-york-city-cloud-finops/), and occasional publisher of [FinOps content](https://dannb.org/tags/finops/). Sometimes these questions are so good that I want to share them (and my answers) with the wider community in the hopes of spreading knowledge and sparking a larger discussion.

Posts in this series will be sporatic, and totally at the whim of 1) people asking me questions worth sharing and 2) me feeling motivated to format/edit the content for my website.

The post below has been lightly edited for grammar and spelling, but not modified in any material way. *All emphasis is mine*.

---

**[Anu Gardiner](https://www.linkedin.com/in/anugardiner/):** _Hi Dann, I'm interested in your thoughts on cost versus performance, reliability and security. In other words, **does a company have to be at a certain level of maturity with performance reliability and security before cost becomes a priority?** An open ended question for sure but I'm trying to gain a deeper understanding of when cost becomes a pain point for platform teams._

**Dann Berg (me):** Great question. In my mind at least, there's very little connection between cost and performance/reliability/security. By that I mean there's never a point when a company thinks "I've reached this threshold of performance/reliability/security so now it's time to work on cost."

Prioritization of cost — at least for a US-based, venture-funded company — is probably not something to even think about until series C or D, or there's some looming liquidation event. Or unless margins are so egregious that it's time to fit some cost-optimization tickets in between new features or performance/reliability/security.

That equation is a little bit different for non-US companies, where often the cost of infrastructure is a significantly higher percentage of the business. If that's the case, companies should be thinking about FinOps practices in a stricter sense much earlier. It's important for everyone to think of a solid FinOps foundation early in their journey (starting with a great tagging strategy is much easier than trying to adopt one later) but the stakes of doing it correctly are different depending on where you are in the world, what funding is like, and how you plan to build a sustainable business.

**AG:** *Thanks Dann. I have a follow on question: how does this picture change in your view for verticals other than software? Just to pick an example, if you think of a large US manufacturing company, they're likely driving tens of millions in annual cloud spend but this cloud spend is from internal IT activities, not revenue generating activities.*

**DB:** Most of my experience is with SaaS, so keep in mind that this answer is purely theoretical. I think that's going to vary from business to business, and there's not going to be a one-size-fits-all answer.

If the cloud infrastructure that's running isn't directly tied to revenue, then it must be either R&D or in-directly tied to revenue. In either case, performance/reliability/security is focus number one. Cost really becomes a factor if 1) engineers want to do more but only have $X budget, so if they decrease their costs then they'll have more money to do new things, or 2) accounting decides to reign in R&D costs (or however the costs are being categorized).

I imagine there might be more scenarios, but like I said it's going to vary business to business so I'm not sure of a better answer without know the full story.

---

Do you have any thoughts you'd like to add to the conversation? Let my know by emailing me at **dann** [at] **dannb** [dot] **org**.

Likewise, do you have a FinOps question you'd like answered? Drop me an email or ask me on [LinkedIn](https://www.linkedin.com/in/dannberg/).
