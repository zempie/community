<template>
    <div class="widget-box">
        <div class="widget-box-title">
            <p>Games</p>
            <div class="add-game-tooltip" data-title="Add Game">
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
            <div class="user-status-list all-btn">View all</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
    components: {},
})
export default class GameList extends Vue {
    @Prop() userUid!: string;
    private games: any[] = [];

    private user: any = null;

    async mounted() {
        const loginState = await this.$store.dispatch("loginState");
        await this.init();
    }

    async init() {
        const result = await this.$api.channel(this.userUid);

        if (!result || result.error) {
            console.error(result);
        } else {
            const { target } = result;
            this.user = target;
            const { dev_games } = this.user;
            if (dev_games) {
                const arr = [];
                for (let i = 0; i < dev_games.length; i++) {
                    dev_games[i].user = this.user;
                    if (dev_games[i].activated) {
                        arr.push(dev_games[i]);
                    }
                }
                this.games = arr;
            }

            if (this.games.length > 5) {
                this.games = this.games.splice(0, 5);
            }
            // this.email = this.user.email;
            // this.description = this.user.profile.description;

            document.title = this.user.name;
        }
    }

    moveGameChannel(game: any) {
        this.$router.push(`/timeline/game/${game.pathname}`);
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

    svg {
        position: absolute !important;
        left: 78px !important;
        bottom: 0px !important;
        cursor: pointer;
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
</style>
