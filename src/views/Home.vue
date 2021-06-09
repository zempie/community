<template>
    <div>
      <!-- <page-loader></page-loader> -->
      
      <feed></feed>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PageLoader from "../components/common/PageLoader.vue";
import Feed from "../components/timeline/Feed.vue"

@Component({
    components: { PageLoader, Feed },
})
export default class Home extends Vue {}
</script>

<style scoped>
</style>
