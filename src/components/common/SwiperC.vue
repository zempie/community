<template>
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide
            :style="`background-image:url('${img.url}')`"
            class="img"
            v-for="img in imgObj"
            :key="img.id"
        ></swiper-slide>

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

@Component({
    components: { Swiper, SwiperSlide },
})
export default class SwiperC extends Vue {
    @Prop() imgObj!: any;
    @Prop() feedId!: number;

    swiperOption: any = {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    };
}
</script>

<style lang="scss" scoped>
.img {
    width: 100%;
    min-height: 300px;
}
.swiper-slide {
    background-position: center;
    background-size: cover;
}
</style>
