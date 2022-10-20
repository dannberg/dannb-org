---
title: "My Obsidian People Note Template"
date: 2022-10-20T09:27:55-04:00
description: "Updated October 2022. A brief tour of my People Note template for Obsidian, using the Templater, QuickAdd, and Dataview plugins."
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

---

I recently shared the [template that I created for my Daily Notes](https://dannb.org/blog/2022/obsidian-daily-note-template/), and many people found it useful. As a follow up, I wanted to share how I manage *people* in my [Obsidian](https://obsidian.md) universe.

For me, the most common use-case for People entries in Obsidian is for meeting notes. I add an attendee list to every meeting note I take, with each name linking to a page that's been populated with the People Template I share here.

A useful People page should contain the following information:

- At-a-glance information about *who* a person is
- *How* to contact them
- Additional notes (maybe a fun fact?)
- List of all meetings we've attended together

In this post, I'll first walk you through the template itself, and then share how I use it in my day-to-day note taking.

# People template explained
## Setting up the People template

These are the plugins you'll need:

1. [Templater](https://github.com/SilentVoid13/Templater)
2. [QuickAdd](https://github.com/chhoumann/quickadd)
3. [Dataview](https://github.com/blacksmithgu/obsidian-dataview)

You'll want to install the plugins [directly through Obsidian](https://help.obsidian.md/Advanced+topics/Community+plugins).

Next, create a new note and paste in the contents of my [People page template](https://gist.github.com/dannberg/2fc4d0b8a3e88cc24598473f4eb626ed) (or a version that's been modified for your needs). Move this file to the directory where you store your other templates (I use `Extras/Templates`, and make sure that the *Templater* plugin settings point to this same location.

## YAML Metadata
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

## Tags
![Dann's People Note template tags](/images/blog/2022/10/tags-obsidian.png)

Next, every new People page automatically gets the `[[People MOC]]` tag. This bi-directionally links this new page to my main People [Map of Content](https://medium.com/@nickmilo22/in-what-ways-can-we-form-useful-relationships-between-notes-9b9ec46973c6) (MOC).

If you want to link this People page to other pages within your note-taking system (beyond meetings, which we'll cover below), this is typically where I'd do it.

## Templater Plugin organization
![Dann's People Note Templater code](/images/blog/2022/10/templater-code-obsidian.png)

The next two lines are specifically for the *Templater* plugin. When *Templater* processes this note, each line here will perform a different action.

The line `# <% tp.file.title %>` will take the file name and make it a `H1` headline in the note.

The line `<% await tp.file.move("/Extras/People/" + tp.file.title) %>` moves the note into a specific directory. For me. it's `/Extras/People/`, since that is there I keep all my People notes.

If using the *QuickAdd* plugin to create a new note, all this will run auto-magically in the background, if everything is set up correctly. If not, you can run *Templater* manually. This depends on how you create the note, which I'll cover below.

## Notes
![Dann's People Note Notes section](/images/blog/2022/10/notes-obsidian.png)

This is pretty straightforward. Each new People note has a Notes section, with an empty bullet point waiting to be filled in. For me, this is optional — I probably fill out the Notes section for 40 - 50% of my contacts.

When I do fill this out, it'll be with either some fun fact, or otherwise interesting note that I feel might be interesting to recall at some point in the future.

## Meetings
![Dann's People Note Dataview Meeting code](/images/blog/2022/10/dataview-meeting-code-obsidian.png)
_(Easily copy-and-paste this code [from Github](https://gist.github.com/dannberg/2fc4d0b8a3e88cc24598473f4eb626ed))_

For me, this is the real meat of the People note. Using the *Dataview* plugin, I draw a table that lists all the meeting notes from meetings I've attended with this person.

There are three columns in this table: the File name, the file creation date, and a meeting "Summary" that I write in the YAML of each meeting.

My Meeting template deserves it's own post, but until I sit down and write that post, I'll [share my Meeting template](https://gist.github.com/dannberg/9056b89437110e62766689772437fe46) in case you want to use it in tandem with this People note template.

![Dann's People Note populated meeting list](/images/blog/2022/10/dataview-people-meeting-list-obsidian.png)

In order to get the Dataview table to populate correctly with meeting notes, as it is currently written in my template, each **Meeting note** needs the following:

1. To be located in the directory `Timestamps/Meetings` (you can use a different directory, just make sure you update the *Dataview* code)
2. To have a bi-directional link to the People Note (`where contains(file.outlinks, [[<% tp.file.title %>]]`)
3. A `summary:` section in the YAML

A note taking system is only as strong as your ability to *recall* information. If all you're doing is taking notes, but never using this notes, then it's the same as never taking notes at all.

For me, information that's on the tip of my tongue is often linked in my brain to a conversation with an individual. Being able to traverse all the meeting notes linked to a given person, each of which include a brief summary, greatly increases the usability of my note-taking system.

# Plugin Settings
## Templater
![Dann's People Note Templater settings](/images/blog/2022/10/templater-settings-obsidian.png)

In Templater, you should make sure the template settings point to the correct template folder directory.

Additionally, you may want to scroll down a bit and enable Folder Templates. This will automatically apply a template to all new notes created in a specific directory. I don't actually use this in any of my processes, but I have it set up anyway.

## QuickAdd
![Dann's People Note QuickAdd settings](/images/blog/2022/10/quickadd-settings-obsidian.png)

QuickAdd is how I primarily add new notes. To use this, you'll want to navigate to the plugin settings page, and add a new "choice" for People. Once that's created, click into the settings for that People Choice and specify the People template location, as well as all the settings you want to enable. I've included a screenshot of the settings I use.

Once this is set up, you'll be able to press Command-P, then type "people" into the Command Palette to QuickAdd a new People page. It will create the new note in the correct directory with the correct template.

# Using the system in real life
## Create a new People note anytime
Press Command-P to open the Control Palette. Type "people" and select the "People" QuickAdd command.

![Dann's People Note QuickAdd name prompt](/images/blog/2022/10/people-quickadd-template-prompt-obsidian.png)

At the prompt, enter the full name of the person.

A note will be created in the correct directory, using the correct template, and Templater will automatically expand the template for you. Fill in the information you want to save for that person, and continue your work.

## In a meeting
This is where I mostly create new People notes. Before, or at the start of, a meeting, create a new meeting note[^1] and add the names of each attendee to the Attendees section.

[^1]: As I mentioned previously, I haven't written a detailed post about my Meeting template. But here's a [gist of the meeting template](https://gist.github.com/dannberg/9056b89437110e62766689772437fe46) I use in case you want to set it up on your own.

If people in your meeting already have a People note, add brackets `[[` `]]` around their name to link to their page. Their name will show as a bright, valid link if they have an existing page tied to the name you typed.

For creating new People notes for people in a meeting, you have two options:

### Option 1: Manually create from Meeting note

I mostly create new People pages manually from my meetings. This method is not the most optimized, but I've got the muscle memory so it's what works quickest for me at the moment.

1. If there's someone new that you want to create a new People page for, add brackets `[[` `]]` around their name. Since their page does not yet exist, their link will show is slightly greyed.
2. Command-Click their name to create a new note from their name (holding command while clicking will open it in a new tab)
3. Type Command-P to open the Command Palette, then type "template" and select "Insert Template" then type "People" to select the People Template
4. Type Command-P to open the Command Palette again, and type "tempalter" and select *Replace Templates in the active file*. This expands all the Templater code

From there, you can fill in the People note as desired.

### Option 2: QuickAdd then link to Meeting note

This method is a bit more optimized, which means fewer steps.

1. Copy the name from the Attendee list
2. Type Command-P to open the Command Palette, then type "People" to select the People QuickAdd command
3. Paste the name of the person from your attendee list

That'll create the new People note, in the correct directory, with an expanded template. Fill in the People note as desired, and make sure your meeting note links to this new page by adding brackets `[[` `]]` around the name.

**Dive deeper in Obsidian**

Found this useful? I also wrote about my [Daily Note template](http://localhost:1313/blog/2022/obsidian-daily-note-template/), as well as how I use Obsidian to [recall books I read](http://localhost:1313/blog/2022/recalling-books-youve-read-made-easy/).
