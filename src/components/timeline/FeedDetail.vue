<template>
  <article class="post-open">
    <figure
      class="post-open-cover liquid"
      style="
        background: url('img/cover/19.jpg') center center / cover no-repeat;
      "
    >
      <img src="img/cover/19.jpg" alt="cover-19" style="display: none" />
    </figure>

    <div class="post-open-body">
      <div class="post-open-heading">
        <p class="post-open-timestamp">
          <span class="highlighted">2 days ago</span>5 mins read
        </p>

        <h2 class="post-open-title">
          Here's the how and why did I became a full time Gaming Streamer
        </h2>
      </div>

      <div class="post-open-content">
        <div class="post-open-content-sidebar">
          <div class="user-avatar small no-outline">
            <div class="user-avatar-content">
              <div
                class="hexagon-image-30-32"
                data-src="img/avatar/01.jpg"
                style="width: 30px; height: 32px; position: relative"
              >
                <canvas
                  width="30"
                  height="32"
                  style="position: absolute; top: 0px; left: 0px"
                ></canvas>
              </div>
            </div>

            <div class="user-avatar-progress">
              <div
                class="hexagon-progress-40-44"
                style="width: 40px; height: 44px; position: relative"
              >
                <canvas
                  width="40"
                  height="44"
                  style="position: absolute; top: 0px; left: 0px"
                ></canvas>
              </div>
            </div>

            <div class="user-avatar-progress-border">
              <div
                class="hexagon-border-40-44"
                style="width: 40px; height: 44px; position: relative"
              >
                <canvas
                  width="40"
                  height="44"
                  style="position: absolute; top: 0px; left: 0px"
                ></canvas>
              </div>
            </div>

            <div class="user-avatar-badge">
              <div class="user-avatar-badge-border">
                <div
                  class="hexagon-22-24"
                  style="width: 22px; height: 24px; position: relative"
                >
                  <canvas
                    width="22"
                    height="24"
                    style="position: absolute; top: 0px; left: 0px"
                  ></canvas>
                </div>
              </div>

              <div class="user-avatar-badge-content">
                <div
                  class="hexagon-dark-16-18"
                  style="width: 16px; height: 18px; position: relative"
                >
                  <canvas
                    width="16"
                    height="18"
                    style="position: absolute; top: 0px; left: 0px"
                  ></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="post-open-content-body">
          <div v-html="feed.content">{{ feed.content }}</div>
        </div>
      </div>

      <div class="content-actions">
        <div class="content-action"></div>

        <div class="content-action">
          <div class="meta-line">
            <p class="meta-line-link">{{feed.comment_cnt}} Comments</p>
          </div>
        </div>
      </div>

      <div class="post-options">
        <div class="post-option-wrap" style="position: relative">
          <div class="post-option reaction-options-dropdown-trigger">
            <svg class="post-option-icon icon-thumbs-up">
              <use xlink:href="#svg-thumbs-up"></use>
            </svg>

            <p class="post-option-text">React!</p>
          </div>

          <div
            class="reaction-options reaction-options-dropdown"
            style="
              position: absolute;
              z-index: 9999;
              bottom: 54px;
              left: -16px;
              opacity: 0;
              visibility: hidden;
              transform: translate(0px, 20px);
              transition: transform 0.3s ease-in-out 0s,
                opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s;
            "
          >
            <div
              class="reaction-option text-tooltip-tft"
              data-title="Like"
              style="position: relative"
            >
              <img
                class="reaction-option-image"
                src="img/reaction/like.png"
                alt="reaction-like"
              />

              <div
                class="xm-tooltip"
                style="
                  white-space: nowrap;
                  position: absolute;
                  z-index: 99999;
                  top: -28px;
                  left: 50%;
                  margin-left: -22px;
                  opacity: 0;
                  visibility: hidden;
                  transform: translate(0px, 10px);
                  transition: all 0.3s ease-in-out 0s;
                "
              >
                <p class="xm-tooltip-text">Like</p>
              </div>
            </div>

            <div
              class="reaction-option text-tooltip-tft"
              data-title="Love"
              style="position: relative"
            >
              <img
                class="reaction-option-image"
                src="img/reaction/love.png"
                alt="reaction-love"
              />

              <div
                class="xm-tooltip"
                style="
                  white-space: nowrap;
                  position: absolute;
                  z-index: 99999;
                  top: -28px;
                  left: 50%;
                  margin-left: -23.5px;
                  opacity: 0;
                  visibility: hidden;
                  transform: translate(0px, 10px);
                  transition: all 0.3s ease-in-out 0s;
                "
              >
                <p class="xm-tooltip-text">Love</p>
              </div>
            </div>

            <div
              class="reaction-option text-tooltip-tft"
              data-title="Dislike"
              style="position: relative"
            >
              <img
                class="reaction-option-image"
                src="img/reaction/dislike.png"
                alt="reaction-dislike"
              />

              <div
                class="xm-tooltip"
                style="
                  white-space: nowrap;
                  position: absolute;
                  z-index: 99999;
                  top: -28px;
                  left: 50%;
                  margin-left: -28px;
                  opacity: 0;
                  visibility: hidden;
                  transform: translate(0px, 10px);
                  transition: all 0.3s ease-in-out 0s;
                "
              >
                <p class="xm-tooltip-text">Dislike</p>
              </div>
            </div>

            <div
              class="reaction-option text-tooltip-tft"
              data-title="Happy"
              style="position: relative"
            >
              <img
                class="reaction-option-image"
                src="img/reaction/happy.png"
                alt="reaction-happy"
              />

              <div
                class="xm-tooltip"
                style="
                  white-space: nowrap;
                  position: absolute;
                  z-index: 99999;
                  top: -28px;
                  left: 50%;
                  margin-left: -27.5px;
                  opacity: 0;
                  visibility: hidden;
                  transform: translate(0px, 10px);
                  transition: all 0.3s ease-in-out 0s;
                "
              >
                <p class="xm-tooltip-text">Happy</p>
              </div>
            </div>

            <div
              class="reaction-option text-tooltip-tft"
              data-title="Funny"
              style="position: relative"
            >
              <img
                class="reaction-option-image"
                src="img/reaction/funny.png"
                alt="reaction-funny"
              />

              <div
                class="xm-tooltip"
                style="
                  white-space: nowrap;
                  position: absolute;
                  z-index: 99999;
                  top: -28px;
                  left: 50%;
                  margin-left: -27px;
                  opacity: 0;
                  visibility: hidden;
                  transform: translate(0px, 10px);
                  transition: all 0.3s ease-in-out 0s;
                "
              >
                <p class="xm-tooltip-text">Funny</p>
              </div>
            </div>

            <div
              class="reaction-option text-tooltip-tft"
              data-title="Wow"
              style="position: relative"
            >
              <img
                class="reaction-option-image"
                src="img/reaction/wow.png"
                alt="reaction-wow"
              />

              <div
                class="xm-tooltip"
                style="
                  white-space: nowrap;
                  position: absolute;
                  z-index: 99999;
                  top: -28px;
                  left: 50%;
                  margin-left: -24px;
                  opacity: 0;
                  visibility: hidden;
                  transform: translate(0px, 10px);
                  transition: all 0.3s ease-in-out 0s;
                "
              >
                <p class="xm-tooltip-text">Wow</p>
              </div>
            </div>

            <div
              class="reaction-option text-tooltip-tft"
              data-title="Angry"
              style="position: relative"
            >
              <img
                class="reaction-option-image"
                src="img/reaction/angry.png"
                alt="reaction-angry"
              />

              <div
                class="xm-tooltip"
                style="
                  white-space: nowrap;
                  position: absolute;
                  z-index: 99999;
                  top: -28px;
                  left: 50%;
                  margin-left: -26.5px;
                  opacity: 0;
                  visibility: hidden;
                  transform: translate(0px, 10px);
                  transition: all 0.3s ease-in-out 0s;
                "
              >
                <p class="xm-tooltip-text">Angry</p>
              </div>
            </div>

            <div
              class="reaction-option text-tooltip-tft"
              data-title="Sad"
              style="position: relative"
            >
              <img
                class="reaction-option-image"
                src="img/reaction/sad.png"
                alt="reaction-sad"
              />

              <div
                class="xm-tooltip"
                style="
                  white-space: nowrap;
                  position: absolute;
                  z-index: 99999;
                  top: -28px;
                  left: 50%;
                  margin-left: -21.5px;
                  opacity: 0;
                  visibility: hidden;
                  transform: translate(0px, 10px);
                  transition: all 0.3s ease-in-out 0s;
                "
              >
                <p class="xm-tooltip-text">Sad</p>
              </div>
            </div>
          </div>
        </div>

        <div class="post-option active">
          <svg class="post-option-icon icon-comment">
            <use xlink:href="#svg-comment"></use>
          </svg>

          <p class="post-option-text">Comment</p>
        </div>

        <div class="post-option">
          <svg class="post-option-icon icon-share">
            <use xlink:href="#svg-share"></use>
          </svg>

          <p class="post-option-text">Share</p>
        </div>
      </div>

      <div id="comments" class="post-comment-list">
        <comment-list :postId="feedId"></comment-list>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CommentList from "./CommentList.vue";

@Component({
  components: {CommentList},
})
export default class FeedDetail extends Vue {
  private feedId = parseInt(this.$route.params.feedId);
  private feed: any = null;

  created() {
    console.log(this.feedId);
    this.feed = this.$api.getFeed(this.feedId);
  }
}
</script>

<style scoped>
</style>
