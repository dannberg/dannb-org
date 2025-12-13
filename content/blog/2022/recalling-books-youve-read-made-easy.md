---
title: "Recalling Books You've Read, Made Easy"
date: 2022-04-21T08:57:40-04:00
description: "A simple ~30-minute system that will help you recall key information from every book you read for life."
url: /blog/2022/recalling-books-youve-read-made-easy
categories:
  - Productivity
images:
  - /images/blog/2022/04/the-order-of-time-obsidian-note-og.jpg
tags:
  - obsidian
  - notetaking
  - books
  - reading
  - building a second brain
draft: false
---
[![Dann's note for the book The Order of Time](/images/blog/2022/04/the-order-of-time-obsidian-note.png)](/images/blog/2022/04/the-order-of-time-obsidian-note.png)
_Click on the image for full size._


I've always loved reading books, but hated any reading related to school. That's because for me, reading is a relaxing and entertaining activity. And reading for school meant interrupting that *flow state* take notes and process information. I never wanted to do that. As a young student, I was happy to retain whatever information naturally stuck, and let everything else disappear forever.

Now that I'm a bit older, I'm kicking myself. I've read so many interesting books, both fiction and non-fiction, that I can't recall in the slightest. Reading a book but retaining zero information is the same as not reading the book at all.

That's why I have a new system. It's fast, easy, and most importantly, doesn't really interrupt the _flow_ of reading. It's based on a (very, *very*) watered down version of Zettelkasten (as explored in the book *[How To Take Smart Notes](https://amzn.to/3K2AGmU)*), and works perfectly for my brain.

Feel free to copy wholesale, or pick and choose what works for you.

What you'll need:
1. A [Kindle](https://amzn.to/3KZbBL0) (or other e-reader that supports highlighting)
2. [Obsidian](https://obsidian.md/) (or other digital note-taking app)

The system I outline below can be followed to a T for non-fiction books. It also works for fiction, but you'll need to follow more in concept, rather than to the letter. See my note at the end.

## While Reading

While reading a book, keep an eye out for sections that particularly speak to you. For me, this means sentences that explain a concept particularly well, aptly summarize a section, or that I found humorous or otherwise outstanding.

I try to only highlight a single sentence at a time, if possible. Only rarely will I stray from that rule. If a sentence I want to highlight requires either the preceding or following sentence for understanding, I'll often try to find a different single sentence that communicates something similar.

Look for sentences that you suspect will still have meaning to you long after the details of the book have left your brain.

Knowing what to highlight will take some practice. It may take finishing and processing a few books to really understand the quantity and quality of sentence that works for you. But pretty soon, it will be second nature.

For me, quantity means one highlight every few pages. If I highlight more, the post-processing becomes too tedious, and the benefits don't outweigh the cons. These days, I err on the side of highlighting too little, and relying more on my brain for short-term recall, and my post-processing system for long-term recall.

This means that sometimes I'll get so into the flow of a book that I'll forget highlighting altogether. That's fine. I'm not going to go back and try to find things to highlight. I'll just start highlighting again once I remember.

## Post-Processing
### Importing your highlights
Immediately after I finish a book, I do two things:
1. Mark the book as _read_ in [Goodreads](https://www.goodreads.com/user/show/12555066-dann-berg)
2. Import the book into Obsidian

I use a [Python script](https://github.com/dannberg/kindle-clippings-to-obsidian), which I've modified specifically for my needs, to extract and perfectly format my highlights.

Every time I finish a book, I'll plug my Kindle into my computer and drag the `My Clippings.txt` file to my desktop (`My Clippings.txt` is the document where all your highlights go). I'll then open the command-line and run the Python script against the clippings file. The script parses each book's notes, and outputs a separate text file containing each book's metadata and list of highlights.

❗ *You can find more details about running the script, as well as an example of the output format, [on Github](https://github.com/dannberg/kindle-clippings-to-obsidian).*

I'll then create a new note in Obsidian, and copy/paste the script output into that note. The title of the note will be:

`[Publish year] 📚 [Book Title]`

So, for example, my note for Carlo Rovelli's *[The Order of Time](https://amzn.to/3KgoZJL)* would be named:

> 2017 📚 The Order of Time

Having that specific title format, along with an emoji smack-dab in the middle, makes the note name both visually pleasing, as well as easy to differentiate against other, regular notes in my system.

Following Nick Milo’s [Linking Your Thinking](https://www.linkingyourthinking.com/), all books are stored in the directory `Sources/Books`.

### Processing your highlights
Processing your highlights should be done as soon as possible. Ideally, you should aim to both import and process your highlights the day that you finish a book. In reality (at least for me) this *rarely* happens.

A more realistic timeline, at least for me, is importing the book within a day or two of finishing, and processing those highlights within the next week. But the sooner you can do all this, the better. So don't put it off too long.

Processing your highlights is a two-step process:
1. Notating your highlights
2. Summarizing the book in your own words

Processing my highlights for a single book typically takes 30 to 45 minutes. It can be a difficult habit to start, but it's easy to continue once you start, since the value *greatly* outweighs the time cost.

#### Notating your highlights
I really only have two tools in my notation tool belt: *italic* and **bold**. Re-read each of your highlights and mark important passages as either **bold** or *italic*.

What should be **bold** and what should be *italicized*? That's largely a gut decision, which makes it somewhat difficult to explain.

For me, I'm much more generous with italics, and way more picky with bold. I'll make bold a short phrase that I feel is really the crux of a concept. Something where, at a quick glance, if the words stuck out at me I'd be reminded of the bigger picture.

Italics are better suited for longer, sustained pieces of information. You may want to italicize an entire sentence, whereas you might only bold the second half of a sentence. You may even italicize a full sentence and then bold just a few words in that same sentence.

Don't worry if those instructions feel more abstract than concrete. Notating your highlights is an inherently abstract process. The goal is finding the best way to speak to your future self, which means notating the things that will help you — years down the line — best recall the concepts in the book.

#### Summarizing (in your own words)
Once you're finished notating your highlights, it's time for the real meat of the process. At the very top of your note, create a new section called `Summary`. This is where you're going to summarize the main points of the book *in your own words*.

I like my summaries short and sweet. Write in bullet form, and try to keep your entire summary no more than three to five bullet points.

Just like your notations, your summary is a message to your future self. Years in the future, long after you've forgotten the details of the book, what would you want your past self to remind your current self?

This is also where, if you're writing in Obsidian or Roam Research (or another note-taking application that supports bi-directional links), you'll want to link key concepts in this note to key concepts in your other notes.

Bi-directional links (and non-linear note taking) and a whole topic in and of itself, which I'm not going to cover in this post. If you'd like to read more, Nat Eliason's OG post about [how he uses Roam Research](https://www.nateliason.com/blog/roam) is what first got me into the world of Personal Knowledge Management (PKM) and is great *further reading* if you feel so inclined.

Needless to say, at a minimum you'll want to summarize the book in your own words, using you highlights and notations as a guide. A more advanced version includes linking these ideas to other notes in your system.

### Recalling
That's it. That's the system that will allow you to reap benefits for as long as you keep the note. As you can see, the lift really isn't that big. All you need to do is _highlight as you read_, and then spend 30-45 minutes _processing the book_ once you've finished.

After that, you'll forever have a record of every book you've ever read, with a short summary, in your own words, for easy recall. You can go back to these notes at any time and retrieve the main concepts of the book, lovingly prepared for you by your past self.

If you've taken the extra step I mention and added bi-directional links to your note, you'll also be naturally reminded of the book every time those concepts come up in your note taking. I personally find that super important because, as Sönke Ahrens explains in *[How To Take Smart Notes](https://amzn.to/3K2AGmU)*, and which is thoroughly explored in David Epstein's *[Range: Why Generalists Triumph in a Specialized World](https://amzn.to/3L3FDgB)*, **new knowledge doesn't come from learning new facts, but from realizing *connections* between seemingly disparate facts.**

Happy note taking.

### A quick note about fiction
This system also works for fiction books, but it's a bit more abstract. Highlight sentences or paragraphs that speak to you in some way (however you want to interpret that). For your summary, don't summarize the plot (you can always grab that from Amazon or Wikipedia). Instead, focus on the themes of the book, or structure. What did you like about the book? What didn't you like? What would you like to remember about this book in ten years?

#### Liked this post?

I organize all my book notes in Obsidian. In fact, I do a _ton_ of things in Obsidian, many of which I've documented on this blog. If you're interested, check out:

- [My Obsidian Daily Note Template](https://dannb.org/blog/2022/obsidian-daily-note-template/)
- [My Obsidian Meeting Note Template](https://dannb.org/blog/2023/obsidian-meeting-note-template/)
- [My Obsidian People Note Template](https://dannb.org/blog/2022/obsidian-people-note-template/)
- [My Obsidian Physical Object System](https://dannb.org/blog/2024/obsidian-physical-object-template/)
- [Recalling Books You've Read, Made Easy](https://dannb.org/blog/2022/recalling-books-youve-read-made-easy/)

---

If you've read this far, you might also really enjoy my [free monthly newsletter](https://thedannchronicles.com/). Each month, I share five cool new things I found. These can be products, articles, apps, movies, concepts, and anything else. Feel free to [check out the archive](https://thedannchronicles.com/archive) to see if it's something you might like, and subscribe to get each edition in your email.
