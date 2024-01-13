<template>
    <div class="normal-page">
        <h1>Blog Posts</h1>

        <div id="blog-grid">
            <NuxtLink v-for="post in data" :to="post._path" class="blog-post section-card">
                <h3 class="post-title">{{ post.title }}</h3>
                <h4 class="post-author">by {{ post.author }}</h4>
                <p class="post-desc">{{ post.description }}</p>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('content', () => queryContent('blog')
    .only(['title', '_path', 'description', '_draft', 'author'])
    .sort({'date': 1})
    .find())
</script>

<style scoped lang="scss">
#blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1rem;

}

.blog-post {
    display: grid;
    grid-template-areas:
        "title description"
        "author description";
    
    color: $foreground-color;

    &:hover {
        text-decoration: none;
    }

    .post-title {
        grid-area: title;
        margin: 0;
    }

    .post-author {
        grid-area: author;
        margin: 0;
    }

    .post-desc {
        grid-area: description;
    }
}
</style>