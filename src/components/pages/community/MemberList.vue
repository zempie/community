<template>
    <div class="grid-column">
        <section class="section">
            <div class="section-header">
                <div class="section-header-info">
                    <p class="section-pretitle">Browse Group</p>

                    <h2 class="section-title">
                        Members <span class="highlighted secondary">82</span>
                    </h2>
                </div>
            </div>

            <div class="section-filters-bar v1">
                <div class="section-filters-bar-actions">
                    <form class="form">
                        <div class="form-input small with-button">
                            <label for="members-search">Search Members</label>
                            <input
                                type="text"
                                id="members-search"
                                name="members_search"
                            />

                            <button class="button secondary">
                                <svg class="icon-magnifying-glass">
                                    <use
                                        xlink:href="#svg-magnifying-glass"
                                    ></use>
                                </svg>
                            </button>
                        </div>

                        <div class="form-select">
                            <label for="members-filter-category"
                                >Filter By</label
                            >
                            <select
                                id="members-filter-category"
                                name="members_filter_category"
                            >
                                <option value="0">Recently Active</option>
                                <option value="1">Newest Members</option>
                                <option value="2">Alphabetical</option>
                            </select>

                            <svg class="form-select-icon icon-small-arrow">
                                <use xlink:href="#svg-small-arrow"></use>
                            </svg>
                        </div>
                    </form>

                    <div class="filter-tabs">
                        <div class="filter-tab secondary active">
                            <p class="filter-tab-text">Recently Active</p>
                        </div>

                        <div class="filter-tab secondary">
                            <p class="filter-tab-text">Newest Members</p>
                        </div>

                        <div class="filter-tab secondary">
                            <p class="filter-tab-text">Alphabetical</p>
                        </div>
                    </div>
                </div>

                
            </div>

            <div class="grid grid-4-4-4 centered">
                <div class="user-preview">
                    <figure class="user-preview-cover liquid">
                        <img src="img/cover/04.jpg" alt="cover-04" />
                    </figure>

                    <div class="user-preview-info">
                        <div class="user-short-description">
                            <a
                                class="
                                    user-short-description-avatar user-avatar
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
                                        data-src="img/avatar/05.jpg"
                                    ></div>
                                </div>

                                <div class="user-avatar-progress">
                                    <div class="hexagon-progress-100-110"></div>
                                </div>

                                <div class="user-avatar-progress-border">
                                    <div class="hexagon-border-100-110"></div>
                                </div>

                                <div class="user-avatar-badge">
                                    <div class="user-avatar-badge-border">
                                        <div class="hexagon-32-36"></div>
                                    </div>

                                    <div class="user-avatar-badge-content">
                                        <div class="hexagon-dark-26-28"></div>
                                    </div>

                                    <p class="user-avatar-badge-text">12</p>
                                </div>
                            </a>

                            <p class="user-short-description-title">
                                <a href="profile-timeline.html">NekoBebop</a>
                            </p>

                            <p class="user-short-description-text">
                                <a href="#">www.store.com/nekoprints</a>
                            </p>
                        </div>

                        <div class="badge-list small">
                            <div class="badge-item">
                                <img
                                    src="img/badge/silver-s.png"
                                    alt="badge-silver-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/fcultivator-s.png"
                                    alt="badge-fcultivator-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/scientist-s.png"
                                    alt="badge-scientist-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/rmachine-s.png"
                                    alt="badge-rmachine-s"
                                />
                            </div>

                            <a class="badge-item" href="profile-badges.html">
                                <img
                                    src="img/badge/blank-s.png"
                                    alt="badge-blank-s"
                                />

                                <p class="badge-item-text">+29</p>
                            </a>
                        </div>

                        <div
                            id="user-preview-stats-slides-01"
                            class="user-preview-stats-slides"
                        >
                            <div class="user-preview-stats-slide">
                                <div class="user-stats">
                                    <div class="user-stat">
                                        <p class="user-stat-title">874</p>

                                        <p class="user-stat-text">posts</p>
                                    </div>

                                    <div class="user-stat">
                                        <p class="user-stat-title">60</p>

                                        <p class="user-stat-text">friends</p>
                                    </div>

                                    <div class="user-stat">
                                        <p class="user-stat-title">3.9k</p>

                                        <p class="user-stat-text">visits</p>
                                    </div>
                                </div>
                            </div>

                            <div class="user-preview-stats-slide">
                                <p class="user-preview-text">
                                    Hello! I'm James Hart, but I go by the name
                                    of Destroy Dex on my stream channel. Come to
                                    check out the latest gaming news!
                                </p>
                            </div>
                        </div>

                        <div
                            id="user-preview-stats-roster-01"
                            class="user-preview-stats-roster slider-roster"
                        >
                            <div class="slider-roster-item"></div>

                            <div class="slider-roster-item"></div>
                        </div>

                        <div class="social-links small">
                            <a class="social-link small twitter" href="#">
                                <svg class="social-link-icon icon-twitter">
                                    <use xlink:href="#svg-twitter"></use>
                                </svg>
                            </a>

                            <a class="social-link small instagram" href="#">
                                <svg class="social-link-icon icon-instagram">
                                    <use xlink:href="#svg-instagram"></use>
                                </svg>
                            </a>

                            <a class="social-link small twitch" href="#">
                                <svg class="social-link-icon icon-twitch">
                                    <use xlink:href="#svg-twitch"></use>
                                </svg>
                            </a>

                            <a class="social-link small discord" href="#">
                                <svg class="social-link-icon icon-discord">
                                    <use xlink:href="#svg-discord"></use>
                                </svg>
                            </a>
                        </div>

                        <div class="user-preview-actions">
                            <p class="button secondary">Add Friend +</p>

                            <p class="button primary">Send Message</p>
                        </div>
                    </div>
                </div>

                <div class="user-preview">
                    <figure class="user-preview-cover liquid">
                        <img src="img/cover/15.jpg" alt="cover-15" />
                    </figure>

                    <div class="user-preview-info">
                        <div class="user-short-description">
                            <a
                                class="
                                    user-short-description-avatar user-avatar
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
                                        data-src="img/avatar/02.jpg"
                                    ></div>
                                </div>

                                <div class="user-avatar-progress">
                                    <div class="hexagon-progress-100-110"></div>
                                </div>

                                <div class="user-avatar-progress-border">
                                    <div class="hexagon-border-100-110"></div>
                                </div>

                                <div class="user-avatar-badge">
                                    <div class="user-avatar-badge-border">
                                        <div class="hexagon-32-36"></div>
                                    </div>

                                    <div class="user-avatar-badge-content">
                                        <div class="hexagon-dark-26-28"></div>
                                    </div>

                                    <p class="user-avatar-badge-text">13</p>
                                </div>
                            </a>

                            <p class="user-short-description-title">
                                <a href="profile-timeline.html">Destroy Dex</a>
                            </p>

                            <p class="user-short-description-text">
                                <a href="#">www.twitch.tv/d-destroyer</a>
                            </p>
                        </div>

                        <div class="badge-list small">
                            <div class="badge-item">
                                <img
                                    src="img/badge/gold-s.png"
                                    alt="badge-gold-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/age-s.png"
                                    alt="badge-age-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/verifieds-s.png"
                                    alt="badge-verifieds-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/rulerm-s.png"
                                    alt="badge-rulerm-s"
                                />
                            </div>

                            <a class="badge-item" href="profile-badges.html">
                                <img
                                    src="img/badge/blank-s.png"
                                    alt="badge-blank-s"
                                />

                                <p class="badge-item-text">+12</p>
                            </a>
                        </div>

                        <div
                            id="user-preview-stats-slides-02"
                            class="user-preview-stats-slides"
                        >
                            <div class="user-preview-stats-slide">
                                <div class="user-stats">
                                    <div class="user-stat">
                                        <p class="user-stat-title">890</p>

                                        <p class="user-stat-text">posts</p>
                                    </div>

                                    <div class="user-stat">
                                        <p class="user-stat-title">79</p>

                                        <p class="user-stat-text">friends</p>
                                    </div>

                                    <div class="user-stat">
                                        <p class="user-stat-title">4.6k</p>

                                        <p class="user-stat-text">visits</p>
                                    </div>
                                </div>
                            </div>

                            <div class="user-preview-stats-slide">
                                <p class="user-preview-text">
                                    Hello! I'm James Hart, but I go by the name
                                    of Destroy Dex on my stream channel. Come to
                                    check out the latest gaming news!
                                </p>
                            </div>
                        </div>

                        <div
                            id="user-preview-stats-roster-02"
                            class="user-preview-stats-roster slider-roster"
                        >
                            <div class="slider-roster-item"></div>

                            <div class="slider-roster-item"></div>
                        </div>

                        <div class="user-preview-social-links-wrap">
                            <div
                                id="user-preview-social-links-slider-01"
                                class="user-preview-social-links"
                            >
                                <div class="user-preview-social-link">
                                    <a
                                        class="social-link small facebook"
                                        href="#"
                                    >
                                        <svg
                                            class="
                                                social-link-icon
                                                icon-facebook
                                            "
                                        >
                                            <use
                                                xlink:href="#svg-facebook"
                                            ></use>
                                        </svg>
                                    </a>
                                </div>

                                <div class="user-preview-social-link">
                                    <a
                                        class="social-link small twitter"
                                        href="#"
                                    >
                                        <svg
                                            class="
                                                social-link-icon
                                                icon-twitter
                                            "
                                        >
                                            <use
                                                xlink:href="#svg-twitter"
                                            ></use>
                                        </svg>
                                    </a>
                                </div>

                                <div class="user-preview-social-link">
                                    <a
                                        class="social-link small instagram"
                                        href="#"
                                    >
                                        <svg
                                            class="
                                                social-link-icon
                                                icon-instagram
                                            "
                                        >
                                            <use
                                                xlink:href="#svg-instagram"
                                            ></use>
                                        </svg>
                                    </a>
                                </div>

                                <div class="user-preview-social-link">
                                    <a
                                        class="social-link small twitch"
                                        href="#"
                                    >
                                        <svg
                                            class="social-link-icon icon-twitch"
                                        >
                                            <use xlink:href="#svg-twitch"></use>
                                        </svg>
                                    </a>
                                </div>

                                <div class="user-preview-social-link">
                                    <a
                                        class="social-link small artstation"
                                        href="#"
                                    >
                                        <svg
                                            class="
                                                social-link-icon
                                                icon-artstation
                                            "
                                        >
                                            <use
                                                xlink:href="#svg-artstation"
                                            ></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div
                                id="user-preview-social-links-slider-controls-01"
                                class="slider-controls"
                            >
                                <div class="slider-control left">
                                    <svg
                                        class="
                                            slider-control-icon
                                            icon-small-arrow
                                        "
                                    >
                                        <use
                                            xlink:href="#svg-small-arrow"
                                        ></use>
                                    </svg>
                                </div>

                                <div class="slider-control right">
                                    <svg
                                        class="
                                            slider-control-icon
                                            icon-small-arrow
                                        "
                                    >
                                        <use
                                            xlink:href="#svg-small-arrow"
                                        ></use>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="user-preview-actions">
                            <p class="button secondary">Add Friend +</p>

                            <p class="button primary">Send Message</p>
                        </div>
                    </div>
                </div>

                <div class="user-preview">
                    <figure class="user-preview-cover liquid">
                        <img src="img/cover/23.jpg" alt="cover-23" />
                    </figure>

                    <div class="user-preview-info">
                        <div class="user-short-description">
                            <a
                                class="
                                    user-short-description-avatar user-avatar
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
                                        data-src="img/avatar/03.jpg"
                                    ></div>
                                </div>

                                <div class="user-avatar-progress">
                                    <div class="hexagon-progress-100-110"></div>
                                </div>

                                <div class="user-avatar-progress-border">
                                    <div class="hexagon-border-100-110"></div>
                                </div>

                                <div class="user-avatar-badge">
                                    <div class="user-avatar-badge-border">
                                        <div class="hexagon-32-36"></div>
                                    </div>

                                    <div class="user-avatar-badge-content">
                                        <div class="hexagon-dark-26-28"></div>
                                    </div>

                                    <p class="user-avatar-badge-text">16</p>
                                </div>
                            </a>

                            <p class="user-short-description-title">
                                <a href="profile-timeline.html">Nick Grissom</a>
                            </p>

                            <p class="user-short-description-text">
                                aka Phantom Streamer
                            </p>
                        </div>

                        <div class="badge-list small">
                            <div class="badge-item">
                                <img
                                    src="img/badge/gold-s.png"
                                    alt="badge-gold-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/age-s.png"
                                    alt="badge-age-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/liked-s.png"
                                    alt="badge-liked-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/sloved-s.png"
                                    alt="badge-sloved-s"
                                />
                            </div>

                            <a class="badge-item" href="profile-badges.html">
                                <img
                                    src="img/badge/blank-s.png"
                                    alt="badge-blank-s"
                                />

                                <p class="badge-item-text">+9</p>
                            </a>
                        </div>

                        <div
                            id="user-preview-stats-slides-03"
                            class="user-preview-stats-slides"
                        >
                            <div class="user-preview-stats-slide">
                                <div class="user-stats">
                                    <div class="user-stat">
                                        <p class="user-stat-title">562</p>

                                        <p class="user-stat-text">posts</p>
                                    </div>

                                    <div class="user-stat">
                                        <p class="user-stat-title">77</p>

                                        <p class="user-stat-text">friends</p>
                                    </div>

                                    <div class="user-stat">
                                        <p class="user-stat-title">2.3k</p>

                                        <p class="user-stat-text">visits</p>
                                    </div>
                                </div>
                            </div>

                            <div class="user-preview-stats-slide">
                                <p class="user-preview-text">
                                    Hello! I'm James Hart, but I go by the name
                                    of Destroy Dex on my stream channel. Come to
                                    check out the latest gaming news!
                                </p>
                            </div>
                        </div>

                        <div
                            id="user-preview-stats-roster-03"
                            class="user-preview-stats-roster slider-roster"
                        >
                            <div class="slider-roster-item"></div>

                            <div class="slider-roster-item"></div>
                        </div>

                        <div class="social-links small">
                            <a class="social-link small twitter" href="#">
                                <svg class="social-link-icon icon-twitter">
                                    <use xlink:href="#svg-twitter"></use>
                                </svg>
                            </a>

                            <a class="social-link small twitch" href="#">
                                <svg class="social-link-icon icon-twitch">
                                    <use xlink:href="#svg-twitch"></use>
                                </svg>
                            </a>

                            <a class="social-link small youtube" href="#">
                                <svg class="social-link-icon icon-youtube">
                                    <use xlink:href="#svg-youtube"></use>
                                </svg>
                            </a>
                        </div>

                        <div class="user-preview-actions">
                            <p class="button secondary">Add Friend +</p>

                            <p class="button primary">Send Message</p>
                        </div>
                    </div>
                </div>

                <div class="user-preview">
                    <figure class="user-preview-cover liquid">
                        <img src="img/cover/05.jpg" alt="cover-05" />
                    </figure>

                    <div class="user-preview-info">
                        <div class="user-short-description">
                            <a
                                class="
                                    user-short-description-avatar user-avatar
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
                                        data-src="img/avatar/07.jpg"
                                    ></div>
                                </div>

                                <div class="user-avatar-progress">
                                    <div class="hexagon-progress-100-110"></div>
                                </div>

                                <div class="user-avatar-progress-border">
                                    <div class="hexagon-border-100-110"></div>
                                </div>

                                <div class="user-avatar-badge">
                                    <div class="user-avatar-badge-border">
                                        <div class="hexagon-32-36"></div>
                                    </div>

                                    <div class="user-avatar-badge-content">
                                        <div class="hexagon-dark-26-28"></div>
                                    </div>

                                    <p class="user-avatar-badge-text">26</p>
                                </div>
                            </a>

                            <p class="user-short-description-title">
                                <a href="profile-timeline.html"
                                    >Sarah Diamond</a
                                >
                            </p>

                            <p class="user-short-description-text">
                                <a href="#">www.diamondart.com</a>
                            </p>
                        </div>

                        <div class="badge-list small">
                            <div class="badge-item">
                                <img
                                    src="img/badge/platinum-s.png"
                                    alt="badge-platinum-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/sloved-s.png"
                                    alt="badge-sloved-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/warrior-s.png"
                                    alt="badge-warrior-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/caffeinated-s.png"
                                    alt="badge-caffeinated-s"
                                />
                            </div>

                            <a class="badge-item" href="profile-badges.html">
                                <img
                                    src="img/badge/blank-s.png"
                                    alt="badge-blank-s"
                                />

                                <p class="badge-item-text">+32</p>
                            </a>
                        </div>

                        <div
                            id="user-preview-stats-slides-04"
                            class="user-preview-stats-slides"
                        >
                            <div class="user-preview-stats-slide">
                                <div class="user-stats">
                                    <div class="user-stat">
                                        <p class="user-stat-title">1046</p>

                                        <p class="user-stat-text">posts</p>
                                    </div>

                                    <div class="user-stat">
                                        <p class="user-stat-title">107</p>

                                        <p class="user-stat-text">friends</p>
                                    </div>

                                    <div class="user-stat">
                                        <p class="user-stat-title">12.1k</p>

                                        <p class="user-stat-text">visits</p>
                                    </div>
                                </div>
                            </div>

                            <div class="user-preview-stats-slide">
                                <p class="user-preview-text">
                                    Hello! I'm James Hart, but I go by the name
                                    of Destroy Dex on my stream channel. Come to
                                    check out the latest gaming news!
                                </p>
                            </div>
                        </div>

                        <div
                            id="user-preview-stats-roster-04"
                            class="user-preview-stats-roster slider-roster"
                        >
                            <div class="slider-roster-item"></div>

                            <div class="slider-roster-item"></div>
                        </div>

                        <div class="social-links small">
                            <a class="social-link small twitter" href="#">
                                <svg class="social-link-icon icon-twitter">
                                    <use xlink:href="#svg-twitter"></use>
                                </svg>
                            </a>

                            <a class="social-link small instagram" href="#">
                                <svg class="social-link-icon icon-instagram">
                                    <use xlink:href="#svg-instagram"></use>
                                </svg>
                            </a>

                            <a class="social-link small patreon" href="#">
                                <svg class="social-link-icon icon-patreon">
                                    <use xlink:href="#svg-patreon"></use>
                                </svg>
                            </a>
                        </div>

                        <div class="user-preview-actions">
                            <p class="button secondary">Add Friend +</p>

                            <p class="button primary">Send Message</p>
                        </div>
                    </div>
                </div>

                <div class="user-preview">
                    <figure class="user-preview-cover liquid">
                        <img src="img/cover/06.jpg" alt="cover-06" />
                    </figure>

                    <div class="user-preview-info">
                        <div class="user-short-description">
                            <a
                                class="
                                    user-short-description-avatar user-avatar
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
                                        data-src="img/avatar/04.jpg"
                                    ></div>
                                </div>

                                <div class="user-avatar-progress">
                                    <div class="hexagon-progress-100-110"></div>
                                </div>

                                <div class="user-avatar-progress-border">
                                    <div class="hexagon-border-100-110"></div>
                                </div>

                                <div class="user-avatar-badge">
                                    <div class="user-avatar-badge-border">
                                        <div class="hexagon-32-36"></div>
                                    </div>

                                    <div class="user-avatar-badge-content">
                                        <div class="hexagon-dark-26-28"></div>
                                    </div>

                                    <p class="user-avatar-badge-text">6</p>
                                </div>
                            </a>

                            <p class="user-short-description-title">
                                <a href="profile-timeline.html"
                                    >Bearded Wonder</a
                                >
                            </p>

                            <p class="user-short-description-text">
                                aka Jack Parker
                            </p>
                        </div>

                        <div class="badge-list small">
                            <div class="badge-item">
                                <img
                                    src="img/badge/silver-s.png"
                                    alt="badge-silver-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/globet-s.png"
                                    alt="badge-globet-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/liked-s.png"
                                    alt="badge-liked-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/fcultivator-s.png"
                                    alt="badge-fcultivator-s"
                                />
                            </div>

                            <a class="badge-item" href="profile-badges.html">
                                <img
                                    src="img/badge/blank-s.png"
                                    alt="badge-blank-s"
                                />

                                <p class="badge-item-text">+22</p>
                            </a>
                        </div>

                        <div
                            id="user-preview-stats-slides-05"
                            class="user-preview-stats-slides"
                        >
                            <div class="user-preview-stats-slide">
                                <div class="user-stats">
                                    <div class="user-stat">
                                        <p class="user-stat-title">97</p>

                                        <p class="user-stat-text">posts</p>
                                    </div>

                                    <div class="user-stat">
                                        <p class="user-stat-title">44</p>

                                        <p class="user-stat-text">friends</p>
                                    </div>

                                    <div class="user-stat">
                                        <p class="user-stat-title">608</p>

                                        <p class="user-stat-text">visits</p>
                                    </div>
                                </div>
                            </div>

                            <div class="user-preview-stats-slide">
                                <p class="user-preview-text">
                                    Hello! I'm James Hart, but I go by the name
                                    of Destroy Dex on my stream channel. Come to
                                    check out the latest gaming news!
                                </p>
                            </div>
                        </div>

                        <div
                            id="user-preview-stats-roster-05"
                            class="user-preview-stats-roster slider-roster"
                        >
                            <div class="slider-roster-item"></div>

                            <div class="slider-roster-item"></div>
                        </div>

                        <div class="social-links small">
                            <a class="social-link small twitter" href="#">
                                <svg class="social-link-icon icon-twitter">
                                    <use xlink:href="#svg-twitter"></use>
                                </svg>
                            </a>

                            <a class="social-link small twitch" href="#">
                                <svg class="social-link-icon icon-twitch">
                                    <use xlink:href="#svg-twitch"></use>
                                </svg>
                            </a>

                            <a class="social-link small youtube" href="#">
                                <svg class="social-link-icon icon-youtube">
                                    <use xlink:href="#svg-youtube"></use>
                                </svg>
                            </a>

                            <a class="social-link small discord" href="#">
                                <svg class="social-link-icon icon-discord">
                                    <use xlink:href="#svg-discord"></use>
                                </svg>
                            </a>
                        </div>

                        <div class="user-preview-actions">
                            <p class="button secondary">Add Friend +</p>

                            <p class="button primary">Send Message</p>
                        </div>
                    </div>
                </div>

                <div class="user-preview">
                    <figure class="user-preview-cover liquid">
                        <img src="img/cover/08.jpg" alt="cover-08" />
                    </figure>

                    <div class="user-preview-info">
                        <div class="user-short-description">
                            <a
                                class="
                                    user-short-description-avatar user-avatar
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
                                        data-src="img/avatar/10.jpg"
                                    ></div>
                                </div>

                                <div class="user-avatar-progress">
                                    <div class="hexagon-progress-100-110"></div>
                                </div>

                                <div class="user-avatar-progress-border">
                                    <div class="hexagon-border-100-110"></div>
                                </div>

                                <div class="user-avatar-badge">
                                    <div class="user-avatar-badge-border">
                                        <div class="hexagon-32-36"></div>
                                    </div>

                                    <div class="user-avatar-badge-content">
                                        <div class="hexagon-dark-26-28"></div>
                                    </div>

                                    <p class="user-avatar-badge-text">5</p>
                                </div>
                            </a>

                            <p class="user-short-description-title">
                                <a href="profile-timeline.html"
                                    >The Green Goo</a
                                >
                            </p>

                            <p class="user-short-description-text">
                                <a href="#">www.ggprints.com</a>
                            </p>
                        </div>

                        <div class="badge-list small">
                            <div class="badge-item">
                                <img
                                    src="img/badge/bronze-s.png"
                                    alt="badge-bronze-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/age-s.png"
                                    alt="badge-age-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/caffeinated-s.png"
                                    alt="badge-caffeinated-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/forumsf-s.png"
                                    alt="badge-forumsf-s"
                                />
                            </div>

                            <a class="badge-item" href="profile-badges.html">
                                <img
                                    src="img/badge/blank-s.png"
                                    alt="badge-blank-s"
                                />

                                <p class="badge-item-text">+7</p>
                            </a>
                        </div>

                        <div
                            id="user-preview-stats-slides-06"
                            class="user-preview-stats-slides"
                        >
                            <div class="user-preview-stats-slide">
                                <div class="user-stats">
                                    <div class="user-stat">
                                        <p class="user-stat-title">28</p>

                                        <p class="user-stat-text">posts</p>
                                    </div>

                                    <div class="user-stat">
                                        <p class="user-stat-title">53</p>

                                        <p class="user-stat-text">friends</p>
                                    </div>

                                    <div class="user-stat">
                                        <p class="user-stat-title">901</p>

                                        <p class="user-stat-text">visits</p>
                                    </div>
                                </div>
                            </div>

                            <div class="user-preview-stats-slide">
                                <p class="user-preview-text">
                                    Hello! I'm James Hart, but I go by the name
                                    of Destroy Dex on my stream channel. Come to
                                    check out the latest gaming news!
                                </p>
                            </div>
                        </div>

                        <div
                            id="user-preview-stats-roster-06"
                            class="user-preview-stats-roster slider-roster"
                        >
                            <div class="slider-roster-item"></div>

                            <div class="slider-roster-item"></div>
                        </div>

                        <div class="social-links small">
                            <a class="social-link small facebook" href="#">
                                <svg class="social-link-icon icon-facebook">
                                    <use xlink:href="#svg-facebook"></use>
                                </svg>
                            </a>

                            <a class="social-link small twitter" href="#">
                                <svg class="social-link-icon icon-twitter">
                                    <use xlink:href="#svg-twitter"></use>
                                </svg>
                            </a>

                            <a class="social-link small twitch" href="#">
                                <svg class="social-link-icon icon-twitch">
                                    <use xlink:href="#svg-twitch"></use>
                                </svg>
                            </a>
                        </div>

                        <div class="user-preview-actions">
                            <p class="button secondary">Add Friend +</p>

                            <p class="button primary">Send Message</p>
                        </div>
                    </div>
                </div>

                <div class="user-preview">
                    <figure class="user-preview-cover liquid">
                        <img src="img/cover/09.jpg" alt="cover-09" />
                    </figure>

                    <div class="user-preview-info">
                        <div class="user-short-description">
                            <a
                                class="
                                    user-short-description-avatar user-avatar
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
                                        data-src="img/avatar/08.jpg"
                                    ></div>
                                </div>

                                <div class="user-avatar-progress">
                                    <div class="hexagon-progress-100-110"></div>
                                </div>

                                <div class="user-avatar-progress-border">
                                    <div class="hexagon-border-100-110"></div>
                                </div>

                                <div class="user-avatar-badge">
                                    <div class="user-avatar-badge-border">
                                        <div class="hexagon-32-36"></div>
                                    </div>

                                    <div class="user-avatar-badge-content">
                                        <div class="hexagon-dark-26-28"></div>
                                    </div>

                                    <p class="user-avatar-badge-text">4</p>
                                </div>
                            </a>

                            <p class="user-short-description-title">
                                <a href="profile-timeline.html"
                                    >Damian Greyson</a
                                >
                            </p>

                            <p class="user-short-description-text">
                                aka Samurai Stream
                            </p>
                        </div>

                        <div class="badge-list small">
                            <div class="badge-item">
                                <img
                                    src="img/badge/bronze-s.png"
                                    alt="badge-bronze-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/age-s.png"
                                    alt="badge-age-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/caffeinated-s.png"
                                    alt="badge-caffeinated-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/forumsf-s.png"
                                    alt="badge-forumsf-s"
                                />
                            </div>

                            <a class="badge-item" href="profile-badges.html">
                                <img
                                    src="img/badge/blank-s.png"
                                    alt="badge-blank-s"
                                />

                                <p class="badge-item-text">+2</p>
                            </a>
                        </div>

                        <div
                            id="user-preview-stats-slides-07"
                            class="user-preview-stats-slides"
                        >
                            <div class="user-preview-stats-slide">
                                <div class="user-stats">
                                    <div class="user-stat">
                                        <p class="user-stat-title">29</p>

                                        <p class="user-stat-text">posts</p>
                                    </div>

                                    <div class="user-stat">
                                        <p class="user-stat-title">17</p>

                                        <p class="user-stat-text">friends</p>
                                    </div>

                                    <div class="user-stat">
                                        <p class="user-stat-title">218</p>

                                        <p class="user-stat-text">visits</p>
                                    </div>
                                </div>
                            </div>

                            <div class="user-preview-stats-slide">
                                <p class="user-preview-text">
                                    Hello! I'm James Hart, but I go by the name
                                    of Destroy Dex on my stream channel. Come to
                                    check out the latest gaming news!
                                </p>
                            </div>
                        </div>

                        <div
                            id="user-preview-stats-roster-07"
                            class="user-preview-stats-roster slider-roster"
                        >
                            <div class="slider-roster-item"></div>

                            <div class="slider-roster-item"></div>
                        </div>

                        <div class="social-links small">
                            <a class="social-link small twitter" href="#">
                                <svg class="social-link-icon icon-twitter">
                                    <use xlink:href="#svg-twitter"></use>
                                </svg>
                            </a>

                            <a class="social-link small twitch" href="#">
                                <svg class="social-link-icon icon-twitch">
                                    <use xlink:href="#svg-twitch"></use>
                                </svg>
                            </a>

                            <a class="social-link small discord" href="#">
                                <svg class="social-link-icon icon-discord">
                                    <use xlink:href="#svg-discord"></use>
                                </svg>
                            </a>
                        </div>

                        <div class="user-preview-actions">
                            <p class="button secondary">Add Friend +</p>

                            <p class="button primary">Send Message</p>
                        </div>
                    </div>
                </div>

                <div class="user-preview">
                    <figure class="user-preview-cover liquid">
                        <img src="img/cover/18.jpg" alt="cover-18" />
                    </figure>

                    <div class="user-preview-info">
                        <div class="user-short-description">
                            <a
                                class="
                                    user-short-description-avatar user-avatar
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
                                        data-src="img/avatar/23.jpg"
                                    ></div>
                                </div>

                                <div class="user-avatar-progress">
                                    <div class="hexagon-progress-100-110"></div>
                                </div>

                                <div class="user-avatar-progress-border">
                                    <div class="hexagon-border-100-110"></div>
                                </div>

                                <div class="user-avatar-badge">
                                    <div class="user-avatar-badge-border">
                                        <div class="hexagon-32-36"></div>
                                    </div>

                                    <div class="user-avatar-badge-content">
                                        <div class="hexagon-dark-26-28"></div>
                                    </div>

                                    <p class="user-avatar-badge-text">19</p>
                                </div>
                            </a>

                            <p class="user-short-description-title">
                                <a href="profile-timeline.html">Rosie Sakura</a>
                            </p>

                            <p class="user-short-description-text">
                                <a href="#">www.rosiesk.com</a>
                            </p>
                        </div>

                        <div class="badge-list small">
                            <div class="badge-item">
                                <img
                                    src="img/badge/gold-s.png"
                                    alt="badge-gold-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/rmachine-s.png"
                                    alt="badge-rmachine-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/globet-s.png"
                                    alt="badge-globet-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/prophoto-s.png"
                                    alt="badge-prophoto-s"
                                />
                            </div>

                            <a class="badge-item" href="profile-badges.html">
                                <img
                                    src="img/badge/blank-s.png"
                                    alt="badge-blank-s"
                                />

                                <p class="badge-item-text">+18</p>
                            </a>
                        </div>

                        <div
                            id="user-preview-stats-slides-08"
                            class="user-preview-stats-slides"
                        >
                            <div class="user-preview-stats-slide">
                                <div class="user-stats">
                                    <div class="user-stat">
                                        <p class="user-stat-title">1260</p>

                                        <p class="user-stat-text">posts</p>
                                    </div>

                                    <div class="user-stat">
                                        <p class="user-stat-title">114</p>

                                        <p class="user-stat-text">friends</p>
                                    </div>

                                    <div class="user-stat">
                                        <p class="user-stat-title">1.1k</p>

                                        <p class="user-stat-text">visits</p>
                                    </div>
                                </div>
                            </div>

                            <div class="user-preview-stats-slide">
                                <p class="user-preview-text">
                                    Hello! I'm James Hart, but I go by the name
                                    of Destroy Dex on my stream channel. Come to
                                    check out the latest gaming news!
                                </p>
                            </div>
                        </div>

                        <div
                            id="user-preview-stats-roster-08"
                            class="user-preview-stats-roster slider-roster"
                        >
                            <div class="slider-roster-item"></div>

                            <div class="slider-roster-item"></div>
                        </div>

                        <div class="user-preview-social-links-wrap">
                            <div
                                id="user-preview-social-links-slider-02"
                                class="user-preview-social-links"
                            >
                                <div class="user-preview-social-link">
                                    <a
                                        class="social-link small facebook"
                                        href="#"
                                    >
                                        <svg
                                            class="
                                                social-link-icon
                                                icon-facebook
                                            "
                                        >
                                            <use
                                                xlink:href="#svg-facebook"
                                            ></use>
                                        </svg>
                                    </a>
                                </div>

                                <div class="user-preview-social-link">
                                    <a
                                        class="social-link small twitter"
                                        href="#"
                                    >
                                        <svg
                                            class="
                                                social-link-icon
                                                icon-twitter
                                            "
                                        >
                                            <use
                                                xlink:href="#svg-twitter"
                                            ></use>
                                        </svg>
                                    </a>
                                </div>

                                <div class="user-preview-social-link">
                                    <a
                                        class="social-link small instagram"
                                        href="#"
                                    >
                                        <svg
                                            class="
                                                social-link-icon
                                                icon-instagram
                                            "
                                        >
                                            <use
                                                xlink:href="#svg-instagram"
                                            ></use>
                                        </svg>
                                    </a>
                                </div>

                                <div class="user-preview-social-link">
                                    <a
                                        class="social-link small twitch"
                                        href="#"
                                    >
                                        <svg
                                            class="social-link-icon icon-twitch"
                                        >
                                            <use xlink:href="#svg-twitch"></use>
                                        </svg>
                                    </a>
                                </div>

                                <div class="user-preview-social-link">
                                    <a
                                        class="social-link small discord"
                                        href="#"
                                    >
                                        <svg
                                            class="
                                                social-link-icon
                                                icon-discord
                                            "
                                        >
                                            <use
                                                xlink:href="#svg-discord"
                                            ></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div
                                id="user-preview-social-links-slider-controls-02"
                                class="slider-controls"
                            >
                                <div class="slider-control left">
                                    <svg
                                        class="
                                            slider-control-icon
                                            icon-small-arrow
                                        "
                                    >
                                        <use
                                            xlink:href="#svg-small-arrow"
                                        ></use>
                                    </svg>
                                </div>

                                <div class="slider-control right">
                                    <svg
                                        class="
                                            slider-control-icon
                                            icon-small-arrow
                                        "
                                    >
                                        <use
                                            xlink:href="#svg-small-arrow"
                                        ></use>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="user-preview-actions">
                            <p class="button secondary">Add Friend +</p>

                            <p class="button primary">Send Message</p>
                        </div>
                    </div>
                </div>

                <div class="user-preview">
                    <figure class="user-preview-cover liquid">
                        <img src="img/cover/22.jpg" alt="cover-22" />
                    </figure>

                    <div class="user-preview-info">
                        <div class="user-short-description">
                            <a
                                class="
                                    user-short-description-avatar user-avatar
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
                                        data-src="img/avatar/19.jpg"
                                    ></div>
                                </div>

                                <div class="user-avatar-progress">
                                    <div class="hexagon-progress-100-110"></div>
                                </div>

                                <div class="user-avatar-progress-border">
                                    <div class="hexagon-border-100-110"></div>
                                </div>

                                <div class="user-avatar-badge">
                                    <div class="user-avatar-badge-border">
                                        <div class="hexagon-32-36"></div>
                                    </div>

                                    <div class="user-avatar-badge-content">
                                        <div class="hexagon-dark-26-28"></div>
                                    </div>

                                    <p class="user-avatar-badge-text">5</p>
                                </div>
                            </a>

                            <p class="user-short-description-title">
                                <a href="profile-timeline.html"
                                    >Sarah Rodgers</a
                                >
                            </p>

                            <p class="user-short-description-text">
                                aka Raven999
                            </p>
                        </div>

                        <div class="badge-list small">
                            <div class="badge-item">
                                <img
                                    src="img/badge/bronze-s.png"
                                    alt="badge-bronze-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/age-s.png"
                                    alt="badge-age-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/rulerm-s.png"
                                    alt="badge-rulerm-s"
                                />
                            </div>

                            <div class="badge-item">
                                <img
                                    src="img/badge/globet-s.png"
                                    alt="badge-globet-s"
                                />
                            </div>

                            <a class="badge-item" href="profile-badges.html">
                                <img
                                    src="img/badge/blank-s.png"
                                    alt="badge-blank-s"
                                />

                                <p class="badge-item-text">+6</p>
                            </a>
                        </div>

                        <div
                            id="user-preview-stats-slides-09"
                            class="user-preview-stats-slides"
                        >
                            <div class="user-preview-stats-slide">
                                <div class="user-stats">
                                    <div class="user-stat">
                                        <p class="user-stat-title">204</p>

                                        <p class="user-stat-text">posts</p>
                                    </div>

                                    <div class="user-stat">
                                        <p class="user-stat-title">35</p>

                                        <p class="user-stat-text">friends</p>
                                    </div>

                                    <div class="user-stat">
                                        <p class="user-stat-title">2.3k</p>

                                        <p class="user-stat-text">visits</p>
                                    </div>
                                </div>
                            </div>

                            <div class="user-preview-stats-slide">
                                <p class="user-preview-text">
                                    Hello! I'm James Hart, but I go by the name
                                    of Destroy Dex on my stream channel. Come to
                                    check out the latest gaming news!
                                </p>
                            </div>
                        </div>

                        <div
                            id="user-preview-stats-roster-09"
                            class="user-preview-stats-roster slider-roster"
                        >
                            <div class="slider-roster-item"></div>

                            <div class="slider-roster-item"></div>
                        </div>

                        <div class="social-links small">
                            <a class="social-link small facebook" href="#">
                                <svg class="social-link-icon icon-facebook">
                                    <use xlink:href="#svg-facebook"></use>
                                </svg>
                            </a>

                            <a class="social-link small twitter" href="#">
                                <svg class="social-link-icon icon-twitter">
                                    <use xlink:href="#svg-twitter"></use>
                                </svg>
                            </a>

                            <a class="social-link small patreon" href="#">
                                <svg class="social-link-icon icon-patreon">
                                    <use xlink:href="#svg-patreon"></use>
                                </svg>
                            </a>

                            <a class="social-link small artstation" href="#">
                                <svg class="social-link-icon icon-artstation">
                                    <use xlink:href="#svg-artstation"></use>
                                </svg>
                            </a>
                        </div>

                        <div class="user-preview-actions">
                            <p class="button secondary">Add Friend +</p>

                            <p class="button primary">Send Message</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Card from "@/components/pages/community/CommunityCard.vue";

@Component({
    components: { Card },
})
export default class MemberList extends Vue {
    private communityId = parseInt(this.$route.params.community_id);

    created() {
        // this.community = this.$api.getCommunityInfo(this.communityId);
    }
    mounted() {
        console.log("mounted");
    }
}
</script>

<style scoped>
svg {
    vertical-align: middle;
}
</style>
