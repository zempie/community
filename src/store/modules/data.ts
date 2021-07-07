export default {
    state: {
        hashtagList: [],
        userTagList: [],
        previewImgArr: [],
        previewAudioArr: [],
        previewVideo: '',
        imageList: [],
    },
    getters: {
        hashtagList(state: any) {
            return state.hashtagList;
        },
        userTagList(state: any) {
            return state.userTagList;
        },
        previewImgArr(state: any) {
            return state.previewImgArr;
        },
        previewAudioArr(state: any) {
            return state.previewAudioArr;
        },
        previewVideo(state: any) {
            return state.previewVideo;
        },
        imageList(state: any) {
            return state.imageList;
        },
    },

    mutations: {
        hashtagList(state: any, payload: any) {
            state.hashtagList.push(payload);
        },
        userTagList(state: any, payload: any) {
            state.userTagList.push(payload);
        },
        previewImgArr(state: any, payload: any) {
            state.previewImgArr.push(payload);
        },
        previewAudioArr(state: any, payload: any) {
            state.previewAudioArr.push(payload);
        },
        previewVideo(state: any, payload: any) {
            state.previewVideo = payload;
        },

        imageList(state: any, payload: any) {
            state.imageList.push(payload);
        },
    },
    actions: {
        resetHashtag(context: any) {
            context.state.hashtagList = [];
            context.state.userTagList = [];
        }
    }
}

