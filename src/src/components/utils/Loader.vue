<template>
    <Icon class="rotate" :icon="cachedRoundedIcon"/>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import cachedRoundedIcon from '@iconify-icons/material-symbols/cached-rounded';

</script>

<style scoped lang="scss">
.rotate {
    animation: rotation 8s infinite linear;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(359deg);
    }
}
</style>