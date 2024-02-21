---
title: "My Obsidian People Note Template"
date: 2024-02-19T10:00:00-04:00
description: "Updated Feb 2024. A brief tour of my People Note template for Obsidian, using the Templater, Meta Bind, and Dataview plugins."
url: /blog/2022/obsidian-people-note-template
categories:
  - Productivity
images:
  - /images/blog/2022/10/obsidian-people-note-template-og.jpg
tags:
  - obsidian
  - notetaking
  - journaling
  - getting things done
  - macOS
  - building a second brain
draft: false
---
![Dann's People Note template for Obsidian](/images/blog/2022/10/people-template-obsidian.png)

❗ _Feel free to skip the fluff and navigate directly to the **[raw People Page template](https://gist.github.com/dannberg/2fc4d0b8a3e88cc24598473f4eb626ed)**._

**UPDATED FEBRUARY 2024.** Updated guide to use [Meta Bind](https://github.com/mProjectsCode/obsidian-meta-bind-plugin) plugin to trigger the creation of a new people note. Updated the _process_ a bit to better represent how I actually use the People Note system today.

This tutorial is now available as a _YouTube video_! Watch **[👥 Obsidian People Note System and Template](https://youtu.be/N8K41HDRI3o)** to see me set up the system from scratch.

---

This People Note Template post is part of a series of [Obsidian](https://obsidian.md) content I've created to document my various productivity systems:

- People Note Template (this note)
- [Daily Note Template](https://dannb.org/blog/2022/obsidian-daily-note-template/)
- [Meeting Note Template](https://dannb.org/blog/2023/obsidian-meeting-note-template/)
- [Book Note System](https://dannb.org/blog/2022/recalling-books-youve-read-made-easy/)
- Physical Objects (coming soon...)

Why might someone using Obsidian want to create People Notes? For me, it's a great way to tie _individuals_ to _bits of content about_ or _connected to_ that individual.

Maybe 95% of the time, for me, that's [Meeting Notes](https://dannb.org/blog/2023/obsidian-meeting-note-template/). Every time I have a meeting for work, I'll fill out the Attendee section with a list of individuals who were in that meeting, linking back to each's People Note.

Then, just by adding their name to the Meeting Note, I'll be able to view a list of all meetings that person has attended on that individual's People Note page thanks to the Dataview plugin.

A useful People page should contain the following information:

- At-a-glance information about *who* a person is
- *How* to contact them
- Additional notes (maybe a fun fact?)
- List of all meetings we've attended together

We'll be setting up two new notes for this People Note system:

1. [Template, People Note](https://gist.github.com/dannberg/2fc4d0b8a3e88cc24598473f4eb626ed)
2. [People MOC](https://gist.github.com/dannberg/8e021e84f6c5024dcdfe89de909e3335)

The template file is the template we'll use to create each new People note. People MOC stands for People Map of Contents (h/t [Nick Milo](https://www.linkingyourthinking.com)) and will be a centalized note to view all our People notes and create new People notes from our template.

In this post, I'll first walk you through the template itself, and then share how to set up the system and use it in your day-to-day life.

## Setting up the People Note System

These are the plugins you'll need:

1. [Templater](https://github.com/SilentVoid13/Templater)
2. [Dataview](https://github.com/blacksmithgu/obsidian-dataview)
3. [Meta Bind](https://github.com/mProjectsCode/obsidian-meta-bind-plugin) - to create a New People Note button

### Step 1: Install the plugins
You'll want to install all three plugins [directly through Obsidian](https://help.obsidian.md/Advanced+topics/Community+plugins) and make sure they're enabled.

In Templater, you should make sure the template settings point to the correct template folder directory (I use `Extras/Templates`).

### Step 2: Create the People Note template file

Create a new note and title it `Template, People`. The content of this note can be copy/pasted from [Github](https://gist.github.com/dannberg/2fc4d0b8a3e88cc24598473f4eb626ed) directory, or make any changes to match your system better.

Move this file to the directory where you store your other templates (this should be the same directory you just added to the Templater settings. For me, that's `Extras/Templates`).

### Step 3: Create the People MOC file

Finally, create another new note and paste in the contents of my [People MOC](https://gist.github.com/dannberg/8e021e84f6c5024dcdfe89de909e3335) file.

Move this file to the directory where you keep your MOCs (I use `MOCs/`).

If the New People Note button doesn't work, you should use the Meta Bind Button Builder to create a new one:

1. Delete the entire Meta Bind code block
2. Press Command-P to open the Palatte
3. Type Meta Bind and select Open Button Builder
4. The Label should be `New People Note`, and under Actions, select  `templaterCreateNote` and click Add Action
5. In the Action settings, select your Template file, People directory, and default file name (I use `Enter Name Here`)
6. Click Copy to Clipboard and paste the code into your People MOC file

If you did everything correctly, clicking that button should create a new People Note!

## People Note template walkthrough

### YAML Metadata
![Dann's People Note YAML Metadata](/images/blog/2022/10/metadata-yaml-obsidian.png)

At the very top of the page, as YAML metadata, I like to include all the at-a-glance information I might need about a person. For me, this includes:

- company
- location
- title
- email
- website
- aliases

Additionally, if you want more of a CRM-style system, you can add the following items here:

- date_last_spoken:
- follow_up:

I don't fill in all this information for each person, but I try to immediately fill out as much relevant information as I can when I first create the note. Usually this means filling in `company`, `title`, and `email` at a minimum. `Location` is also useful, since so much of life happens remote these days.

The `aliases` section isn't just for nicknames. [Aliases](https://help.obsidian.md/How+to/Add+aliases+to+note) are a powerful Obsidian-specific tool that allows you to refer to the same note as different names, in different contexts. For example, if I have a People page with the name Dann Berg, I could add `aliases: [Daniel Berg, Dann]` to the YAML metadata and then `[[Dann Berg]]`, `[[Daniel Berg]]`, and `[[Dann]]` would all link to the same People page.

### Tags
![Dann's People Note template tags](/images/blog/2022/10/tags-obsidian.png)

Next, every new People page automatically gets the `[[People MOC]]` tag. This bi-directionally links this new page to my main People [Map of Content](https://medium.com/@nickmilo22/in-what-ways-can-we-form-useful-relationships-between-notes-9b9ec46973c6) (MOC).

If you want to link this People page to other pages within your note-taking system (beyond meetings, which we'll cover below), this is typically where I'd do it.

### Templater Plugin organization
![Dann's People Note Templater code](/images/blog/2022/10/templater-code-obsidian.png)

The next two lines are specifically for the *Templater* plugin. When *Templater* processes this note, each line here will perform a different action.

The line `# [[<% tp.file.title %>]]` will take the file name and make it a `H1` headline in the note. You'll notice that the title is in brackets, which means it links back to the note itself. This is a cool little trick so that when I change the file note, it will automatically update this headline in this note.

The line `<% await tp.file.move("/Extras/People/" + tp.file.title) %>` moves the note into a specific directory. For me. it's `/Extras/People/`, since that is there I keep all my People notes.

### Notes
![Dann's People Note Notes section](/images/blog/2022/10/notes-obsidian.png)

This is pretty straightforward. Each new People note has a Notes section, with an empty bullet point waiting to be filled in. For me, this is optional — I probably fill out the Notes section for 40 - 50% of my contacts.

When I do fill this out, it'll be with either some fun fact, or otherwise interesting note that I feel might be interesting to recall at some point in the future.

### Meetings
![Dann's People Note Dataview Meeting code](/images/blog/2022/10/dataview-meeting-code-obsidian.png)
_(Easily copy-and-paste this code [from Github](https://gist.github.com/dannberg/2fc4d0b8a3e88cc24598473f4eb626ed))_

For me, this is the real meat of the People note. Using the *Dataview* plugin, I draw a table that lists all the meeting notes from meetings I've attended with this person.

There are three columns in this table: the File name, the file creation date, and a meeting "Summary" that I write in the YAML of each meeting.

If you want to build your own system for Meeting Notes, where each Meeting Note populates in their respective People Note, you can follow my [Meeting Note Template post](https://dannb.org/blog/2023/obsidian-meeting-note-template/) to set that up.

![Dann's People Note populated meeting list](/images/blog/2022/10/dataview-people-meeting-list-obsidian.png)

In order to get the Dataview table in this template to populate correctly with meeting notes, as it is currently written in my template, each **Meeting note** needs the following:

1. To be located in the directory `Timestamps/Meetings` (you can use a different directory, just make sure you update the *Dataview* code)
2. To have a bi-directional link to the People Note (`where contains(file.outlinks, [[<% tp.file.title %>]]`)
3. A `summary:` section in the YAML

A note taking system is only as strong as your ability to *recall* information. If all you're doing is taking notes, but never using these notes, then it's the same as never taking notes at all.

For me, information that's on the tip of my tongue is often linked in my brain to a conversation with an individual. Being able to traverse all the meeting notes linked to a given person, each of which include a brief summary, greatly increases the usability of my note-taking system.

## Using the system in real life
Any time you want to create a new People note, press Command-O and type People MOC. Then, click the New People Note button to create your new note, and add any relevant information.

### In a meeting
This is where I mostly create new People notes. Before, or at the start of, a meeting, create a [new meeting note](https://dannb.org/blog/2023/obsidian-meeting-note-template/) and add the names of each attendee to the Attendees section.

If people in your meeting already have a People note, add brackets `[[` `]]` around their name to link to their page. Their name will show as a bright, valid link if they have an existing page tied to the name you typed.

For creating new People notes for people in a meeting, you have two options:

#### Option 1: Manually create from Meeting note

I mostly create new People pages manually from my meetings. This method is not the most optimized, but I've got the muscle memory so it's what works quickest for me at the moment.

1. If there's someone new that you want to create a new People page for, add brackets `[[` `]]` around their name. Since their page does not yet exist, their link will show is slightly greyed.
2. Command-Click their name to create a new note from their name (holding command while clicking will open it in a new tab)
3. Type Command-P to open the Command Palette, then type "template" and select "Insert Template" then type "People" to select the People Template
4. Type the person's name at the note filename
4. Type Command-P to open the Command Palette again, and type "templater" and select *Replace Templates in the active file*. This expands all the Templater code

From there, you can fill in the People note as desired.

#### Option 2: People MOC during meeting

You can also just use the New People Note button from the People MOC page during a meeting to create new People notes.

1. Create your new Meeting note, then open your Meeting MOC file in a new tab
2. Click the New People Note button to create a new People note
3. Fill out any relevant information
4. Return to your Meeting note, and use double brackets to link to the People note you just created

Congrats! You now have a new People note system.

### Dive deeper for Obsidian

Did you find this post useful? Check out my other Obsidian posts:
- [My Obsidian Daily Note Template](https://dannb.org/blog/2022/obsidian-daily-note-template/)
- [My Obsidian Meeting Note Template](https://dannb.org/blog/2023/obsidian-meeting-note-template/)
- [My Obsidian Physical Object System](https://dannb.org/blog/2024/obsidian-physical-object-template/)
- [Recalling Books You've Read, Made Easy](https://dannb.org/blog/2022/recalling-books-youve-read-made-easy/)

{{< youtube N8K41HDRI3o >}}

**Prefer video content?** Check out the above video tutorial version of this post. It shows you exactly how to set up your own People Note system.

---

If you've read this far, you might also really enjoy my free monthly newsletter [_The Dann Chronicles_](https://dannberg.substack.com/). Each month, I share five cool new things I found. These can be products, articles, apps, movies, concepts, and anything else. Feel free to [check out the archive](https://dannberg.substack.com/archive) to see if it's something you might like, and subscribe to get each edition in your email.


Found this useful? I also wrote about my [Daily Note template](https://dannb.org/blog/2022/obsidian-daily-note-template/), as well as how I use Obsidian to [recall books I read](https://dannb.org/blog/2022/recalling-books-youve-read-made-easy/).
