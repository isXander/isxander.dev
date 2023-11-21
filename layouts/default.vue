<template>
    <div>
        <TopBarHeader />
        <slot />

        <footer>
            This website is <a href="https://github.com/isXander/isxander.dev">open source</a>! • Copyright © isXander 2023
        </footer>
    </div>
</template>

<style scoped lang="scss">
footer {
    max-width: 80rem;
    margin: 0 auto;
    padding: 3rem 1rem;
    text-align: center;
}
</style>