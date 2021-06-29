<template>
    <router-view></router-view>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PageLoader from "../components/common/PageLoader.vue";

@Component({
    components: { PageLoader },
})
export default class Home extends Vue {}
</script>

<style scoped>
</style>
