<template>
    <b-modal
        
        class="modal-container"
        centered
        hide-header
        hide-footer
        no-close-on-backdrop
    >
        <p class="my-4" style="color: #000">로그인 후 사용하시겠습니끼?</p>

        <div>
            <button
                class="popup-box-action half button tertiary"
                style="width: 47%"
            >
                Login
            </button>
            <button class="popup-box-action half button" style="width: 47%">
                Cancel
            </button>
        </div>
    </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class AlertModal extends Vue {}
</script>

<style scoped>
</style>
