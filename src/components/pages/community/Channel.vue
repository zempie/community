<template>
    <div
        class="user-status-list"
        @click="moveChannel(channel.id)"
        :id="channel.id"
    >
        <span class="channel-title">{{ channel.name }}</span>
        <img class="channel-img" :src="`${channel.profile_img}`" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class Channel extends Vue {
    @Prop() channel!: any;
    @Prop() communityId!: number;

    private timeline: any;
    private channelId: any = -1;

    moveChannel(id?: number) {
        this.timeline = this.$api.getTimeline(
            this.communityId,
            this.channel.id
        );
        this.$emit("channelId", id);
        this.$emit("channelTimeline", this.timeline);
    }
}
</script>

<style scoped>
.channel-img {
    width: 100%;
    height: 65px;
    border-radius: 7px;
    margin-bottom: 10px;
    opacity: 50%;
}
.channel-img:hover,
.user-status-list.active .channel-img {
    opacity: 100%;
    cursor: pointer;
}
.user-status-list.active .channel-title {
    background-color: #fff;
    color: #1d2333;
}
.channel-title {
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
    font-family: "Rajdhani", sans-serif;
}
</style>
