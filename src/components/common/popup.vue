<template>
    <div class="popup-container">
        <div class="popup-close-button popup-event-creation-trigger" @click="closePopup">
            <!-- POPUP CLOSE BUTTON ICON -->
            <svg class="popup-close-button-icon icon-cross">
                <use xlink:href="#svg-cross"></use>
            </svg>
            <!-- /POPUP CLOSE BUTTON ICON -->
        </div>
        <!-- FORM -->
        <form class="form">
            <!-- FORM ROW -->
            <div class="form-row">
                <!-- FORM ITEM -->
                <div class="form-item">
                    <!-- FORM SELECT -->
                    <div class="form-select">
                        <label for="event-category">Category</label>
                        <select id="event-category" name="event_category">
                            <option value="0">Big Events</option>
                            <option value="1">Small Events</option>
                            <option value="2">Gaming Events</option>
                            <option value="3">Cosplay Events</option>
                        </select>
                        <!-- FORM SELECT ICON -->
                        <svg class="form-select-icon icon-small-arrow">
                            <use xlink:href="#svg-small-arrow"></use>
                        </svg>
                        <!-- /FORM SELECT ICON -->
                    </div>
                    <!-- /FORM SELECT -->
                </div>
                <!-- /FORM ITEM -->
            </div>
            <!-- /FORM ROW -->

            <!-- FORM ROW -->
            <div class="form-row">
                <!-- FORM ITEM -->
                <div class="form-item">
                    <!-- FORM INPUT -->
                    <div class="form-input small">
                        <label for="event-name">Event Name</label>
                        <input type="text" id="event-name" name="event_name" />
                    </div>
                    <!-- /FORM INPUT -->
                </div>
                <!-- /FORM ITEM -->
            </div>
            <!-- /FORM ROW -->

            <!-- FORM ROW -->
            <div class="form-row">
                <!-- FORM ITEM -->
                <div class="form-item">
                    <!-- FORM INPUT DECORATED -->
                    <div class="form-input-decorated">
                        <!-- FORM INPUT -->
                        <div class="form-input small">
                            <label for="event-location">Event Location</label>
                            <input
                                type="text"
                                id="event-location"
                                name="event_location"
                            />
                        </div>
                        <!-- /FORM INPUT -->

                        <!-- FORM INPUT ICON -->
                        <svg class="form-input-icon icon-pin">
                            <use xlink:href="#svg-pin"></use>
                        </svg>
                        <!-- /FORM INPUT ICON -->
                    </div>
                    <!-- /FORM INPUT DECORATED -->
                </div>
                <!-- /FORM ITEM -->
            </div>
            <!-- /FORM ROW -->

            <!-- FORM ROW -->
            <div class="form-row">
                <!-- FORM ITEM -->
                <div class="form-item">
                    <!-- FORM INPUT DECORATED -->
                    <div class="form-input-decorated">
                        <!-- FORM INPUT -->
                        <div class="form-input small">
                            <label for="event-date">Event Date</label>
                            <input
                                type="text"
                                id="event-date"
                                name="event_date"
                            />
                        </div>
                        <!-- /FORM INPUT -->

                        <!-- FORM INPUT ICON -->
                        <svg class="form-input-icon icon-events">
                            <use xlink:href="#svg-events"></use>
                        </svg>
                        <!-- /FORM INPUT ICON -->
                    </div>
                    <!-- /FORM INPUT DECORATED -->
                </div>
                <!-- /FORM ITEM -->
            </div>
            <!-- /FORM ROW -->

            <!-- FORM ROW -->
            <div class="form-row">
                <!-- FORM ITEM -->
                <div class="form-item split join-on-mobile medium">
                    <!-- FORM SELECT -->
                    <div class="form-select">
                        <label for="event-time-start">Start Time</label>
                        <select id="event-time-start" name="event_time-start">
                            <option value="0">1:00</option>
                            <option value="1">2:00</option>
                            <option value="2">3:00</option>
                            <option value="3">4:00</option>
                            <option value="4">5:00</option>
                            <option value="5">6:00</option>
                            <option value="6">7:00</option>
                            <option value="7">8:00</option>
                        </select>
                        <!-- FORM SELECT ICON -->
                        <svg class="form-select-icon icon-small-arrow">
                            <use xlink:href="#svg-small-arrow"></use>
                        </svg>
                        <!-- /FORM SELECT ICON -->
                    </div>
                    <!-- /FORM SELECT -->

                    <!-- FORM SELECT -->
                    <div class="form-select">
                        <label for="event-time-annotation">AM - PM</label>
                        <select
                            id="event-time-annotation"
                            name="event_time-annotation"
                        >
                            <option value="0">PM</option>
                            <option value="1">AM</option>
                        </select>
                        <!-- FORM SELECT ICON -->
                        <svg class="form-select-icon icon-small-arrow">
                            <use xlink:href="#svg-small-arrow"></use>
                        </svg>
                        <!-- /FORM SELECT ICON -->
                    </div>
                    <!-- /FORM SELECT -->
                </div>
                <!-- /FORM ITEM -->
            </div>
            <!-- /FORM ROW -->

            <!-- FORM ROW -->
            <div class="form-row">
                <!-- FORM ITEM -->
                <div class="form-item">
                    <!-- CHECKBOX WRAP -->
                    <div class="checkbox-wrap">
                        <input
                            type="checkbox"
                            id="event-add-end-time"
                            name="event_add-end-time"
                        />
                        <!-- CHECKBOX BOX -->
                        <div class="checkbox-box">
                            <!-- ICON CROSS -->
                            <svg class="icon-cross">
                                <use xlink:href="#svg-cross"></use>
                            </svg>
                            <!-- /ICON CROSS -->
                        </div>
                        <!-- /CHECKBOX BOX -->
                        <label for="event-add-end-time">Add End Time</label>
                    </div>
                    <!-- /CHECKBOX WRAP -->
                </div>
                <!-- /FORM ITEM -->
            </div>
            <!-- /FORM ROW -->

            <!-- FORM ROW -->
            <div class="form-row">
                <!-- FORM ITEM -->
                <div class="form-item">
                    <!-- FORM INPUT -->
                    <div class="form-input small">
                        <label for="event-description">Event Description</label>
                        <textarea
                            id="event-description"
                            name="event_description"
                        ></textarea>
                    </div>
                    <!-- /FORM INPUT -->
                </div>
                <!-- /FORM ITEM -->
            </div>
            <!-- /FORM ROW -->

            <!-- FORM ROW -->
            <div class="form-row">
                <!-- FORM ITEM -->
                <div class="form-item">
                    <!-- FORM INPUT DECORATED -->
                    <div class="form-input-decorated">
                        <!-- FORM INPUT -->
                        <div class="form-input small">
                            <label for="event-cover-photo"
                                >Event Cover Photo</label
                            >
                            <input
                                type="text"
                                id="event-cover-photo"
                                name="event_cover_photo"
                            />
                        </div>
                        <!-- /FORM INPUT -->

                        <!-- FORM INPUT ICON -->
                        <svg class="form-input-icon icon-photos">
                            <use xlink:href="#svg-photos"></use>
                        </svg>
                        <!-- /FORM INPUT ICON -->
                    </div>
                    <!-- /FORM INPUT DECORATED -->
                </div>
                <!-- /FORM ITEM -->
            </div>
            <!-- /FORM ROW -->

            <!-- FORM ROW -->
            <div class="form-row">
                <!-- FORM ADD ITEMS -->
                <div class="form-add-items">
                    <!-- FORM ADD ITEMS TITLE -->
                    <p class="form-add-items-title">Invite Friends</p>
                    <!-- /FORM ADD ITEMS TITLE -->

                    <!-- FORM ADD ITEMS INFO -->
                    <div class="form-add-items-info">
                        <!-- FORM ADD ITEMS BUTTON -->
                        <div class="form-add-items-button">
                            <!-- FORM ADD ITEMS BUTTON ICON -->
                            <svg class="form-add-items-button-icon icon-plus">
                                <use xlink:href="#svg-plus"></use>
                            </svg>
                            <!-- /FORM ADD ITEMS BUTTON ICON -->
                        </div>
                        <!-- /FORM ADD ITEMS BUTTON -->

                        <!-- USER AVATAR LIST -->
                        <div class="user-avatar-list reverse medium">
                            <!-- USER AVATAR -->
                            <div class="user-avatar smaller no-stats">
                                <!-- USER AVATAR BORDER -->
                                <div class="user-avatar-border">
                                    <!-- HEXAGON -->
                                    <div class="hexagon-34-36"></div>
                                    <!-- /HEXAGON -->
                                </div>
                                <!-- /USER AVATAR BORDER -->

                                <!-- USER AVATAR CONTENT -->
                                <div class="user-avatar-content">
                                    <!-- HEXAGON -->
                                    <div
                                        class="hexagon-image-30-32"
                                        data-src="img/avatar/03.jpg"
                                    ></div>
                                    <!-- /HEXAGON -->
                                </div>
                                <!-- /USER AVATAR CONTENT -->
                            </div>
                            <!-- /USER AVATAR -->

                            <!-- USER AVATAR -->
                            <div class="user-avatar smaller no-stats">
                                <!-- USER AVATAR BORDER -->
                                <div class="user-avatar-border">
                                    <!-- HEXAGON -->
                                    <div class="hexagon-34-36"></div>
                                    <!-- /HEXAGON -->
                                </div>
                                <!-- /USER AVATAR BORDER -->

                                <!-- USER AVATAR CONTENT -->
                                <div class="user-avatar-content">
                                    <!-- HEXAGON -->
                                    <div
                                        class="hexagon-image-30-32"
                                        data-src="img/avatar/05.jpg"
                                    ></div>
                                    <!-- /HEXAGON -->
                                </div>
                                <!-- /USER AVATAR CONTENT -->
                            </div>
                            <!-- /USER AVATAR -->

                            <!-- USER AVATAR -->
                            <div class="user-avatar smaller no-stats">
                                <!-- USER AVATAR BORDER -->
                                <div class="user-avatar-border">
                                    <!-- HEXAGON -->
                                    <div class="hexagon-34-36"></div>
                                    <!-- /HEXAGON -->
                                </div>
                                <!-- /USER AVATAR BORDER -->

                                <!-- USER AVATAR CONTENT -->
                                <div class="user-avatar-content">
                                    <!-- HEXAGON -->
                                    <div
                                        class="hexagon-image-30-32"
                                        data-src="img/avatar/10.jpg"
                                    ></div>
                                    <!-- /HEXAGON -->
                                </div>
                                <!-- /USER AVATAR CONTENT -->
                            </div>
                            <!-- /USER AVATAR -->

                            <!-- USER AVATAR -->
                            <div class="user-avatar smaller no-stats">
                                <!-- USER AVATAR BORDER -->
                                <div class="user-avatar-border">
                                    <!-- HEXAGON -->
                                    <div class="hexagon-34-36"></div>
                                    <!-- /HEXAGON -->
                                </div>
                                <!-- /USER AVATAR BORDER -->

                                <!-- USER AVATAR CONTENT -->
                                <div class="user-avatar-content">
                                    <!-- HEXAGON -->
                                    <div
                                        class="hexagon-image-30-32"
                                        data-src="img/avatar/02.jpg"
                                    ></div>
                                    <!-- /HEXAGON -->
                                </div>
                                <!-- /USER AVATAR CONTENT -->
                            </div>
                            <!-- /USER AVATAR -->

                            <!-- USER AVATAR -->
                            <div class="user-avatar smaller no-stats">
                                <!-- USER AVATAR BORDER -->
                                <div class="user-avatar-border">
                                    <!-- HEXAGON -->
                                    <div class="hexagon-34-36"></div>
                                    <!-- /HEXAGON -->
                                </div>
                                <!-- /USER AVATAR BORDER -->

                                <!-- USER AVATAR CONTENT -->
                                <div class="user-avatar-content">
                                    <!-- HEXAGON -->
                                    <div
                                        class="hexagon-image-30-32"
                                        data-src="img/avatar/06.jpg"
                                    ></div>
                                    <!-- /HEXAGON -->
                                </div>
                                <!-- /USER AVATAR CONTENT -->
                            </div>
                            <!-- /USER AVATAR -->

                            <!-- USER AVATAR -->
                            <div class="user-avatar smaller no-stats">
                                <!-- USER AVATAR BORDER -->
                                <div class="user-avatar-border">
                                    <!-- HEXAGON -->
                                    <div class="hexagon-34-36"></div>
                                    <!-- /HEXAGON -->
                                </div>
                                <!-- /USER AVATAR BORDER -->

                                <!-- USER AVATAR CONTENT -->
                                <div class="user-avatar-content">
                                    <!-- HEXAGON -->
                                    <div
                                        class="hexagon-image-30-32"
                                        data-src="img/avatar/23.jpg"
                                    ></div>
                                    <!-- /HEXAGON -->
                                </div>
                                <!-- /USER AVATAR CONTENT -->
                            </div>
                            <!-- /USER AVATAR -->
                        </div>
                        <!-- /USER AVATAR LIST -->
                    </div>
                    <!-- /FORM ADD ITEMS INFO -->
                </div>
                <!-- /FORM ADD ITEMS -->
            </div>
            <!-- /FORM ROW -->

            <!-- POPUP BOX ACTIONS -->
            <div class="popup-box-actions medium void">
                <!-- POPUP BOX ACTION -->
                <button class="popup-box-action full button secondary">
                    Create Event!
                </button>
                <!-- /POPUP BOX ACTION -->
            </div>
            <!-- /POPUP BOX ACTIONS -->
        </form>
        <!-- /FORM -->
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class Popup extends Vue {
    
    closePopup(){
        console.log('close popup')
    }
}
</script>

<style scoped>
.popup-container {
    max-width: 384px;
    position: absolute;
    left: 50%;
    z-index: 100001;
    opacity: 1;
    visibility: visible;
    transform: translate(0px, 0px);
    transition: transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s;
    top: 100px;
    border-radius: 12px;
    background-color: #1d2333;
        width: 90%;
}

</style>
