---
title: "Unit Costs will change the way you think about your cloud bill"
date: 2023-06-15T13:27:03-04:00
description: "Cost-based Key Performance Indicators (KPIs) aren't just for business-level metrics. You should integrate Unit Costs at all levels of your application's spend."
url: /blog/2023/unit-costs-will-change-the-way-you-think
categories:
  - FinOps
tags:
  - finops
  - unit metrics
  - cloud cost
  - cloud cost optimization
  - engineering
  - finance
---

![Lego building blocks, the smallest unit you can get](/images/blog/2023/06/lego-building-blocks.jpg)
_Photo from [Usplash](https://unsplash.com/photos/kn-UmDZQDjM)_

_This post was originally published on [the Vantage blog](https://www.vantage.sh/blog/unit-metrics-cloud-costs), where I am currently the Director of Community._

---

If you are a FinOps Practitioner, [cost reports](https://www.vantage.sh/features/cost-reports) are likely a critical part of your role, since they are the key to providing different internal groups visibility into their respective spend. When designing these cost reports, your goal should be to make the information as _instantly usable_ as possible. If you know cost alone (ie the cost for the month was $10,000), that's not very useful. You can increase the usefulness with historical context: is that cost up or down from the past month? If your cost for the month was $10,000, but last month it was $5,000 (a 100% increase), it's a lot _more_ useful. But we can still go further.

Whenever you see a cost anomaly, it deserves an investigation. You need to know _why_ the increase happened, and was the increase _justified_.

All [cost anomalies](https://www.vantage.sh/features/cost-anomaly-alerts) fall into one of these two categories: justified or not justified. And the sooner you can figure out which category it's in, the closer you are to a resolution.

Cost increases **can be justified** if you've just added another customer, or are testing a new feature which is sending a lot more data through your application.

Likewise, increases **are not justified** if there's no additional usage of the app, and the cost increase indicates a decrease in efficiency.

Unit Costs will allow you to see, at a glance, whether costs are justified or not justified. If they're justified, you can go about your day. If they're not, then you immediately know why, or have a lead to investigate.

## Business Key Performance Indicators (KPIs)

Most people are familiar with the term KPI (Key Performance Indicators). These are measurable values that are used to track the performance of organizations trying to achieve a specific objective.

When it comes to cloud costs, the initial focus is typically business-level KPIs. These might include:

- Cost per Customer
- Cost per Session
- Cost per Stream
- Cost per Greeting Card Sent

These business-level KPIs will be unique to your individual business, and let you see, at a high level, how _efficient_ your company is running. If your company makes money by sending e-cards, you probably want to know your _cost per Greeting Card sent_.

Often, there will be a single company-wide cost-related KPI that the business will track. This KPI is an indicator of how efficient the business as-a-whole is operating.

This can be a very interesting metric to track, but calculating this company-wide means you need to abstract away much of the underlying nuance.

## Application-specific KPIs

Modern SaaS websites are a complex web of several different individual applications that have their own KPIs. In the same way your specific company has a unique business-level KPI, these individual applications each have their own application-specific KPIs.

Continuing with the example of an e-card business, there may be specific internal application that only handles e-card templates, and another that only focuses on email delivery.

You should isolate the costs of your business into the smallest logical cost group, and then identify a metric that relates to those costs.

Some e-card company examples might be:

- The e-card template application costs *per Template Tried*
- The email delivery application costs *per Email Sent*

Different companies have different internal applications, with unique metrics that the costs should scale against:

- A log-ingestion pipeline costs *per Log Ingested*
- A data-augmentation application costs *per Enrichment*
- Vantage's ingestion pipeline costs *per Cost Report Ingested*

This application-specific KPI view not only provides valueable context to cost reports, it can also instantly diagnose issues. For your e-card business, let's imagine that each customer tries out three different templates for every one card sent, on average. Each of these actions (trying a template, sending a card) incurs a small infrastructure cost.

Looking only at the top-level KPI ignores important changes that might be happening at the application level. The trick is determining which specific metric each application's costs should be scaling against.

As long as the application that handles e-card templates is appropriately tagged, you should view those costs _per template tried_. This _per template tried_ metric is going to be different than _per e-card sent_.

If users suddenly start trying ten templates per card sent, rather than three, your business-level KPI will slip, triggering an investigation. But if you have application-level KPIs on each of these microservices, you'll instantly know that the cause is not an *application efficiency* change, but a *user behavior* change.

Each part of your application, regardless of complexity, will have a metric against which those costs should scale. If it the specific metric is not immediately clear, then partner with the engineering team that runs the application to pinpoint a specific metric.

## Instantly-usable Cost Reports
If you're setting up cost reports for individual teams, it's important to think about both the _data_ you want to share, as well as the _context_ of that data. In this case, the data is the spend timeseries, and the context is the metric that those costs should scale against.

If you're able to build visibility reports that show both the data and the context at-a-glance, you'll be able to save both time and energy chasing down cost anomalies that turn out to be justified.

Once you start integrating Unit Costs into your workflow, you'll wonder how you operated with out it. After any cost anomaly, understanding context is always the first investigative step. And building this into your cost reports directly will change the way you think about your cloud costs.
