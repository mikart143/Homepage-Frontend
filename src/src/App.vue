<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router';
import { Icon } from '@iconify/vue';
import codeRoundedIcon from '@iconify-icons/material-symbols/code-rounded';
import homeOutlineRoundedIcon from '@iconify-icons/material-symbols/home-outline-rounded';
import accountCircleOutline from '@iconify-icons/material-symbols/account-circle-outline';

</script>

<template>
    <div class="main">
        <div class="header">
            <div class="logo">
                <RouterLink :to="{name: 'home'}" custom v-slot="{ navigate }">
                    <Icon :icon="codeRoundedIcon" width="125" height="125" @click="navigate" />
                </RouterLink>
        
                <h1>Michał Kruczek</h1>
            </div>
            <div class="wrapper">
                <nav>
                    <RouterLink :to="{name: 'home'}" class="link">
                        <Icon :icon="homeOutlineRoundedIcon"/>
                        Home
                    </RouterLink>
                    <RouterLink :to="{name: 'about'}" class="link">
                        <Icon :icon="accountCircleOutline"/>
                        About
                    </RouterLink>
                </nav>
            </div>
        </div>
        <div class="view">
            <RouterView v-slot="{ Component }">
                <Transition name="router-fade" mode="out-in">
                    <component :is="Component" />
                </Transition>
            </RouterView>
        </div>
    </div>
</template>

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
  box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px;
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
  transition: opacity .5s ease;
}
</style>
