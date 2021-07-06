import store from "@/store";

class FileLoader {

    imgLoad(file: File) {
        let reader = new FileReader();

        reader.onload = (e) => {
            store.commit('previewImgArr', e.target!.result);
        }

        reader.readAsDataURL(file);
    }
    videoLoad(file: File) {
        let reader = new FileReader();

        reader.onload = (e) => {
            store.commit('previewVideo', e.target!.result);
        }

        reader.readAsDataURL(file);

    }
    audioLoad(file: File) {
        let reader = new FileReader();

        reader.onload = (e) => {
            store.commit('previewAudioArr', e.target!.result);
        }
        reader.readAsDataURL(file);

    }
}

function mbToByte(mb = 1) {
    return mb * 1024 * 1024;
}

function kbToByte(kb = 1) {
    return kb * 1024;
}

export {
    FileLoader,
    mbToByte,
    kbToByte,
}