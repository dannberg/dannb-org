# Setting up a new Hugo blog

`hugo new site sitename`

`cd sitename`

`git init`

## Adding a theme

`git submodule add https://github.com/Vimux/blank.git themes/blank`

`echo 'theme = "blank"' >> config.toml`

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
- [ ] Remove unused themes
- [ ] Deploy to Netlify on dannb.org
