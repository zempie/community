<template>
    <div>
        <b-carousel
            :id="`carousel${feedId}`"
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
    @Prop() feedId!: number;
    slide: number = 0;
    sliding: boolean | null = null;

    private isDrag: boolean = false;
    private pos = { top: 0, left: 0, x: 0, y: 0 };
    private elem: any;

    mounted() {
        console.log(this.feedId);
        this.$nextTick(() => {
            this.elem = document.getElementById(`carousel${this.feedId}`)!;
            this.elem.addEventListener("mousedown", this.mouseDownHandler);
            // this.elem.addEventListener("mouseup", this.mouseUpHandler);
        });
    }

    onSlideStart(slide: boolean) {
        this.sliding = true;
    }
    onSlideEnd(slide: boolean) {
        this.sliding = false;
    }

    mouseDownHandler(e: MouseEvent): void {
        console.log("mouseDown")
        this.isDrag = false;

        this.pos = {
            left: this.elem.scrollLeft,
            top: this.elem.scrollTop,
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener("mousemove", this.mouseMoveHandler);
        document.addEventListener("mouseup", this.mouseUpHandler);
    }
    mouseUpHandler(): void {
        console.log("mouseup")
        document.removeEventListener("mousemove", this.mouseMoveHandler);
        document.removeEventListener("mouseup", this.mouseUpHandler);
    }

    mouseMoveHandler(e: MouseEvent): void {
        this.isDrag = true;
        const dx = e.clientX - this.pos.x;

        console.log("dx", dx);
        
    }
}
</script>

<style scoped>
.img {
    width: 100%;
    min-height: 300px;
}
</style>
