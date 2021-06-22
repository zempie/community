<template>
    <div class="error-section">
        <p class="error-section-title">404</p>

        <div class="error-section-info">
            <p class="error-section-subtitle">Oops!!...</p>

            <p class="error-section-text">
                Seems that you made a wrong turn and encountered a web black
                hole that absorbed the page you were looking for! But don't
                panic because you can go back!
            </p>

            <p class="error-section-text">
                If the problem persists, please send us an email to our support
                team at <a :href="'mailto:' +  $store.getters.supportEmail" style="color: #30a6d8">
                                        {{ $store.getters.supportEmail }}
                                    </a>
            </p>

            <a class="button medium primary" @click="$router.go(-1)"
                >Go Back</a
            >
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class Error404 extends Vue {
}
</script>

<style scoped>
</style>
