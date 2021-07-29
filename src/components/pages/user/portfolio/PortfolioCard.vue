<template>
    <router-link
        :to="`/channel/${portfolio.user_uid}/portfolio/${portfolio.id}/timeline`"
        class="product-preview"
    >
        <figure
            class="product-preview-image liquid"
            :style="`background: url(${portfolio.thumbnail_img}) center center / cover no-repeat;`"
        >
            <img
                :src="portfolio.thumbnail_img"
                alt="item-01"
                style="display: none"
            />
        </figure>

        <div class="product-preview-info">
            <p class="product-preview-title">
                {{ portfolio.title }}
            </p>

            <p class="product-preview-text">
                {{ portfolio.description }}
            </p>
        </div>

        <div class="product-preview-meta">
            <div class="product-preview-author">
                <p class="product-preview-author-text">Last updated on</p>
            </div>
            <div class="product-preview-author">
                <p class="product-preview-author-text">
                    {{ latestDate }}
                </p>
            </div>
        </div>
    </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Hexagon from "@/plugins/hexagon";
import { Portfolio } from "@/types/index";
import { dateFormat } from "@/script/moment";
@Component({
    components: {},
})
export default class PortfolioCard extends Vue {
    @Prop() portfolio!: Portfolio;
    private hexagon: Hexagon = new Hexagon();
    private latestDate: string = "";
    mounted() {
        this.hexagon.init();
        console.log(this.portfolio)
        this.latestDate = dateFormat(this.portfolio.latest_update!);
    }
}
</script>

<style scoped>
svg {
    vertical-align: middle;
}
</style>
