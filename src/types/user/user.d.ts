
export interface User {
    id: number;
    uid: string;
    status: string;
    email: string;
    name: string;
    nickname: string;
    channel_id: number;
    created_at: number;
    state: string;
    profile_img: string;
    post_cnt: number;
    liked_cnt: number;
    followers_cnt: number;
    followings_cnt: number;
    follows_you: boolean;
    is_following: boolean;
    block_you: boolean;
    is_blocked: boolean;
    mutes_you: boolean;
    is_muted: boolean;
    type: string;
}