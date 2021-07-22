export interface Portfolio {
    id: number;
    title: string;
    description: string;
    thumbnail_img: string;
    created_at: number;
    is_public: boolean;
    user_uid: number;
    is_pinned: boolean;
}