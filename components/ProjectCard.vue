<template>
    <NuxtLink class="project-card" :class="featured ? 'featured' : ''" :to="`/projects/${slug}`">
        <img class="project-icon" :src="icon ?? ``" alt="icon">
        <div class="project-title-container">
            <h1 class="project-title" v-html="title"></h1>
        </div>
        <p class="project-summary">{{ summary ?? `` }}</p>
        <div class="project-tags">
            <span v-for="tag in tags" class="project-tag">
                <FAIcon :icon="tagIcons[tag]" />
                {{ tag }}
            </span>
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps({
    slug: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    summary: {
        type: String,
        default: null
    },
    icon: {
        type: String,
        default: null
    },
    tags: {
        type: Array<String>,
        default: []
    },
    featured: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped lang="scss">
.project-card,
.project-card:hover {
    color: $foreground-color;
    text-decoration: none;
}

.project-card {
    display: grid;
    grid-template-areas:
        "icon title title"
        "summary summary summary"
        "tags tags tags";
    grid-template-columns: 5rem 1fr 1fr;
    gap: .5rem;

    background-color: $background-color-light;
    border-radius: 1rem;
    padding: 1rem;
    transition: 0.25s;

    &.featured {
        @keyframes feat-animation {
            0% {
                --feat-angle: 0deg;
            }

            100% {
                --feat-angle: 360deg;
            }
        }

        position: relative;
        $border: 0.5rem;
        padding: 1.5rem;

        &::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            padding: $border;
            background: linear-gradient(var(--feat-angle), $primary-color, $primary-lighter-color);
            mask:
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;

            animation: feat-animation 5s linear infinite;
        }
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 2rem rgba(black, 0.5);
        z-index: 1i;
    }

    .project-icon {
        grid-area: icon;

        height: 5rem;
        width: auto;
        border-radius: 25%;
    }

    .project-title-container {
        grid-area: title;
        display: flex;
        align-items: center;

        .project-title {
            font-size: 1.5rem;
            margin: 0;
        }
    }

    .project-summary {
        grid-area: summary;
    }

    .project-tags {
        grid-area: tags;
        display: flex;
        gap: 1.2rem;

        .project-tag {
            text-transform: capitalize;
        }
    }
}

@property --feat-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}
</style>