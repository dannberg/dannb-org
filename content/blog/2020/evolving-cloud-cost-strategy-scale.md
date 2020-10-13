---
title: "Evolving your cloud-cost strategy as you scale"
date: 2020-10-13T08:30:00-04:00
description: "A framework for thinking about cloud-cost strategies at different stages of your company's growth."
url: /blog/2020/evolving-cloud-cost-strategy-scale
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
---
![Single dollar bill](/images/blog/2020/10/us-dollar-bill.jpg)
_Photo from [Usplash](https://unsplash.com/photos/8fDhgAN5zG0)_

Different size companies have different needs when it comes to thinking about cloud costs. As someone in a role [dedicated to cloud cost optimization](https://www.linkedin.com/in/dannberg/) (a field that’s coming to be known as [FinOps](https://finops.org)), I wanted to share some of my views about how your cloud-cost strategy might scale alongside your business.

None of these are hard-and-fast rules, but more of a loose framework that you can use to evaluate your own business and see if there's anything you can do to improve your own cloud-cost strategy in a mindful way.

The most important thing, regardless of company size, is to always be *thinking* about cost, even when you're not actually prioritizing cost-optimization initiatives. Fostering a culture of cost optimization means knowing when it makes sense to pull the trigger on efforts that will cut costs, and when to put those on hold in favor of other roadmap items. This can be harder than it seems, because properly prioritizing cost-optimization initiatives requires having a clear understanding of effort and impact. Depending on your company size, this may mean having a dedicated person or team surfacing and analyzing these opportunities.

Theoretically, you can control your company’s cloud costs by controlling the amount of cost-optimization work that ends up on people’s sprints. Sometimes it makes sense to keep only a loose eye on your cloud bill, instead focusing on new products and features. Other times (perhaps in response to a surprisingly-high bill?) you’ll want to shift priorities and add more cost-_saving_ initiatives to people’s sprints. With the correct prep work, it’s as simple as controlling the flow of cost-optimization work, as dictated by your business’ needs.

Below is a loose guide for how to think about cloud costs at different stages of your business.

**Jump to:** {{< br >}}
[Stage 1: Brand-new Project](#stage-1-brand-new-project){{< br >}}
[Stage 2: Early-stage Hypergrowth Startup](#stage-2-early-stage-hypergrowth-startup){{< br >}}
[Stage 3: Steady Startup](#stage-3-steady-startup){{< br >}}
[Stage 4: Startup Transitioning to Enterprise](#stage-4-startup-transitioning-to-enterprise){{< br >}}
[Stage 5: Enterprise](#stage-5-enterprise){{< br >}}

## Stage 1: Brand-new Project

**Team:** You!

**Tools:** Built-in cloud provider tooling

You may consider yourself to be a startup at this point, but you could also just call it a project. You’re probably just self-funding the cloud costs in order to get your project working or have a proof-of-concept. In this regard, you do care about money (depending on what’s in your wallet), but getting up and off the ground is the highest priority.

At this stage, the cost expert is *you*. But the cost-savings strategy is pretty simple. Tag every resource that can be tagged, at the very least assigning them to a business group and giving them a descriptive name. Make sure you’re not accidentally leaving EC2 instances running, that you have a lifecycle set for snapshots, and that you don’t have unnecessary unattached EBS volumes. Maybe parts of your application can be Spot, or even Serverless. Purchase [Savings Plans](https://aws.amazon.com/savingsplans/) as soon as possible to bring down the cost of anything that’s still On Demand.

Check out Intelligent Tiering for items stored in S3. Spend a day wrapping your head around Data Transfer costs, and consider if there’s a way for your app to prioritize chatter from within a single AZ.

Doing a deep dive on [Amazon’s Well Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html) is probably overkill, but it can’t hurt to at least skim it so you can refer back to it when you need to. It’ll help give you a solid foundation to build upon in the future.

You can probably find a few decent AWS credit vouchers somewhere if you look hard enough.

Don’t worry about third-party cost tools. They’re unnecessary. Cost Explorer and CloudWatch are all you need right now. If you want to get fancy, set up Athena so you can directly query your CUR (but this is probably unnecessary).

-----

## Stage 2: Early-stage Hypergrowth Startup

**Team:** You, Infrastructure team/lead

**Tools:** Built-in cloud provider tooling

Congrats! You’ve proven your proof-of-concept, and it’s starting to catch on. Your main priority is growth growth growth, which means you probably have a lot more to think about than costs. Either you have enough paying customers to cover your infrastructure costs, or have raised a successful round (either Angel or Series A) and your investors want you to use that money to *grow*.

Your team is probably bigger now, and you have someone who owns the infrastructure side of your business. They should also be paying attention to costs, although most of their attention will be on keeping your site up as you scale. Cost Explorer and CloudWatch are still all you really need. Periodically check in on costs in Cost Explorer to catch any unexpected cost spikes. Hopefully you’ve tagged things well enough, so you can track down the source of any unexpected jumps.

-----

## Stage 3: Steady Startup

**Team:** Infrastructure and/or Finance teams

**Tools:** Third-party cost analysis tools ([Cloudability](https://www.cloudability.com/), [CloudHealth](https://www.cloudhealthtech.com/), [CloudCheckr](https://cloudcheckr.com/), etc)

Your growth no longer feels like a fluke - you’ve been growing for long enough now that you’re no longer worried about it just going away overnight. You’re no longer hunting for your next “viral moment” for a big bump in new users. You’ve built sustainable lead engines to support the next stage of your business.

You have a dedicated finance person now, or maybe even a small team. As they bring much-needed structure to your financials, their eye catches on one thing specifically: your cloud bill. It’s probably the biggest expense your company has, or close to it.

If your cloud bill grows at roughly the same rate (or slower) than your revenue, cloud cost savings won’t be a high-priority topic. But pretty soon you’ll have one month, or two, or several where the bill creeps higher and higher. And Finance will want to know: Can we bring that bill down?

Your cloud bill is almost always top-of-mind, largely due to the sheer amount of time it takes to wrangle. Wouldn’t it be nice to have a dedicated person or team focused on this?

Every month, there's a similar song-and-dance:

1. Finance/Accounts Payable gets your cloud invoice 12 - 15 days after month end
2. The bill is higher than expected, and FP&A wants to know why
3. FP&A turns to Engineering (probably the Director of Infrastructure or SRE) to understand what grew and why
4. Engineering spends way too long isolating the cost increases and trying to tie them to usage growth, an engineering effort, an incident, an accident (oops...) or some other explanation
5. Engineering and Finance sync, and either fixes/changes are made, or models are updated

Without some third-party tool, the time-cost of the above work is not sustainable without some sort of help. Finance may drive the adoption of a third-party billing management tool such as Cloudability, CloudHealth, or Cloudcheckr. First and foremost, these tools provide a way to splice the cloud bill in a more advanced way than native tools like Cost Explorer. Plus, there's an added value of cloud custodial and right-sizing tools.

These products will cost you a percent of your overall cloud bill, which is probably worth it given the savings they bubble up and the time they save compared to doing this manually.

-----

## Stage 4: Startup Transitioning to Enterprise

**Team:** Dedicated person/team, maybe a consultant

**Tools:** Third-party cost analysis tools, third-party visualization tools, internal tooling?

Business is going well, and you’re finally starting to think about what it means to leave the move-fast-and-break-stuff phase and put in real long-term processes in place. Some form of a liquidation event (in the form of acquisition or even IPO), if not already being explored, is starting to feel like a real possibility rather than a far-off dream.

This is an incredibly difficult period, second only to when the company became something out of nothing. Your financials are going to be top-of-mind. This means revisiting many of your pre-established workflows in both the finance and engineering departments and making setting yourself up for the next decade of operation.

Part of these changes is figuring out what it means for you to be proactive about your cloud bills. Even with all the tools you have, it still feels like most of the cost-related work is reactionary. Depending on your current feedback loops, it may still be a month or a month and a half between when an infrastructure change happens and when the call comes out to investigate.

This is when it's time to really get serious about cloud cost optimization. You have three options: 1) move someone internally to work on this full time, 2) bring on a consultant that specializes in cloud spend, or 3) make your first dedicated "FinOps" hire.

The path you take is really up to you, and each has its pros and cons:

1. Moving an internal hire into a specialized position has the advantages of existing familiarity with your company, but their knowledge and experience in the niche FinOps world may limit their overall impact.
2. Bringing on a consultant will result in quick, big savings from all the low-hanging fruit opportunities, but it may be trickier to time the limited engagement at a time that works for all your internal teams, thus making it harder to implement any long-term changes.
3. Hiring a dedicated, experienced FinOps Practitioner is the most effective long-term solution, but you may want to wait a while longer before making that commitment, especially since it's the highest-cost option, and that expense is going to directly cut into optimization savings.

The first option, moving an existing employee into a FinOps role, is probably the thing to try first. Maybe you have a Project/Product Manager that has led a big initiative around cost optimization. Or an accountant that likes to get hands-on with code. Encourage them to take on more ownership. Have them read up on the FinOps Foundation, so they realize how big of an opportunity this is.

But also know that once they understand the opportunity, they'll also understand their value (as well as the market's current need for that value). You'll want to keep retention top-of-mind.

With a dedicated cloud-cost team member, it might be time to explore tooling options beyond the big, beefy applications that charge a percent of your bill. That expense may be close to negating its value.

-----

## Stage 5: Enterprise

**Team:** Dedicated FinOps team

**Tools:** Third-party visualization tools, internal tooling

Not every enterprise had a dedicated cloud-cost employee or team, but that's only because the field is so new. In five to ten years, it'll be considered inhumane to both your Infrastructure and Finance teams to forego the valuable FinOps department.

If you don't yet have a dedicated person or team, you should plan to make that happen as soon as possible. The biggest consideration is where you want this to fall within your organization. There's a possibility this function is owned by Finance, especially if you've had someone internally step into this role that was originally on the Finance team. Likewise, it may fall under Engineering if a Product Manager or Engineer has taken ownership over cloud costs.

Typically, FinOps teams that are part of a company’s Engineering arm are more productive, because it’s easier to get things done. There can be a lot more friction when Finance is trying to get cooperation from Engineering. Will that be true for your business? Organize accordingly.

You may still be using a third-party cost analysis tool, but that expense probably really hurts by now, even with aggressive negotiations. You may want to explore exactly what the value of these products is for your team, and explore ways to replicate this value in different ways. Anything that wants to charge you a percent of your total cloud bill should be given a side-eye at this point.

At this point, you should have all the basics down:

- Engineers and stakeholders should have a clear view into relevant costs.
- You’re regularly tracking efficiency and not just total spend
- You're regularly purchasing reservations (or Savings Plans) in accordance with your growth
- You're regularly looking for savings opportunities, and prioritizing those efforts when it makes sense
- You're regularly evaluating and re-evaluating commitment deals with cloud providers

You should also be closer to understanding what it means to be *proactive* rather than *reactive* in terms of your cloud bill. This will be the team's perennial challenge going forward: how can you accurately predict cloud usage as well as catch anomalous spend in real time (or as close to it as you can).

If your cloud-cost strategy has largely scaled along the lines that I've outlined in this article, you're probably pretty close to having a solid proactive strategy. If, instead, you're like most other companies and haven't mindfully and intentionally grown your cloud-cloud team from the onset, this will probably be a big-effort, high-level initiative.
