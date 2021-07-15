<template>
    <div class="account-hub-content">
        <div class="section-header">
            <div class="section-header-info">
                <p class="section-pretitle">My Profile</p>

                <h2 class="section-title">Notifications</h2>
            </div>

            <div class="section-header-actions">
                <p class="section-header-action">Mark all as Read</p>

                <p class="section-header-action">Settings</p>
            </div>
        </div>

        <div class="notification-box-list">
            <div class="notification-box">
                <div class="user-status notification">
                    <a class="user-status-avatar" href="profile-timeline.html">
                        <div class="user-avatar small no-outline">
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
                    </a>

                    <p class="user-status-title">
                        <a class="bold" href="profile-timeline.html"
                            >Nick Grissom</a
                        >
                        posted a comment on your
                        <a class="highlighted" href="profile-timeline.html"
                            >status update</a
                        >
                    </p>

                    <p class="user-status-timestamp small-space">
                        2 minutes ago
                    </p>

                    <div class="user-status-icon">
                        <svg class="icon-comment">
                            <use xlink:href="#svg-comment"></use>
                        </svg>
                    </div>
                </div>

                <div class="notification-box-close-button">
                    <svg class="notification-box-close-button-icon icon-cross">
                        <use xlink:href="#svg-cross"></use>
                    </svg>
                </div>

                <div class="mark-unread-button"></div>
            </div>

            <div class="notification-box unread">
                <div class="user-status notification">
                    <a class="user-status-avatar" href="profile-timeline.html">
                        <div class="user-avatar small no-outline">
                            <div class="user-avatar-content">
                                <div
                                    class="hexagon-image-30-32"
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

                                <p class="user-avatar-badge-text">26</p>
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
                        <a class="highlighted" href="profile-timeline.html"
                            >status update</a
                        >
                    </p>

                    <p class="user-status-timestamp small-space">
                        17 minutes ago
                    </p>

                    <div class="user-status-icon">
                        <svg class="icon-thumbs-up">
                            <use xlink:href="#svg-thumbs-up"></use>
                        </svg>
                    </div>
                </div>

                <div class="notification-box-close-button">
                    <svg class="notification-box-close-button-icon icon-cross">
                        <use xlink:href="#svg-cross"></use>
                    </svg>
                </div>

                <div class="mark-read-button"></div>
            </div>

            <div class="notification-box">
                <div class="user-status notification">
                    <a class="user-status-avatar" href="profile-timeline.html">
                        <div class="user-avatar small no-outline">
                            <div class="user-avatar-content">
                                <div
                                    class="hexagon-image-30-32"
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

                                <p class="user-avatar-badge-text">13</p>
                            </div>
                        </div>
                    </a>

                    <p class="user-status-title">
                        <a class="bold" href="profile-timeline.html"
                            >Destroy Dex</a
                        >
                        posted a comment on your
                        <a class="highlighted" href="profile-photos.html"
                            >photo</a
                        >
                    </p>

                    <p class="user-status-timestamp small-space">
                        31 minutes ago
                    </p>

                    <div class="user-status-icon">
                        <svg class="icon-comment">
                            <use xlink:href="#svg-comment"></use>
                        </svg>
                    </div>
                </div>

                <div class="notification-box-close-button">
                    <svg class="notification-box-close-button-icon icon-cross">
                        <use xlink:href="#svg-cross"></use>
                    </svg>
                </div>

                <div class="mark-unread-button"></div>
            </div>

            <div class="notification-box">
                <div class="user-status notification">
                    <a class="user-status-avatar" href="profile-timeline.html">
                        <div class="user-avatar small no-outline">
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
                    </a>

                    <p class="user-status-title">
                        <a class="bold" href="profile-timeline.html"
                            >Nick Grissom</a
                        >
                        shared your
                        <a class="highlighted" href="profile-timeline.html"
                            >status update</a
                        >
                    </p>

                    <p class="user-status-timestamp small-space">
                        39 minutes ago
                    </p>

                    <div class="user-status-icon">
                        <svg class="icon-share">
                            <use xlink:href="#svg-share"></use>
                        </svg>
                    </div>
                </div>

                <div class="notification-box-close-button">
                    <svg class="notification-box-close-button-icon icon-cross">
                        <use xlink:href="#svg-cross"></use>
                    </svg>
                </div>

                <div class="mark-unread-button"></div>
            </div>

            <div class="notification-box">
                <div class="user-status notification">
                    <a class="user-status-avatar" href="profile-timeline.html">
                        <div class="user-avatar small no-outline">
                            <div class="user-avatar-content">
                                <div
                                    class="hexagon-image-30-32"
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

                                <p class="user-avatar-badge-text">5</p>
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
                        <a class="highlighted" href="profile-timeline.html"
                            >status update</a
                        >
                    </p>

                    <p class="user-status-timestamp small-space">
                        42 minutes ago
                    </p>

                    <div class="user-status-icon">
                        <svg class="icon-thumbs-up">
                            <use xlink:href="#svg-thumbs-up"></use>
                        </svg>
                    </div>
                </div>

                <div class="notification-box-close-button">
                    <svg class="notification-box-close-button-icon icon-cross">
                        <use xlink:href="#svg-cross"></use>
                    </svg>
                </div>

                <div class="mark-unread-button"></div>
            </div>

            <div class="notification-box unread">
                <div class="user-status notification">
                    <a class="user-status-avatar" href="profile-timeline.html">
                        <div class="user-avatar small no-outline">
                            <div class="user-avatar-content">
                                <div
                                    class="hexagon-image-30-32"
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

                                <p class="user-avatar-badge-text">12</p>
                            </div>
                        </div>
                    </a>

                    <p class="user-status-title">
                        <a class="bold" href="profile-timeline.html"
                            >Neko Bebop</a
                        >
                        replied to a comment you made on your
                        <a class="highlighted" href="profile-timeline.html"
                            >status update</a
                        >
                    </p>

                    <p class="user-status-timestamp small-space">
                        54 minutes ago
                    </p>

                    <div class="user-status-icon">
                        <svg class="icon-comment">
                            <use xlink:href="#svg-comment"></use>
                        </svg>
                    </div>
                </div>

                <div class="notification-box-close-button">
                    <svg class="notification-box-close-button-icon icon-cross">
                        <use xlink:href="#svg-cross"></use>
                    </svg>
                </div>

                <div class="mark-read-button"></div>
            </div>

            <div class="notification-box">
                <div class="user-status notification">
                    <a class="user-status-avatar" href="profile-timeline.html">
                        <div class="user-avatar small no-outline">
                            <div class="user-avatar-content">
                                <div
                                    class="hexagon-image-30-32"
                                    data-src="img/avatar/23.jpg"
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

                                <p class="user-avatar-badge-text">19</p>
                            </div>
                        </div>
                    </a>

                    <p class="user-status-title">
                        <a class="bold" href="profile-timeline.html"
                            >Rosie Sakura</a
                        >
                        shared your
                        <a class="highlighted" href="profile-timeline.html"
                            >status update</a
                        >
                    </p>

                    <p class="user-status-timestamp small-space">
                        1 hour 2 minutes ago
                    </p>

                    <div class="user-status-icon">
                        <svg class="icon-share">
                            <use xlink:href="#svg-share"></use>
                        </svg>
                    </div>
                </div>

                <div class="notification-box-close-button">
                    <svg class="notification-box-close-button-icon icon-cross">
                        <use xlink:href="#svg-cross"></use>
                    </svg>
                </div>

                <div class="mark-unread-button"></div>
            </div>

            <div class="notification-box">
                <div class="user-status notification">
                    <a class="user-status-avatar" href="profile-timeline.html">
                        <div class="user-avatar small no-outline">
                            <div class="user-avatar-content">
                                <div
                                    class="hexagon-image-30-32"
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

                                <p class="user-avatar-badge-text">6</p>
                            </div>
                        </div>
                    </a>

                    <p class="user-status-title">
                        <a class="bold" href="profile-timeline.html"
                            >Bearded Wonder</a
                        >
                        left a happy
                        <img
                            class="reaction"
                            src="img/reaction/happy.png"
                            alt="reaction-happy"
                        />
                        reaction on your
                        <a class="highlighted" href="profile-timeline.html"
                            >status update</a
                        >
                    </p>

                    <p class="user-status-timestamp small-space">
                        1 hour 47 minutes ago
                    </p>

                    <div class="user-status-icon">
                        <svg class="icon-thumbs-up">
                            <use xlink:href="#svg-thumbs-up"></use>
                        </svg>
                    </div>
                </div>

                <div class="notification-box-close-button">
                    <svg class="notification-box-close-button-icon icon-cross">
                        <use xlink:href="#svg-cross"></use>
                    </svg>
                </div>

                <div class="mark-unread-button"></div>
            </div>
        </div>

       
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class NotificationList extends Vue {}
</script>

<style scoped>
</style>
