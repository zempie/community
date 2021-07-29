<template>
    <div class="widget-box">
        <p class="widget-box-title">Screenshot</p>
        <b-carousel
            class="carousel"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            style="text-shadow: 1px 1px 2px #333"
        >
            <b-carousel-slide
                v-for="img in imgList"
                :key="img.id"
                :style="`background:url(${img.url}) center
                                center / cover no-repeat; height:400px; border-radius:12px;`"
            ></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script lang="ts">
import { file } from "@/types";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class GameScreenshot extends Vue {
    @Prop() gameId!: number;
    private imgList: file[] = [];

    async mounted() {
        this.imgList = await this.$api.screenshot(this.gameId);
    }
}
</script>

<style scoped lang="scss">
.carousel {
    height: 400px;
    border-radius: 12px;
    box-shadow: 0 0 40px 0 rgb(0 0 0 / 6%);
    position: relative;
}
.widget-box {
    padding: 0;
    .widget-box-title {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
