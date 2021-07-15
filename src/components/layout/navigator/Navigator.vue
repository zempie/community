<template>
  <header class="header">
    <div class="header-actions">
      <div class="header-brand">
        <div class="logo">
          <b-img src="/img/zempie_logo.png" @click="$router.push('/')" />
        </div>

        <h1 class="header-brand-text">Zempie</h1>
      </div>
    </div>

    <div class="header-actions">
      <div class="mobilemenu-trigger navigation-widget-mobile-trigger">
        <div class="burger-icon inverted">
          <div class="burger-icon-bar"></div>

          <div class="burger-icon-bar"></div>

          <div class="burger-icon-bar"></div>
        </div>
      </div>

      <nav class="navigation">
        <ul class="menu-main">
          <li class="menu-main-item">
            <router-link class="menu-main-item-link" to="/">Home</router-link>
          </li>

          <li class="menu-main-item">
            <router-link class="menu-main-item-link" to="/community/list"
              >Community</router-link
            >
          </li>
        </ul>
      </nav>
    </div>

    <div class="header-actions search-bar">
      <div class="interactive-input dark">
        <input
          type="text"
          id="search-main"
          name="search_main"
          v-model="searchInput"
          @keyup="searchType"
          @blur="blur"
          placeholder="Search here for people or groups"
        />

        <div class="interactive-input-icon-wrap">
          <svg class="interactive-input-icon icon-magnifying-glass">
            <use xlink:href="#svg-magnifying-glass"></use>
          </svg>
        </div>

        <div class="interactive-input-action" ref="closeDropbox">
          <svg class="interactive-input-action-icon icon-cross-thin">
            <use xlink:href="#svg-cross-thin"></use>
          </svg>
        </div>
      </div>
      <div class="dropdown-box padding-bottom-small header-search-dropdown">
        <div v-if="userList.length > 0 && userList">
          <div class="dropdown-box-category">
            <p class="dropdown-box-category-title">Members</p>
          </div>

          <div class="dropdown-box-list small no-scroll">
            <router-link
              class="dropdown-box-list-item"
              :to="`/channel/${user.uid}/timeline`"
              v-for="user in userList"
              :key="user.id"
              @click.native="closeDropbox"
            >
              <div class="user-status notification">
                <div class="user-status-avatar">
                  <div class="user-avatar small no-outline">
                    <div class="user-avatar-content">
                      <div
                        class="hexagon-image-30-32"
                        :data-src="user.profile_img"
                      ></div>
                    </div>

                    <div class="user-avatar-progress">
                      <div class="hexagon-progress-40-44"></div>
                    </div>

                    <div class="user-avatar-progress-border">
                      <div class="hexagon-border-40-44"></div>
                    </div>
                  </div>
                </div>

                <p class="user-status-title">
                  <span class="bold username"
                    >{{ user.name }}@{{ user.nickname }}</span
                  >
                </p>

                <div class="user-status-icon">
                  <svg class="icon-friend">
                    <use xlink:href="#svg-friend"></use>
                  </svg>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <div v-if="groupList.length > 0">
          <div class="dropdown-box-category">
            <p class="dropdown-box-category-title">Groups</p>
          </div>

          <div class="dropdown-box-list small no-scroll">
            <router-link
              @click.native="closeDropbox"
              v-for="group in groupList"
              class="dropdown-box-list-item"
              :to="`/community/${group.id}/timeline`"
              :key="group.id"
            >
              <div class="user-status notification">
                <div class="user-status-avatar">
                  <div class="user-avatar small no-outline">
                    <div class="user-avatar-content">
                      <div
                        class="hexagon-image-30-32"
                        :data-src="`${group.profile_img}`"
                      ></div>
                    </div>
                    <div class="user-avatar-progress">
                      <div class="hexagon-progress-40-44"></div>
                    </div>

                    <div class="user-avatar-progress-border">
                      <div class="hexagon-border-40-44"></div>
                    </div>
                  </div>
                </div>

                <p class="user-status-title">
                  <span class="bold username">{{ group.name }}</span>
                </p>

                <div class="user-status-icon">
                  <svg class="icon-group">
                    <use xlink:href="#svg-group"></use>
                  </svg>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div v-if="gameList.length > 0">
          <div class="dropdown-box-category">
            <p class="dropdown-box-category-title">GAMES</p>
          </div>

          <div class="dropdown-box-list small no-scroll">
            <a class="dropdown-box-list-item" href="marketplace-product.html">
              <div class="user-status no-padding-top">
                <div class="user-status-avatar">
                  <figure class="picture small round liquid">
                    <img src="img/marketplace/items/07.jpg" alt="item-07" />
                  </figure>
                </div>

                <p class="user-status-title">
                  <span class="bold">Mercenaries White Frame</span>
                </p>

                <p class="user-status-text">By Neko Bebop</p>

                <div class="user-status-icon">
                  <svg class="icon-marketplace">
                    <use xlink:href="#svg-marketplace"></use>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <profile-menu v-if="$store.getters.user"></profile-menu>

    <div class="header-actions" v-else>
      <div class="login" @click="login">login</div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Dropdown from "@/plugins/dropdown";

import plugins from "@/plugins/plugins";
import router from "@/router";

import ProfileMenu from "@/components/layout/navigator/ProfileMenu.vue";
import Header from "@/script/header";
import Hexagon from "@/plugins/hexagon";
import { Group, User } from "@/types";
@Component({
  components: { ProfileMenu },
})
export default class Navtigator extends Vue {
  private dropdown: Dropdown = new Dropdown();
  private header: Header = new Header();
  private hexagon: Hexagon = new Hexagon();

  private searchInput: string = "";
  private userList: User[] = [];
  private groupList: Group[] = [];
  // todo: gameList 연결하기
  private gameList: any[] = [];

  mounted() {
    this.hexagon.init();
    this.dropdown.init();
    this.header.searchDropdown();
  }
  listInit() {
    this.groupList = [];
    this.gameList = [];
    this.groupList = [];
  }
  login() {
    router.push("/login");
  }

  async searchType(event) {
    this.listInit();
    this.hexagon.init();
    //   this.$refs.searchDropbox.style.display = 'block'
    if (event.keyCode === 27) {
      this.searchInput = "";
    }

    let query: string = "";
    //유저 검색
    if (this.searchInput.charAt(0) === "@") {
      query = this.searchInput.substring(1);
      this.userList = await this.$api.search(query, "username");
      console.log(this.userList);
    }
    //게임 검색
    else if (this.searchInput.charAt(0) === "#") {
      query = this.searchInput.substring(1);
      // this. = this.$api.search(query, "hashtag");
      console.log(this.userList);
    }
    //모두 검색
    else {
      // todo: hexagon delay backend 연결후 확인
      query = this.searchInput;
      const result = await this.$api.search(query);
      this.userList = result.user;
      this.groupList = result.group;
    }
  }
  closeDropbox() {
    (this.$refs.closeDropbox as HTMLElement).click();
    this.searchInput = "";
  }
  blur() {
    console.log("blur");
    (this.$refs.closeDropbox as HTMLElement).click();
  }
}
</script>

<style lang="scss" scoped>
.login {
  color: #fff;
  display: flex;
  margin-right: 26px;
  text-transform: uppercase;
  cursor: pointer;
}
.user-status-title {
  .username {
    height: 44px;

    display: flex;

    align-items: center;
  }
}
</style>
