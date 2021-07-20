<template>
  <div class="category-list">
    <v-popover offset="16">
      <button>
        <svg
          class="icon-plus-small action-list-item category-dropdown-trigger"
          style="fill: #fff"
        >
          <use xlink:href="#svg-plus-small"></use>
        </svg>

        <div class="category-title">
          <p>Add Category</p>
        </div>
      </button>

      <template slot="popover">
        <v-popover offset="16" popoverBaseClass="tooltip customPopover">
          <b-button v-close-popover>Community</b-button>
          <template slot="popover">
            <v-popover popoverBaseClass="tooltip customPopover-2">
              <b-button
                v-close-popover
                v-for="community in communityList"
                :key="community.id"
                @click="selectCommunity(community)"
                >{{ community.name }}</b-button
              >
              <template slot="popover">
                <b-button
                  v-close-popover
                  @click="selectCategory(channel)"
                  v-for="channel in channelList"
                  :key="channel.id"
                  >{{ channel.name }}</b-button
                >
              </template>
            </v-popover>
          </template>
        </v-popover>

        <!-- <b-button>My game</b-button>
        <b-button>My portfolio</b-button> -->

        <!-- <a v-close-popover>Close</a> -->
      </template>
    </v-popover>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Tooltip extends Vue {
  private communityList: any[] = [];
  private channelList: any[] = [];

  private selectedCommunity: any = "";

  async mounted() {
    this.communityList = await this.$api.getCommunityList();
  }
  async selectCommunity(community) {
    this.selectedCommunity = community;
    this.channelList = await this.$api.getCommunityChannel(community.id);
  }
  selectCategory(channel) {
    this.$emit("community", this.selectedCommunity);
    this.$emit("channel", channel);
    console.log("selected", channel, this.selectedCommunity);
  }
}
</script>

<style lang="scss" scoped>
.tooltip {
  &.popover {
    $color: #f9f9f9;

    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, 0.1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }
}
</style>
