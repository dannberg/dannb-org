---
title: "Setting up a new home server"
date: 2020-12-08T09:42:12-05:00
description: "Guide to migrating to a new Linux home server running docker"
url: /blog/2020/new-home-server
categories:
  - "Code"
tags:
  - linux
  - server
  - github
  - tutorial
  - guide
  - home server
  - plex
  - docker
draft: true
---

My first job at a tech company was not very technical, despite working on a very technical team. I was surrounded with Systems and Network admins, while myself in a more logisical role of working with vendors and managing our assets across all our data centers. I was determined to make the most of my situation, and learn as much on-the-job as I could to make up for my non-technical higher education degree.

At the time, all our servers ran with the [Xen hypervisor](https://xenproject.org/). If I wanted a little practice, a co-worker suggested, I could set up Xen on a home server, install some application, and then migrate everything over to [Docker](https://www.docker.com/).

I purchased a Lenovo ThinkServer TS140 for a couple hundred dollars on Ebay and took way too long installing [Debian](https://www.debian.org/). I can't remember exactly what application I installed first, as I wasn't really sure what I wanted the server to _do_ just yet.

At the time, I was using Kodi as a home media service, but I decided to install Plex (which runs on a self-hosed server) a try as a way to get acquianted with my new Thinkserver. I got everything up and running in Xen, and after about six months switched things to Docker. It really was a fantastic learning experience.

Since them, my set up has evolved significantly. I added a Synology NAS for Network Attached Storage, and have installed several other applications.
