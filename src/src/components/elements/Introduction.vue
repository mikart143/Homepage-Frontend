
<script setup lang="ts">
import Button from '@/components/utils/Button.vue';
import {defineAsyncComponent, ref} from 'vue';
import Loader from '@/components/utils/Loader.vue';

const AsyncModal = defineAsyncComponent(() => import('@/components/utils/Modal.vue'));
const modal = ref<InstanceType<typeof AsyncModal> | null>(null);

defineProps<{
  msg: string
}>();
</script>

<template>
    <div>
        <h3>
            <Button
                text="Click Me!"
                @click="() => modal?.openModal()"
            />
        </h3>
        <Loader />
        <AsyncModal
            ref="modal"
            title="Tytuł"
        >
            body
        </AsyncModal>
        {{ msg }}
    </div>
</template>