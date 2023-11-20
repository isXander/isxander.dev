<template>
    <section id="page-hero">
        <section id="hello-hero" class="hero-left hero-section">
            <h1>Hello, World!</h1>
            <div class="flex-row margin-right">
                <Avatar size="lg" circle src="/avatar.png" />
                <h2>I'm Xander!</h2>
                <div id="socials">
                    <NuxtLink to="https://github.com/isXander" target="_blank"><FontAwesomeIcon icon="fa-brands fa-github" size="3x"/></NuxtLink>
                    <NuxtLink to="https://short.isxander.dev/discord/" target="_blank"><FontAwesomeIcon icon="fa-brands fa-discord" size="3x"/></NuxtLink>
                    <NuxtLink to="https://instagram.com/isxander.pics/" target="_blank"><FontAwesomeIcon icon="fa-brands fa-instagram" size="3x"/></NuxtLink>
                </div>
            </div>
        </section>

        <section id="mods-hero" class="hero-right hero-section">
            <h1>I make mods!</h1>
            <h3>
                Using Java, I modify Minecraft with bytecode manipulation techniques.
                I now have over 25 million downloads.
            </h3>
            <div class="flex-row margin-left">
                <Button class="button modrinth-button" to="https://modrinth.com/user/isxander">Modrinth</Button>
                <Button class="button curseforge-button" to="https://legacy.curseforge.com/members/xanderisdev/projects">CurseForge</Button>
            </div>
        </section>

        <section id="pictures-hero" class="hero-left hero-section">
            <h1>I take pictures!</h1>
            <h3>I've made a hobby out of taking pictures with my camera.</h3>
            <Button class="button" to="/photography">Photography</Button>
        </section>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
#page-hero {
    display: flex;
    flex-direction: column;

    h1 {
        color: $foreground-color-strong;
        font-size: 10rem;
        margin-bottom: 2rem;
        padding-top: 2rem;
    }

    h2 {
        font-size: 5rem;
        margin: 0;
        color: $foreground-color;
    }

    .hero-section {
        padding: 0 1rem;
        height: 95vh;
        width: 100%;
        box-sizing: border-box;

        & > * {
            padding-bottom: 1rem;
        }
    }

    .hero-left {
        align-self: flex-start;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .hero-right {
        align-self: flex-end;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
    }

    .button {
        font-size: 2rem;
    }

    #hello-hero {
        margin-top: 7.5rem;
        background-image: linear-gradient(rgba(black, 0), rgba(black, 1));
    }

    #mods-hero {
        background-color: black;
    }

    #pictures-hero {
        background-size: cover;
        background-image: linear-gradient(rgba(black, 1), rgba(black, 0.8) 3%, rgba(black, 0.8) 66%, rgba($background-color, 1)), url("https://www.isxander.dev/photography/images/MG_0860-Enhanced-NR.jpg");
        background-position: center center;
        background-clip: border-box;
    }
}

.flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.margin-left {
    & > * {
        margin-left: 2rem;
    }
}

.margin-right {
    & > * {
        margin-right: 2rem;
    }
}

.modrinth-button {
    background-color: #1bd96a;
    color: $background-color;
}

.curseforge-button {
    background-color: #f16436;
}

#socials {
    padding-left: 2rem;

    a {
        color: $foreground-color;
        margin-right: 1rem;
    }
}
</style>