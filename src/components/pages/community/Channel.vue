<template>
    <div>
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
.channel-img:hover {
    opacity: 100%;
    cursor: pointer;
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
