<template>
    <div class="grid grid-3-6-3 mobile-prefer-content">
      
      <div class="grid-column">
      </div>
      <div class="grid-column">
          <post></post>
      </div>
      <div class="grid-column">
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Post from '@/components/timeline/Post.vue'
@Component({
    components: {Post},
})
export default class Timeline extends Vue {}
</script>

<style scoped>
</style>
