<template>
    <div class="grid-column">
        <div class="section">
            <div class="section-header">
                <div class="section-header-info">
                    <p class="section-pretitle">Channels</p>

                    <h2 class="section-title">Manage Channel</h2>
                </div>
            </div>

            <div class="grid grid-3-3-3 centered-on-mobile">
                <div class="create-entity-box">
                    <div class="create-entity-box-cover"></div>

                    <div class="create-entity-box-avatar">
                        <svg class="create-entity-box-avatar-icon icon-group">
                            <use xlink:href="#svg-group"></use>
                        </svg>
                    </div>

                    <div class="create-entity-box-info">
                        <p class="create-entity-box-title">Create New Group</p>

                        <p class="create-entity-box-text">
                            Share your passion with others!
                        </p>

                        <p
                            class="
                                button
                                secondary
                                full
                                popup-manage-group-trigger
                            "
                        >
                            Start Creating!
                        </p>
                    </div>
                </div>

                <div class="user-preview small fixed-height-medium">
                    <figure
                        class="user-preview-cover liquid"
                        style="
                            background: url('img/cover/29.jpg') center center /
                                cover no-repeat;
                        "
                    >
                        <img
                            src="img/cover/29.jpg"
                            alt="cover-29"
                            style="display: none"
                        />
                    </figure>

                    <div class="user-preview-info">
                        <div class="user-short-description small">
                            <a
                                class="
                                    user-short-description-avatar user-avatar
                                    no-stats
                                "
                                href="group-timeline.html"
                            >
                                <div class="user-avatar-border">
                                    <div
                                        class="hexagon-100-108"
                                        style="
                                            width: 100px;
                                            height: 108px;
                                            position: relative;
                                        "
                                    >
                                        <canvas
                                            width="100"
                                            height="108"
                                            style="
                                                position: absolute;
                                                top: 0px;
                                                left: 0px;
                                            "
                                        ></canvas>
                                    </div>
                                </div>

                                <div class="user-avatar-content">
                                    <div
                                        class="hexagon-image-84-92"
                                        data-src="img/avatar/24.jpg"
                                        style="
                                            width: 84px;
                                            height: 92px;
                                            position: relative;
                                        "
                                    >
                                        <canvas
                                            width="84"
                                            height="92"
                                            style="
                                                position: absolute;
                                                top: 0px;
                                                left: 0px;
                                            "
                                        ></canvas>
                                    </div>
                                </div>
                            </a>

                            <p class="user-short-description-title small">
                                <a href="group-timeline.html"
                                    >Cosplayers of the World</a
                                >
                            </p>

                            <p class="user-short-description-text regular">
                                Group Organizer
                            </p>
                        </div>

                        <p class="button white full popup-manage-group-trigger">
                            Manage Group
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class ManageChannel extends Vue {}
</script>

<style scoped>
</style>
