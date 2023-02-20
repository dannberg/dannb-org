---
title: "How Dann sets up new computer"
date: 2023-02-20T06:46:45-05:00
description: "Detailed instructions for how I set up a new MacOS laptop (all applications, settings) exactly the way I like it. Snapshot of February 2023."
url: /blog/2023/how-dann-sets-up-new-computer
categories:
  - Technology
images:
  - /images/blog/2023/02/new-apple-laptop-og.jpg
tags:
  - MacOS
  - technology
  - tutorial
  - Apple
  - Macbook
---
![New Apple MacBook Laptop](/images/blog/2023/02/new-apple-laptop.jpg)
_Photo from [Usplash](https://unsplash.com/photos/Hin-rzhOdWs)_

Over the years, I've tweaked and customized my laptop to perfection. Everything is in the perfect place, and everything works exactly how I want it to work. Which means every time I get a new laptop (either through work, or otherwise), there is a ton of small adjustments that need to be made before it really feels like *mine*.

Several years ago, I decided to document every single action I took when setting up a new laptop, in order to have a set of instructions for the next time. Then, I got into the habit of tweaking and adjusting this document every time I made a change to my setup.

I was recently setting up my old FullStory laptop as a personal computer, and I was reminded about how absolutely wonderful it is to have a document like this.

I'm sure there's a way to automate this more (through [dotfiles](https://dotfiles.github.io/) or some other automation template) but I enjoy doing everything by hand. Setting up a new laptop is not something I do very frequently (or I would spend more time trying to automate it), and it just feels fun for everything to start coming together piece-by-piece.

In this post, I'm documenting how I set up a new MacOS computer in 2023. I'm sharing this because 1) I thought others might find it interesting or useful and 2) it'll be fun for me to look back on this post and see what's changed/evolved.

**Notes:**
1. Tasks are grouped by *category* rather than written *chronologically*[^1]. This means that you may need to jump around a bit, rather than just work your way through from top to bottom.
2. Many applications are going to require you to explicitly grant permissions. Each of these apps will make it clear during the install process, so I've omitted those details here.
3. Some minor details may be obfuscated for security or privacy reasons.
4. Some application settings are simply imported from backups. This article details the import instructions, but not the settings themselves.

[^1]: For example, the password manager 1Password is one of the first items you need to download, as it stores relevant information (login info, software licenses) for the rest of the process. In this document, however, 1Password is in the section `Install from App Store` rather than at the top of the post. It's organized this way to make it easier to pick-and-choose piece you want to take for your own process, rather than optimizing for lifting the entire process for yourself.

# Home Network Setup
![Illustration of home network setup](/images/blog/2023/02/dannb-home-network-illustration.png)

Before we begin, I wanted to touch on my home network setup. The important thing to note is that I have a server running headless Debian Linux and a Synology NAS for storage. Both these devices are backed up the the cloud.

All important files and documents are stored on the NAS (or in the cloud) and all important processes are running on the server. This means that there are no files that need to be transfered from one device to another — everything lives in central storage that can be accessed by any device on the network.

The only exception to this is a few application settings files, which are stored on the NAS and need to be imported to a new computer during setup. Those details are noted below.

# Applications
There are two foundational apps that we'll install first (*browser* and *password manager*), before jumping into apps categorized by licensing and destination.

## Browser - Brave
Install [Brave Browser](https://brave.com/) and perform the following actions:
1. Set up Sync to import existing extensions/bookmarks/settings/history
  1. Enable sync for Web apps (PWAs), Bookmarks, Extensions, Settings
2. View extensions and `Allow in Private`, where applicable
3. Install TamperMonkey Scripts
    1. [Flickr Original Link 5.6](https://greasyfork.org/en/scripts/1190-flickr-original-link)
    2. [HTML5 video player enhanced script 3.7.1](https://greasyfork.org/en/scripts/381682-html5%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8%E5%A2%9E%E5%BC%BA%E8%84%9A%E6%9C%AC)
    3. [Vimeo Embed Download 0.2.7](https://greasyfork.org/en/scripts/376551-vimeo-embed-download)
4. Make `ProtonMail` and `Google Hangouts` their own applications
    1. Visit https://proton.me and then click the three dots in the top right, go to More Tools and Create Shortcut. Name it Proton and choose Open in New Window.
    2. Right click on the application and choose `Get Info`. Drag the desired icon over the small icon image in the top left of that window.
5. Login to Kagi search engine, install plugin, set as the default search engine for Brave.

## Password Manger - 1Password
Install [1Password 8](https://1password.com/) from website (not App Store)
1. Authenticate with existing vault
2. Install Browser Plugins (Brave, Safari)
    1. Enable In Cognito
3. Set up Keyboard Shortcuts
    1. Show Quick Access: `Command-Shift-.`
    2. Autofill: `Command-Shift-Space`

## Standalone Apps
### Software Licenses in 1Password
- [Bartender](https://www.macbartender.com/)
    - Hide Menu Bar apps as they're installed
- [Hyperkey](https://hyperkey.app/)
    - Set capslock to Hyper Key (include Shift in hyper key)
- [Little Snitch](https://www.obdev.at/products/littlesnitch/index.html)
- [Mailplane](https://mailplaneapp.com/) (RIP 🙁)
- [Retrobatch](https://flyingmeat.com/retrobatch/)
- [Downie 4](https://software.charliemonroe.net/downie/)
- [Sublime Text](https://www.sublimetext.com/)
    - Help -> Install Package Control
    - Copy over `Packages` from NAS backup
    - Change defaults of all text files to open in Sublime Text
- [Alfred](https://www.alfredapp.com/)
    - Connect to settings backup in Dropbox
    - Enable clipboard manager
    - Disable MacOS default Spotlight shortcut
      - System Preferences > Keyboard > Keyboard Shortcuts > Spotlight (left menu) > Uncheck shortcuts
    - Set Alfred to `Command-Space`
- [Keyboard Maestro](https://www.keyboardmaestro.com/main/)
    - Enable Sync in Preferences, file saved in iCloud Drive
    - Make sure `Obsidian Sync to Github` is working
- [iStat Menu](https://bjango.com/mac/istatmenus/)
    - CPU, Battery, Fuzzy Clock
    - Disable MacOS default time and battery
    - Disable default battery in Battery System Preferences
    - Enable seconds on MacOS clock
- [Transmit 5](https://panic.com/transmit/)
   - Import connection settings for Namecheap hosting & dedicated server
- [Photomosh](https://photomosh.com/)
  - Current up-to-date link from Gumroad
- [Cleanshot X](https://cleanshot.com/)

### No software license
- [iTerm2](https://iterm2.com/)
    - Preferences -> General -> Preferences -> Load preferences from a custom folder or URL -> Dropbox folder
    - Preferences -> Profiles: select loaded profile
    - Install [homebrew](https://brew.sh): `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
    - Install ZSH: `brew install zsh`
    - Install Oh-My-ZSH: `sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`
- [VLC](https://www.videolan.org/vlc/)
    - Preferences: Hotkeys `Short jump` left/right arrows and `Medium jump` to up/down arrows
- [Skyfonts](https://www.fonts.com/browse/font-tools/skyfonts)
  - Connect `fonts.com` and `MyFonts`
  - Settings -> Google Fonts -> Browse Google Fonts -> Check Add Entire Family -> Install
    - Roboto
    - Fira Sans
    - Montserrat
    - Rokkitt
  - Other Fonts, from NAS
    - [Source Code](https://adobe-fonts.github.io/source-code-pro/)
    - Novecento Sans
- [ProtonVPN](https://protonvpn.com/)
- [Dropbox](https://www.dropbox.com/)
- [Zoom](https://zoom.us/)
- [Handbrake](https://handbrake.fr/)
- [Obsidian](https://obsidian.md/)
  - Vault located in `Documents` filter, sync through Obsidian Sync

## Install from App Store
 - [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
   - Apple's Developer Tools: `xcode-select --install`
 - [Fantastical](https://apps.apple.com/us/app/fantastical-calendar/id975937182?mt=12)
    - Use Apple ID to log in
    - Generate Apple [app-specific password](https://appleid.apple.com)
    - Disable notifications from Apple Calendar in System Preferences > Notifications
    - Settings > General > Remove keyboard shortcut for `Mini window keyboard shortcut`
    - Settings > Advanced > Open Maps in Google Maps
 - [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353?mt=12)
    - Set as default for Zip
 - [Magnet](https://apps.apple.com/us/app/magnet/id441258766?mt=12)
    - Change Left Half to `Hyper Key +  <-`
    - Change Right Half to `Hyper Key + ->`
 - [Things 3](https://apps.apple.com/us/app/things-3/id904280696?mt=12)
    - Make sure the Fantastical keyboard shortcut has been removed (see above)
    - New To Do: `Control-Space`
    - New To Do from Website (requires helper install): `Control-Option-Space`
 - [Filebot](https://apps.apple.com/us/app/filebot/id905384638?mt=12)
    - Right-click on Match, navigate to Format
      - TV: `/Volumes/Media/{plex}`
      - Movies: `/Volumes/Media/{plex}-{vf}`
 - [Tot](https://apps.apple.com/us/app/tot/id1491071483?mt=12)
 - [CarrotWeather](https://apps.apple.com/us/app/carrot-weather/id993487541?mt=12)
 - [Garageband](https://apps.apple.com/us/app/garageband/id682658836?mt=12)
 - [Reeder 5](https://apps.apple.com/us/app/reeder-5/id1529448980?mt=12)
   - Connect to self-hosted FreshRSS feed aggregator
 - [Meeter](https://apps.apple.com/us/app/meeter-for-zoom-teams-co/id1510445899)
   - Calendars will show after you log into Google in the MacOS System Preferences
   - Settings > General > UI Style: Minimalist UI
   - Settings > Advanced
     - Make sure you check `Show countdown to next meeting` and `Show countdown only for current day`
     - Notification with link one minute before event
     - Set Zoom to open with native app

# MacOS
## System Preferences
- Sign into Google account in Apple’s System Preferences
  - Sync calendar, nothing else
- Set up touchpad
  - Enable Tap to Click[^2]
  - Enable Three-finger drag
    - Accessibility -> Pointer Control -> Trackpad Options -> Enable Dragging: Three Finger Drag
  - Enable Mission Control gesture
    - Trackpad -> More Gestures - Enable **Mission Control** with *Swipe up with four fingers*
  - Disable Chrome Back/Forward with two-finger swipe by opening Terminal and entering: `defaults write com.google.Chrome AppleEnableSwipeNavigateWithScrolls -bool FALSE`
- Set up mouse
  - Connect Bluetooth Mouse
  - Set speed to max
- Set up keyboard
  - Connect Bluetooth Keyboard
  - Laptop Touchbar (if applicable)
    - Shows: Expanded control strip
    - Edit Touchbar, drag off Siri button
- Set up Apple Watch to unlock laptop
  - Touch ID & Password > Enable Apple Watch
- Enable Text message forwarding (phone to laptop Messages app)
  - On iPhone (must be signed into same iCloud account): Settings > Messages > Text Message Forwarding > Enable new computer
- Disable Siri
- Desktop & Dock
   - Scroll to Mission Control section, uncheck `Automatically rearrange Spaces based on most recent use`
   - Click Hot Corners, set bottom right to Lock Screen

[^2]: Tap-to-click is *vastly superior* to click-to-click. Fight me.

## Finder Settings
- View > Show Path Bar
- View > Show Status Bar
- Finder Menu -> Settings ->
  - Advanced -> Show all filename extensions
  - Advanced -> When performing a search: Search the current folder
  - Sidebar
    - Uncheck Recents, Airdrop, Shared, Recent Tags
- Right-click on tool bar to customize toolbar[^3]
- Show all hidden files in Finder
  - In terminal type: `defaults write com.apple.Finder AppleShowAllFiles true`
  - Restart Finder: `killall Finder`
- Connect to Synology NAS
  - `afp://192.168.1.[XXX]`
  - Login/Pass are in 1Password
  - Go to Folder `/Volumes` and drag it over into sidebar
- Connect Airpods Pro and Airpods Max.
  - Go to Settings > Bluetooth and change Connect Automatically to Connect when this device last used

[^3]: Here's how I like my Finder Toolbar:
![Custom Finder Toolbar](/images/blog/2023/02/dannb-finder-toolbar.png)

## Developer Settings
- GitHub [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
  - Github.com > Settings > Developer Settings
  - Create a Personal Access Token
    - Select desired scopes
  - Generate token and copy to clipboard
  - Enable connecting to Github from terminal
    - `brew install gh`
    - `gh auth login`
    - Login in browser
- Create `Code` folder in `/Users/dannberg/`
  - In terminal `ls` into `Code` and `git clone https://github.com/dannberg/dannb-org.git` to pull down that directory from GitHub.
  - Pull down other desired repos
- Install [Homebrew](https://brew.sh/)
    - `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
- SSH Key
  - [Generate new SSH key](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
  - [Add SSH key to GitHub](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)
  - Add ssh key to home server for passwordless login `ssh-copy-id dannberg@192.168.1.[XXX]`
- Install Hugo
    - `brew install hugo`
