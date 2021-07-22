<template>
  <b-modal
    class="modal-container"
    centered
    hide-header
    hide-footer
    no-close-on-backdrop
    ref="deleteModal"
  >
    <p class="my-4" style="color: #000">정말 삭제하시겠습니까?</p>

    <div>
      <button class="popup-box-action half button tertiary" style="width: 47%">
        네, 삭제하겠습니다.
      </button>
      <button class="popup-box-action half button" style="width: 47%">
        아니오
      </button>
    </div>
  </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class DeleteModal extends Vue {
  @Prop() show!: boolean;

  mounted() {
    console.log(this.show);
    if (this.show) {
       (this.$refs["deleteModal"] as any).show();
    }
  }
}
</script>

<style scoped>
</style>
