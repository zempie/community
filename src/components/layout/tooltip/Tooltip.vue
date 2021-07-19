<template>
    <div class="category-list">
        <b-button id="category-list" class="form-select dropdown-container">
            <svg
                class="
                    icon-plus-small
                    action-list-item
                    category-dropdown-trigger
                "
                style="fill: #fff"
            >
                <use xlink:href="#svg-plus-small"></use>
            </svg>

            <div class="category-title">
                <p>Add Category</p>
            </div>
        </b-button>
        <b-tooltip
            placement="bottom"
            target="category-list"
            triggers="click"
            custom-class="category-tooltip"
        >
            <div class="form-select dropdown-container mt-1">
                <b-button>Community</b-button>
                <b-button>My game</b-button>
                <b-button>My portfolio</b-button>
            </div>
        </b-tooltip>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class Tooltip extends Vue {}
</script>

<style scoped>
</style>
