import store from "@/store";
import { mbToByte, byteToMb } from "@/script/fileManager";
import { fileObjWtUrl } from "@/types/file/file";


class FileLoader {
    private remainImgFileSize: number = mbToByte(20); //20mb (binary);
    private remainAudioFileSize: number = mbToByte(40); //40mb (binary);
    fileObj: { img: fileObjWtUrl[], video: fileObjWtUrl[], audio: fileObjWtUrl[] } = { img: [], video: [], audio: [] };

    getFileUrl(file: File, callback) {
        store.commit('isClearEditor', false)
        // let fileUrl: string | null | ArrayBuffer;
        let reader = new FileReader();
        reader.onload = callback;
        reader.readAsDataURL(file);
    }



    checkImgFile(files: File[]) {
        console.log('checkImgFile', files)
        let totalImgCnt = files.length + this.fileObj.img.length;

        let fileSize: number = 0;
        let fileName: string = '';
        let fileContentType: string = '';

        if (files.length > 5 || totalImgCnt > 5) {
            alert("이미지 개수는 최대 5개입니다");
            return false;
        } else {
            if (files.length <= 5) {
                for (let i = 0; i < files.length; i++) {
                    this.remainImgFileSize -= files[i].size;
                    if (this.remainImgFileSize < 0) {
                        alert("최대 파일 용량을 넘었습니다.(최대 20mb)");
                        this.remainImgFileSize += files[i].size;
                        return false;

                    }
                    fileSize = files[i].size;
                    fileName = files[i].name;
                    fileContentType = files[i].type;

                    // this.imgLoad(files[i]);
                    this.getFileUrl(files[i], e => {
                        this.fileObj.img.push({
                            size: fileSize,
                            name: fileName,
                            contentType: fileContentType,
                            url: e.target.result
                        });

                    })
                }
            }

            console.log('checkImgFile', this.fileObj)
            return this.fileObj;
        }
    }

    // 블로그 이미지 체크
    checkBlogImgFile(files: File[]) {
        let totalImgCnt = files.length + this.fileObj.img.length;

        let fileSize: number = 0;
        let fileName: string = '';
        let fileContentType: string = '';

        // if (files.length > 5 || totalImgCnt > 5) {
        //     alert("이미지 개수는 최대 5개입니다");
        //     return false;
        // } else {
        //     if (files.length <= 5) {
        for (let i = 0; i < files.length; i++) {
            this.remainImgFileSize -= files[i].size;
            if (this.remainImgFileSize < 0) {
                alert("최대 파일 용량을 넘었습니다.(최대 20mb)");
                this.remainImgFileSize += files[i].size;
                return false;

            }
            fileSize = files[i].size;
            fileName = files[i].name;
            fileContentType = files[i].type;

            // this.imgLoad(files[i]);
            this.getFileUrl(files[i], e => {
                this.fileObj.img.push({
                    size: fileSize,
                    name: fileName,
                    contentType: fileContentType,
                    url: e.target.result
                });

            })
        }
        // }

        console.log('checkImgFile', this.fileObj)
        return this.fileObj;
        // }
    }
    //미리보기 사진 삭제
    deletePreviewImg(idx: number | string) {
        if (typeof idx === 'number') {
            this.remainImgFileSize += this.fileObj.img[idx].size!;
            this.fileObj.img.splice(idx, 1);
        }
        else if (typeof idx === 'string' && idx === 'all') {
            console.log('delte all')
            this.remainImgFileSize = mbToByte(20);
            this.fileObj.img.splice(0, this.fileObj.img.length)

        }
        console.log(this.fileObj)
    }

    checkVideoFile(files: File) {

        let fileSize: number = 0;
        let fileName: string = '';
        let fileContentType: string = '';

        let videoFile: File | null = null;
        if (byteToMb(files[0].size) > 40) {
            alert("동영상의 최대 파일크기는 40mb를 넘을 수 없습니다.");
        } else {

            fileSize = files[0].size;
            fileName = files[0].name;
            fileContentType = files[0].type;

            this.getFileUrl(files[0], e => {
                this.fileObj.video.push({
                    size: fileSize,
                    name: fileName,
                    contentType: fileContentType,
                    url: e.target.result
                });

            })
        }
        return this.fileObj;
    }

    //audio
    checkAudioFile(files: File[]) {
        console.log('checkAudioFile', this.fileObj.audio)
        let totalAudioCnt = files.length + this.fileObj.audio.length;

        let fileSize: number = 0;
        let fileName: string = '';
        let fileContentType: string = '';

        if (files.length > 5 || totalAudioCnt > 5) {
            alert("이미지 개수는 최대 5개입니다");
            return false;
        } else {
            if (files.length <= 5) {
                for (let i = 0; i < files.length; i++) {
                    this.remainAudioFileSize -= files[i].size;
                    if (this.remainAudioFileSize < 0) {
                        alert("최대 파일 용량을 넘었습니다.(최대 40mb)");
                        this.remainAudioFileSize += files[i].size;
                        return false;

                    }
                    fileSize = files[i].size;
                    fileName = files[i].name;
                    fileContentType = files[i].type;

                    // this.imgLoad(files[i]);
                    this.getFileUrl(files[i], e => {
                        this.fileObj.audio.push({
                            size: fileSize,
                            name: fileName,
                            contentType: fileContentType,
                            url: e.target.result
                        });

                    })
                }
            }

            console.log('checkAudioFile', this.fileObj)
            return this.fileObj;
        }
    }
    //미리보기 오디오 삭제
    deletePreviewAudio(idx: number | string) {
        if (typeof idx === 'number') {
            this.remainAudioFileSize += this.fileObj.audio[idx].size!;
            this.fileObj.audio.splice(idx, 1);
        }
        else if (typeof idx === 'string' && idx === 'all') {
            console.log('delte all')
            this.remainAudioFileSize = mbToByte(40);
            this.fileObj.audio.splice(0, this.fileObj.audio.length)

        }
        console.log(this.fileObj)
    }

    checkImgSrc(files: File[]) {
        console.log('checkImgFile', files)
        let totalImgCnt = files.length + this.fileObj.img.length;

        let fileSize: number = 0;
        let fileName: string = '';
        let fileContentType: string = '';

        if (files.length > 5 || totalImgCnt > 5) {
            alert("이미지 개수는 최대 5개입니다");
            return false;
        } else {
            if (files.length <= 5) {
                for (let i = 0; i < files.length; i++) {
                    this.remainImgFileSize -= files[i].size;
                    if (this.remainImgFileSize < 0) {
                        alert("최대 파일 용량을 넘었습니다.(최대 20mb)");
                        this.remainImgFileSize += files[i].size;
                        return false;

                    }
                    fileSize = files[i].size;
                    fileName = files[i].name;
                    fileContentType = files[i].type;

                    // this.imgLoad(files[i]);
                    this.getFileUrl(files[i], e => {
                        this.fileObj.img.push({
                            size: fileSize,
                            name: fileName,
                            contentType: fileContentType,
                            url: e.target.result
                        });

                    })
                }
            }

            console.log('checkImgFile', this.fileObj)
            return this.fileObj;
        }
    }


}

async function urlToBlob(url: string, callback: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null) {

    var mimeString = url.split(',')[0].split(':')[1].split(';')[0];
    let blob = await fetch(url).then(r => r.blob())
        .then(blobFile => new File([blobFile], '', { type: mimeString }));

    return blob;

    var request = new XMLHttpRequest();

    // request.onreadystatechange = function () {
    //     if (request.readyState == XMLHttpRequest.DONE) {
    //         return request

    //     }
    // }
    // request.open('GET', url, true);
    // request.responseType = 'blob';
    // request.onload = function () {
    //     var reader = new FileReader();
    //     reader.readAsDataURL(request.response);
    //     reader.onload = callback;
    // };
    // request.send();
    // console.log(request.response)
}

function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
}

async function getFileFromUrl(url, name, defaultType = 'image/jpeg') {
    const response = await fetch(url);
    const data = await response.blob();
    let file = new File([data], name, {
        type: response.headers.get('content-type') || defaultType,
    });

    return file
    // console.log(file)
}



export {
    FileLoader,
    getFileFromUrl,
    dataURItoBlob,
    urlToBlob
}