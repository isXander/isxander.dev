<template>
    <header>
        <nav id="header-container">
            <div class="nav-row nav-left">
                <NuxtLink to="/" id="nav-home">isXander</NuxtLink>
            </div>
            <div class="nav-row nav-right">
                <NuxtLink to="/mods">Mods</NuxtLink>
                <NuxtLink to="/photography">Photography</NuxtLink>
                <NuxtLink to="/about">About Me</NuxtLink>
                <NuxtLink to="https://github.com/isXander/"><FontAwesomeIcon icon="fa-brands fa-github" size="xl"/></NuxtLink>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
header {
    position: sticky;
    top: 0;
    width: 100%;
    backdrop-filter: blur(8px);
    background-color: rgba($background-color, 0.5);
    z-index: 10;
}

#header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: .75rem auto .75rem auto;
    max-width: 80rem;
    padding: 1rem;
    
    #nav-home {
        color: $primary-lighter-color;
        font-size: 1.3rem;
        font-weight: 500;
        transition: 0.3s;

        &:hover {
            color: $primary-color;
            text-decoration: none;
        }
    }

    .nav-row {
        display: flex;
        align-items: center;

        & > * {
            color: $foreground-color;
        }

        gap: 1.5rem;
    }

    @media screen and (max-width: 530px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        .nav-row {
            flex-wrap: wrap;
            justify-content: center;
        }
    }
}
</style>