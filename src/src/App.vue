<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router';
import { Icon } from '@iconify/vue';
import codeSlash from '@iconify-icons/bi/code-slash';
import homeOutlineRoundedIcon from '@iconify-icons/material-symbols/home-outline-rounded';
import accountCircleOutline from '@iconify-icons/material-symbols/account-circle-outline';
console.info('sasd');
console.log('asd');
console.trace('tracing');
</script>

<template>
    <div class="main">
        <div class="header">
            <div class="logo">
                <RouterLink
                    v-slot="{ navigate }"
                    :to="{name: 'home'}"
                    custom
                >
                    <Icon
                        :icon="codeSlash"
                        width="125"
                        height="125"
                        @click="navigate"
                    />
                </RouterLink>
        
                <h1>Michał Kruczek</h1>
            </div>
            <div class="wrapper">
                <nav>
                    <RouterLink
                        :to="{name: 'home'}"
                        class="link"
                    >
                        <Icon :icon="homeOutlineRoundedIcon" />
                        Home
                    </RouterLink>
                    <RouterLink
                        :to="{name: 'about'}"
                        class="link"
                    >
                        <Icon :icon="accountCircleOutline" />
                        About
                    </RouterLink>
                </nav>
            </div>
        </div>
        <div class="view">
            <!-- <RouterView v-slot="{ Component }">
                <template v-if="Component">
                    <Transition
                        name="router-fade"
                        mode="out-in"
                    >
                        <KeepAlive>
                            <Suspense>
                                <component :is="Component" />
                                <template #fallback>
                                    Loading...
                                </template>
                            </Suspense>
                        </KeepAlive>
                    </Transition>
                </template>
            </RouterView> -->
            <RouterView v-slot="{ Component }">
                <template v-if="Component">
                    <Transition
                        name="router-fade"
                        mode="out-in"
                    >
                        <KeepAlive>
                            <component :is="Component" />
                        </KeepAlive>
                    </Transition>
                </template>
            </RouterView>
        </div>
    </div>
</template>

<style lang="scss">
    @import "@/assets/app";
</style>

<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    flex-grow: 1;

    svg {
        cursor: pointer;
    }
}

.header {
    padding: 10px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    box-shadow: transparent 0 0 0 3px, rgb(18 18 18 / 10%) 0 6px 20px;
    box-sizing: border-box;
}

.main {
    display: flex;
    flex-direction: column;
}

.link {
    font-size: 20px;
    margin-left: 5px;
    display: inline-flex;
    align-items: center;
    color: black;
    text-decoration: none;
}

.router-fade-enter-from,
.router-fade-leave-to {
    opacity: 0;
}

.router-fade-enter-active,
.router-fade-leave-active {
    transition: opacity var(--fade-duration) ease;
}
</style>
