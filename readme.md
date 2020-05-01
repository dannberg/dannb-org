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
