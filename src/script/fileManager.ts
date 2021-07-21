
function FileSizeCheck(file: File, maxSize: number) {
    console.log(file.size, mbToByte(maxSize))

    if (file.size > mbToByte(maxSize)) {
        return false;
    } else {
        return true;
    }

}

function kbToByte(kb = 1) {
    return kb * 1024;
}

function mbToByte(mb = 1) {
    return mb * 1024 * 1024;
}

function byteToMb(byte = 1) {
    return byte / 1024 / 1024;
}

export {
    FileSizeCheck,
    kbToByte,
    mbToByte,
    byteToMb

}