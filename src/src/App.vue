<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router';
import { Icon } from '@iconify/vue';

</script>

<template>
<div class="main">
    <header>
      <div class="logo">
        <Icon icon="material-symbols:code-rounded" width="125" height="125" />
        <h1>Michał Kruczek</h1>
      </div>
      <div class="wrapper">
          <nav>
              <RouterLink to="home">Home</RouterLink>
              <RouterLink to="about">About</RouterLink>
          </nav>
      </div>
    </header>
    <div class="view">
      <RouterView/>
    </div>
</div>
</template>

<style lang="scss" scoped>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

.logo {
  display: flex;
  align-items: center;
}

header {
  display: flex;
  align-items: center;
}

.main {
    display: flex;
    flex-direction: column;
}
</style>
