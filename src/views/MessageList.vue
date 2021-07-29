<template>
    <div class="grid">
        <div class="account-hub-content">
            <div class="section-header">
                <div class="section-header-info">
                    <p class="section-pretitle">My Profile</p>

                    <h2 class="section-title">Messages</h2>
                </div>

                <div class="section-header-actions">
                    <p class="section-header-action">Mark all as Read</p>

                    <router-link
                        class="section-header-action"
                        :to="`/user/${this.user.uid}/settings`"
                    >
                        Settings
                    </router-link>
                </div>
            </div>

            <div class="chat-widget-wrap">
                <div class="chat-widget static">
                    <div class="chat-widget-messages" data-simplebar="init">
                        <div class="simplebar-wrapper" style="margin: 0px">
                            <div class="simplebar-height-auto-observer-wrapper">
                                <div
                                    class="simplebar-height-auto-observer"
                                ></div>
                            </div>
                            <div class="simplebar-mask">
                                <div
                                    class="simplebar-offset"
                                    style="right: 0px; bottom: 0px"
                                >
                                    <div
                                        class="simplebar-content-wrapper"
                                        style="height: auto; overflow: hidden"
                                    >
                                        <div
                                            class="simplebar-content"
                                            style="padding: 0px"
                                        >
                                            <div class="chat-widget-message">
                                                <div class="user-status">
                                                    <div
                                                        class="
                                                            user-status-avatar
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                user-avatar
                                                                small
                                                                no-outline
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    user-avatar-content
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-image-30-32
                                                                    "
                                                                    data-src="img/avatar/04.jpg"
                                                                    style="
                                                                        width: 30px;
                                                                        height: 32px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="30"
                                                                        height="32"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-progress-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress-border
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-border-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <p
                                                        class="
                                                            user-status-title
                                                        "
                                                    >
                                                        <span class="bold"
                                                            >Bearded
                                                            Wonder</span
                                                        >
                                                    </p>

                                                    <p class="user-status-text">
                                                        Great! Then we'll meet
                                                        with them at the
                                                        party...
                                                    </p>

                                                    <p
                                                        class="
                                                            user-status-timestamp
                                                            floaty
                                                        "
                                                    >
                                                        2 hours ago
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="chat-widget-message">
                                                <div class="user-status">
                                                    <div
                                                        class="
                                                            user-status-avatar
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                user-avatar
                                                                small
                                                                no-outline
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    user-avatar-content
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-image-30-32
                                                                    "
                                                                    data-src="img/avatar/05.jpg"
                                                                    style="
                                                                        width: 30px;
                                                                        height: 32px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="30"
                                                                        height="32"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-progress-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress-border
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-border-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-badge
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        user-avatar-badge-border
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-22-24
                                                                        "
                                                                        style="
                                                                            width: 22px;
                                                                            height: 24px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="22"
                                                                            height="24"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="
                                                                        user-avatar-badge-content
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-dark-16-18
                                                                        "
                                                                        style="
                                                                            width: 16px;
                                                                            height: 18px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="16"
                                                                            height="18"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <p
                                                                    class="
                                                                        user-avatar-badge-text
                                                                    "
                                                                >
                                                                    12
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <p
                                                        class="
                                                            user-status-title
                                                        "
                                                    >
                                                        <span class="bold"
                                                            >Neko Bebop</span
                                                        >
                                                    </p>

                                                    <p class="user-status-text">
                                                        Awesome! I'll see you
                                                        there!
                                                    </p>

                                                    <p
                                                        class="
                                                            user-status-timestamp
                                                            floaty
                                                        "
                                                    >
                                                        54 mins ago
                                                    </p>
                                                </div>
                                            </div>

                                            <div
                                                class="
                                                    chat-widget-message
                                                    active
                                                "
                                            >
                                                <div class="user-status">
                                                    <div
                                                        class="
                                                            user-status-avatar
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                user-avatar
                                                                small
                                                                no-outline
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    user-avatar-content
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-image-30-32
                                                                    "
                                                                    data-src="img/avatar/03.jpg"
                                                                    style="
                                                                        width: 30px;
                                                                        height: 32px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="30"
                                                                        height="32"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-progress-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress-border
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-border-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-badge
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        user-avatar-badge-border
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-22-24
                                                                        "
                                                                        style="
                                                                            width: 22px;
                                                                            height: 24px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="22"
                                                                            height="24"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="
                                                                        user-avatar-badge-content
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-dark-16-18
                                                                        "
                                                                        style="
                                                                            width: 16px;
                                                                            height: 18px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="16"
                                                                            height="18"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <p
                                                                    class="
                                                                        user-avatar-badge-text
                                                                    "
                                                                >
                                                                    16
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <p
                                                        class="
                                                            user-status-title
                                                        "
                                                    >
                                                        <span class="bold"
                                                            >Nick Grissom</span
                                                        >
                                                    </p>

                                                    <p class="user-status-text">
                                                        Can you stream the new
                                                        game?
                                                    </p>

                                                    <p
                                                        class="
                                                            user-status-timestamp
                                                            floaty
                                                        "
                                                    >
                                                        2 hours ago
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="chat-widget-message">
                                                <div class="user-status">
                                                    <div
                                                        class="
                                                            user-status-avatar
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                user-avatar
                                                                small
                                                                no-outline
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    user-avatar-content
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-image-30-32
                                                                    "
                                                                    data-src="img/avatar/07.jpg"
                                                                    style="
                                                                        width: 30px;
                                                                        height: 32px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="30"
                                                                        height="32"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-progress-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress-border
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-border-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-badge
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        user-avatar-badge-border
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-22-24
                                                                        "
                                                                        style="
                                                                            width: 22px;
                                                                            height: 24px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="22"
                                                                            height="24"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="
                                                                        user-avatar-badge-content
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-dark-16-18
                                                                        "
                                                                        style="
                                                                            width: 16px;
                                                                            height: 18px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="16"
                                                                            height="18"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <p
                                                                    class="
                                                                        user-avatar-badge-text
                                                                    "
                                                                >
                                                                    26
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <p
                                                        class="
                                                            user-status-title
                                                        "
                                                    >
                                                        <span class="bold"
                                                            >Sarah Diamond</span
                                                        >
                                                    </p>

                                                    <p class="user-status-text">
                                                        I'm sending you the
                                                        latest news of the
                                                        release...
                                                    </p>

                                                    <p
                                                        class="
                                                            user-status-timestamp
                                                            floaty
                                                        "
                                                    >
                                                        16 hours ago
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="chat-widget-message">
                                                <div class="user-status">
                                                    <div
                                                        class="
                                                            user-status-avatar
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                user-avatar
                                                                small
                                                                no-outline
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    user-avatar-content
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-image-30-32
                                                                    "
                                                                    data-src="img/avatar/20.jpg"
                                                                    style="
                                                                        width: 30px;
                                                                        height: 32px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="30"
                                                                        height="32"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-progress-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress-border
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-border-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-badge
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        user-avatar-badge-border
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-22-24
                                                                        "
                                                                        style="
                                                                            width: 22px;
                                                                            height: 24px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="22"
                                                                            height="24"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="
                                                                        user-avatar-badge-content
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-dark-16-18
                                                                        "
                                                                        style="
                                                                            width: 16px;
                                                                            height: 18px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="16"
                                                                            height="18"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <p
                                                                    class="
                                                                        user-avatar-badge-text
                                                                    "
                                                                >
                                                                    9
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <p
                                                        class="
                                                            user-status-title
                                                        "
                                                    >
                                                        <span class="bold"
                                                            >Matt Parker</span
                                                        >
                                                    </p>

                                                    <p class="user-status-text">
                                                        Can you stream the new
                                                        game?
                                                    </p>

                                                    <p
                                                        class="
                                                            user-status-timestamp
                                                            floaty
                                                        "
                                                    >
                                                        2 hours ago
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="chat-widget-message">
                                                <div class="user-status">
                                                    <div
                                                        class="
                                                            user-status-avatar
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                user-avatar
                                                                small
                                                                no-outline
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    user-avatar-content
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-image-30-32
                                                                    "
                                                                    data-src="img/avatar/09.jpg"
                                                                    style="
                                                                        width: 30px;
                                                                        height: 32px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="30"
                                                                        height="32"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-progress-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress-border
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-border-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-badge
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        user-avatar-badge-border
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-22-24
                                                                        "
                                                                        style="
                                                                            width: 22px;
                                                                            height: 24px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="22"
                                                                            height="24"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="
                                                                        user-avatar-badge-content
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-dark-16-18
                                                                        "
                                                                        style="
                                                                            width: 16px;
                                                                            height: 18px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="16"
                                                                            height="18"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <p
                                                                    class="
                                                                        user-avatar-badge-text
                                                                    "
                                                                >
                                                                    27
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <p
                                                        class="
                                                            user-status-title
                                                        "
                                                    >
                                                        <span class="bold"
                                                            >Sandra
                                                            Strange</span
                                                        >
                                                    </p>

                                                    <p class="user-status-text">
                                                        Can you stream the new
                                                        game?
                                                    </p>

                                                    <p
                                                        class="
                                                            user-status-timestamp
                                                            floaty
                                                        "
                                                    >
                                                        2 hours ago
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="chat-widget-message">
                                                <div class="user-status">
                                                    <div
                                                        class="
                                                            user-status-avatar
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                user-avatar
                                                                small
                                                                no-outline
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    user-avatar-content
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-image-30-32
                                                                    "
                                                                    data-src="img/avatar/12.jpg"
                                                                    style="
                                                                        width: 30px;
                                                                        height: 32px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="30"
                                                                        height="32"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-progress-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress-border
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-border-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-badge
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        user-avatar-badge-border
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-22-24
                                                                        "
                                                                        style="
                                                                            width: 22px;
                                                                            height: 24px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="22"
                                                                            height="24"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="
                                                                        user-avatar-badge-content
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-dark-16-18
                                                                        "
                                                                        style="
                                                                            width: 16px;
                                                                            height: 18px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="16"
                                                                            height="18"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <p
                                                                    class="
                                                                        user-avatar-badge-text
                                                                    "
                                                                >
                                                                    10
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <p
                                                        class="
                                                            user-status-title
                                                        "
                                                    >
                                                        <span class="bold"
                                                            >James Murdock</span
                                                        >
                                                    </p>

                                                    <p class="user-status-text">
                                                        Great! Then we'll meet
                                                        with them at the
                                                        party...
                                                    </p>

                                                    <p
                                                        class="
                                                            user-status-timestamp
                                                            floaty
                                                        "
                                                    >
                                                        7 days ago
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="chat-widget-message">
                                                <div class="user-status">
                                                    <div
                                                        class="
                                                            user-status-avatar
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                user-avatar
                                                                small
                                                                no-outline
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    user-avatar-content
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-image-30-32
                                                                    "
                                                                    data-src="img/avatar/10.jpg"
                                                                    style="
                                                                        width: 30px;
                                                                        height: 32px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="30"
                                                                        height="32"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-progress-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress-border
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-border-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-badge
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        user-avatar-badge-border
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-22-24
                                                                        "
                                                                        style="
                                                                            width: 22px;
                                                                            height: 24px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="22"
                                                                            height="24"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="
                                                                        user-avatar-badge-content
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-dark-16-18
                                                                        "
                                                                        style="
                                                                            width: 16px;
                                                                            height: 18px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="16"
                                                                            height="18"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <p
                                                                    class="
                                                                        user-avatar-badge-text
                                                                    "
                                                                >
                                                                    5
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <p
                                                        class="
                                                            user-status-title
                                                        "
                                                    >
                                                        <span class="bold"
                                                            >The Green Goo</span
                                                        >
                                                    </p>

                                                    <p class="user-status-text">
                                                        Can you stream the new
                                                        game?
                                                    </p>

                                                    <p
                                                        class="
                                                            user-status-timestamp
                                                            floaty
                                                        "
                                                    >
                                                        2 hours ago
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="chat-widget-message">
                                                <div class="user-status">
                                                    <div
                                                        class="
                                                            user-status-avatar
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                user-avatar
                                                                small
                                                                no-outline
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    user-avatar-content
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-image-30-32
                                                                    "
                                                                    data-src="img/avatar/02.jpg"
                                                                    style="
                                                                        width: 30px;
                                                                        height: 32px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="30"
                                                                        height="32"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-progress-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress-border
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-border-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-badge
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        user-avatar-badge-border
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-22-24
                                                                        "
                                                                        style="
                                                                            width: 22px;
                                                                            height: 24px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="22"
                                                                            height="24"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="
                                                                        user-avatar-badge-content
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-dark-16-18
                                                                        "
                                                                        style="
                                                                            width: 16px;
                                                                            height: 18px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="16"
                                                                            height="18"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <p
                                                                    class="
                                                                        user-avatar-badge-text
                                                                    "
                                                                >
                                                                    13
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <p
                                                        class="
                                                            user-status-title
                                                        "
                                                    >
                                                        <span class="bold"
                                                            >Destroy Dex</span
                                                        >
                                                    </p>

                                                    <p class="user-status-text">
                                                        Can you stream the new
                                                        game?
                                                    </p>

                                                    <p
                                                        class="
                                                            user-status-timestamp
                                                            floaty
                                                        "
                                                    >
                                                        2 hours ago
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="chat-widget-message">
                                                <div class="user-status">
                                                    <div
                                                        class="
                                                            user-status-avatar
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                user-avatar
                                                                small
                                                                no-outline
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    user-avatar-content
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-image-30-32
                                                                    "
                                                                    data-src="img/avatar/08.jpg"
                                                                    style="
                                                                        width: 30px;
                                                                        height: 32px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="30"
                                                                        height="32"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-progress-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress-border
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-border-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-badge
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        user-avatar-badge-border
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-22-24
                                                                        "
                                                                        style="
                                                                            width: 22px;
                                                                            height: 24px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="22"
                                                                            height="24"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="
                                                                        user-avatar-badge-content
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-dark-16-18
                                                                        "
                                                                        style="
                                                                            width: 16px;
                                                                            height: 18px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="16"
                                                                            height="18"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <p
                                                                    class="
                                                                        user-avatar-badge-text
                                                                    "
                                                                >
                                                                    4
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <p
                                                        class="
                                                            user-status-title
                                                        "
                                                    >
                                                        <span class="bold"
                                                            >Damian
                                                            Greyson</span
                                                        >
                                                    </p>

                                                    <p class="user-status-text">
                                                        Can you stream the new
                                                        game?
                                                    </p>

                                                    <p
                                                        class="
                                                            user-status-timestamp
                                                            floaty
                                                        "
                                                    >
                                                        2 hours ago
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="chat-widget-message">
                                                <div class="user-status">
                                                    <div
                                                        class="
                                                            user-status-avatar
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                user-avatar
                                                                small
                                                                no-outline
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    user-avatar-content
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-image-30-32
                                                                    "
                                                                    data-src="img/avatar/14.jpg"
                                                                    style="
                                                                        width: 30px;
                                                                        height: 32px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="30"
                                                                        height="32"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-progress-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-progress-border
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        hexagon-border-40-44
                                                                    "
                                                                    style="
                                                                        width: 40px;
                                                                        height: 44px;
                                                                        position: relative;
                                                                    "
                                                                >
                                                                    <canvas
                                                                        width="40"
                                                                        height="44"
                                                                        style="
                                                                            position: absolute;
                                                                            top: 0px;
                                                                            left: 0px;
                                                                        "
                                                                    ></canvas>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="
                                                                    user-avatar-badge
                                                                "
                                                            >
                                                                <div
                                                                    class="
                                                                        user-avatar-badge-border
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-22-24
                                                                        "
                                                                        style="
                                                                            width: 22px;
                                                                            height: 24px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="22"
                                                                            height="24"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="
                                                                        user-avatar-badge-content
                                                                    "
                                                                >
                                                                    <div
                                                                        class="
                                                                            hexagon-dark-16-18
                                                                        "
                                                                        style="
                                                                            width: 16px;
                                                                            height: 18px;
                                                                            position: relative;
                                                                        "
                                                                    >
                                                                        <canvas
                                                                            width="16"
                                                                            height="18"
                                                                            style="
                                                                                position: absolute;
                                                                                top: 0px;
                                                                                left: 0px;
                                                                            "
                                                                        ></canvas>
                                                                    </div>
                                                                </div>

                                                                <p
                                                                    class="
                                                                        user-avatar-badge-text
                                                                    "
                                                                >
                                                                    3
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <p
                                                        class="
                                                            user-status-title
                                                        "
                                                    >
                                                        <span class="bold"
                                                            >Paul Lang</span
                                                        >
                                                    </p>

                                                    <p class="user-status-text">
                                                        Can you stream the new
                                                        game?
                                                    </p>

                                                    <p
                                                        class="
                                                            user-status-timestamp
                                                            floaty
                                                        "
                                                    >
                                                        2 hours ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="simplebar-placeholder"
                                style="width: auto; height: 950px"
                            ></div>
                        </div>
                        <div
                            class="simplebar-track simplebar-horizontal"
                            style="visibility: hidden"
                        >
                            <div
                                class="simplebar-scrollbar"
                                style="width: 0px; display: none"
                            ></div>
                        </div>
                        <div
                            class="simplebar-track simplebar-vertical"
                            style="visibility: hidden"
                        >
                            <div
                                class="simplebar-scrollbar"
                                style="height: 0px; display: none"
                            ></div>
                        </div>
                    </div>

                    <form class="chat-widget-form">
                        <div class="interactive-input small">
                            <input
                                type="text"
                                id="chat-widget-search-2"
                                name="chat_widget_search_2"
                                placeholder="Search Messages..."
                            />

                            <div class="interactive-input-icon-wrap">
                                <svg
                                    class="
                                        interactive-input-icon
                                        icon-magnifying-glass
                                    "
                                >
                                    <use
                                        xlink:href="#svg-magnifying-glass"
                                    ></use>
                                </svg>
                            </div>

                            <div class="interactive-input-action">
                                <svg
                                    class="
                                        interactive-input-action-icon
                                        icon-cross-thin
                                    "
                                >
                                    <use xlink:href="#svg-cross-thin"></use>
                                </svg>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="chat-widget">
                    <div class="chat-widget-header">
                        <div class="chat-widget-settings">
                            <div
                                class="post-settings-wrap"
                                style="position: relative"
                            >
                                <div
                                    class="
                                        post-settings
                                        widget-box-post-settings-dropdown-trigger
                                    "
                                >
                                    <svg
                                        class="
                                            post-settings-icon
                                            icon-more-dots
                                        "
                                    >
                                        <use xlink:href="#svg-more-dots"></use>
                                    </svg>
                                </div>

                                <div
                                    class="
                                        simple-dropdown
                                        widget-box-post-settings-dropdown
                                    "
                                    style="
                                        position: absolute;
                                        z-index: 9999;
                                        top: 30px;
                                        right: 9px;
                                        opacity: 0;
                                        visibility: hidden;
                                        transform: translate(0px, -20px);
                                        transition: transform 0.3s ease-in-out
                                                0s,
                                            opacity 0.3s ease-in-out 0s,
                                            visibility 0.3s ease-in-out 0s;
                                    "
                                >
                                    <p class="simple-dropdown-link">Report</p>

                                    <p class="simple-dropdown-link">Block</p>

                                    <p class="simple-dropdown-link">Mute</p>
                                </div>
                            </div>
                        </div>

                        <div class="user-status">
                            <div class="user-status-avatar">
                                <div
                                    class="user-avatar small no-outline online"
                                >
                                    <div class="user-avatar-content">
                                        <div
                                            class="hexagon-image-30-32"
                                            data-src="img/avatar/03.jpg"
                                            style="
                                                width: 30px;
                                                height: 32px;
                                                position: relative;
                                            "
                                        >
                                            <canvas
                                                width="30"
                                                height="32"
                                                style="
                                                    position: absolute;
                                                    top: 0px;
                                                    left: 0px;
                                                "
                                            ></canvas>
                                        </div>
                                    </div>

                                    <div class="user-avatar-progress">
                                        <div
                                            class="hexagon-progress-40-44"
                                            style="
                                                width: 40px;
                                                height: 44px;
                                                position: relative;
                                            "
                                        >
                                            <canvas
                                                width="40"
                                                height="44"
                                                style="
                                                    position: absolute;
                                                    top: 0px;
                                                    left: 0px;
                                                "
                                            ></canvas>
                                        </div>
                                    </div>

                                    <div class="user-avatar-progress-border">
                                        <div
                                            class="hexagon-border-40-44"
                                            style="
                                                width: 40px;
                                                height: 44px;
                                                position: relative;
                                            "
                                        >
                                            <canvas
                                                width="40"
                                                height="44"
                                                style="
                                                    position: absolute;
                                                    top: 0px;
                                                    left: 0px;
                                                "
                                            ></canvas>
                                        </div>
                                    </div>

                                    <div class="user-avatar-badge">
                                        <div class="user-avatar-badge-border">
                                            <div
                                                class="hexagon-22-24"
                                                style="
                                                    width: 22px;
                                                    height: 24px;
                                                    position: relative;
                                                "
                                            >
                                                <canvas
                                                    width="22"
                                                    height="24"
                                                    style="
                                                        position: absolute;
                                                        top: 0px;
                                                        left: 0px;
                                                    "
                                                ></canvas>
                                            </div>
                                        </div>

                                        <div class="user-avatar-badge-content">
                                            <div
                                                class="hexagon-dark-16-18"
                                                style="
                                                    width: 16px;
                                                    height: 18px;
                                                    position: relative;
                                                "
                                            >
                                                <canvas
                                                    width="16"
                                                    height="18"
                                                    style="
                                                        position: absolute;
                                                        top: 0px;
                                                        left: 0px;
                                                    "
                                                ></canvas>
                                            </div>
                                        </div>

                                        <p class="user-avatar-badge-text">16</p>
                                    </div>
                                </div>
                            </div>

                            <p class="user-status-title">
                                <span class="bold">Nick Grissom</span>
                            </p>

                            <p class="user-status-tag online">Online</p>
                        </div>
                    </div>

                    <div class="chat-widget-conversation" data-simplebar="init">
                        <div
                            class="simplebar-wrapper"
                            style="margin: -35px -28px"
                        >
                            <div class="simplebar-height-auto-observer-wrapper">
                                <div
                                    class="simplebar-height-auto-observer"
                                ></div>
                            </div>
                            <div class="simplebar-mask">
                                <div
                                    class="simplebar-offset"
                                    style="right: 0px; bottom: 0px"
                                >
                                    <div
                                        class="simplebar-content-wrapper"
                                        style="height: auto; overflow: hidden"
                                    >
                                        <div
                                            class="simplebar-content"
                                            style="padding: 35px 28px"
                                        >
                                            <div
                                                class="chat-widget-speaker left"
                                            >
                                                <div
                                                    class="
                                                        chat-widget-speaker-avatar
                                                    "
                                                >
                                                    <div
                                                        class="
                                                            user-avatar
                                                            tiny
                                                            no-border
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                user-avatar-content
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    hexagon-image-24-26
                                                                "
                                                                data-src="img/avatar/03.jpg"
                                                                style="
                                                                    width: 24px;
                                                                    height: 26px;
                                                                    position: relative;
                                                                "
                                                            >
                                                                <canvas
                                                                    width="24"
                                                                    height="26"
                                                                    style="
                                                                        position: absolute;
                                                                        top: 0px;
                                                                        left: 0px;
                                                                    "
                                                                ></canvas>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p
                                                    class="
                                                        chat-widget-speaker-message
                                                    "
                                                >
                                                    Hi Marina! It's been a long
                                                    time!
                                                </p>

                                                <p
                                                    class="
                                                        chat-widget-speaker-timestamp
                                                    "
                                                >
                                                    Yesterday at 8:36PM
                                                </p>
                                            </div>

                                            <div
                                                class="
                                                    chat-widget-speaker
                                                    right
                                                "
                                            >
                                                <p
                                                    class="
                                                        chat-widget-speaker-message
                                                    "
                                                >
                                                    Hey Nick!
                                                </p>

                                                <p
                                                    class="
                                                        chat-widget-speaker-message
                                                    "
                                                >
                                                    You're right, it's been a
                                                    really long time! I think
                                                    the last time we saw was at
                                                    Neko's party
                                                </p>

                                                <p
                                                    class="
                                                        chat-widget-speaker-timestamp
                                                    "
                                                >
                                                    10:05AM
                                                </p>
                                            </div>

                                            <div
                                                class="chat-widget-speaker left"
                                            >
                                                <div
                                                    class="
                                                        chat-widget-speaker-avatar
                                                    "
                                                >
                                                    <div
                                                        class="
                                                            user-avatar
                                                            tiny
                                                            no-border
                                                        "
                                                    >
                                                        <div
                                                            class="
                                                                user-avatar-content
                                                            "
                                                        >
                                                            <div
                                                                class="
                                                                    hexagon-image-24-26
                                                                "
                                                                data-src="img/avatar/03.jpg"
                                                                style="
                                                                    width: 24px;
                                                                    height: 26px;
                                                                    position: relative;
                                                                "
                                                            >
                                                                <canvas
                                                                    width="24"
                                                                    height="26"
                                                                    style="
                                                                        position: absolute;
                                                                        top: 0px;
                                                                        left: 0px;
                                                                    "
                                                                ></canvas>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p
                                                    class="
                                                        chat-widget-speaker-message
                                                    "
                                                >
                                                    Yeah! I remember now! The
                                                    stream launch party
                                                </p>

                                                <p
                                                    class="
                                                        chat-widget-speaker-message
                                                    "
                                                >
                                                    That reminds me that I
                                                    wanted to ask you something
                                                </p>

                                                <p
                                                    class="
                                                        chat-widget-speaker-message
                                                    "
                                                >
                                                    Can you stream the new game?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="simplebar-placeholder"
                                style="width: auto; height: 425px"
                            ></div>
                        </div>
                        <div
                            class="simplebar-track simplebar-horizontal"
                            style="visibility: hidden"
                        >
                            <div
                                class="simplebar-scrollbar"
                                style="
                                    width: 0px;
                                    transform: translate3d(0px, 0px, 0px);
                                    display: none;
                                "
                            ></div>
                        </div>
                        <div
                            class="simplebar-track simplebar-vertical"
                            style="visibility: hidden"
                        >
                            <div
                                class="simplebar-scrollbar"
                                style="height: 0px; display: none"
                            ></div>
                        </div>
                    </div>

                    <form class="chat-widget-form">
                        <div class="form-row split">
                            <div class="form-item">
                                <div class="interactive-input small">
                                    <input
                                        type="text"
                                        id="chat-widget-message-text-2"
                                        name="chat_widget_message_text_2"
                                        placeholder="Write a message..."
                                    />

                                    <div
                                        class="
                                            interactive-input-icon-wrap
                                            actionable
                                        "
                                    >
                                        <div
                                            class="
                                                tooltip-wrap
                                                text-tooltip-tft
                                            "
                                            data-title="Send Photo"
                                            style="position: relative"
                                        >
                                            <svg
                                                class="
                                                    interactive-input-icon
                                                    icon-camera
                                                "
                                            >
                                                <use
                                                    xlink:href="#svg-camera"
                                                ></use>
                                            </svg>

                                            <div
                                                class="xm-tooltip"
                                                style="
                                                    white-space: nowrap;
                                                    position: absolute;
                                                    z-index: 99999;
                                                    top: -27px;
                                                    left: 50%;
                                                    margin-left: -40.5px;
                                                    opacity: 0;
                                                    visibility: hidden;
                                                    transform: translate(
                                                        0px,
                                                        10px
                                                    );
                                                    transition: all 0.3s
                                                        ease-in-out 0s;
                                                "
                                            >
                                                <p class="xm-tooltip-text">
                                                    Send Photo
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="interactive-input-action">
                                        <svg
                                            class="
                                                interactive-input-action-icon
                                                icon-cross-thin
                                            "
                                        >
                                            <use
                                                xlink:href="#svg-cross-thin"
                                            ></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="form-item auto-width">
                                <p class="button primary padded">
                                    <svg
                                        class="
                                            button-icon
                                            no-space
                                            icon-send-message
                                        "
                                    >
                                        <use
                                            xlink:href="#svg-send-message"
                                        ></use>
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import Hexagon from "@/plugins/hexagon";
import { User } from "@/types";

@Component({
    components: {},
    computed: { ...mapGetters(["user"]) },
})
export default class MessageList extends Vue {
    private hexagon: Hexagon = new Hexagon();
    private user!: User;
    mounted() {
        this.hexagon.init();
    }
}
</script>

<style scoped>
</style>
