[![Netlify Status](https://api.netlify.com/api/v1/badges/60ca84a8-ffdb-4b4b-a8cd-dc0b3081ac9b/deploy-status)](https://app.netlify.com/sites/dannb/deploys)

# Repo for dannb.org

This is the personal website for Dann Berg, available at https://dannb.org. It is a static website created using Hugo. I created a custom theme I've lovingly dubbed Danntheme.

# Quick reference

## Running the server

`hugo server -D --disableFastRender`

`-D` tells it to render drafts and `--disableFastRender` tells Hugo to rebuild the entire website when there are changes (it's still super fast).

## Creating a new post

`hugo new blog/2020/post-name.md`

# Reference

Images 644px width (700px)

# To Do

- [x] Add [related posts](https://www.pakstech.com/blog/hugo-related-pages/) to end of each post
- [x] Finish about page
- [x] Edit default new post template
- [x] Add tags to newer posts
- [ ] Add sections for books?
- [ ] Add google analytics
- [x] Remove unused themes
- [x] Deploy to Netlify on dannb.org
- [ ] Add line break after homepage image when on mobile
