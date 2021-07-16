<template>
    <div class="content-grid">
        <div class="profile-header v2">
            <figure class="profile-header-cover liquid">
                <div
                    style="background-color: #fff; width: 100%; height: 100%"
                ></div>
            </figure>

            <div class="profile-header-info">
                <div class="user-short-description big">
                    <a class="user-short-description-avatar user-avatar big">
                        <div class="user-avatar-border">
                            <div class="hexagon-148-164"></div>
                        </div>

                        <div class="user-avatar-content">
                            <div
                                class="hexagon-image-100-110"
                                :data-src="game && game.url_thumb_webp"
                            ></div>
                        </div>

                        <div class="user-avatar-progress">
                            <div class="hexagon-progress-124-136"></div>
                        </div>

                        <div class="user-avatar-progress-border">
                            <div class="hexagon-border-124-136"></div>
                        </div>
                    </a>

                    <a
                        class="
                            user-short-description-avatar
                            user-short-description-avatar-mobile
                            user-avatar
                            medium
                        "
                        href="profile-timeline.html"
                    >
                        <div class="user-avatar-border">
                            <div class="hexagon-120-132"></div>
                        </div>

                        <div class="user-avatar-content">
                            <div
                                class="hexagon-image-82-90"
                                :data-src="game && game.url_thumb"
                            ></div>
                        </div>

                        <div class="user-avatar-progress">
                            <div class="hexagon-progress-100-110"></div>
                        </div>

                        <div class="user-avatar-progress-border">
                            <div class="hexagon-border-100-110"></div>
                        </div>
                    </a>

                    <p class="user-short-description-title">
                        {{ game && game.title }}
                        <small>by @{{ game.user && game.user.name }}</small>
                    </p>

                    <div class="tag-list">
                        <router-link
                            class="tag-item secondary"
                            :to="`/search?hashtag=${hashtag}`"
                            v-for="hashtag in hashtags"
                            :key="hashtag"
                            >{{ hashtag }}</router-link
                        >
                    </div>
                </div>

                <div class="profile-header-info-actions">
                    <p
                        class="profile-header-info-action button primary"
                        @click="playGame"
                    >
                        Play game
                    </p>
                    <!-- v-if="user && user.uid !== game.user.uid" -->
                    <p
                        class="profile-header-info-action button secondary"
                        @click="subscribe"
                    >
                        Subscribe +
                    </p>
                </div>
            </div>
        </div>
        <nav class="section-navigation">
            <div
                id="section-navigation-medium-slider"
                class="section-menu secondary"
            >
                <router-link
                    class="section-menu-item"
                    :to="`/timeline/game/${game.pathname}`"
                    :class="
                        $route.name === 'GameTimeline' &&
                        Object.keys($route.query).length === 0
                            ? 'active'
                            : ''
                    "
                >
                    <svg class="section-menu-item-icon icon-timeline">
                        <use xlink:href="#svg-timeline"></use>
                    </svg>

                    <p class="section-menu-item-text">Timeline</p>
                </router-link>

                <router-link
                    class="section-menu-item"
                    :to="`/timeline/game/${game.pathname}?media=sns`"
                    :class="$route.query.media === 'sns' ? 'active' : ''"
                >
                    <svg class="section-menu-item-icon icon-forums">
                        <use xlink:href="#svg-forums"></use>
                    </svg>
                    <p class="section-menu-item-text">SNS</p>
                </router-link>

                <router-link
                    class="section-menu-item"
                    :to="`/timeline/game/${game.pathname}?media=blog`"
                    :class="$route.query.media === 'blog' ? 'active' : ''"
                >
                    <svg class="section-menu-item-icon icon-forum">
                        <use xlink:href="#svg-forum"></use>
                    </svg>

                    <p class="section-menu-item-text">Blog</p>
                </router-link>

                <router-link
                    class="section-menu-item"
                    :to="`/timeline/game/${game.pathname}?media=image`"
                    :class="$route.query.media === 'image' ? 'active' : ''"
                >
                    <svg class="section-menu-item-icon icon-photos">
                        <use xlink:href="#svg-photos"></use>
                    </svg>

                    <p class="section-menu-item-text">Photos</p>
                </router-link>

                <router-link
                    class="section-menu-item"
                    :to="`/timeline/game/${game.pathname}?media=video`"
                    :class="$route.query.media === 'video' ? 'active' : ''"
                >
                    <svg class="section-menu-item-icon icon-videos">
                        <use xlink:href="#svg-videos"></use>
                    </svg>

                    <p class="section-menu-item-text">Videos</p>
                </router-link>
            </div>

            <div
                id="section-navigation-medium-slider-controls"
                class="slider-controls"
            >
                <div class="slider-control left">
                    <svg class="slider-control-icon icon-small-arrow">
                        <use xlink:href="#svg-small-arrow"></use>
                    </svg>
                </div>

                <div class="slider-control right">
                    <svg class="slider-control-icon icon-small-arrow">
                        <use xlink:href="#svg-small-arrow"></use>
                    </svg>
                </div>
            </div>
        </nav>

        <router-view :game="game"></router-view>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";

import Hexagon from "@/plugins/hexagon";
import { User } from "@/types";

@Component({
    computed: { ...mapGetters(["user"]) },
    components: {},
})
export default class GameHeader extends Vue {
    private hexagon: Hexagon = new Hexagon();

    private gamePathname = this.$route.params.game_pathname;
    private game: any = {};

    private user!: User;

    private hashtags: string[] = [];
    private userInfo: any = [];
    private followingCnt: number = 0;
    private followerCnt: number = 0;

    async mounted() {
        this.hexagon.init();
        const result = await this.$api.game(this.gamePathname);
        this.game = result.game;
        this.hashtags = this.game.hashtags.split(",");

        console.log(this.game);
    }

    subscribe() {}

    playGame() {
        console.log("?")
        this.$router.push(`/play/${this.game.pathname}`);
    }
}
</script>

<style scoped>
svg {
    vertical-align: middle;
}
figure > div {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}
.tag-list {
    justify-content: center;
    margin-top: 5px;
}
.profile-header-info-actions .button {
    width: 105px !important;
}
</style>
