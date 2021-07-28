<template>
    <div class="widget-box">
        <div class="widget-box-title">
            <p>Portfolio</p>
            <router-link class="add-game-tooltip" data-title="Add Portfolio" to="/createPortfolio">
                <svg
                    class="
                        icon-plus-small
                        action-list-item
                        category-dropdown-trigger
                    "
                    ref="dropdown"
                    style="fill: #fff"
                >
                    <use xlink:href="#svg-plus-small"></use>
                </svg>
            </router-link>
        </div>
        <div class="widget-box-content">
            <template v-for="portfolio in portfolios">
                <div
                    :key="portfolio.id"
                    class="user-status-list"
                    @click="movePortfolio(portfolio.id)"
                    :id="portfolio.id"
                >
                    <span class="portfolio-title">{{ portfolio.title }}</span>

                    <div
                        :style="`background: url(${
                            portfolio.thumbnail_img || 'img/channel_banner.png'
                        }) center center / cover no-repeat;`"
                        class="thumb img portfolio-img"
                    />
                    <!-- <b-img
                        class="portfolio-img"
                        :src="`${portfolio.thumbnail_img}`"
                    /> -->
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class PortfolioList extends Vue {
    @Prop() userUid!: string;
    private portfolios: any = "";

    async mounted() {
        this.portfolios = await this.$api.portfolioList(this.userUid);
        console.log(this.portfolios);
    }
    addPortfolio(){
        console.log("add pf")
    }
}
</script>

<style lang="scss" scoped>
.portfolio-img {
    width: 100%;
    height: 65px;
    border-radius: 7px;
    margin-bottom: 10px;
    opacity: 50%;
}
.portfolio-img:hover,
.user-status-list.active .portfolio-img {
    opacity: 100%;
    cursor: pointer;
}
.user-status-list.active .portfolio-title {
    background-color: #fff;
    color: #1d2333;
}
.portfolio-title {
    border-radius: 6px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 600;
    padding: 2px 6px;
    background-color: #1d2333;
    color: #fff;
    position: absolute;
    z-index: 3;
    margin: 8px;
    display: flex;
    justify-content: space-between;
}

.widget-box-title {
    display: flex;
    justify-content: center;
    align-items: baseline;

    svg {
        position: absolute !important;
        left: 78px !important;
        bottom: 0px !important;
        cursor: pointer;
    }
}
</style>
