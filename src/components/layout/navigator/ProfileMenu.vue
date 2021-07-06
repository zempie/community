<template>
    <div class="header-actions">
        <div class="login" @click="logout">logout</div>
        <div class="action-list dark">
            <div class="action-list-item-wrap">
                <div class="action-list-item header-dropdown-trigger">
                    <svg class="action-list-item-icon icon-messages">
                        <use xlink:href="#svg-messages"></use>
                    </svg>
                </div>

                <div class="dropdown-box header-dropdown">
                    <div class="dropdown-box-header">
                        <p class="dropdown-box-header-title">Messages</p>

                        <div class="dropdown-box-header-actions">
                            <p class="dropdown-box-header-action">
                                Mark all as Read
                            </p>

                            <p class="dropdown-box-header-action">Settings</p>
                        </div>
                    </div>

                    <div class="dropdown-box-list medium" data-simplebar>
                        <a
                            class="dropdown-box-list-item"
                            href="hub-profile-messages.html"
                        >
                            <div class="user-status">
                                <div class="user-status-avatar">
                                    <div class="user-avatar small no-outline">
                                        <div class="user-avatar-content">
                                            <div
                                                class="hexagon-image-30-32"
                                                data-src="img/avatar/04.jpg"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-progress">
                                            <div
                                                class="hexagon-progress-40-44"
                                            ></div>
                                        </div>

                                        <div
                                            class="user-avatar-progress-border"
                                        >
                                            <div
                                                class="hexagon-border-40-44"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-badge">
                                            <div
                                                class="user-avatar-badge-border"
                                            >
                                                <div
                                                    class="hexagon-22-24"
                                                ></div>
                                            </div>

                                            <div
                                                class="
                                                    user-avatar-badge-content
                                                "
                                            >
                                                <div
                                                    class="hexagon-dark-16-18"
                                                ></div>
                                            </div>

                                            <p class="user-avatar-badge-text">
                                                6
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <p class="user-status-title">
                                    <span class="bold">Bearded Wonder</span>
                                </p>

                                <p class="user-status-text">
                                    Great! Then will meet with them at the
                                    party...
                                </p>

                                <p class="user-status-timestamp floaty">
                                    29 mins ago
                                </p>
                            </div>
                        </a>

                        <a
                            class="dropdown-box-list-item"
                            href="hub-profile-messages.html"
                        >
                            <div class="user-status">
                                <div class="user-status-avatar">
                                    <div class="user-avatar small no-outline">
                                        <div class="user-avatar-content">
                                            <div
                                                class="hexagon-image-30-32"
                                                data-src="img/avatar/05.jpg"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-progress">
                                            <div
                                                class="hexagon-progress-40-44"
                                            ></div>
                                        </div>

                                        <div
                                            class="user-avatar-progress-border"
                                        >
                                            <div
                                                class="hexagon-border-40-44"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-badge">
                                            <div
                                                class="user-avatar-badge-border"
                                            >
                                                <div
                                                    class="hexagon-22-24"
                                                ></div>
                                            </div>

                                            <div
                                                class="
                                                    user-avatar-badge-content
                                                "
                                            >
                                                <div
                                                    class="hexagon-dark-16-18"
                                                ></div>
                                            </div>

                                            <p class="user-avatar-badge-text">
                                                12
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <p class="user-status-title">
                                    <span class="bold">Neko Bebop</span>
                                </p>

                                <p class="user-status-text">
                                    Awesome! I'll see you there!
                                </p>

                                <p class="user-status-timestamp floaty">
                                    54 mins ago
                                </p>
                            </div>
                        </a>

                        <a
                            class="dropdown-box-list-item"
                            href="hub-profile-messages.html"
                        >
                            <div class="user-status">
                                <div class="user-status-avatar">
                                    <div class="user-avatar small no-outline">
                                        <div class="user-avatar-content">
                                            <div
                                                class="hexagon-image-30-32"
                                                data-src="img/avatar/03.jpg"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-progress">
                                            <div
                                                class="hexagon-progress-40-44"
                                            ></div>
                                        </div>

                                        <div
                                            class="user-avatar-progress-border"
                                        >
                                            <div
                                                class="hexagon-border-40-44"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-badge">
                                            <div
                                                class="user-avatar-badge-border"
                                            >
                                                <div
                                                    class="hexagon-22-24"
                                                ></div>
                                            </div>

                                            <div
                                                class="
                                                    user-avatar-badge-content
                                                "
                                            >
                                                <div
                                                    class="hexagon-dark-16-18"
                                                ></div>
                                            </div>

                                            <p class="user-avatar-badge-text">
                                                16
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <p class="user-status-title">
                                    <span class="bold">Nick Grissom</span>
                                </p>

                                <p class="user-status-text">
                                    Can you stream that new game?
                                </p>

                                <p class="user-status-timestamp floaty">
                                    2 hours ago
                                </p>
                            </div>
                        </a>

                        <a
                            class="dropdown-box-list-item"
                            href="hub-profile-messages.html"
                        >
                            <div class="user-status">
                                <div class="user-status-avatar">
                                    <div class="user-avatar small no-outline">
                                        <div class="user-avatar-content">
                                            <div
                                                class="hexagon-image-30-32"
                                                data-src="img/avatar/07.jpg"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-progress">
                                            <div
                                                class="hexagon-progress-40-44"
                                            ></div>
                                        </div>

                                        <div
                                            class="user-avatar-progress-border"
                                        >
                                            <div
                                                class="hexagon-border-40-44"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-badge">
                                            <div
                                                class="user-avatar-badge-border"
                                            >
                                                <div
                                                    class="hexagon-22-24"
                                                ></div>
                                            </div>

                                            <div
                                                class="
                                                    user-avatar-badge-content
                                                "
                                            >
                                                <div
                                                    class="hexagon-dark-16-18"
                                                ></div>
                                            </div>

                                            <p class="user-avatar-badge-text">
                                                26
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <p class="user-status-title">
                                    <span class="bold">Sarah Diamond</span>
                                </p>

                                <p class="user-status-text">
                                    I'm sending you the latest news of the
                                    release...
                                </p>

                                <p class="user-status-timestamp floaty">
                                    16 hours ago
                                </p>
                            </div>
                        </a>

                        <a
                            class="dropdown-box-list-item"
                            href="hub-profile-messages.html"
                        >
                            <div class="user-status">
                                <div class="user-status-avatar">
                                    <div class="user-avatar small no-outline">
                                        <div class="user-avatar-content">
                                            <div
                                                class="hexagon-image-30-32"
                                                data-src="img/avatar/12.jpg"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-progress">
                                            <div
                                                class="hexagon-progress-40-44"
                                            ></div>
                                        </div>

                                        <div
                                            class="user-avatar-progress-border"
                                        >
                                            <div
                                                class="hexagon-border-40-44"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-badge">
                                            <div
                                                class="user-avatar-badge-border"
                                            >
                                                <div
                                                    class="hexagon-22-24"
                                                ></div>
                                            </div>

                                            <div
                                                class="
                                                    user-avatar-badge-content
                                                "
                                            >
                                                <div
                                                    class="hexagon-dark-16-18"
                                                ></div>
                                            </div>

                                            <p class="user-avatar-badge-text">
                                                10
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <p class="user-status-title">
                                    <span class="bold">James Murdock</span>
                                </p>

                                <p class="user-status-text">
                                    Great! Then will meet with them at the
                                    party...
                                </p>

                                <p class="user-status-timestamp floaty">
                                    7 days ago
                                </p>
                            </div>
                        </a>

                        <a
                            class="dropdown-box-list-item"
                            href="hub-profile-messages.html"
                        >
                            <div class="user-status">
                                <div class="user-status-avatar">
                                    <div class="user-avatar small no-outline">
                                        <div class="user-avatar-content">
                                            <div
                                                class="hexagon-image-30-32"
                                                data-src="img/avatar/10.jpg"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-progress">
                                            <div
                                                class="hexagon-progress-40-44"
                                            ></div>
                                        </div>

                                        <div
                                            class="user-avatar-progress-border"
                                        >
                                            <div
                                                class="hexagon-border-40-44"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-badge">
                                            <div
                                                class="user-avatar-badge-border"
                                            >
                                                <div
                                                    class="hexagon-22-24"
                                                ></div>
                                            </div>

                                            <div
                                                class="
                                                    user-avatar-badge-content
                                                "
                                            >
                                                <div
                                                    class="hexagon-dark-16-18"
                                                ></div>
                                            </div>

                                            <p class="user-avatar-badge-text">
                                                5
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <p class="user-status-title">
                                    <span class="bold">The Green Goo</span>
                                </p>

                                <p class="user-status-text">
                                    Can you stream that new game?
                                </p>

                                <p class="user-status-timestamp floaty">
                                    10 days ago
                                </p>
                            </div>
                        </a>
                    </div>

                    <a
                        class="dropdown-box-button primary"
                        href="hub-profile-messages.html"
                        >View all Messages</a
                    >
                </div>
            </div>

            <div class="action-list-item-wrap">
                <div class="action-list-item unread header-dropdown-trigger">
                    <svg class="action-list-item-icon icon-notification">
                        <use xlink:href="#svg-notification"></use>
                    </svg>
                </div>

                <div class="dropdown-box header-dropdown">
                    <div class="dropdown-box-header">
                        <p class="dropdown-box-header-title">Notifications</p>

                        <div class="dropdown-box-header-actions">
                            <p class="dropdown-box-header-action">
                                Mark all as Read
                            </p>

                            <p class="dropdown-box-header-action">Settings</p>
                        </div>
                    </div>

                    <div class="dropdown-box-list" data-simplebar>
                        <div class="dropdown-box-list-item unread">
                            <div class="user-status notification">
                                <a
                                    class="user-status-avatar"
                                    href="profile-timeline.html"
                                >
                                    <div class="user-avatar small no-outline">
                                        <div class="user-avatar-content">
                                            <div
                                                class="hexagon-image-30-32"
                                                data-src="img/avatar/03.jpg"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-progress">
                                            <div
                                                class="hexagon-progress-40-44"
                                            ></div>
                                        </div>

                                        <div
                                            class="user-avatar-progress-border"
                                        >
                                            <div
                                                class="hexagon-border-40-44"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-badge">
                                            <div
                                                class="user-avatar-badge-border"
                                            >
                                                <div
                                                    class="hexagon-22-24"
                                                ></div>
                                            </div>

                                            <div
                                                class="
                                                    user-avatar-badge-content
                                                "
                                            >
                                                <div
                                                    class="hexagon-dark-16-18"
                                                ></div>
                                            </div>

                                            <p class="user-avatar-badge-text">
                                                16
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <p class="user-status-title">
                                    <a class="bold" href="profile-timeline.html"
                                        >Nick Grissom</a
                                    >
                                    posted a comment on your
                                    <a
                                        class="highlighted"
                                        href="profile-timeline.html"
                                        >status update</a
                                    >
                                </p>

                                <p class="user-status-timestamp">
                                    2 minutes ago
                                </p>

                                <div class="user-status-icon">
                                    <svg class="icon-comment">
                                        <use xlink:href="#svg-comment"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="dropdown-box-list-item">
                            <div class="user-status notification">
                                <a
                                    class="user-status-avatar"
                                    href="profile-timeline.html"
                                >
                                    <div class="user-avatar small no-outline">
                                        <div class="user-avatar-content">
                                            <div
                                                class="hexagon-image-30-32"
                                                data-src="img/avatar/07.jpg"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-progress">
                                            <div
                                                class="hexagon-progress-40-44"
                                            ></div>
                                        </div>

                                        <div
                                            class="user-avatar-progress-border"
                                        >
                                            <div
                                                class="hexagon-border-40-44"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-badge">
                                            <div
                                                class="user-avatar-badge-border"
                                            >
                                                <div
                                                    class="hexagon-22-24"
                                                ></div>
                                            </div>

                                            <div
                                                class="
                                                    user-avatar-badge-content
                                                "
                                            >
                                                <div
                                                    class="hexagon-dark-16-18"
                                                ></div>
                                            </div>

                                            <p class="user-avatar-badge-text">
                                                26
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <p class="user-status-title">
                                    <a class="bold" href="profile-timeline.html"
                                        >Sarah Diamond</a
                                    >
                                    left a like
                                    <img
                                        class="reaction"
                                        src="img/reaction/like.png"
                                        alt="reaction-like"
                                    />
                                    reaction on your
                                    <a
                                        class="highlighted"
                                        href="profile-timeline.html"
                                        >status update</a
                                    >
                                </p>

                                <p class="user-status-timestamp">
                                    17 minutes ago
                                </p>

                                <div class="user-status-icon">
                                    <svg class="icon-thumbs-up">
                                        <use xlink:href="#svg-thumbs-up"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="dropdown-box-list-item">
                            <div class="user-status notification">
                                <a
                                    class="user-status-avatar"
                                    href="profile-timeline.html"
                                >
                                    <div class="user-avatar small no-outline">
                                        <div class="user-avatar-content">
                                            <div
                                                class="hexagon-image-30-32"
                                                data-src="img/avatar/02.jpg"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-progress">
                                            <div
                                                class="hexagon-progress-40-44"
                                            ></div>
                                        </div>

                                        <div
                                            class="user-avatar-progress-border"
                                        >
                                            <div
                                                class="hexagon-border-40-44"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-badge">
                                            <div
                                                class="user-avatar-badge-border"
                                            >
                                                <div
                                                    class="hexagon-22-24"
                                                ></div>
                                            </div>

                                            <div
                                                class="
                                                    user-avatar-badge-content
                                                "
                                            >
                                                <div
                                                    class="hexagon-dark-16-18"
                                                ></div>
                                            </div>

                                            <p class="user-avatar-badge-text">
                                                13
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <p class="user-status-title">
                                    <a class="bold" href="profile-timeline.html"
                                        >Destroy Dex</a
                                    >
                                    posted a comment on your
                                    <a
                                        class="highlighted"
                                        href="profile-photos.html"
                                        >photo</a
                                    >
                                </p>

                                <p class="user-status-timestamp">
                                    31 minutes ago
                                </p>

                                <div class="user-status-icon">
                                    <svg class="icon-comment">
                                        <use xlink:href="#svg-comment"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="dropdown-box-list-item">
                            <div class="user-status notification">
                                <a
                                    class="user-status-avatar"
                                    href="profile-timeline.html"
                                >
                                    <div class="user-avatar small no-outline">
                                        <div class="user-avatar-content">
                                            <div
                                                class="hexagon-image-30-32"
                                                data-src="img/avatar/10.jpg"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-progress">
                                            <div
                                                class="hexagon-progress-40-44"
                                            ></div>
                                        </div>

                                        <div
                                            class="user-avatar-progress-border"
                                        >
                                            <div
                                                class="hexagon-border-40-44"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-badge">
                                            <div
                                                class="user-avatar-badge-border"
                                            >
                                                <div
                                                    class="hexagon-22-24"
                                                ></div>
                                            </div>

                                            <div
                                                class="
                                                    user-avatar-badge-content
                                                "
                                            >
                                                <div
                                                    class="hexagon-dark-16-18"
                                                ></div>
                                            </div>

                                            <p class="user-avatar-badge-text">
                                                5
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <p class="user-status-title">
                                    <a class="bold" href="profile-timeline.html"
                                        >The Green Goo</a
                                    >
                                    left a love
                                    <img
                                        class="reaction"
                                        src="img/reaction/love.png"
                                        alt="reaction-love"
                                    />
                                    reaction on your
                                    <a
                                        class="highlighted"
                                        href="profile-timeline.html"
                                        >status update</a
                                    >
                                </p>

                                <p class="user-status-timestamp">2 hours ago</p>

                                <div class="user-status-icon">
                                    <svg class="icon-thumbs-up">
                                        <use xlink:href="#svg-thumbs-up"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="dropdown-box-list-item">
                            <div class="user-status notification">
                                <a
                                    class="user-status-avatar"
                                    href="profile-timeline.html"
                                >
                                    <div class="user-avatar small no-outline">
                                        <div class="user-avatar-content">
                                            <div
                                                class="hexagon-image-30-32"
                                                data-src="img/avatar/05.jpg"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-progress">
                                            <div
                                                class="hexagon-progress-40-44"
                                            ></div>
                                        </div>

                                        <div
                                            class="user-avatar-progress-border"
                                        >
                                            <div
                                                class="hexagon-border-40-44"
                                            ></div>
                                        </div>

                                        <div class="user-avatar-badge">
                                            <div
                                                class="user-avatar-badge-border"
                                            >
                                                <div
                                                    class="hexagon-22-24"
                                                ></div>
                                            </div>

                                            <div
                                                class="
                                                    user-avatar-badge-content
                                                "
                                            >
                                                <div
                                                    class="hexagon-dark-16-18"
                                                ></div>
                                            </div>

                                            <p class="user-avatar-badge-text">
                                                12
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <p class="user-status-title">
                                    <a class="bold" href="profile-timeline.html"
                                        >Neko Bebop</a
                                    >
                                    posted a comment on your
                                    <a
                                        class="highlighted"
                                        href="profile-timeline.html"
                                        >status update</a
                                    >
                                </p>

                                <p class="user-status-timestamp">3 hours ago</p>

                                <div class="user-status-icon">
                                    <svg class="icon-comment">
                                        <use xlink:href="#svg-comment"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a
                        class="dropdown-box-button secondary"
                        href="hub-profile-notifications.html"
                        >View all Notifications</a
                    >
                </div>
            </div>
        </div>

        <div class="action-item-wrap">
            <div class="action-item dark header-settings-dropdown-trigger">
                <svg class="action-item-icon icon-settings">
                    <use xlink:href="#svg-settings"></use>
                </svg>
            </div>

            <div class="dropdown-navigation header-settings-dropdown">
                <div class="dropdown-navigation-header">
                    <div class="user-status">
                        <a
                            class="user-status-avatar"
                            href="profile-timeline.html"
                        >
                            <div class="user-avatar small no-outline">
                                <div class="user-avatar-content">
                                    <div
                                        class="hexagon-image-30-32"
                                        :data-src="user.picture"
                                    ></div>
                                </div>

                                <div class="user-avatar-progress">
                                    <div class="hexagon-progress-40-44"></div>
                                </div>

                                <div class="user-avatar-progress-border">
                                    <div class="hexagon-border-40-44"></div>
                                </div>
                            </div>
                        </a>

                        <p class="user-status-title">
                            <span class="bold">Hi {{ user.name }}!</span>
                        </p>

                        <p class="user-status-text small">
                            <a href="profile-timeline.html">@marinavalentine</a>
                        </p>
                    </div>
                </div>

                <p class="dropdown-navigation-category">My Profile</p>

                <router-link
                    class="dropdown-navigation-link"
                    :to="`/channel/${user.channel_id}`"
                    >Profile Info</router-link
                >

                <!-- 
                    <a
                        class="dropdown-navigation-link"
                        href="hub-profile-notifications.html"
                        >Notifications</a
                    > -->

                <a
                    class="dropdown-navigation-link"
                    href="hub-profile-messages.html"
                    >Game Studio</a
                >

                <p class="dropdown-navigation-category">Account</p>

                <!-- <a
                        class="dropdown-navigation-link"
                        href="hub-account-info.html"
                        >Account Info</a
                    > -->
                <router-link
                    class="dropdown-navigation-link"
                    :to="`/user/${user.uid}/changePassword`"
                    >Change Password</router-link
                >

                <router-link
                    class="dropdown-navigation-link"
                   :to="`/user/${user.uid}/settings`"
                    >General Settings</router-link
                >

                <p class="dropdown-navigation-category">Groups</p>

                <a
                    class="dropdown-navigation-link"
                    href="hub-group-management.html"
                    >Manage Groups</a
                >

                <!-- <p class="dropdown-navigation-category">My Store</p>

                    <a
                        class="dropdown-navigation-link"
                        href="hub-store-account.html"
                        >My Account </a
                    >

                    <a
                        class="dropdown-navigation-link"
                        href="hub-store-statement.html"
                        >Sales Statement</a
                    >

                    <a
                        class="dropdown-navigation-link"
                        href="hub-store-items.html"
                        >Manage Items</a
                    >

                    <a
                        class="dropdown-navigation-link"
                        href="hub-store-downloads.html"
                        >Downloads</a
                    > -->

                <p
                    class="dropdown-navigation-button button small secondary"
                    @click="logout"
                >
                    Logout
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Dropdown from "@/plugins/dropdown";
import Hexagon from "@/plugins/hexagon";
import Login from "@/script/login";
@Component({
    components: {},
})
export default class ProfileMenu extends Vue {
    private dropdown: Dropdown = new Dropdown();

    private hexagon: Hexagon = new Hexagon();
    private user = this.$store.getters.user;
    mounted() {
        // await this.$store.dispatch('loginState');

        this.hexagon.init();
        this.dropdown.init();
    }
    async logout() {
        this.$store.state.pathName = "logout";
        await Login.logout();
        this.$router.push('/guestPage')
    }
}
</script>

<style scoped>
.login {
    color: #fff;
    display: flex;
    margin-right: 26px;
    text-transform: uppercase;
    cursor: pointer;
}
</style>
