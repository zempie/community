<template>
    <!-- SIMPLE DROPDOWN -->
              <div class="simple-dropdown widget-box-post-settings-dropdown">
                <!-- SIMPLE DROPDOWN LINK -->
                <p class="simple-dropdown-link">포스팅 수정</p>
                <!-- /SIMPLE DROPDOWN LINK -->

                <!-- SIMPLE DROPDOWN LINK -->
                <p class="simple-dropdown-link">포스팅 삭제</p>
                <!-- /SIMPLE DROPDOWN LINK -->


                <!-- SIMPLE DROPDOWN LINK -->
                <p class="simple-dropdown-link">포스팅 신고</p>
                <!-- /SIMPLE DROPDOWN LINK -->

                <!-- SIMPLE DROPDOWN LINK -->
                <p class="simple-dropdown-link">작성자 신고</p>
                <!-- /SIMPLE DROPDOWN LINK -->
              </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class Dropdown extends Vue {}
</script>

<style scoped>
</style>
