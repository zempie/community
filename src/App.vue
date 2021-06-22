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

import { LoginState } from "@/store/modules/user";

@Component({
    components: { Navigator },
})
export default class App extends Vue {
    private dropdown: Dropdown = new Dropdown();

    async mounted() {
        this.dropdown.init();
        const state = await this.$store.dispatch("loginState");

        //  if( state === LoginState.login ) {
        //     if( !this.$store.getters.user.is_developer ) {
        //         await this.$router.replace('/signup').catch(()=>{});
        //     }
        // }
        // else {
        //     await this.$router.replace('/login');
        // }
    }
}
</script>

<style>
@import "./css/styles.css";
#app {
    font-family: Rajdhani, sans-serif;
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


pre {
    background: #0d0d0d;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
}
pre code {
    color: inherit;
    padding: 0;
    background: none;
    font-size: 0.8rem;
}
.hljs-comment,
.hljs-quote {
    color: #616161;
}

.hljs-variable,
.hljs-template-variable,
.hljs-attribute,
.hljs-tag,
.hljs-name,
.hljs-regexp,
.hljs-link,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class {
    color: #f98181;
}

.hljs-number,
.hljs-meta,
.hljs-built_in,
.hljs-builtin-name,
.hljs-literal,
.hljs-type,
.hljs-params {
    color: #fbbc88;
}

.hljs-string,
.hljs-symbol,
.hljs-bullet {
    color: #b9f18d;
}

.hljs-title,
.hljs-section {
    color: #faf594;
}

.hljs-keyword,
.hljs-selector-tag {
    color: #70cff8;
}

.hljs-emphasis {
    font-style: italic;
}

.hljs-strong {
    font-weight: 700;
}
</style>
