<template>
  <b-modal
    @hide="onHide"
    modal-class="modal-container"
    centered
    hide-header
    hide-footer
    ref="deleteModal"
  >
    <p class="my-4 text-center">정말 삭제하시겠습니까?</p>

    <div class="button-container">
      <slot name="yesDelete"> </slot>

      <button class="popup-box-action half button" @click="noDelete">
        아니오
      </button>
    </div>
  </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import ClickOutside from "vue-click-outside";
@Component({
  components: {},
})
export default class DeleteModal extends Vue {
  @Prop() show!: boolean;

  mounted() {
    if (this.show) {
      (this.$refs["deleteModal"] as any).show();
    }
  }
  onHide(event) {
    if (event.trigger === "backdrop") {
      this.handleBackdrop();
    }
  }
  handleBackdrop() {
    this.$emit("closeModal");
  }
  noDelete() {
    (this.$refs["deleteModal"] as any).hide();
    this.$emit("closeModal");
  }
}
</script>

<style scoped>
</style>
