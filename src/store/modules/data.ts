export default {
    state: {
        hashtagList: [],
        userTagList: [],
        previewImgArr: [],
        previewAudioArr: [],
        previewVideo: '',
        imageList: [],
        postContents: '',
        isClearEditor: false,
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
        postContents(state: any) {
            return state.postContents;
        },
        isClearEditor(state: any) {
            return state.isClearEditor;
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
        postContents(state: any, payload: any) {
            state.postContents = payload;
        },
        isClearEditor(state: any, payload: any) {
            state.isClearEditor = payload;
        },
    },
    actions: {
        resetEditor(context: any) {
            context.state.hashtagList = [];
            context.state.userTagList = [];
            context.state.postContents = '';
            context.state.isClearEditor = true;
        }
    }
}

