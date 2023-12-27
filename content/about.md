--- 
draft = false
date = 2023-04-11T13:22:22+01:00
title = "About Me"
slug = "about" 
---

# :wave: I'm Xander

I live in :england: England, so the current time for me is :CurrentTime{timezone=Europe/London}.
I'm usually very active on [my discord server](https://short.isxander.dev/discord), so that is usually the best place to reach me if you need anything.

## Skills

### Minecraft Modding

I create mods for Minecraft using Java and Kotlin. I have ammased over 25 million downloads and am gunning for more!
I publish my mods on 2 sites, [Curseforge](https://www.curseforge.com/members/xanderisdev) and [Modrinth](https://modrinth.com/user/isxander), and the source code is available on [Github](https://github.com/isXander)!

Modding for Minecraft is not has easy as one might think. I use the [Fabric toolchain](https://fabricmc.net) to mod, which includes regular use of [Mixin](https://github.com/Spongepowered/Mixin), a bytecode manipulation library. In most cases with Fabric, you need to modify the Minecraft source code directly to achieve your goal.

On some more complicated mods, I make extensive use of the Gradle build system with [over 6 subprojects](https://github.com/isXander/YetAnotherConfigLib). YetAnotherConfigLib is one mod I have made that really tought me about API safety within JVM; this library supports many mod developers and keeping a stable API is vital for people to continue to use what I have made for them.

If you'd like to check out my mods, [click here to go to my mods page](/mods)!

### Photography

Photography is also a hobby of mine, I've got a Canon camera, and have taken many photos wherever I go, if you'd like to see all my good ones, go to my [photography page](/photography)!

Here are three random samples from that page!

:PhotographyGrid{limit=+3 shuffle=true}

### Full-stack Developer

I am not afraid of branching out; the website you're reading this on is living proof. Without any prior knowledge with web frameworks, I've been able to teach myself [Nuxt3](https://nuxt.com) and [VueJS](https://vuejs.org/), along with Typescript/Javascript itself.

And on the backend, I love using Kotlin's [Ktor](https://ktor.io/) library. I'm yet to actually release a full-stack web app, but I do have a few ideas in the pipeline!

## Beginnings

[EvergreenHUD](https://github.com/isXander/EvergreenHUD/tree/1.19) was my very first project developing
Minecraft mods and has influenced me a lot. It was a very simple mod that added HUD elements, displaying
useful information on the screen. It became increasingly popular under the relatively small community
I released it in, becoming the standard for Forge HUD mods on 1.8.9. Eventually, I was attracted to
developing for modern versions of Minecraft, where I ended up rewriting the whole mod in Kotlin,
learning the language along the way, and upgrading the mod target from 1.8.9 to 1.18.

From developing this mod, I learned about the basic of annotation processors, making an intuitive API for
other mods to depend from and the basics of Kotlin and how it can be utilised for cleaner code. Along with an
important lesson of how to understand the needs of my users and interacting with my own community.

Today, the mod still lives on under new maintainers, [Polyfrost](https://github.com/orgs/Polyfrost).

![Early version of EvergreenHUD](/images/evergreenhud.webp)

## Commissions

### Ape Initiative

In early April 2023, I took a commission for a youtuber, [ChrisDaCow](https://youtube.com/@ChrisDaCow)
where I had to create a touchscreen control scheme to allow chimpanzees to play Minecraft. He then took this
mod to [Ape Initiative](https://www.apeinitiative.org/) in Iowa where Kanzi, the eldest of the apes,
learned how to break blocks with my controls in just 30 minutes! According to the researchers, this was the
most advanced thing they had ever done on a screen!

I achieved this by collaborating with the youtuber to come up with a data-driven, configurable touch
interface with rows, columns and [lexigram](https://www.apeinitiative.org/lexigrams) buttons where I then
heavily modified Minecraft so it can be controlled in game with just single taps, without the need for a
mouse and keyboard.

This all resulted in a great, entertaining video.

:YoutubeEmbed{video="UKpFoYqN9-0"}

You can learn more about this commission and get a techinical deep-dive on [it's own page](/mods/bonobocraft).

### Socksfor1 YouTuber

In January 2022, I joined a private Discord server with a group of YouTubers who were interested in
paying commissioners to create their unique video idea, and a group of commissioners, who where intersted
in taking said commissions, one of whom was me.

A request would pop up in a channel and the first to claim it, got it. I claimed one commission posted
by [Socksfor1](https://youtube.com/c/socksfor1). The commission was to create a mod where players would
spawn on the moon, with the objective of a team of hunters who had a compass tracking a player who was progressing
by finding blocks and getting custom items such as a laser gun.

:YoutubeEmbed{video="_IYVOuLYLUs"}

## My YouTube Channel

I got a youtube video to go viral by taking advantage of a trend and using an extremely simple AI that
I created to quickly scan through video clips, identify that faces are present in a frame against a folder of images,
and export those scenes into a folder which I then quickly edited together into a complete video.

You can find the OSS project [here](https://github.com/isXander/FaceFinder).

The result was an entertaining video:

:YoutubeEmbed{video="erhUvfL4crM"}

I tried to then repeat the same formula with other characters from the show which did not take off in the
same way as the first.

:YoutubeEmbed{video="BNnlg3FW0Q8"}
