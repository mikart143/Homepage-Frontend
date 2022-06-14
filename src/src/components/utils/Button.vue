<template>
    <button v-if="!loading">
        {{ text }}
    </button>
    <button v-else>
        <Icon
            class="rotate"
            :icon="cachedRoundedIcon"
        />
    </button>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import cachedRoundedIcon from '@iconify-icons/material-symbols/cached-rounded';

withDefaults(defineProps<{
  text: string,
  loading?: boolean
}>(),
{
    text: '',
    loading: false
}
);
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

button {
    align-items: center;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: transparent 0 0 0 3px, rgb(18 18 18 / 10%) 0 6px 20px;
    box-sizing: border-box;
    color: #121212;
    cursor: pointer;
    display: inline-flex;
    font-family: Inter, sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    justify-content: center;
    line-height: 1;
    margin: 0;
    outline: none;
    padding: 1rem 1.2rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow 0.2s;
    white-space: nowrap;
    border: 0;
    user-select: none;
    touch-action: manipulation;
}

button:hover {
    background-color: rgb(122 139 254);
    color: #fff;
    box-shadow: rgb(122 140 254 / 50%) 0 0 0 3px;
    transition: box-shadow 0.2s;
}
</style>