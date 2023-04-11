---
title: "Convincing Your Company Adopt Finops"
date: 2023-04-11T08:22:21-04:00
description: "Two tangible practices you can implement to positively foster a FinOps culture"
url: /blog/2023/convincing-your-company-adopt-finops
categories:
  - "FinOps"
images:
  - /images/blog/2023/04/finops-take-action-og.jpg
tags:
  - finops
  - aws
  - gcp
  - azure
  - finance
  - engineering
  - finops foundation
  - cloud cost optimization
---
![Woman holding film slate](/images/blog/2023/04/finops-take-action.jpg)
_Photo from [Usplash](https://unsplash.com/photos/A-obUh61bKw)_

*This post was originally [published by Vantage](https://www.vantage.sh/blog/convincing-your-company-adopt-finops) on April 6, 2023.*

---

One of the biggest challenges for FinOps Practitioners, year after year, is [getting engineers to take action](https://data.finops.org/#3388). I'm not the biggest fan of this framing, but it represents a real roadblock that FinOps Practitioners are experiencing: they're bubbling up a bunch of valuable cost-saving recommendations, but it's hard to get these optimizations implemented by engineers.

If you're spending energy trying to get engineers to take action, you're already playing the wrong game. FinOps is about 1) *culture* and 2) *information sharing*. The result of one or both of these areas *can be* engineering action, but this should be thought of as a side effect, rather than the goal itself.

The challenge with this new framing is that it's way more abstract. *Getting engineers to take action* is both tangible and measurable. Engineers either take action or they don't. There's an impact, or there's not.

By contrast, "Culture" and "information sharing" are *concepts* and thus harder to implement. Yet, there are actions we can take that will help implement a FinOps practice — which may or may not result in engineers taking action — that instead focus on both culture and information sharing more directly.

# Culture of cloud cost mindfulness
To be clear, FinOps Practitioners should not be responsible for the culture of an entire company. That's a much bigger beast — one that starts at the executive level and trickles down. Depending on the organization that you work for, implementing an open FinOps culture may be an uphill battle or a walk in the park.

In organizations with a Run-stage FinOps practice, however, ownership of infrastructure costs are shared across *both* Finance and Engineering. Finance's ownership of costs is the default (they're the ones approving and paying the bill), so the goal of a FinOps Practitioner is to find the best way for Engineering to share ownership responsibilities and add value.

In practice, this means **openly sharing spend data with the teams that are incurring those costs**. Not just costs, but also sharing the wider context as well: how much of the company's total infrastructure spend does this team's portion represent?

For many companies, there's an instinct to hide costs from engineers. Often, this is based on two fears:

1. Showing costs to engineers will distract them
2. Engineers will behave differently once they have cost data. ($10,000 might be a small portion of a company's cloud bill, but a huge amount to an individual)

Both of these fears fail to give engineers enough credit, and can thus cause *significant harm* to an open FinOps culture.

When I've seen companies make the transition from *hiding costs from engineers* to *showing costs to engineers*, the first thing to always happen is a flurry of optimizations. Once engineers can see how much their applications cost, they'll immediately know if their code is operating as intended or not.

Rather than being distracted by cost data, spend becomes another useful metric in an engineer's tool belt. Engineers are already paying attention to several metrics (i.e. application uptime, response time, error rates). Cost data is one more datapoint that helps paint a picture of the health of an application.

In regards to the second fear, with a long enough timeseries of cost information, engineers will start to see spend in the context of their *application* rather than the context of their *personal wallet*, in the same way Finance teams become familiar with company spend.

Being transparent with cost, and honest about the wider context around that cost, helps build an open and honest culture and empowers engineers to take action when appropriate.

# Working Groups for streamlined information sharing
The picture painted above sounds good in theory, but it can look very different in practice. Of course you'll have engineers exploring cost data the moment you flip the switch from ***no**-engineer-visibility-into-spend* to ***yes**-engineer-visibility-into-spend*. But getting engineers to continue to monitor spend can be a challenge.

Just because information is *available* to an engineer doesn't mean that engineer will actually *look* at the information. This is where establishing **Working Groups** can have a positive impact on spreading the FinOps principles.

Working Groups consist of individuals from different teams or departments who come together on a regular basis to collaborate on a specific project or initiative. These Working Groups can be broad (e.g. FinOps Working Group) or more specific (e.g. Infrastructure Tagging Working Group).

Organizing and running these regular Working Group meetings can be a great way to foster collaboration and encourage teams to think about the best way to implement various FinOps practices.

As a centralized FinOps team, there's often a self-imposed pressure to actually *be* the person/team that implements FinOps practices and dictates optimization work to engineers. But if this is how you're thinking about FinOps, you're fighting a losing battle.

Working Groups is one of the best ways to take this pressure off yourself, as the individual FinOps Practitioner, and instead enable teams to collaborate with each other to get work done. When one team finds a good way to implement a solution, they can share it with their peers in the Working Group.

# Where to start
If you're having trouble getting engineers to take action, it can be helpful to reframe your role in the process. FinOps is not just bubbling up recommended actions and convincing engineers to execute. It's about developing a company culture where FinOps practices can thrive.

This means empowering engineers with both cost data *and* context, and setting up situations where engineers can easily share information with each other. This takes the pressure off individual FinOps Practitioners, and instead fosters that FinOps culture that has huge long-term effects on cost efficiency and optimization.

