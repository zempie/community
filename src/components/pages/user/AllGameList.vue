<template>
    <div class="grid-column">
        <section class="section">
            <div class="section-header">
                <div class="section-header-info">
                    <!-- <p class="section-pretitle">Browse {{ tlUser.name }}'s</p> -->

                    <h2 class="section-title">
                        Games<span class="highlighted secondary">{{
                            gameList.length
                        }}</span>
                    </h2>
                </div>

                <div
                    class="section-header-actions"
                    v-if="user.uid === tlUser.uid"
                >
                    <p
                        class="
                            section-header-action
                            popup-album-creation-trigger
                        "
                        @click="addGame"
                    >
                        Add Game +
                    </p>
                </div>
            </div>

            <div class="grid grid-3-3-3-3">
                <router-link
                    class="album-preview"
                    v-for="game in gameList"
                    :to="`/timeline/game/${game.pathname}/timeline`"
                    :key="game.id"
                >
                    <figure
                        class="album-preview-image liquid"
                        :style="`background: url('${
                            game.url_thumb_webp ||
                            game.url_thumb ||
                            'img/default.png'
                        }') center center / cover no-repeat;`"
                    >
                        <img
                            :src="game.url_thumb"
                            alt="album-image-01"
                            style="display: none"
                        />
                    </figure>

                    <p class="text-sticker small negative">
                        {{ game.count_heart }}
                    </p>

                    <div class="album-preview-info">
                        <p class="album-preview-title">{{ game.title }}</p>

                        <p class="album-preview-text">
                            Version {{ game.version }}
                        </p>
                    </div>
                </router-link>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { Game, User } from "@/types";

@Component({
    computed: { ...mapGetters(["user"]) },
    components: {},
})
export default class AllGameList extends Vue {
    private gameList: Game[] = [];
    private tlUser: any = "";
    private user!: User;

    async mounted() {
        await this.$store.dispatch("loginState");
        this.tlUser = this.$store.getters.userInfo;
        console.log(this.tlUser)
        this.gameList = this.$store.getters.userInfo.dev_games;

    }
    @Watch("$store.getters.userInfo")
    watchUserInfo() {
        console.log("watchUserInfo AllGameLists", this.$store.getters.userInfo);
        this.gameList = this.$store.getters.userInfo.dev_games;
    }
    addGame() {
        if (this.$store.getters.user.is_developer) {
            window.location.href =
                this.$store.getters.studioUrl + "selectStage";
        }
    }
}
</script>

<style scoped>
.section-header{
    margin-top: 32px;
}
</style>
