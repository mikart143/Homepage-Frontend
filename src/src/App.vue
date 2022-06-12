<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router';
import { Icon } from '@iconify/vue';

</script>

<template>
    <div class="main">
        <div class="header">
            <div class="logo">
                <RouterLink :to="{name: 'home'}" custom v-slot="{ navigate }">
                    <Icon icon="material-symbols:code-rounded" width="125" height="125" @click="navigate" />
                </RouterLink>
        
                <h1>Michał Kruczek</h1>
            </div>
            <div class="wrapper">
                <nav>
                    <RouterLink :to="{name: 'home'}" class="link">
                        <Icon icon="material-symbols:home-outline-rounded"/>
                        Home
                    </RouterLink>
                    <RouterLink :to="{name: 'about'}" class="link">
                        <Icon icon="material-symbols:account-circle-outline"/>
                        About
                    </RouterLink>
                </nav>
            </div>
        </div>
        <div class="view">
            <RouterView/>
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
</style>
