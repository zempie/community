export interface Group {
    id: number;
    created_at: number;
    owner_id: number;
    manager_id: number;
    url: string;
    submanager_id: number;
    name: string;
    description: string;
    profile_img: string;
    banner_img: string;
    member_cnt: number;
    posts_cnt: number;
    visit_cnt: number;
    state: string;
    is_certificated: boolean;
    is_subscribed: boolean;
}