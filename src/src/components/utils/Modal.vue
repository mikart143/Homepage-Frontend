<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside, onKeyStroke } from '@vueuse/core';
import Button from '@/components/utils/Button.vue';

const modal = ref<HTMLElement | null>(null);
const visible = ref(false);
const openModal = () => visible.value = true;
const closeModal = () => visible.value = false;

onClickOutside(modal, () => visible.value = false);
onKeyStroke('Escape', () => {
    closeModal();
});

defineExpose({
    openModal,
    closeModal
});

withDefaults(defineProps<{
  title: string,
}>(),
{
    title: String,
}
);
</script>
<template>
    <Teleport to="body">
        <Transition>
            <div
                v-if="visible"
                class="overlay"
            >
                <div
                    ref="modal"
                    class="modal"
                >
                    <div class="header">
                        <h3>{{ title }}</h3>
                    </div>
                    <div class="body">
                        <slot />
                    </div>
                    <div class="footer">
                        <Button
                            class="button"
                            text="Close"
                            @click="closeModal"
                        />
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
<style lang="scss" scoped>
.modal {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 12px;
    box-shadow: transparent 0 0 0 3px, rgb(18 18 18 / 10%) 0 6px 20px;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 1000px;
    max-height: 400px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: [header] auto [body] 1fr [footer] auto;
}

.header {
    display: flex;
    height: 100%;
    justify-content: center;
    text-align: center;
    margin: 5px;
}

.footer {
    margin: 5px;
    display: flex;
}

.body {
    height: 100%;
}

.button {
    margin-left: auto;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.v-enter-active,
.v-leave-active {
    transition: opacity calc(var(--fade-duration) * 2) ease;
}

.overlay {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(128 128 128 / 35.1%);
    position: fixed;
    backdrop-filter: blur(2px);
}
</style>