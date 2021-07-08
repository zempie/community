import store from "@/store";

class FileLoader {

    private remainImgFileSize: number = mbToByte(20); //20mb (binary);
    previewImgArr: any[] = [];
    fileList: File[] = [];

    imgLoad(file: File) {
        let reader = new FileReader();

        reader.onload = (e) => {
            this.previewImgArr.push(e.target!.result)
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

    checkImgFile(files: any) {
        let totalImgCnt = files.length + this.previewImgArr.length;
        if (files.length > 5 || totalImgCnt > 5) {
            alert("이미지 개수는 최대 5개입니다");
        } else {
            if (files.length <= 5) {
                for (let i = 0; i < files.length; i++) {
                    this.remainImgFileSize -= files[i].size;
                    if (this.remainImgFileSize < 0) {
                        alert("최대 파일 용량을 넘었습니다.(최대 20mb)");
                        this.remainImgFileSize += files[i].size;
                        break;
                    }

                    this.fileList.push(files[i]);
                    this.imgLoad(files[i]);
                }
            }
        }
        return this.fileList;
    }
    //미리보기 사진 삭제
    deletePreviewImg(idx: number) {
        this.remainImgFileSize += this.fileList[idx].size;
        this.previewImgArr.splice(idx, 1);
        this.fileList.splice(idx, 1);
    }


}

async function urlToFile(url: string) {
    console.log(url)

    let blob = await fetch(url).then(r => r.blob())
        .then(blobFile => new File([blobFile], 'text'));

    console.log(blob)

}

async function getFileFromUrl(url, name, defaultType = 'image/jpeg') {
    const response = await fetch(url);
    const data = await response.blob();
    let file =  new File([data], name, {
        type: response.headers.get('content-type') || defaultType,
    });

    return file
    // console.log(file)
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
    getFileFromUrl
}