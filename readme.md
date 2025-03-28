[![Netlify Status](https://api.netlify.com/api/v1/badges/60ca84a8-ffdb-4b4b-a8cd-dc0b3081ac9b/deploy-status)](https://app.netlify.com/sites/dannb/deploys)

# Repo for dannb.org

This is the personal website for Dann Berg, available at https://dannb.org. It is a static website created using Hugo. I created a custom theme I've lovingly dubbed Danntheme.

Theme is covered by [The MIT License](https://github.com/dannberg/dannb-org/blob/master/themes/danntheme/LICENSE). Have fun!

# Quick reference

## Running the server

`hugo server -D --disableFastRender`

`-D` tells it to render drafts and `--disableFastRender` tells Hugo to rebuild the entire website when there are changes (it's still super fast).

## Creating a new post

`hugo new blog/2023/post-name.md`

# Reference

## Callouts
Callouts based on [hugo-callout](https://github.com/mr-islam/hugo-callout) by mr-islam. To enter a callout:

```
{{< callout emoji="🔥" text="This is the text. Must be one paragraph." >}}
```

Callout styling is located in `layouts/shortcodes/callout.html`.

Images 644px width (700px)

Main OG Image URL: `https://dannb.org/dberg-main-og-image.jpg`

# To Do


- [ ] Switch to [Tailwind CSS](https://tailwindcss.com)
- [ ] ~~Article categories in alphabetical order~~
- [ ] ~~Add sections for books?~~
- [ ] ~~Add _Dinners of Note_ section~~
- [x] Add cookie consent banner, since this website uses Google Analytics
- [x] Update Netlify image from Ubuntu Xenial to Focal
- [x] Add [RSS feed](https://pakstech.com/blog/hugo-rss/)
- [x] Add easter egg gif of me waving when hovering over my name in footer
- [x] Create og image and [configure open graph](https://gohugo.io/templates/internal/#configure-open-graph) for sexier sharing
- [x] Let's Encrypt renewal - every three months?
- [x] Add link to this website's github repo to the About page
- [x] Add line break after homepage image when on mobile
- [x] Add [related posts](https://www.pakstech.com/blog/hugo-related-pages/) to end of each post
- [x] Finish about page
- [x] Edit default new post template
- [x] Add tags to newer posts
- [x] Add google analytics
- [x] Remove unused themes
- [x] Deploy to Netlify on dannb.org
- [x] Add favicon
- [x] Forward old domains to new domain
- [x] Submit new website to web crawlers
- [x] Create custom list page for tags
- [x] Higher quality favicon
