---
title: "Scenario: your monthly invoice is over budget"
date: 2023-02-23T11:14:58-05:00
description: "You're a FinOps practitioner, and January's invoice is above forecast. Let's explore four different ways this scenario could play out."
url: /blog/2023/monthly-invoice-over-budget-scenarios
images:
  - /images/blog/2023/02/receipt-invoice-og.jpg
categories:
  - FinOps
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
![Long Receipt](/images/blog/2023/02/receipt-invoice.jpg)
_Photo from [Usplash](https://unsplash.com/photos/xkArbdUcUeE)_

In my article [Margins are the new budgets](https://dannb.org/blog/2023/margins-are-the-new-budgets/), I talk about the benefits of having an advanced margin-based view of your business, which can help reduce unnecessary "detective work" digging into spend anomalies, and replace more old-school budgeting practices.

I want to explore that concept a bit further by taking a single common scenario (spend is above forecast), and looking at different ways a company might approach a resolution.

**Scenario:** It is February, and you just received January's invoice. The spend for January is above forecast.

In terms of [FinOps Maturity Model](https://www.finops.org/framework/maturity-model/), these cases are in order from crawl to run, respectively.

### Case 1: **The Scramble**
**Maturity Model:** Pre-crawl/Crawl

It's the second week of February, and the Finance department receives January's invoice. It's 30% higher than forecast — a surprise that the Finance department can't explain. An email it sent to stakeholders, including the head of Infrastructure, to try and get to the bottom of the increase.

An engineer or two is tasked with investigating the increase. It takes several days, pulling them away from their existing tasks. They use a combination of tools: the cloud provider billing console and a metrics explorer (Grafana, Datadog, etc). If the company is using a SaaS billing solution (Cloudability, CloudCheckr, CloudHealth, etc), that's used instead/in addition.

Eventually, the increase is isolated to two different applications. One of these applications was impacted by an outage in early January, and had to scale up temporarily to handle the backfill of data processing. The other application scaled in use due to a big customer starting to use a new feature.

The 30% higher invoice is as expected. Finance updates the income statement and approves payment. Everyone resumes work as usual.

**Pros:**
- Open communication between Finance and Engineering
- Was able to have a resolution in a few days

**Cons:**
- Finance totally dependent on Engineering
- Engineers needed to drop everything to find an answer
- Each cost event occurred several weeks in the past, making an investigation more difficult and increasing risk if either investigation had revealed an unresolved issue still incurring cost

### Case 2: **Budgets**
**Maturity Model:** Crawl/Walk

It's February and Finance receives January's invoice, which is 30% higher than forecast. In this case, each team or department has an individual budget, so it's easy to quickly pinpoint the culprit of the spend increase. It's likely that this higher-than-forecast invoice was expected, if the company was tracking spend against these budgets throughout the month.

There's one team that's the main culprit, but this was expected because they had a planned migration in January. The budget for this team wasn't changed, per-say (what's the process for that anyway, for single-month one-off events like this?) but there's nothing to worry about there.

But the migration only accounts for 60% of the extra spend. The rest of the extra spend is mixed among several cost centers, none of which really raise any eyebrows on their own. But together account for the overages compared to forecast.

Each team that went slightly over budget is asked to figure out why they were over budget. There's not a single team you're particularly worried about, but investigations are necessary given the amount that the company as a whole was over budget.

The results come back over the next week or two. It's a mix of regular growth, an incident, and and a few other planned projects that weren't accounted for in the budget. This information is compiled by the FinOps team and shared with Finance and other stakeholders. Everyone is happy and the invoice is approved.

**Pros:**
- The cost centers responsible for the extra spend are instantly identifiable
- The result of the investigations means all stakeholders are satisfied

**Cons:**
- Multiple teams need to take time away from existing work to investigate cost increases
- It takes a week or two for the invoice to be approved for accounting
- The budgeting processes didn't account for many activities that should not have raised alarms

### Case 3: **Margins**[^1]
**Maturity Model:** Run

[^1]: For help achieving the greatest possible value out of margin-based analysis, check out my post [*Margins are the new budgets*](https://dannb.org/blog/2023/margins-are-the-new-budgets/).

One again, it's February and Finance receives January's invoice, which is 30% higher than forecast. The first thing Finance does is look at January revenue. It's higher than forecast by about 25%. That's not totally unusual, but often revenue will grow faster than cloud costs, so we still want to take a closer look at the numbers.

Cost centers don't have budgets, but every high-spend part of the business has cost efficiency metrics, allowing for views into each team's individual "margin." There are two teams where efficiency has dropped, but these were both expected: one team had a medium-sized incident that impacted spend that month, and the other launched a new feature that is temporarily impacting their spend. Thanks to efficiency metrics dashboards that were reviewed as the month progressed, both of these areas were already documented by the time the bill arrived.

All stakeholders are satisfied, and the invoice is approved.

**Pros:**
- No budgets means no false alarms about being "over budget"
- The invoice being higher than forecast is immediately contextualized with higher-than-forecast revenue
- Minimal number of cost-owners need to spend time digging into cost, and the time they do spend is trivial

**Cons:**
- Finance didn't know January's spend was above forecast until they received the invoice in February
- Spend being 30% above forecast is significant, even if justified. Can we get the forecast more accurate?

### Case 4: **Per-application unit metrics**
**Maturity Model:** Run

Let's take a look at a different possible implementation of *Run* maturity. This is the same scenario as the past cases (January spend is above forecast) but this time let's start *in January*, rather than when January's bill arrives in February.

The following levels of visibility are set up (maybe built in-house, maybe through an outside vendor):

- The fifteen highest-cost microservices have defined unit metrics[^2], and their efficiency (cost divided by metric) can be easily viewed at any time. Alerting has been set up for these time series.
- The 20 biggest customers have reports showing the infrastructure cost associated with each. Likewise, there's a process to build new cost-per-customer reports ad hoc.
- There's an EOM total cost estimate that's updated daily, that's actually accurate enough to be trusted and used
- The company is keeping track of in progress and upcoming projects that will impact spend (both increasing and decreasing) and is making informed, strategic decisions about prioritization

With these systems set up, January's invoice will never be a surprise, because January's total bill will be seen coming from miles away.

At this run stage, however, there's a different trend you must pay attention to: **the slow creep of margin deterioration**.

Individual months' spend may be within normal range, but when viewing four to six months all together, the trend may be towards margin deterioration, like a [frog in a pot on the stove](https://en.wikipedia.org/wiki/Boiling_frog).

**Pros:**
- Individual bills are never a surprise
- Most cost anomaly "detective work" is pre-done and easily accessible
- The business (and individual teams) can make informed decisions about what to work on
- A cost-per-customer view empowers the sales org to make the best deals

**Cons:**
- It's possible to be lulled into a false sense of security (frog in boiling water)
- The work/headcount required to get to this run-stage maturity can be daunting
- Likewise, there are lots of build vs buy decisions that need to be made on the path to this maturity, which will take investment from the company

[^2]: For example, a microservice that is solely responsible for ingesting logs is paired with the `logs ingested` metric. Or a service that authenticates users is paired with the metric `number of authentications`.

## An ideal workflow?
I still think there's room for improvement in this workflow. Additionally, there will be plenty of customization required for each individual business, both dependent on company structure and individual employees (both roles and personalities).

Case 4 heavily relies on per-application unit metrics, which I discuss more in my blog post *Creating a FinOps practice as the first practitioner* as part of [Visibility Level II](https://dannb.org/blog/2022/how-to-be-first-finops-practitioner/#visibility-level-ii) (this is synonymous with efficiency visibility, or margins-per-application).

For all of these cases, *communication is key*. I've found great success with a 1) monthly meeting cadence between the centralized FinOps team and engineering teams, and 2) weekly cadence with Finance. However, your milage may vary, depending on the needs of the org.

In a FinOps role, make sure to keep two goalposts in mind:

1) Decrease the [money feedback loop](https://dannb.org/blog/2022/how-to-be-first-finops-practitioner/#the-money-feedback-loop) as much as possible
2) Enable teams (at all levels of the business) to make informed decisions
