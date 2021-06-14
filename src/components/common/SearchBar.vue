<template>
    <div class="interactive-input dark">
        <input
            type="text"
            id="search-main"
            name="search_main"
            placeholder="Search for community"
        />

        <div class="interactive-input-icon-wrap">
            <svg class="interactive-input-icon icon-magnifying-glass">
                <use xlink:href="#svg-magnifying-glass"></use>
            </svg>
        </div>

        <div class="interactive-input-action">
            <svg class="interactive-input-action-icon icon-cross-thin">
                <use xlink:href="#svg-cross-thin"></use>
            </svg>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class SearchBar extends Vue {}
</script>

<style scoped>

</style>
