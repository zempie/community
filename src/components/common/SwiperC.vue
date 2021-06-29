<template>
    <div>
        <swiper
            class="swiper"
            :options="swiperOption"
            @click-slide="enlargeImg"
        >
            <swiper-slide
                :style="`background-image:url('${img.url}')`"
                class="img"
                v-for="img in imgObj"
                :key="img.id"
            ></swiper-slide>

            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>

        <!-- <div class="modal-container">
            <b-modal ref="imgModal" hide-footer hide-header centered>
                <modal-img
                    v-if="enlargedObj"
                    :enlargedObj="enlargedObj"
                    @imgWidth="getImgWidth"
                ></modal-img>
            </b-modal>
        </div> -->
        <!-- <div class="example-modal-window">
            <modal-img
            style="backgroundcolor: red"
                @close="closeModal"
                v-if="modal"
                :enlargedObj="enlargedObj"
            >
            </modal-img>
        </div> -->
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import ModalImg from "@/components/common/ModalImg.vue";

@Component({
    components: { Swiper, SwiperSlide, ModalImg },
})
export default class SwiperC extends Vue {
    @Prop() imgObj!: any;
    @Prop() feedId!: number;
    private enlargedObj: any = null;
    private imgWidth: string = "";
    modal: boolean = false;

    swiperOption: any = {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    };

    enlargeImg(index: number) {
        this.modal = true;
        // (this.$refs["imgModal"] as any).show();

        this.enlargedObj = this.imgObj[index];
    }
    getImgWidth(val: any) {
        // this.imgWidth = `width:${val}px`;
        console.log("width: ", val);
    }
    openModal() {
        this.modal = true;
    }
    closeModal() {
        this.modal = false;
    }
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
