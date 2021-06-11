<template>
    <div id="app" class="no-drag">
        <navigator></navigator>
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Navigator from "@/components/layout/Navigator.vue";

import Dropdown from "@/plugins/dropdown";
@Component({
    components: { Navigator },
})
export default class App extends Vue {
    private dropdown: Dropdown = new Dropdown();

    mounted() {
        this.dropdown.init();
    }
}
</script>

<style>
@import "./css/styles.css";
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.no-drag {
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select: none;
}
</style>
