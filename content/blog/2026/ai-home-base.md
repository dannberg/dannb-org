---
title: "Build Your AI Home Base: A Dead-Simple Setup for Knowledge Workers"
date: 2026-06-08T09:00:00-04:00
description: "A dead-simple setup any knowledge worker can build today: one folder that gives your AI real context — and gets smarter every time you use it."
url: /blog/2026/ai-home-base
images:
  - /images/blog/2026/06/ai-home-base-og.jpg
categories:
  - "Technology"
tags:
  - Artificial Intelligence
  - AI
  - Productivity
  - Claude
  - MCP
  - Knowledge Work
  - FinOps
---
![Hands planting seedlings in garden soil](/images/blog/2026/06/ai-home-base-og.jpg)

_Photo by [Sandie Clarke](https://unsplash.com/@honeypoppet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/hands-planting-seedlings-in-garden-soil-q13Zq1Jufks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)._

Most of the articles about AI in the workplace speak in high-level generalizations. There's a promise that it will help workers in every industry do more work, faster than ever before. They're full of predictions for the future, both good and bad ([disastrous?](https://dannb.org/blog/2025/ai-2027/)) but fall short of explaining how to actually *use AI* to work better.

This post isn't going to focus on predictions or the future of AI at all. Instead, I want to share a dead-simple process anyone can set up and use today. It allows knowledge workers to interact with an agent that *has context* to do its job well and the ability to *learn and improve* as you use it.

If you're interacting or doing tasks with AI today, there's a chance that you're missing out on compounding interest. Every time you use AI it can be getting better and smarter about the way that you work and the type of tasks you want to complete.

I've coined the term **AI Home Base** for this setup. It's literally just a folder on your computer. But I'm going to share why this is so powerful and how you can set this up.

I'm introducing the idea of an AI Home Base in my talk at the 2026 [FinOps X](https://x.finops.org) conference in San Diego. The session will be recorded and published to YouTube, and I'll update this post with a link once it's live. In the meantime, this article dives into the concept in full detail. I've also published a [companion GitHub repo](https://github.com/dannberg/finopsx-2026-ai-home-base) with some example folders, prompts, and skills. You're welcome to fork it as a starting point.

The AI Home Base is a simple concept, but oh-so-powerful.

**Quick note about tools:** most of the examples in this article use Claude Code and the Terminal because this is how I like to work. As such, it might appear more complex than it actually is. I encourage less-technical readers to focus on the *concepts* and then apply them to their tools of choice. If the command line isn't for you, tools like the Claude desktop app (Cowork) or the ChatGPT desktop app can work with a folder of files without ever touching a terminal.

## Context is king
If you've used artificial intelligence to help with work, you know that the quality of the answer can vary widely. Large language models (LLMs) are trained on large amounts of data, but often lack the granular information related to your specific role or company.

Sufficient **context** is the foundation of any good prompt, along with a *well-defined requested outcome* and the patience to *iterate on the prompt* until it's bulletproof.

Of these three, context matters most — and is the hardest to get right. My FinOps X talk covers all three, but this article zeroes in on context, because that's where the AI Home Base does its work.

Your agent is only going to be as smart as the information that it has available. This includes the data that it was trained on, but also any supplementary information that you can provide it.

For example, when using AI to help with development in a codebase, you can navigate to the codebase directory in your terminal, launch Claude Code, and issue the [`init` command](https://code.claude.com/docs/en/commands). This will map your codebase and create a `CLAUDE.md` file, which informs the agent how to navigate and work with your codebase.

In this case, the codebase itself is the context, and the `CLAUDE.md` file helped the AI *use* this context.

As a knowledge worker, we're frequently working on projects that have company-specific context that *doesn't exist as a codebase*. This can be internal documentation, PDFs, contracts, meeting notes, databases, your calendar, and more.

This context lives in a variety of different locations. But when we learn to treat this context *as if it was a codebase*, we're able to leverage AI in a whole new way.

This is exactly what we're doing with the AI Home Base.

## Setting up your AI Home Base
In the same way that a codebase lives in a dedicated directory, your AI Home Base gets its own dedicated directory. In Finder, create a new folder. Or via the command line: `mkdir ai-homebase && cd ai-homebase`.

Next, we just have to feed it relevant context. Create a new directory inside your AI Home Base called Reference (`mkdir Reference`) and start adding files. Keep things organized. You may want a folder for contracts. Another for documentation. Another for notes (more on this later). Then, just move or copy the relevant files.

You may also want a directory for code snippets or scripts. Anything that you've created for work, up to this point, that might come in handy at any point in the future.

Don't worry about finding everything immediately. You can start small and add more files later. Or, you can add everything all at once. You'll just want to make sure that you have the context you need when it comes time to use the agent for your work.

Your AI Home Base is a *living directory*. Think of it like tending your garden. You'll constantly be adding new files, editing documents, and re-arranging and organizing everything. In this way, it'll only grow more powerful as you use it.

Lastly, you might want to consider adding (or starting) a personal knowledge base. If you're a note-taker, like me, you may already have a large library of work notes, meeting notes, and other supplementary information that you've collected over the years. I use [Obsidian](https://dannb.org/tags/obsidian), which is basically just a collection of markdown files.

Your AI Home Base agent can access your notes, edit notes, and create new notes. You can ask your agent to help organize your data or link relevant notes together. This can become a persistent memory for your agent, and makes this whole system super powerful.

## MCP servers and other connectors
The next step I recommend is setting up MCP servers and other connectors. This can include:

- MCP for cloud provider billing data (direct or through a vendor)
- Google / Outlook Calendar
- MCP for internal company documentation
- Slack / Microsoft Teams
- Google Drive / OneDrive / SharePoint
- GitHub / GitLab
- A data warehouse connection (Snowflake, BigQuery, Databricks)

MCP servers and connectors allow your agent to access information outside of your AI Home Base, and provide your agent instructions for how to interact with that data. Setting them up is as simple as asking questions like, "Is there an MCP server for X?" or "Help me set up a connection to my Google Calendar."

Your company may have a list of supported MCP servers that you can browse and choose to connect. Otherwise, you can search the internet, or ask your agent, about the functionality that you want to see if there's already a solution available.

**Note about security:** this is an area where you want to have some discernment about what you connect and whether it's allowed by your Security team. MCP servers and connectors allow your agent to act outside of your AI Home Base, which introduces security vulnerabilities. Never use any AI service for work that hasn't been approved by your company, and be conservative when exploring this type of functionality.

## Skills
Skills are where the value of the AI Home Base really starts to multiply.

Skills can be as simple as a markdown file, or folders of instructions, scripts, and resources that Claude loads dynamically to execute a specific task. They teach Claude how to do work in a repeatable way.

When setting up your AI Home Base, you might want to take some time to brainstorm common work you do and collaborate with your agent to build it into a task. It's as simple as typing "*Create me a skill that does X, Y, and Z. Let me know if you have any questions or improvements.*"

But it might be better to build skill-creation into your workflow, and start creating skills once you complete a task with AI and know you'll want to do it again.

You can see real, working examples in the `Skills/` folder of my [companion repo](https://github.com/dannberg/finopsx-2026-ai-home-base) — each one captures a workflow with my house-style rules baked in.

To better understand this concept, let's walk through an example.

### Skill use case: Monthly Business Review preparation
You have an upcoming monthly business review meeting where you're expected to present the latest cloud cost numbers and explain any anomalies. You recently set up your AI Home Base and decided to use it to help put together your report.

First, you ask your agent to pull the most recent monthly numbers and compare them to the previous month, highlighting the services and teams with the biggest cost increases and decreases. Your Reference folder already contains SQL that shows how to query this data, and you set up an MCP server that can connect to your billing data.

Looking at this report, you notice that Team A grew 30%. Based on a meeting you had with that team last week, you knew this was expected due to the rollout of a new feature.

You ask the agent to review your recent meeting notes (since you have a dedicated Obsidian vault where you take notes during meetings, and this vault is accessible in your AI Home Base) and connect each identified cost change to a documented effort. You ask it to provide you with a list of cost changes that can't be explained.

You take this list, identify the engineering owners, and reach out to them over Slack for additional context. You provide this back to the agent and ask it to prepare you a detailed summary and a single deck slide for an executive-level audience.

This is great, and just saved several hours (or more!) compared to your previous process. But you plan to do this again next month, so let's make it a skill.

It's as simple as asking. "Create a skill based on the Monthly Business Review preparation we just did." You may need to do some back and forth to hone the skill and figure out the exact deliverables you want when the skill is triggered. But you'll want to end up with something like this:

1. Trigger the Monthly Business Review preparation skill
2. Receive a list of teams or products with cost changes that can't be explained by your notes, along with drafted questions for each team
3. Once all cost changes are accounted for, receive a detailed summary and an executive deck slide

The skill tells the agent each step in between, such as how to pull the initial report and where to look for notes that could explain some of the cost changes. A meeting prep task that was already improved by AI just got even faster and easier.

## Use cases for Monday morning
The best way to improve your AI Home Base is just to use it, tend to it like a garden, and save important skills and memories. It grows and gets more powerful based on how you use it.

But I want to leave you with some ideas and inspiration that you can consider using in your own AI Home Base.

### Morning digest
**Requires:** calendar connection, note-taking vault

Each morning, send me my schedule for the day along with any notes that might be useful for any of my meetings.

### Draft RFC
**Requires:** RFC reference file

Trigger a skill to help draft an RFC based on a company-approved template. Provide the general idea and allow the agent to interview you to flesh out all the details and provide a polished draft.

### Cloud provider contract terms
**Requires:** Cloud provider contracts, pricing sheets

An engineer is asking questions related to specific SKUs and our discount terms for cloud usage. Use the agent to confirm exact details as per your contract and pricing sheets.

### Compute commitments
**Requires:** SP/CUD inventory, detailed cost and billing report, note-taking vault

Generate a list of Savings Plan or Committed Use Discount recommendations, leveraging business context (from your note-taking vault) and an inventory of existing commitments that's maintained by your agent.

### Question improver
**Requires:** note-taking vault

Before reaching out to an individual or a team with a question about spend, trigger a skill in your AI Home Base that 1) attempts to find the answer, 2) identifies any follow-up questions that team might have *for you*, and 3) re-writes an improved question that includes relevant context.

## AI is a force multiplier *of you*
Artificial Intelligence isn't replacing knowledge workers completely (at least, not yet). Instead, it's a force multiplier for all the skills and experience that you personally bring to the table.

The AI Home Base is basically an assistant that can help you work faster and better. As such, you need to build your AI Home Base *today* (and start a note-taking vault, too, if you haven't already) and just start using it.

Tend to it like a garden and watch it grow.
