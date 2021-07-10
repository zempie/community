
import moment from "moment";

function dateFormat(sec: number) {

    if (moment().diff(moment(sec), 'm') < 1) {
        return moment().diff(moment(sec), 's') + '초 전'
    } else if (moment().diff(moment(sec), 'h') < 1) {
        return moment().diff(moment(sec), 'm') + '분 전'
    } else if (moment().diff(moment(sec), 'd') < 1) {
        return moment().diff(moment(sec), 'h') + '시간 전'
    } else if (moment().diff(moment(sec), 'd') <= 7) {
        return moment().diff(moment(sec), 'd') + '일 전'
    } else {
        return moment(sec).locale('ko').format('LL')
    }

}

export {
    dateFormat
}