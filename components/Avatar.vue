<template>
    <img v-if="src" ref="img" :class="`avatar size-${size} ${circle ? 'circle' : ''} ${noShadow ? 'no-shadow' : ''}  ${raised ? 'raised' : ''}`" :src="src" :alt="alt" :loading="loading" />
    <svg v-else :class="`avatar ${circle ? 'circle' : ''} ${noShadow ? 'no-shadow' : ''} ${raised ? 'raised' : ''
        }`" xml:space="preserve" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"
        stroke-miterlimit="1.5" clip-rule="evenodd" viewBox="0 0 104 104" aria-hidden="true">
        <path fill="none" d="M0 0h103.4v103.4H0z" />
        <path fill="none" stroke="#9a9a9a" stroke-width="5"
            d="M51.7 92.5V51.7L16.4 31.3l35.3 20.4L87 31.3 51.7 11 16.4 31.3v40.8l35.3 20.4L87 72V31.3L51.7 11" />
    </svg>
</template>
  
<script setup>
const img = ref(null)

defineProps({
    src: {
        type: String,
        default: null,
    },
    alt: {
        type: String,
        default: '',
    },
    size: {
        type: String,
        default: 'sm',
        validator(value) {
            return ['xxs', 'xs', 'sm', 'md', 'lg', 'none'].includes(value)
        },
    },
    circle: {
        type: Boolean,
        default: false,
    },
    noShadow: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: String,
        default: 'lazy',
    },
    raised: {
        type: Boolean,
        default: false,
    },
})
</script>
  
<style scoped lang="scss">
.avatar {
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-inset-lg), var(--shadow-card);
    height: 6rem !important;
    width: 6rem !important;
    background-color: var(--color-button-bg);
    object-fit: cover;
    max-width: 6rem !important;
    max-height: 6rem !important;

    &.size-xxs {
        --avatar-size: 1.25rem;
        box-shadow: var(--shadow-inset), var(--shadow-card);
        border-radius: var(--radius-sm);
    }

    &.size-xs {
        --avatar-size: 2.5rem;
        box-shadow: var(--shadow-inset), var(--shadow-card);
        border-radius: var(--radius-sm);
    }

    &.size-sm {
        --avatar-size: 3rem;
        box-shadow: var(--shadow-inset), var(--shadow-card);
        border-radius: var(--radius-sm);
    }

    &.size-md {
        --avatar-size: 6rem;
        border-radius: var(--radius-lg);
    }

    &.size-lg {
        --avatar-size: 9rem;
        border-radius: var(--radius-lg);
    }

    &.size-none {
        --avatar-size: unset;
    }

    &.circle {
        border-radius: 50%;
    }

    &.no-shadow {
        box-shadow: none;
    }
}
</style>