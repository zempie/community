<template>
    <transition name="modal" appear>
        <div class="modal modal-overlay" @click.self="$emit('close')">
            <swiper ref="mySwiper" :options="swiperOption">
                <swiper-slide>   <b-img :src="enlargedObj.url" ref="enlargedImg" /></swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
            <!-- <div class="modal-window">
                <b-img :src="enlargedObj.url" ref="enlargedImg" />
            </div> -->
        </div>
    </transition>
    <!--  -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";

@Component({
    // components: { Swiper, SwiperSlide },
})
export default class ModalImg extends Vue {
    @Prop() enlargedObj!: any;

    private imgWidth: number = 0;

    swiperOption: any = {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    };

    mounted() {
        let img = new Image();
        img.onload = () => {
            console.log(img.width);
            this.$emit("imgWidth", img.width);
        };
        img.src = this.enlargedObj.url;
        // this.imgWidth = (this.$refs.enlargedImg as any).clientWidth;
    }
}
</script>

<style lang="scss" scoped>
.modal {
    &.modal-overlay {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        z-index: 30;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }

    &-window {
        background: #fff;
        border-radius: 4px;
        overflow: hidden;
    }

    &-content {
        padding: 10px 20px;
    }

    &-footer {
        background: #ccc;
        padding: 10px;
        text-align: right;
    }
}

// 오버레이 트랜지션
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.4s;

    // 오버레이에 포함되어 있는 모달 윈도의 트랜지션
    .modal-window {
        transition: opacity 0.4s, transform 0.4s;
    }
}

// 딜레이가 적용된 모달 윈도가 제거된 후에 오버레이가 사라짐
.modal-leave-active {
    transition: opacity 0.6s ease 0.4s;
}

.modal-enter,
.modal-leave-to {
    opacity: 0;

    .modal-window {
        opacity: 0;
        transform: translateY(-20px);
    }
}
</style>
