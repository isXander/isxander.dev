<template>
    <main class="normal-page">
        <section id="title">
            <div class="title-container">
                <h1 class="monospace">I'm Xander</h1>
                <Avatar circle src="/avatar.png"/>
            </div>
            <div id="socials">
                <NuxtLink to="https://github.com/isXander"><FAIcon icon="fa-brands fa-github"/></NuxtLink>
                <NuxtLink to="https://isxander.dev/discord"><FAIcon icon="fa-brands fa-discord"/></NuxtLink>
                <NuxtLink to="https://youtube.com/@isXanderDev"><FAIcon icon="fa-brands fa-youtube"/></NuxtLink>
                <NuxtLink to="https://instagram.com/isxander.pics"><FAIcon icon="fa-brands fa-instagram"/></NuxtLink>
            </div>

            <q id="dumb-quote">it works on my machine...</q>
        </section>

        <section id="info">
            <article class="info-box section-card">
                <h2 class="info-title">Skills</h2>
                <p class="info-description">
                    I am a software developer who has various skills in different fields.
                    <ul>
                        <li>
                            <FAIcon icon="fa-solid fa-cube" class="body-icon"/>
                            <strong>Minecraft mod developer</strong>
                            <br>
                            Using Java and Kotlin, utilising the Gradle buildsystem, I create mods for Minecraft: Java Edition.
                            I have now gained over 25 million downloads across all my mods.
                        </li>
                        <li>
                            <FAIcon icon="fa-solid fa-globe" class="body-icon"/>
                            <strong>Full-stack web apps</strong>
                            <br>
                            Vue/NuxtJS for the frontend, and Kotlin's Ktor framework for the backend, I am able to create full-stack web apps.
                        </li>
                        <li>
                            <FAIcon icon="fa-solid fa-film" class="body-icon"/>
                            <strong>Video editing</strong>
                            <br>
                            I have amassed over 1.5 million views on my YouTube channel. I use DaVinci Resolve for editing.
                        </li>
                        <li>
                            <FAIcon icon="fa-brands fa-linux" class="body-icon"/>
                            <strong>Linux knowledge</strong>
                            <br>
                            In the past I have used Linux as a daily driver, and commonly manage Ubuntu servers to host stuff
                            like my website and maven servers.
                        </li>
                    </ul>
                </p>
            </article>

            <article class="info-box section-card">
                <h2 class="info-title">Programming Languages</h2>
                <p class="info-description">
                    Due to my varied skillset, I have varying levels of experience in different programming languages.
                    <ul>
                        <li>
                            <FAIcon icon="fa-brands fa-java" class="body-icon"/>
                            Java: <b>EXPERIENCED</b>
                        </li>
                        <li>
                            <FAIcon icon="fa-brands fa-java" class="body-icon"/>
                            Kotlin: <b>EXPERIENCED</b>
                        </li>
                        <li>
                            <FAIcon icon="fa-brands fa-java" class="body-icon"/>
                            Groovy: <b>MINIMAL</b>
                        </li>
                        <li>
                            <FAIcon icon="fa-brands fa-python" class="body-icon"/>
                            Python: <b>BASIC KNOWLEDGE</b>
                        </li>
                        <li>
                            <FAIcon icon="fa-brands fa-html5" class="body-icon"/>
                            HTML: <b>GOOD</b>
                        </li>
                        <li>
                            <FAIcon icon="fa-brands fa-css3-alt" class="body-icon"/>
                            CSS: <b>GOOD</b>
                        </li>
                        <li>
                            <FAIcon icon="fa-brands fa-js" class="body-icon"/>
                            JavaScript: <b>BASIC KNOWLEDGE</b>
                        </li>
                        <li>
                            <FAIcon icon="fa-brands fa-js" class="body-icon"/>
                            TypeScript: <b>BASIC KNOWLEDGE</b>
                        </li>
                    </ul>
                </p>
            </article>
        </section>

        <section id="currently-doing">
            <h1>What I'm doing right now</h1>

            <div class="project-list">
                <article>
                    <ProjectCard
                      slug="bonobocraft"
                      :title="xanderMods.bonobocraft.title"
                      :summary="xanderMods.bonobocraft.summary"
                      :icon="xanderMods.bonobocraft.icon"
                      />
                    <p>
                        Bonobocraft is probably my proudest project. 
                        A commission for YouTuber <a href="https://youtube.com/@ChrisDaCow">ChrisDaCow</a>,
                        I developed a Minecraft mod to add highly specialised touch controls to the game to allow
                        real-life Bonobos (a type of ape) to play Minecraft. This has rasied over $10,000 towards
                        the non-profit research facility that takes care of the bonobos.

                        I have also documented the development of this journey on my YouTube channel.
                    </p>
                </article>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
section {
    margin-bottom: 5rem;
}

#title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        h1 {
            margin: 0;
            font-size: 5rem;
            color: $foreground-color-strong;
            text-align: center;
        }

        .avatar {
            box-shadow: rgba(black, 0.2) 0 10px;
        }
    }

    #socials {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;

        & > * {
            font-size: 2rem;
            color: $foreground-color;

            &:hover {
                color: $foreground-color-strong;
            }
        }
    }

    #dumb-quote {
        margin-top: 2rem;
        font-size: 1.5rem;
        color: $foreground-color-weak;
        text-align: center;
    }

    @media screen and (max-width: 660px) {
        gap: 1rem;

        .title-container {
            flex-direction: column-reverse;
            gap: 1rem;

            h1 {
                font-size: 3rem;
            }
        }
    }
}

#info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;

    .info-title {
        margin: 1rem 0 0.5rem 0;
        color: $foreground-color-strong;
    }

    .info-description ul li {
        margin: 0.5rem 0;
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;

        .info-title {
            font-size: 2rem;
        }
    }
}

#currently-doing {
    h1 {
        text-align: center;
    }

    @media screen and (max-width: 800px) {
        h1 {
            font-size: 2rem;
        }
    }

    .project-list > article {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1.25rem;

        & > p {
            font-size: 1.1rem;
            line-height: 1.5rem;
        }

        @media screen and (max-width: 900px) {
            grid-template-columns: 1fr;

            & > p {
                font-size: 1rem;
                line-height: normal;
                margin-top: 0;
            }
        }
    }
}

.body-icon {
    padding: 0 0.5rem;
    font-size: 1.2rem;
}
</style>