<template>
    <main class="normal-page">
        <div class="title-container regular-width">
            <h1>I'm Xander</h1>
            <Avatar circle src="/avatar.png"/>
        </div>

        <section id="info" class="regular-width">
            <article class="info-box section-card">
                <h2 class="info-title">Skills</h2>
                <p class="info-description">
                    I am a software developer who has various skills in different fields.
                    <ul>
                        <li>
                            <strong>Minecraft mod developer</strong>
                            <br>
                            Using Java and Kotlin, utilising the Gradle buildsystem, I create mods for Minecraft: Java Edition.
                            I have now gained over 25 million downloads across all my mods.
                        </li>
                        <li>
                            <strong>Full-stack web apps</strong>
                            <br>
                            Vue/NuxtJS for the frontend, and Kotlin's Ktor framework for the backend, I am able to create full-stack web apps.
                        </li>
                        <li>
                            <strong>Video editing</strong>
                            <br>
                            I have amassed over 1.5 million views on my YouTube channel. I use DaVinci Resolve for editing.
                        </li>
                    </ul>
                </p>
            </article>

            <article class="info-box section-card">
                <h2 class="info-title">Programming Languages</h2>
                <p class="info-description">
                    Due to my varied skillset, I have varying levels of experience in different programming languages.
                    <ul>
                        <li>Java: <b>EXPERIENCED</b></li>
                        <li>Kotlin: <b>EXPERIENCED</b></li>
                        <li>Groovy: <b>MINIMAL</b></li>
                        <li>Python: <b>BASIC KNOWLEDGE</b></li>
                        <li>HTML: <b>GOOD</b></li>
                        <li>CSS: <b>GOOD</b></li>
                        <li>JavaScript: <b>BASIC KNOWLEDGE</b></li>
                        <li>TypeScript: <b>BASIC KNOWLEDGE</b></li>
                    </ul>
                </p>
            </article>
        </section>

        <section id="currently-doing" class="large-width">
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

<script setup lang="ts">
</script>

<style scoped lang="scss">
.regular-width {
    max-width: 80rem;
    margin: 0 auto 5rem auto;
}

.large-width {
    max-width: 100rem;
    margin: 0 auto 5rem auto;
}

.regular-page {
    max-width: none;
}

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
    }

    .avatar {
        box-shadow: rgba(black, 0.2) 0 10px;
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
}

#currently-doing {
    h1 {
        text-align: center;
    }

    .project-list > article {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1.25rem;

        & > p {
            font-size: 1.1rem;
            line-height: 1.5rem;
        }
    }
}
</style>