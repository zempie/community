<template>
    <div class="widget-box">
        <div class="widget-box-title">
            <p>Games</p>
            <div
                class="add-game-tooltip"
                data-title="Add Game"
                @click="addGame"
            >
                <!-- <svg
                    class="
                        icon-plus-small
                        action-list-item
                        category-dropdown-trigger
                    "
                    ref="dropdown"
                    style="fill: #fff"
                >
                    <use xlink:href="#svg-plus-small"></use>
                </svg> -->

                <div class="percentage-diff-icon-wrap positive">
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
                </div>
            </div>
        </div>
        <div class="widget-box-content">
            
            <template v-for="game in games">
                <div
                    :key="game.id"
                    class="user-status-list"
                    @click="moveGameChannel(game)"
                    :id="game.id"
                >
                    <span class="game-title">{{ game.title }}</span>

                    <div
                        :style="`background: url(${
                            game.url_thumb_webp ||
                            game.url_thumb ||
                            'img/default.png'
                        }) center center / cover no-repeat;`"
                        class="thumb img game-img"
                    />
                </div>
            </template>
            <router-link
                v-if="games.length > 0"
                class="user-status-list all-btn"
                :to="`/channel/${userUid}/games`"
                >View all</router-link
            >
            <div v-if="games.length === 0">
                <p @click="addGame" style="cursor: pointer">
                    게임 등록 하실래요?
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
@Component({
    components: {},
})
export default class GameList extends Vue {
    @Prop() userUid!: string;
    private games: any[] = [];

    private user: any = null;

    async mounted() {
        this.gameList();
        console.log(this.games);
    }

    moveGameChannel(game: any) {
        this.$router.push(`/timeline/game/${game.pathname}`);
    }
    addGame() {
        // if (this.$store.getters.user.is_developer) {
        window.location.href = this.$store.getters.studioUrl + "selectStage";
        // }
    }
    @Watch("$store.getters.userInfo")
    watchUserInfo() {
        this.gameList();
    }

    gameList() {
        console.log(this.$store.getters.userInfo.dev_games);
        if (
            this.$store.getters.userInfo.dev_games &&
            this.$store.getters.userInfo.dev_games.length >= 5
        ) {
            this.games = this.$store.getters.userInfo.dev_games.slice(0, 5);
        } else if (
            this.$store.getters.userInfo.dev_games &&
            this.$store.getters.userInfo.dev_games.length > 0 &&
            this.$store.getters.userInfo.dev_games.length < 5
        ) {
            this.games = this.$store.getters.userInfo.dev_games;
        }
    console.log('this.games', this.games)
    }
}
</script>

<style lang="scss" scoped>
.game-img {
    width: 100%;
    height: 65px;
    border-radius: 7px;
    margin-bottom: 10px;
    opacity: 50%;
}
.game-img:hover,
.user-status-list.active .game-img {
    opacity: 100%;
    cursor: pointer;
}
.user-status-list.active .game-title {
    background-color: #fff;
    color: #1d2333;
}
.game-title {
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

    .percentage-diff-icon-wrap {
        position: absolute !important;
        left: 78px !important;
        bottom: 0px !important;
        cursor: pointer;
        border-color: #fff;
    }
}
.all-btn {
    border-radius: 6px;
    border: 1px solid #9aa4bf;
    color: #fff;
    font-size: 0.75rem;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.all-btn:hover {
    color: #1d2333;
    background: #fff;
}
</style>
