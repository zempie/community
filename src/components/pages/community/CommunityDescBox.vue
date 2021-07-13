<template>
    <div class="widget-box">
        <p class="widget-box-title">About Us</p>

        <div class="widget-box-content">
            <p class="paragraph">
                {{ community.description }}
            </p>

            <div class="information-line-list">
                <div class="information-line">
                    <p class="information-line-title">Owner</p>
                    <b-avatar
                        rounded="sm"
                        size="1.5rem"
                        variant="info"
                        class="mr-2"
                        src="https://placekitten.com/300/300"
                    ></b-avatar>
                    <router-link
                        :to="`/channel/${ownerInfo.uid}/timeline`"
                        class="information-line-text"
                    >
                        {{ ownerInfo.name }}(@닉네임)
                    </router-link>
                </div>
                <div class="information-line">
                    <p class="information-line-title">Manager</p>

                    <router-link
                        :to="`/channel/${managerInfo.uid}/timeline`"
                        class="information-line-text"
                    >
                        {{ managerInfo.name }}(@닉네임)
                    </router-link>
                </div>

                <div class="information-line">
                    <p class="information-line-title">Created</p>

                    <p class="information-line-text">
                        {{ created_at }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import moment from "moment";
@Component({
    components: {},
})
export default class CommunityDescBox extends Vue {
    @Prop() community!: any;
    private managerInfo: any = "";
    private ownerInfo: any = "";
    private created_at: string = "";

    async created() {
        let temp = await this.$api.channel(this.community.manager_uid);
        let temp2 = await this.$api.channel(this.community.owner_uid);
        this.managerInfo = temp.target;
        this.ownerInfo = temp2.target;
        this.created_at = moment(this.community.created_at).format(
            "YYYY-DD-MM"
        );
    }
}
</script>

<style scoped>
</style>
