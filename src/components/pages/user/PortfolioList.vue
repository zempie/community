<template>
    <div class="widget-box">
        <p class="widget-box-title">Portfolio</p>
        <div class="widget-box-content">
            <template v-for="portfolio in portfolios">
                <div
                    :key="portfolio.id"
                    class="user-status-list"
                    @click="movePortfolio(portfolio.id)"
                    :id="portfolio.id"
                >
                    <span class="portfolio-title">{{ portfolio.title }}</span>
                    <b-img
                        class="portfolio-img"
                        :src="`${portfolio.thumbnail_img}`"
                    />
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
        console.log("userUid", this.userUid);
        this.portfolios = await this.$api.portfolioList(this.userUid);
        console.log(this.portfolios);
    }
}
</script>

<style scoped>
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
</style>
