<template>
    <div>
      <!-- <page-loader></page-loader> -->
      123
      <post></post>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PageLoader from "../components/PageLoader.vue";
import Post from "../components/Post.vue"

@Component({
    components: { PageLoader, Post },
})
export default class Test extends Vue {}
</script>

<style scoped>
</style>
