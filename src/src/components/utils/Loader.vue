<template>
    <Icon
        class="rotate"
        :icon="loadingTwotoneLoop"
        width="100%"
        height="100%"
    />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import loadingTwotoneLoop from '@iconify-icons/line-md/loading-twotone-loop';

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