<template>
    <div>
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="0"
            controls
            indicators
            background="#000"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
            <b-carousel-slide
                class="img"
                v-for="img in imgObj"
                :img-src="img.url"
                :key="img.id"
            ></b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class Carousel extends Vue {
    @Prop() imgObj!: any;
    slide: number = 0;
    sliding: boolean | null = null;

    onSlideStart(slide: boolean) {
        this.sliding = true;
    }
    onSlideEnd(slide: boolean) {
        this.sliding = false;
    }
}
</script>

<style scoped>
.img{
    width:100%; 
    min-height: 300px;
}
</style>
