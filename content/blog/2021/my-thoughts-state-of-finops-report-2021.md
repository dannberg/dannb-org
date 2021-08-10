---
title: "My Thoughts State of Finops Report 2021"
date: 2021-08-09T16:42:33-04:00
description: "A few random thoughts on the FinOps Foundation's State of FinOps Report 2021"
url: /blog/2021/my-thoughts-state-of-finops-report-2021
categories:
  - "FinOps"
tags:
  - finops
  - money
  - aws
  - gcp
  - azure
  - finance
  - engineering
  - finops foundation
  - cloud cost optimization
draft: true
---
![Single dollar bill](/images/blog/2021/08/ideas-paper.jpg)
_Photo from [Usplash](https://unsplash.com/photos/r_8uWsy3QT8)_

I find cloud financial management (i.e. FinOps) incredibly fascinating. Both as the day-to-day work of making sense out of the complexities of cloud usage and billing, and as a larger movement that’s still in its relative infancy.
The FinOps Foundation is providing a great service to the industry, by working with the community to set out best practices, and set the stage for what the next several decades will TKTK

The FinOps Foundation sent out a survey to its members to get a feel for what the industry looks like at the moment. There were 804 responses across 44 question, and in total covered $30.9B (yes billion) in spend. It then [published the results](https://web.archive.org/web/20210219130603/https://data.finops.org/).

The results were incredibly fascinating. Rather than just think them to myself, I wanted to pull out information that I found interesting and share a bit more about what it caught my attention.

{{% div boxed %}}
**“70% of respondents from large organizations”**
{{% /div %}}

The bigger the company, the more complex the cloud bill. That alone is enough to TKTK

In my blog post [Evolving your cloud-cost strategy as you scale](https://dannb.org/blog/2020/evolving-cloud-cost-strategy-scale/), I talked about the different cloud cost needs for different size businesses. I make the argument that you really don’t need a dedicated Cloud Cost Analyst until almost Enterprise level. Prior to that size (in most cases) you should be find with third-party tooling and having cloud spend be a part of someone’s job, not one’s entire job.

When cloud spend is not your entire job, you have a lot less motivation to discover and really dig into something like the FinOps Foundation. Your company has most likely invested in a tool such as Cloudability, CloudHealth, or CloudCheckr, and it makes more sense to spend your time learning that tool inside and out.

{{% div boxed %}}
**How would you describe your organization’s public cloud use?**

- *23% Public Cloud-First, but still hybrid (on-prem traditional data center)*
- _17% Public Cloud Use, but primarily on-prem traditional data center_
- _16% Public Cloud-First, but still hybrid (on-prem private cloud)_
- _**15.5% Born in public cloud (never in data center)**_
- _15.5% All in Public Cloud (was in data center, now all in cloud)_
{{% /div %}}

This is such an interesting statistic due to what it says about where we currently are in new field we’re calling FinOps, and where we’re heading. At Datadog, we’re born in the public cloud, and have never operated in a self-managed data center. But companies like this are an extreme minority, as nearly 85% of companies that some sort of connection to on prem pops of presence.

This means that the most relevant questions that are being asked and answered involve some sort of legacy tkt.
Finance Departments that have workflows based on accounting practices of these legacy systems is their version of “tech debt."

TKTK

{{% div boxed %}}
**"Most indicated that they report to a technical executive. The top answers were CTO (31.38%) & CIO (26.82%), followed by CFO, (12.41%), with a mix of ‘other’ responses including COO and Procurement.”**
{{% /div %}}

This answer actually surprises me, but in a good way. I feel like FinOps teams need two things (placement-wise) in order to be as effective as possible:

1. To be an arm of Engineering (rather than Finance)
2. To report to someone high enough to be able to support the initiatives

TKTK

{{% div boxed %}}
**What challenges do FinOps teams face?**
- _33% Dealing with shared costs_
- _23% Full allocation of costs_
- _11% Container Costs_
{{% /div %}}

TKTK these are all very similar.

The one items that I’m keeping my eye on here is “container costs” (11%). Currently, there are a few ways to allocate costs to specific containers, but each has its pros and cons. Either this is going to get a lot easier (there will be an elegant solution for visibility into home-spun k8s) or managed k8s is gong to be so popular, and each cloud provider will have an elegant solution that this won’t even be something people think about anymore.

**Our research shows that challenges faced by those spending $5 million per year are surprisingly similar to those spending $500 million per year.**

TKTK the insustry is so young. So much room for opportunity.

{{% div boxed %}}
**How FinOps teams learn to overcome these challenges**
- 15.5% Last Week in AWS
{{% /div %}}

This is a sizable chunk of people. After Corey Quinn’s [New York Times profile](https://www.nytimes.com/2021/02/17/technology/corey-quinn-amazon-aws.html), I can only imagine that growing.
(Did you know I was [on his podcast](https://www.lastweekinaws.com/podcast/screaming-in-the-cloud/episode-51-size-of-cloud-bill-not-about-number-of-customers-but-number-of-engineers-you-ve-hired/)?)

{{% div boxed %}}
**What’s in your FinOps tool kit?**

- _74% AWS Cost Explorer_
- _48% Azure Cost Management_
- _27% GCP Cost Tools_
- ...
- _10% Datadog_
{{% /div %}}

First of all, 10% use Datadog? We’re flattered!

Secondly, it’s a bit hard to draw conclusions from this data, since we know that there __is__ and overlap in tooling that people use, but we know what __what__ that overlap is.

I will say that it’s great to see cloud provider’s own tooling at the top of the list. I feel that these tools often get overlooked in favor of fancier alternatives. TKTK internal tooling has gotten better in the past few years.
But it does’t provide for specific use cases (dashboard building, chargeback, custom reservation savings application, unified view across multiple providers) so many might still need third-party solutions.

{{% div boxed %}}
**46% use cloud native tooling as their primary technology, 43% use a 3rd party platform, and 11% use home grown tools or spreadsheets.**
{{% /div %}}

Can’t really make sense of this data.

{{% div boxed %}}
**Ideal Targets for Commitments: Crawl: 60%, Walk: 75%, Run: 80%**
{{% /div %}}

Again, this makes sense: the more advanced a company is in their cloud journey, the higher the target commitment level for RIs/SPs. This, I think, is one of the biggest mistakes that “crawlers” can make: targetting too low of coverage.

Whenever it comes time to make a decision on commitments, there’s always a “well, we need to clean up X first” or “we’re already spending too much, we should focus on optimizing before committing.” But these delays are often made without there being a firm plan or timeline for this optimization effort. As a result, companies keep paying more for On Demand unnecessarily.

If you’re operating in the cloud, you should try and reserve as much of your compute usage as possible. I repeat, you should be trying to reserve __as much of your compute usage as possible__.

If you’re still feeling uncomfortable about a big commit, figure out the breakeven month for the commitment(s) you’re considering. This is the point after which reserved instance costs are effectively “free” compared to running On Demand. TKTK

{{% div boxed %}}
**We asked how accurate FinOps teams actual spend should be to estimates or forecast cloud spend. Run stage practitioners said to within 12%. In other words a $100k forecast would need to be less than $112k of actual spend to be considered accurate. Some said as low as 2%.**
{{% /div %}}

There are two ways to forecast cloud spend: top down and bottom up. Top town starts with revenue and works its way down to a cloud “budget.” Bottoms up starts instead with engineering roadmap and usage growth modeling, and builds out a cloud spend forecast from there.

Ideally, both of these models exist, and regularly checked against each other and each modified accordingly. This is where a FinOps team can provide a lot of value.

Still, to get to a target of 2% accuracy for spend, you need to have a lot of things fall into place. First, you’d need to have usage forecasts TKTK portion of this is CUR, portion R&D, portion incidentals/maintenence. You need to understand exactly how much your usage will grow, your COR needs to hand, and your engineers need to work within their budgets.

I wonder how often those companies hit their 2% targets. Also, if you spend 10% more than forecast, but your revenue grew 15% more than forecast, that’s a win.
