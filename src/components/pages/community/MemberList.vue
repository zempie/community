<template>
    <div class="content-grid">
        <card></card>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Card from "@/components/common/Card.vue";

@Component({
    components: { Card },
})
export default class MemberList extends Vue {}
</script>

<style scoped>
</style>
