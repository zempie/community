<template>
    <guest-page></guest-page>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PageLoader from "../components/common/PageLoader.vue";

import GuestPage from "@/components/pages/landing/guestPage.vue";
@Component({
    components: { PageLoader, GuestPage },
})
export default class Home extends Vue {}
</script>

<style scoped>
</style>
