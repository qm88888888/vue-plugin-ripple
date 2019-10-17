<template>
  <div id="app">
    <button class="button" v-ripple="'red'" >Ripple</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  private opts: any = {
    color: 'red',
  }
}
</script>

<style lang="scss">
.button {
  padding: 8px 16px;
  background: #0077ff;
  border: none;
  color: #fff;
  border-radius: 8px;
  outline: 0;
  cursor: pointer;
}
</style>
