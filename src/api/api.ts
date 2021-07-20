import store from '@/store';
import axios, { AxiosInstance } from 'axios'
import Vue, { PluginObject } from "vue";
import firebase from 'firebase/app';
import { User } from "@/types/index";
import { fileObjWtUrl } from '@/types/file/file';

export default class Api {


    async request(method: string, url: string, data: any, withCredentials: boolean = false, errorCallback: Function | null = null, retryCount: number = 0): Promise<any> {
        try {

            // @ts-ignore
            const result = await Vue.$axios({
                method: method,
                url,
                data,
                withCredentials
            });

            return result.data;
        }
        catch (error) {
            // if ( error && error.response && error.response.data && error.response.data.error && error.response.data.error.message === 'Unauthorized' ) {
            if (error?.response?.data?.error?.code === 10001) {
                const currentUser = firebase.auth().currentUser;
                if (currentUser) {
                    const idToken = await currentUser.getIdToken(true);
                    store.commit('idToken', idToken);
                    if (retryCount < 3) {
                        return await this.request(method, url, data, withCredentials, errorCallback, ++retryCount);
                    }
                    else {
                        //3번 초과
                        errorCallback && errorCallback(error);
                        // throw new Error(error);
                    }
                }
                else {
                    //로그인 안됨.
                    errorCallback && errorCallback(error);
                    // throw new Error(error)
                    // return error;
                }
            }
            // console.log(error, error.message);
            // throw error;
            //error && error.response && error.response.data || error

            const result = error && error.response && error.response.data || {
                error: error.message || error,
            };
            return result;
        }
    }

    //커뮤니티
    subscribeCommunity(community_id: number, user_id: number) {
        ///api/v1/community/:community_id/subscribe?user_id=12

        // const response = await this.request('post', '/community', undefined, false);
        // return response.result || response;
        return true;

    }
    getCommunityList(sort?: number) {
        let result

        if (sort == 0 || sort === undefined) {
            result = [{
                "id": 1,
                "created_at": 1622615373000,
                "owner_id": 1,
                "manager_id": 2,
                "url": "community1",
                "submanager_id": null,
                "name": "sample community name1",
                "description": "sample community description1",
                "profile_img": "data:image/jpeg;base64,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",
                "banner_img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAFGCAMAAAClqnbFAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBrxWIAAQqkhDkAAAAASUVORK5CYII=",
                "member_cnt": 100,
                "posts_cnt": 10,
                "visit_cnt": 11111,
                "state": "public",
                "is_certificated": true,
                "is_subscribed": true
            },
            {
                "id": 2,
                "created_at": 1622615373000,
                "owner_id": 2,
                "manager_id": 3,
                "url": "community2",
                "submanager_id": null,
                "name": "sample community name2",
                "description": "sample community description2",
                "profile_img": "data:image/jpeg;base64,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",
                "banner_img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAADMCAMAAACY78UPAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WgAAGQfErhAAAAAElFTkSuQmCC",
                "member_cnt": 150,
                "posts_cnt": 1125,
                "visit_cnt": 0,
                "state": "private",
                "is_certificated": false,
                "is_subscribed": false
            }]
        } else if (sort == 1) {
            result = [
                {
                    "id": 2,
                    "created_at": 1622615373000,
                    "owner_id": 2,
                    "manager_id": 3,
                    "url": "community2",
                    "submanager_id": null,
                    "name": "sample community name2",
                    "description": "sample community description2",
                    "profile_img": "data:image/jpeg;base64,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",
                    "banner_img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAADMCAMAAACY78UPAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WgAAGQfErhAAAAAElFTkSuQmCC",
                    "member_cnt": 150,
                    "posts_cnt": 1125,
                    "visit_cnt": 0,
                    "state": "private",
                    "is_certificated": false,
                    "is_subscribed": false
                }, {
                    "id": 1,
                    "created_at": 1622615373000,
                    "owner_id": 1,
                    "manager_id": 2,
                    "url": "community1",
                    "submanager_id": null,
                    "name": "sample community name1",
                    "description": "sample community description1",
                    "profile_img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUZGBgYGBgaGhgYHBgYGBkZGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISGjQkISExNDE0MTQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0ND80NDE0P//AABEIALYBFQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA1EAABAwIFAgQEBQQDAQAAAAABAAIRAyEEBRIxQVFhBhMicTKBkaFCUrHB8BQj0fEHYuGS/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIhEBAQEBAAMAAgEFAAAAAAAAAAERAhIhMQNBURMUIjJx/9oADAMBAAIRAxEAPwDdAShASgLz47hKEAJYTAoSoCUJgUJUJYVwASpISpgEoSJVMAgFCFcgVCAhZsGZicQ4vLGGIt8/5KjGOewxUBLbeoDYqCtU0Yh07Eg/W62jQa9l4g/zhc5zbtjrckmhpBAIuDsgsCw8NWdh36H/AAONnHZp4v0W8DK3PbnZhhppDTUiatYiI00001OhMNVzTTDTVpY2JzBzyWUh6B8VQcxuGH9/os2E9pqtVjbFwB6IYWu2Mqn/AEbQ35ckn5yU3KH/ANwtm2k/5S841i66mmOprRcwKM01PFNZrqaYWFaLqKjdRUw1QIKaSVddSUbqRTF1U1lCn8tCYa1dae1yzm4oKZlcLpOk8V0FOCqNqhSCor5GLISqAPTg9XUxMAlhRionB6B8IhIHpZRAlQhMCISwiEAhEIUVz+eUoqB35m/pb+e6t5DjHEQ6ABaXfsJ2TPEREMvDyTpHXaY77fdZmAPr9YAcNuZjt1/kcrnz66rvnlzGnnbQ9rtJmbTED2EbrJyPPtM06hszZ99p2M9P2PRGa5gXv0geltob6vck7b8DosHH5bUYSesmJ2mJkfT7q7Nc7PT0L+tp/nbtO4UFTN6A/GD7Xj3heZVapogOLSfWw3NtMSR2n26dVcdiS82EflMRZ3qvtNiB8iuskcrXodPM6LrCo2ehMfqp31WgSSI915dUzEshjmAOLnBzhOprBAExwYTqb6kmCXAmIkxAGwHcAfVTqYvN11eMzc13mjSnQDD3iQXdgQCWj5LewdMMZ6QTFtIcCD3I2lebYAvpVP7rTBuBtINunYLratdnlhzHQY2cQw+19/5ssz63npJmGYyS2NPYiCEZEz+449G/qsKm8vdJIgLp8gw+ljnnd5+wU692N2Zy0yE0qQphWnI0hMKkKYQgjITSFIUwqYGQhKhMHOa3BPZiHJxYkDFy16MStxZU7MYqmlPa1NqeMaLMUpmYpZzGqQMU8qeMaTcQnisFliUyrigz4iAtTqs3ltCqniouNxPiID4RKysT4grus1wHsusnVc+rI9IFVOFReUsznENPxu+a0cN4srN+IalfGs+UekConh65LAeKab4DvSe63KeLa4SCD7LNtn1ZN+NIPTg5Z7cQFIKw6qeS+KDOsEamhzd6bnPjkwx0AfPSuEY+o+p5YdcnuCvQMRUJY4A30mPeLLhskwD/ADTWfYCdIEhxdcS3oOINlL91vnqyY6HE1mUWtZT+I2JtOo2NgJ4NyFh4x7nAucS53wkiCRd2mRsNwCe/K1Bg3Oe4NBOkTJAkSbgmZFv9KLGs0YWsdAD2ENJLTdsESN5BnfuVJGeq5vH0HVmelsNYdT3GT6QBLT1MyPcd1c0Fz7FphrXN1ED0mCJG4AkH333WngsuLMEWPnVUDnOPMOsGjra/urnhrIS8v12ayhpNoOpwgT1/F9AunN30xZntxeIwr3vbVkaBI1Rpc/S8tsOZ0zPdaVCk8XBiSDA3DdwI7kAxOwF9ytjxNgowwcyG+UGuLRNwLOBI2ve3QqJ7Iw9N7xpLxwCXkuG0WDW2m/I7AJuwkw6hi2VCGPPqAADx6niBH/0d9vrusrxDUfSc1haQwiQS4aiOrgP9pXsuCZaSdmybmZJBvzxJ39lXzV/oIJ1Fh1SZkA8GZ2n9Fmeq6SpMJUAaSJJABj5rvsmLjQplwglgdA2AdcD5AhcH4ZwvnEsmA4eriGyNUd4kDuV6SxgAAAgAQB0A2CSe166lkhCmlSEJhC05oykKeQmkIIimlSEJpCBkJE5Igzf6YqJ1AhbDGhK+mCvHOq9eMIsKQBbDqAWRjMQ1r9O66c716jPVkKx6ecS0blZVaub3gLPfiL9fddp+LfrlfyxqYzOIsy5WFiaj3mXElSVXuOwVGs57TA5XScTn45dd2kFIyeiTVwArTGkNOpMw1JxJMK6iJ7J7JSwRZBwji71Wun1aLWcyVdMVxS6SrWFxlRh9Lj7Ips5KWmzUfS0nuU+pjZwviA/jHzC08Pm7H7OHzXO/0QO6f/SsF4MfdYvEvxud2Osp1ySB1PySVq7WFz4c6S1rWsu4uiQ0N224WDg3uDtLZj3+d1eyoa8QaouxhLWt4LiPUb2nYdbLHji3rfifH5jiabKbGMFM1XubqeAXthuo2BInjfouZHibEMqaHPbWbqjSQA61iLADjaF0ua49lZoY86Cx/mU6gE6HbQ9tiWkGDHBHRZ9TL3MJqjDOe4gnWwtczY+oOtb3AV5zPbN8t9OgxMVKTKrJLXxG1pERf+CFczTGNw9BtNtnPuRbb1cDoL97LJ8M4gOwTKYf6/MqEAXIc9x0iPcrMz7EufiXk2aw6QDbZobf6LM/x1qzamxWMbToeY/4TMM3kGYEHdY1LxNVe8U/JbciNbvV2AizLdlW8Q4pjn0WTqY2neLw4yJ+x+6bk+EZr1sa+o4fC0AwD1c42HzK1JnO/tOrdyNk4+lUa0sDmPDtJY6TpeIB03i3sqGPaRJgbRBv6SI2m3fotrCYWjTpaKpY97nue/oHvNwzsNpXKPxMPdTB9BOpgm0bQCfmkhrd8FYYMqPdFtI0zxqNx72XbisuN8NvLdTid+F0LcUFL17anPppCsjzQs7+oCXzgnkeLQLwk1BUBU7pfM7q6mLpITSqnmI80ppixCVVfPQrpi4GFQY2voaStR1Bw4XOZ5Vl2npwvJ+Pjevbt13kVa2YzflZJYSS4m6dMye6YZINl7JJHnt1UqPvc8qOo2Cp3BsTyFRqYoGw3W9ZsTtq3TcQYExdS02CBf3CvYfBh51OnSEtJEGX4cka37KHGV+G2HELdrVABpZ9Fltw0Ovtv7FYlaqCi9oEHdVW4fU7UVexbADYX7ILQxpndBBUpj4frF1PTpTAbt2G3ukwVJxIJ2P8utB3pkNmfsghdoYIklUnYoA9Ois1qLyJcPb/AEsDEOJdC1yldr4RoebUc4iQ1riSDcCIv1ClqZlSojQxjnl5OoMAPPMLov8Ai3Iyyi6s8GX+loIgBo3Md1Xzvw/Tp1i91OWk7gAx9SFn8kySpzd9OdqYZ7zqAkuFm6C1zejXE2+fSFr0MtrMwxpM1APMGCY9RiGwLLosqy9haIuD/wBSP1XT4ag1jQ2xjrG6nPPk111jmvDvhinhg0uPqYXOA2Em8n8xA591574xhj6mkWDzf9CT/Nl1f/I7MQx9Os17vJ9LPQdJpucY1O/M0nT0i682zBlWs/y2a3uc0ucZhol0S7rsVevH4vMubqDKCPPZW07EyODA3v2K3c2zd7iQGhrNgGyG8iTHbr0Wc/DOonRpc52mTpaTtAMRzPC1cqy51QEvBHADrbHofZcvKfWvHPTHpguJ1viIsdJBHBB6C9kzMsKXBhZEtvPB4MlbmY5AyIcxxHBbqED5G6wqVGqwmnqlmwBu6OAtTr9xLHRZGyKJLrmenVTli2cnyc+SAbWmwjYLJrCCQsdb9dOLL6RiU4OKJQHLDeDzXBJ/UlCY5qunjEgxiUY1VnMUbmLWp4xfGMCFmeWkTyqeMe1uw7Y2XmniunorOtE7L1ArifH+BJa2o0SWm/svTZ6eXmuHdQOgjuggNbvx904VZFgVUxryG9JXNvFZwBBMrJoN9RP0Wm10Az0VehTFzyeqsKdhGPcYC26uINNkdlUy4EOk9FbrAPsrSG5c7UbqziKcS/jomu0sb6dzx1UeJruDIIuoKmCbreXHYGyuYnD6gAYTsDT0s2g9lDSfLxq2CipmUQwWsns1GOIuT36BNqnUYFwocRUc0aQZG/t7oH4iuDMGCsfAYbzKmgEtJO4HqMnj/wAUWNY+NU7rU8MYH+6zXYuc07S6NwXflB+Z6DkXmM2vccmwop0KdMTDWgXsdlLiaQduJU9NsADoFHUC6345xQo4ZrD6RHzMfTZSVKxH8lOcq9Rc9xpmZ1VY+m9j4LXAgt6yuGyrLjhmOY1gOokk7kgmwk9l6I9jHbgKq/BM5hZ6nlHTnqSPMqmBD6tw0OIvZ5nbvHAXXYHBhjBqDf8A5gEnpuQtgYWm0y1gnrF086ei5+Betclj8C97pa1zOA4H9to/lk7LMgeHS86gDNx+3HyXUz0Q0BanML1U2HYAI4hcrmWBcHunrxsuirYoNE9FmVKwf6gp+b/VfxfWC7DFRGkVu+UmuwoXm8np9MJzSmLbfhAonYEK+QxyUwlar8vUbsuVnURmIV44ApFryg9ZlR4mi17S1wkFOJVbFvIBIXueF5t4jyw4d5Dbtdcduy5rFPlu66/PsQ6oS1/Gy4zEsgkLlfrpPiq+o20H3UtISRe3VUCIP6q9TeJEBQa+EYGsJ90mAkuJ+isamhlgduUuWMETH1RQzClz5kAD7lLjgOYjZSPraTpEX37rPx1Q62oVNXqOa2OFSwzyXSAZPCu4mdEx803LQRcXA+qCehRky7mVUxrTqgTI+nsVafiI4vP0VF9fVJLrcxyoI8VVAbvLuCdm9wNp/RaHhbEBlVry6wNpPX8RH5iee3ssedc3sBB/wnUcW1rJ0wdW3Fhx0stT0zfb6BwVcPYHAzI3UtRch4HzFzmaHbja878Lryuv2OfxWeoKitVAqtRYsWKdQKuVaqBU6hhYahSoyEoekJRTYUdZ1pmE95WFneZeW0w0kngEfyEGbnWaEy0OFtrb9keFcQXseC7VBkexXEZhjS52u7T0P+1s+D8TprQLaxtO53sFj8k3mt8XOnemmjQmPc8cFROquXjehK5qY5qiNYprqrlFw8gphCZ5hSF5V1cOKFEXlCaY9FcExzJ3U2lIWr6r57nszyBj5LbFcHnfh6szZpI6heuQmPpA7hZvMqzqx884zCuB2IKmw7nOgRde24rw7h6hl9MSsrE+BcOZLAWu4vb6KeNXyef1hpYASZ5U2BeQydhey2c58MYlvwN1gb9Y9lz1d7mektqDg6mkCexWLK1LFXE1j5g9/b7q86nJBvPBN1nVnaiFqYbEho9RRVXMMU0ANlRYBwgkXnnaD2SY2h5h6DclS4KloEx26T3TPR+z6rHcgdQBzPdZGOqGzQY2t2/dauLxEMOx6X2WMz1HaTO/QJIlqajihIY1oIA9RMgHsO6s4PBNIJBJINgI6qLG4Y+WPLDRtJ/ESmYCo+mQKggE3cbR/P3V/wCI7nw1mpY4axEbySRfaXE2PyXpWGxAc0HsvEqT3kh7R3E7R+E++3Vd94VzzW0MJv12+y3zWOo7Nyq1VKypIUVVKRTqFUqxV2qVn13LFaiNrk9rlVc+E4VFFRZljW02Fztl5jm+YuqOJLrTEwBbobS5avjTPRq8phk8kbA9O5XJtaIJftPPPIJ+quBQWN9Rg9TufsfsreExb2kOpsJLSCHQ6xF7Ssevj2zAGxkR9AmjGVXiGTA4H6rXia+hvDGYtxNFrns0vAh7ehWo/LqZ3aF4x4BzWrRxLGPedD4DhNgT8Oo/Ve4sdITJfqW2fGa/JqfRRuyRi1kin9Pm/o8+v5Yb8iHBVZ2SO4hdIiVm/g4v6an5ev5cfVyx4MRKF1xCFn+25/lr+r0mCClCF6HEgKC1OhBCBA1GlPARCqGFqir4RjxDmgg9QrEIhBzOP8HYZ5kN0H/rt9FzmZ+BKhvTe09iIP1XpJak0rPjFnVeK18mxNMFr6ZDR+LcfVQ4sENAcDJ5PX2XtjqYO4lU8TlFJ4hzGn5XUvC+TwLM3kNAm83t9FPg3hlLVaT9T0AXb+OPBzW0y+kHEg3G4hecNOosYTAG8/dTPRrUZga7xrD2jaGi/wBVoOwutml49Xb7GeVmNxT/AIGAGbCZgA8m9l0WT4Vj6jafnanxfQHQI6mYTF1Ty3L3sNw8t4GpgmJMbhdTlOVuc4Qx7Lgkmb+5Fl1GByCmwCfU78x3WmzCMGyuM6iojSI6JtR6fVwo4VKrRKzasRYmvCycRix1VzEYRr/iB+6x8dkzhJpuM/lJ/RZaiOriuZ2VTG5n6HaTeFz+Z457DDgWkG4NisvMc2Gj0md/kT1TFQYnAeovuTf7rEzLEmAP57la2CzKbPWdm2DdJeLjqt8z37Zt9M+hQDiPcLo8ry0mNJAvJMGw/wArDyqmXuiQAASSV02GpV8R6MMx2lv44iL7zt1PyV6+4sa+Awmh7XNc1zg4HTGnYzu4XK9dyvGirTa8dLjkHkFePVcixVFoc9zajABIaYLRyZPK6TwvnflPaxwPlvIGqfUx3GtpM3Np9lOU6ekShIHoW2SymlyITSEDpQmaUILMXTympQEBCdCQpQVUASpCYQCgVKkBQgEFBRKBISlJKFAx7QRBAI6FcJ4o8BsquNTDwx+5H4T8uF30ILUwfP2J8O4+i92uk48gtEj3kcLqvBGX6CKr3+uPgiIPdeqmn7Ks/LqbrljZPMKXldVKeL7qcYhNOS0+JHsSkdlZHw1COxAKmU9J2uJSOYo24eo38rvqP1Tw94+JhHex/RMUOww6KlUoxwtKnWBtN07Q3tKXnU1zGOyOniBFRk9+R81zuJ/4yw7pLXvaTxIK9GDmzpj/ANUFRwaCRxvFz/6kmLr5/wDE3hmtg3+oSw/C8TB7diqmDr6xpftEL2/xBhKdei5rocHN1NPcCQR3XlrclbuEpFTKPD5q1DSZIY+7ngToaJME9/ku2xtd+GDKdLSGNAbB+I8XPKt5Rk9RtAeUzW94l0u0gD8I1AT/ALVKpgMTTJD8O8A9HGpTPJkPsB7fRc+peq3LIjfmDKgLqT5cPiYXEsdxp/6n3XO1iRFWkdUuuxxJI0mdIcTJhWsVhWEk6HU3usQLAgdxIkFZetzNbXEem+sfiI/F7kLUmRLXuWCrh7GPF9TQfqFYBK5fw1inmhTiI0Ni94hdAzE9QukYqySkKjZVB5UgVBqSJ+lCCUJSEAJUQkJYQEqAhARKWUAhKEQgRCVHsgRKhIgVJCVCACQBKEIEQUpTQoAolLCITBE+mCdr9Ruoa2HfuxwMcO/yFbQmDns0ZiTpcxhlpH4mbSJsTf8A2q2Z5g8bUquq3pax7jJG3pB6rqiE0tU8V8nnNani3MbTZh6g1OLnFzdIAJJIk7brayrwm2Q6oCByJ56LqixQuqnUGt2/f/AukkhtqzSptY0NaIATiVUxWKDQbwGiSVUwuPLmhxsHXANjHCuwxm+LstYaTqoADmX7Hj63XlDMOatVzWNsSAeRaxA+/wBF7Bm1dlXDPbMhzCLETssPwlkYaNZZE3E9eSpffxZ6anhvLiym0OF4+i2/JHROa2AkuriG+UOiXSE8BO0qoYhOhIipEAoQiHAolCFAak4IQgRLCEKgSoQgSZStSIQKQhCECQlQhAJEIQCEIQCEIQBKJQhAhK5nMswfQqPJALYJAEztJmebIQsdfF5+qBzkV6DjpIDpsY2jlIzMfQHQY0zHyQhc/wBtszJM2FT+2GneDMRE9l39FsAeyRC6cs9JEIQtoUFIEIRAhCEH/9k=",
                    "banner_img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAFGCAMAAAClqnbFAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBrxWIAAQqkhDkAAAAASUVORK5CYII=",
                    "member_cnt": 100,
                    "posts_cnt": 10,
                    "visit_cnt": 11111,
                    "state": "public",
                    "is_certificated": true,
                    "is_subscribed": true
                },
            ]
        }



        return result;

    }

    async getCommunityChannel(id: number) {
        let result;
        if (id === 2) {
            result = [{


                "id": 1,
                "created_at": 1622615373000,
                "name": "general",
                "description": "null",
                "profile_img": "https://blush-design.imgix.net/collections/kSlBLJlsKBVuI0j1MQlv/73d85711-031c-472e-8579-fd017e9ddada.png?w=800&auto=compress&cs=srgb",
                "sort": 1,
                "state": "public"
            },
            {
                "id": 2,
                "created_at": 1622615373000,
                "name": "private",
                "description": "null",
                "profile_img": "https://blush-design.imgix.net/collections/aarkKHQ2eBWDgSC0A3U6/aa591b33-341b-41aa-a4a8-924bcc003c46.png?w=800&auto=compress&cs=srgb",
                "sort": 1,
                "state": "private"
            }]
        } else {
            result = [{


                "id": 1,
                "created_at": 1622615373000,
                "name": "channel1",
                "description": "null",
                "profile_img": "https://blush-design.imgix.net/collections/kSlBLJlsKBVuI0j1MQlv/73d85711-031c-472e-8579-fd017e9ddada.png?w=800&auto=compress&cs=srgb",
                "sort": 1,
                "state": "public"
            },
            {
                "id": 2,
                "created_at": 1622615373000,
                "name": "channel2",
                "description": "null",
                "profile_img": "https://blush-design.imgix.net/collections/aarkKHQ2eBWDgSC0A3U6/aa591b33-341b-41aa-a4a8-924bcc003c46.png?w=800&auto=compress&cs=srgb",
                "sort": 1,
                "state": "private"
            }]

        }

        return result;

    }


    getCommunityInfo(id: number) {

        let result = {
            "id": 1,
            "created_at": 1622615373000,
            "owner_uid": 'wjZpvIjDEMWUBdXKsUQyR33RWrx2',
            "manager_uid": '2x1H8Fn5EVdYQ9EchRPCOXhdyKn1',
            "submanager_uid": null,
            "url": "sample1",
            "name": "sample community name mmunity1",
            "description": "sample community description1 sample community description1 sample community description1 sample community description1 sample community description1 sample community description1 sample community description1 sample community description1",
            "profile_img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUZGBgYGBgaGhgYHBgYGBkZGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISGjQkISExNDE0MTQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0ND80NDE0P//AABEIALYBFQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA1EAABAwIFAgQEBQQDAQAAAAABAAIRAyEEBRIxQVFhBhMicTKBkaFCUrHB8BQj0fEHYuGS/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIhEBAQEBAAMAAgEFAAAAAAAAAAERAhIhMQNBURMUIjJx/9oADAMBAAIRAxEAPwDdAShASgLz47hKEAJYTAoSoCUJgUJUJYVwASpISpgEoSJVMAgFCFcgVCAhZsGZicQ4vLGGIt8/5KjGOewxUBLbeoDYqCtU0Yh07Eg/W62jQa9l4g/zhc5zbtjrckmhpBAIuDsgsCw8NWdh36H/AAONnHZp4v0W8DK3PbnZhhppDTUiatYiI00001OhMNVzTTDTVpY2JzBzyWUh6B8VQcxuGH9/os2E9pqtVjbFwB6IYWu2Mqn/AEbQ35ckn5yU3KH/ANwtm2k/5S841i66mmOprRcwKM01PFNZrqaYWFaLqKjdRUw1QIKaSVddSUbqRTF1U1lCn8tCYa1dae1yzm4oKZlcLpOk8V0FOCqNqhSCor5GLISqAPTg9XUxMAlhRionB6B8IhIHpZRAlQhMCISwiEAhEIUVz+eUoqB35m/pb+e6t5DjHEQ6ABaXfsJ2TPEREMvDyTpHXaY77fdZmAPr9YAcNuZjt1/kcrnz66rvnlzGnnbQ9rtJmbTED2EbrJyPPtM06hszZ99p2M9P2PRGa5gXv0geltob6vck7b8DosHH5bUYSesmJ2mJkfT7q7Nc7PT0L+tp/nbtO4UFTN6A/GD7Xj3heZVapogOLSfWw3NtMSR2n26dVcdiS82EflMRZ3qvtNiB8iuskcrXodPM6LrCo2ehMfqp31WgSSI915dUzEshjmAOLnBzhOprBAExwYTqb6kmCXAmIkxAGwHcAfVTqYvN11eMzc13mjSnQDD3iQXdgQCWj5LewdMMZ6QTFtIcCD3I2lebYAvpVP7rTBuBtINunYLratdnlhzHQY2cQw+19/5ssz63npJmGYyS2NPYiCEZEz+449G/qsKm8vdJIgLp8gw+ljnnd5+wU692N2Zy0yE0qQphWnI0hMKkKYQgjITSFIUwqYGQhKhMHOa3BPZiHJxYkDFy16MStxZU7MYqmlPa1NqeMaLMUpmYpZzGqQMU8qeMaTcQnisFliUyrigz4iAtTqs3ltCqniouNxPiID4RKysT4grus1wHsusnVc+rI9IFVOFReUsznENPxu+a0cN4srN+IalfGs+UekConh65LAeKab4DvSe63KeLa4SCD7LNtn1ZN+NIPTg5Z7cQFIKw6qeS+KDOsEamhzd6bnPjkwx0AfPSuEY+o+p5YdcnuCvQMRUJY4A30mPeLLhskwD/ADTWfYCdIEhxdcS3oOINlL91vnqyY6HE1mUWtZT+I2JtOo2NgJ4NyFh4x7nAucS53wkiCRd2mRsNwCe/K1Bg3Oe4NBOkTJAkSbgmZFv9KLGs0YWsdAD2ENJLTdsESN5BnfuVJGeq5vH0HVmelsNYdT3GT6QBLT1MyPcd1c0Fz7FphrXN1ED0mCJG4AkH333WngsuLMEWPnVUDnOPMOsGjra/urnhrIS8v12ayhpNoOpwgT1/F9AunN30xZntxeIwr3vbVkaBI1Rpc/S8tsOZ0zPdaVCk8XBiSDA3DdwI7kAxOwF9ytjxNgowwcyG+UGuLRNwLOBI2ve3QqJ7Iw9N7xpLxwCXkuG0WDW2m/I7AJuwkw6hi2VCGPPqAADx6niBH/0d9vrusrxDUfSc1haQwiQS4aiOrgP9pXsuCZaSdmybmZJBvzxJ39lXzV/oIJ1Fh1SZkA8GZ2n9Fmeq6SpMJUAaSJJABj5rvsmLjQplwglgdA2AdcD5AhcH4ZwvnEsmA4eriGyNUd4kDuV6SxgAAAgAQB0A2CSe166lkhCmlSEJhC05oykKeQmkIIimlSEJpCBkJE5Igzf6YqJ1AhbDGhK+mCvHOq9eMIsKQBbDqAWRjMQ1r9O66c716jPVkKx6ecS0blZVaub3gLPfiL9fddp+LfrlfyxqYzOIsy5WFiaj3mXElSVXuOwVGs57TA5XScTn45dd2kFIyeiTVwArTGkNOpMw1JxJMK6iJ7J7JSwRZBwji71Wun1aLWcyVdMVxS6SrWFxlRh9Lj7Ips5KWmzUfS0nuU+pjZwviA/jHzC08Pm7H7OHzXO/0QO6f/SsF4MfdYvEvxud2Osp1ySB1PySVq7WFz4c6S1rWsu4uiQ0N224WDg3uDtLZj3+d1eyoa8QaouxhLWt4LiPUb2nYdbLHji3rfifH5jiabKbGMFM1XubqeAXthuo2BInjfouZHibEMqaHPbWbqjSQA61iLADjaF0ua49lZoY86Cx/mU6gE6HbQ9tiWkGDHBHRZ9TL3MJqjDOe4gnWwtczY+oOtb3AV5zPbN8t9OgxMVKTKrJLXxG1pERf+CFczTGNw9BtNtnPuRbb1cDoL97LJ8M4gOwTKYf6/MqEAXIc9x0iPcrMz7EufiXk2aw6QDbZobf6LM/x1qzamxWMbToeY/4TMM3kGYEHdY1LxNVe8U/JbciNbvV2AizLdlW8Q4pjn0WTqY2neLw4yJ+x+6bk+EZr1sa+o4fC0AwD1c42HzK1JnO/tOrdyNk4+lUa0sDmPDtJY6TpeIB03i3sqGPaRJgbRBv6SI2m3fotrCYWjTpaKpY97nue/oHvNwzsNpXKPxMPdTB9BOpgm0bQCfmkhrd8FYYMqPdFtI0zxqNx72XbisuN8NvLdTid+F0LcUFL17anPppCsjzQs7+oCXzgnkeLQLwk1BUBU7pfM7q6mLpITSqnmI80ppixCVVfPQrpi4GFQY2voaStR1Bw4XOZ5Vl2npwvJ+Pjevbt13kVa2YzflZJYSS4m6dMye6YZINl7JJHnt1UqPvc8qOo2Cp3BsTyFRqYoGw3W9ZsTtq3TcQYExdS02CBf3CvYfBh51OnSEtJEGX4cka37KHGV+G2HELdrVABpZ9Fltw0Ovtv7FYlaqCi9oEHdVW4fU7UVexbADYX7ILQxpndBBUpj4frF1PTpTAbt2G3ukwVJxIJ2P8utB3pkNmfsghdoYIklUnYoA9Ois1qLyJcPb/AEsDEOJdC1yldr4RoebUc4iQ1riSDcCIv1ClqZlSojQxjnl5OoMAPPMLov8Ai3Iyyi6s8GX+loIgBo3Md1Xzvw/Tp1i91OWk7gAx9SFn8kySpzd9OdqYZ7zqAkuFm6C1zejXE2+fSFr0MtrMwxpM1APMGCY9RiGwLLosqy9haIuD/wBSP1XT4ag1jQ2xjrG6nPPk111jmvDvhinhg0uPqYXOA2Em8n8xA591574xhj6mkWDzf9CT/Nl1f/I7MQx9Os17vJ9LPQdJpucY1O/M0nT0i682zBlWs/y2a3uc0ucZhol0S7rsVevH4vMubqDKCPPZW07EyODA3v2K3c2zd7iQGhrNgGyG8iTHbr0Wc/DOonRpc52mTpaTtAMRzPC1cqy51QEvBHADrbHofZcvKfWvHPTHpguJ1viIsdJBHBB6C9kzMsKXBhZEtvPB4MlbmY5AyIcxxHBbqED5G6wqVGqwmnqlmwBu6OAtTr9xLHRZGyKJLrmenVTli2cnyc+SAbWmwjYLJrCCQsdb9dOLL6RiU4OKJQHLDeDzXBJ/UlCY5qunjEgxiUY1VnMUbmLWp4xfGMCFmeWkTyqeMe1uw7Y2XmniunorOtE7L1ArifH+BJa2o0SWm/svTZ6eXmuHdQOgjuggNbvx904VZFgVUxryG9JXNvFZwBBMrJoN9RP0Wm10Az0VehTFzyeqsKdhGPcYC26uINNkdlUy4EOk9FbrAPsrSG5c7UbqziKcS/jomu0sb6dzx1UeJruDIIuoKmCbreXHYGyuYnD6gAYTsDT0s2g9lDSfLxq2CipmUQwWsns1GOIuT36BNqnUYFwocRUc0aQZG/t7oH4iuDMGCsfAYbzKmgEtJO4HqMnj/wAUWNY+NU7rU8MYH+6zXYuc07S6NwXflB+Z6DkXmM2vccmwop0KdMTDWgXsdlLiaQduJU9NsADoFHUC6345xQo4ZrD6RHzMfTZSVKxH8lOcq9Rc9xpmZ1VY+m9j4LXAgt6yuGyrLjhmOY1gOokk7kgmwk9l6I9jHbgKq/BM5hZ6nlHTnqSPMqmBD6tw0OIvZ5nbvHAXXYHBhjBqDf8A5gEnpuQtgYWm0y1gnrF086ei5+Betclj8C97pa1zOA4H9to/lk7LMgeHS86gDNx+3HyXUz0Q0BanML1U2HYAI4hcrmWBcHunrxsuirYoNE9FmVKwf6gp+b/VfxfWC7DFRGkVu+UmuwoXm8np9MJzSmLbfhAonYEK+QxyUwlar8vUbsuVnURmIV44ApFryg9ZlR4mi17S1wkFOJVbFvIBIXueF5t4jyw4d5Dbtdcduy5rFPlu66/PsQ6oS1/Gy4zEsgkLlfrpPiq+o20H3UtISRe3VUCIP6q9TeJEBQa+EYGsJ90mAkuJ+isamhlgduUuWMETH1RQzClz5kAD7lLjgOYjZSPraTpEX37rPx1Q62oVNXqOa2OFSwzyXSAZPCu4mdEx803LQRcXA+qCehRky7mVUxrTqgTI+nsVafiI4vP0VF9fVJLrcxyoI8VVAbvLuCdm9wNp/RaHhbEBlVry6wNpPX8RH5iee3ssedc3sBB/wnUcW1rJ0wdW3Fhx0stT0zfb6BwVcPYHAzI3UtRch4HzFzmaHbja878Lryuv2OfxWeoKitVAqtRYsWKdQKuVaqBU6hhYahSoyEoekJRTYUdZ1pmE95WFneZeW0w0kngEfyEGbnWaEy0OFtrb9keFcQXseC7VBkexXEZhjS52u7T0P+1s+D8TprQLaxtO53sFj8k3mt8XOnemmjQmPc8cFROquXjehK5qY5qiNYprqrlFw8gphCZ5hSF5V1cOKFEXlCaY9FcExzJ3U2lIWr6r57nszyBj5LbFcHnfh6szZpI6heuQmPpA7hZvMqzqx884zCuB2IKmw7nOgRde24rw7h6hl9MSsrE+BcOZLAWu4vb6KeNXyef1hpYASZ5U2BeQydhey2c58MYlvwN1gb9Y9lz1d7mektqDg6mkCexWLK1LFXE1j5g9/b7q86nJBvPBN1nVnaiFqYbEho9RRVXMMU0ANlRYBwgkXnnaD2SY2h5h6DclS4KloEx26T3TPR+z6rHcgdQBzPdZGOqGzQY2t2/dauLxEMOx6X2WMz1HaTO/QJIlqajihIY1oIA9RMgHsO6s4PBNIJBJINgI6qLG4Y+WPLDRtJ/ESmYCo+mQKggE3cbR/P3V/wCI7nw1mpY4axEbySRfaXE2PyXpWGxAc0HsvEqT3kh7R3E7R+E++3Vd94VzzW0MJv12+y3zWOo7Nyq1VKypIUVVKRTqFUqxV2qVn13LFaiNrk9rlVc+E4VFFRZljW02Fztl5jm+YuqOJLrTEwBbobS5avjTPRq8phk8kbA9O5XJtaIJftPPPIJ+quBQWN9Rg9TufsfsreExb2kOpsJLSCHQ6xF7Ssevj2zAGxkR9AmjGVXiGTA4H6rXia+hvDGYtxNFrns0vAh7ehWo/LqZ3aF4x4BzWrRxLGPedD4DhNgT8Oo/Ve4sdITJfqW2fGa/JqfRRuyRi1kin9Pm/o8+v5Yb8iHBVZ2SO4hdIiVm/g4v6an5ev5cfVyx4MRKF1xCFn+25/lr+r0mCClCF6HEgKC1OhBCBA1GlPARCqGFqir4RjxDmgg9QrEIhBzOP8HYZ5kN0H/rt9FzmZ+BKhvTe09iIP1XpJak0rPjFnVeK18mxNMFr6ZDR+LcfVQ4sENAcDJ5PX2XtjqYO4lU8TlFJ4hzGn5XUvC+TwLM3kNAm83t9FPg3hlLVaT9T0AXb+OPBzW0y+kHEg3G4hecNOosYTAG8/dTPRrUZga7xrD2jaGi/wBVoOwutml49Xb7GeVmNxT/AIGAGbCZgA8m9l0WT4Vj6jafnanxfQHQI6mYTF1Ty3L3sNw8t4GpgmJMbhdTlOVuc4Qx7Lgkmb+5Fl1GByCmwCfU78x3WmzCMGyuM6iojSI6JtR6fVwo4VKrRKzasRYmvCycRix1VzEYRr/iB+6x8dkzhJpuM/lJ/RZaiOriuZ2VTG5n6HaTeFz+Z457DDgWkG4NisvMc2Gj0md/kT1TFQYnAeovuTf7rEzLEmAP57la2CzKbPWdm2DdJeLjqt8z37Zt9M+hQDiPcLo8ry0mNJAvJMGw/wArDyqmXuiQAASSV02GpV8R6MMx2lv44iL7zt1PyV6+4sa+Awmh7XNc1zg4HTGnYzu4XK9dyvGirTa8dLjkHkFePVcixVFoc9zajABIaYLRyZPK6TwvnflPaxwPlvIGqfUx3GtpM3Np9lOU6ekShIHoW2SymlyITSEDpQmaUILMXTympQEBCdCQpQVUASpCYQCgVKkBQgEFBRKBISlJKFAx7QRBAI6FcJ4o8BsquNTDwx+5H4T8uF30ILUwfP2J8O4+i92uk48gtEj3kcLqvBGX6CKr3+uPgiIPdeqmn7Ks/LqbrljZPMKXldVKeL7qcYhNOS0+JHsSkdlZHw1COxAKmU9J2uJSOYo24eo38rvqP1Tw94+JhHex/RMUOww6KlUoxwtKnWBtN07Q3tKXnU1zGOyOniBFRk9+R81zuJ/4yw7pLXvaTxIK9GDmzpj/ANUFRwaCRxvFz/6kmLr5/wDE3hmtg3+oSw/C8TB7diqmDr6xpftEL2/xBhKdei5rocHN1NPcCQR3XlrclbuEpFTKPD5q1DSZIY+7ngToaJME9/ku2xtd+GDKdLSGNAbB+I8XPKt5Rk9RtAeUzW94l0u0gD8I1AT/ALVKpgMTTJD8O8A9HGpTPJkPsB7fRc+peq3LIjfmDKgLqT5cPiYXEsdxp/6n3XO1iRFWkdUuuxxJI0mdIcTJhWsVhWEk6HU3usQLAgdxIkFZetzNbXEem+sfiI/F7kLUmRLXuWCrh7GPF9TQfqFYBK5fw1inmhTiI0Ni94hdAzE9QukYqySkKjZVB5UgVBqSJ+lCCUJSEAJUQkJYQEqAhARKWUAhKEQgRCVHsgRKhIgVJCVCACQBKEIEQUpTQoAolLCITBE+mCdr9Ruoa2HfuxwMcO/yFbQmDns0ZiTpcxhlpH4mbSJsTf8A2q2Z5g8bUquq3pax7jJG3pB6rqiE0tU8V8nnNani3MbTZh6g1OLnFzdIAJJIk7brayrwm2Q6oCByJ56LqixQuqnUGt2/f/AukkhtqzSptY0NaIATiVUxWKDQbwGiSVUwuPLmhxsHXANjHCuwxm+LstYaTqoADmX7Hj63XlDMOatVzWNsSAeRaxA+/wBF7Bm1dlXDPbMhzCLETssPwlkYaNZZE3E9eSpffxZ6anhvLiym0OF4+i2/JHROa2AkuriG+UOiXSE8BO0qoYhOhIipEAoQiHAolCFAak4IQgRLCEKgSoQgSZStSIQKQhCECQlQhAJEIQCEIQCEIQBKJQhAhK5nMswfQqPJALYJAEztJmebIQsdfF5+qBzkV6DjpIDpsY2jlIzMfQHQY0zHyQhc/wBtszJM2FT+2GneDMRE9l39FsAeyRC6cs9JEIQtoUFIEIRAhCEH/9k=",
            "banner_img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAFGCAMAAAClqnbFAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBrxWIAAQqkhDkAAAAASUVORK5CYII=",
            "member_cnt": 100,
            "posts_cnt": 10,
            "visit_cnt": 11111,
            "state": "public",
            "is_private": true,
            "is_certificated": true,
            "is_subscribed": false,
            "channels": [
                {
                    "id": 1,
                    "created_at": 1622615373000,
                    "name": "general",
                    "description": "null",
                    "profile_img": "https://blush-design.imgix.net/collections/kSlBLJlsKBVuI0j1MQlv/73d85711-031c-472e-8579-fd017e9ddada.png?w=800&auto=compress&cs=srgb",
                    "sort": 1,
                    "state": "public"
                },
                {
                    "id": 2,
                    "created_at": 1622615373000,
                    "name": "private",
                    "description": "null",
                    "profile_img": "https://blush-design.imgix.net/collections/aarkKHQ2eBWDgSC0A3U6/aa591b33-341b-41aa-a4a8-924bcc003c46.png?w=800&auto=compress&cs=srgb",
                    "sort": 1,
                    "state": "private"
                }
            ],
            "user_block": "null"
        }

        return result;

    }

    getCommunityMember(id: number) {

        let result: User[] = [
            {
                "id": 1,
                "uid": 'wjZpvIjDEMWUBdXKsUQyR33RWrx2',
                "status": "member",
                "email": "zempie@google.name",
                "name": "젬파이",
                "nickname": "zempieeee",
                "channel_id": 12,
                "created_at": 1616117970000,
                "state": "active",
                "profile_img": "data:image/jpeg;base64,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",
                "post_cnt": 0,
                "liked_cnt": 7,
                "followers_cnt": 123,
                "followings_cnt": 0,
                "follows_you": false,
                "is_following": true,
                "block_you": false,
                "is_blocked": false,
                "mutes_you": false,
                "is_muted": false,
                "type": "user"
            }, {
                "id": 2,
                "uid": '2x1H8Fn5EVdYQ9EchRPCOXhdyKn1',
                "status": "member2",
                "email": "zempie2@google.name",
                "name": "이현정",
                "nickname": "zempieeee2",
                "channel_id": 12,
                "created_at": 1616117970000,
                "state": "active ",
                "profile_img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7OhfW0BhZzL3D4Swp_A7GQPwJE2OhsjXYw&usqp=CAU",
                "post_cnt": 10,
                "liked_cnt": 7,
                "followers_cnt": 13,
                "followings_cnt": 0,
                "follows_you": false,
                "is_following": true,
                "block_you": false,
                "is_blocked": false,
                "mutes_you": false,
                "is_muted": false,
                "type": "user"
            },
            {
                "id": 11,
                "uid": '789',
                "status": "member",
                "email": "zempie@google.name",
                "name": "젬파이",
                "nickname": "zempieeee",
                "channel_id": 12,
                "created_at": 1616117970000,
                "state": "active",
                "profile_img": "data:image/jpeg;base64,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",
                "post_cnt": 0,
                "liked_cnt": 7,
                "followers_cnt": 123,
                "followings_cnt": 0,
                "follows_you": false,
                "is_following": true,
                "block_you": false,
                "is_blocked": false,
                "mutes_you": false,
                "is_muted": false,
                "type": "user"
            },

        ]

        return result;

    }

    modifiedCommunityInfo(id: number, name: string, description: string, is_private: boolean, profile_img?: string, banner_img?: string) {
        const formData = new FormData();

        if (id) { formData.append('community_id', id.toString()); }
        if (name) { formData.append('name', name); }
        if (description) { formData.append('description', description); }
        if (is_private) { formData.append('is_private', is_private.toString()); }
        if (profile_img) { formData.append('profile_img', profile_img); }
        if (banner_img) { formData.append('banner_img', banner_img); }

        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        return true;


    }
    async deleteCommunity(id: number) {
        const response = await this.request('delete', `community/${id}/remove`, undefined, false);
        console.log(response)

    }
    async createCommunity(user_uid: string, name: string, url: string, description: string, is_private: boolean, profile_img?: string, banner_img?: string) {
        const formData = new FormData();

        if (user_uid) { formData.append('user_uid', user_uid.toString()); }
        if (name) { formData.append('name', name); }
        if (url) { formData.append('url', url); }
        if (description) { formData.append('description', description); }
        formData.append('is_private', is_private.toString());
        if (profile_img) { formData.append('profile_img', profile_img); }
        if (banner_img) { formData.append('banner_img', banner_img); }

        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        return true;
    }

    // 타임라인
    getTimeline(id: number | string, channelId?: number) {
        ///api/v1/timeline/:community_id/channel/:channel_id?offset=0&limit=10&sort=popular
        // console.log(id, channelId)
        let result: any;
        if (id && channelId) {
            result = [];
        } else {

            result = [
                {
                    "id": 111,
                    "user": {
                        "id": 1,
                        "uid": 'wjZpvIjDEMWUBdXKsUQyR33RWrx2',
                        "status": "owner ",
                        "email": "zempie@google.name",
                        "name": "젬파이",
                        "nickname": "zempieeee",
                        "channel_id": 12,
                        "created_at": 1616117970000,
                        "state": "active || block ",
                        "profile_img": "https://blush-design.imgix.net/collections/Xu9zfHCDvMoRx6YhtcN4/3ab2ecb4-bd1f-4834-82df-89d183c643ca.png?w=800&auto=compress&cs=srgb",
                        "post_cnt": 0,
                        "liked_cnt": 7,
                        "followers_cnt": 123,
                        "followings_cnt": 0,
                        "follows_you": true,
                        "is_following": true,
                        "block_you": false,
                        "is_blocked": false,
                        "mutes_you": false,
                        "is_muted": false,
                        "type": "user"
                    },
                    "created_at": 1616117970000,
                    "attatchment_files": [
                        {
                            "id": 111,
                            "type": "image",
                            "size": 200,
                            "url": "https://blush-design.imgix.net/collections/kSlBLJlsKBVuI0j1MQlv/73d85711-031c-472e-8579-fd017e9ddada.png?w=800&auto=compress&cs=srgb"
                        },


                    ],
                    "content": "<pre><code>ㄴㅇㅁㅇㅁㅇㅁㅇㅁ</code></pre>",
                    "visibility": "public",
                    "hashtags": ["tag", "tag1"],
                    "user_tag": [],
                    "liked": true,
                    "like_cnt": 1,
                    "comment_cnt": 5,
                    "read_cnt": 0,
                    "shared_cnt": 0,
                    "posted_at": {
                        "channel_id": 1,
                        "game_id": null,
                        "community": {
                            "id": 1,
                            "channel_id": 1,
                        },
                        "portfolio_id": null,
                    },
                    "poll": null,
                    "scheduled_for": null,
                    "status": "active",
                    "is_retweet": false,
                    "is_pinned": false
                },
                {
                    "id": 222,
                    "user": {
                        "id": 1,
                        "uid": 'wjZpvIjDEMWUBdXKsUQyR33RWrx2',
                        "status": "owner ",
                        "email": "zempie@google.name",
                        "name": "젬파이",
                        "nickname": "zempieeee",
                        "channel_id": 12,
                        "created_at": 1616117970000,
                        "state": "active || block ",
                        "profile_img": "https://blush-design.imgix.net/collections/Xu9zfHCDvMoRx6YhtcN4/3ab2ecb4-bd1f-4834-82df-89d183c643ca.png?w=800&auto=compress&cs=srgb",
                        "post_cnt": 0,
                        "liked_cnt": 7,
                        "followers_cnt": 123,
                        "followings_cnt": 0,
                        "follows_you": true,
                        "is_following": true,
                        "block_you": false,
                        "is_blocked": false,
                        "mutes_you": false,
                        "is_muted": false,
                        "type": "user"
                    },
                    "created_at": 1616117970000,
                    "attatchment_files": [
                        {
                            "id": 123,
                            "type": "image",
                            "size": 200,
                            "url": "https://blush-design.imgix.net/collections/kSlBLJlsKBVuI0j1MQlv/73d85711-031c-472e-8579-fd017e9ddada.png?w=800&auto=compress&cs=srgb"
                        },
                        {
                            "id": 222,
                            "type": "image",
                            "size": 200,
                            "url": "data:image/png;base64,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"
                        },
                        {
                            "id": 333,
                            "type": "image",
                            "size": 200,
                            "url": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUQDxAQFRAVFRUVDw8VEBAVEA8PFRYWFhUVFRUYHiggGBolGxUVITEhJSkrLi4uFx8zODUsNygtLisBCgoKDg0OGhAQGy0lHx8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgADBAUGBwj/xABDEAACAQICBgcFBQUGBwAAAAAAAQIDEQQhBRIxQVFhBhMicYGRoTJSkrHRBxQjQvAzYoLB4UNTcqKysxUXY5PS4vH/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAMREAAgIBAgMFCAMAAwEAAAAAAAECEQMSIQQxQVFhcaHRBRMygZGxwfAUIuFiguJS/9oADAMBAAIRAxEAPwDw0JAgBAkIMCBBYYdACwbEGABbDBsSwCBYNg2IMBbEsNYNgASxLD2JYAFsCwxLAAoo9iWEAlgWHIAxLAGA0FAAAwBAKAYAgLCEIACBIEYEIkRIKGBBiESGAbEsGwUgECwbBsNYYC2DYaxLAALEsNYlgAWxLDWBYYAsLYexLCArsCxZYWwAJYjQ1gCAUUdoADEaIEDEAAMYAgLABIICsiHjben5lsHDev5ssjG+o0rKUMPaHF+pElxa8Ace9A0KkFDWXEaMVvfkFCAkFIfUj73oNaHF/rwJ6O9fVBRWkFIfVjub+pEhUJgsGwUg2GIWwbDWJYKAWwLD2JYKASwLGdhqEWrtb+YmKoxilZb+ZLQ6sjqV0YTQGi1Jb16kduD8/wChHT3k0UtCtFj7vEmtyXkKl2gUsDRfrd3kJqi09gyoVlzihXGPF+X9BaWOipgY8lwFZFiHIEggK0OmKgokmAyHEQ6GgCkFIMRkOhCpDpBiPGBJK+QCJDJFqoh6onokFMspYXWinf0FrUdW2dzJoVYxik3n3PiCtHrLaudtu75lmlVtzK7d7mJGNxuqLvu8o5tZeAUtwlHtGUagmqZv3WXD1RROk0yLg1zRK+wlKrqq1r+Iz/Ey2Wz4lbgy3DNRbvwJRd7PkRa6lc8HZX1vT+pS6XM2E5xaaT9GY7gSeNdBxUnzMJxFaMt4SfD1RRKOq7Sjn3lLg1z2JWiloVl7tuj6lTXJepBxHRWxGi7WXBepNde6vMVLt+4bFDFZfJxe6z43KmRaobGIQgqEKhkRRdr7hkiVAFIKAkMkAgoZIMUNTRNRAto07mywuAlLJJt8ErsTCU8z3XoX0Jp08LF4mM1OolOdPW1XHbqxds1ZPNX23OlBY8UVLIWqWOFOd7utvN/I8ghoKpvi13oor6LlHard6Z9CvovgLfsfOdX/AMjX47opgXGSUZQ1lZvrJt7U1ZSur3SLv5XCSVaZfRepoy8RwahcYzv/AK+p8/zwtuBfg6Fr7N289MrfZ3Tk21iGo7k6aeXNqSv5IyqH2W0WryxMvCn/AOxGXuE7vyfoYP5GDJ8Lf0f5SPLsTR7PkV0cMrptx7sz1+n9l+FW3ET+BfUvj9mWE/vp/AvqJZuHu78n6E4ThHoeSukYFWjm+89q/wCWWD/vp/DH6iS+y7CP+3qfDD6ilm4d9fJgpxXb5ep4m6I33fkezS+ybDNdnE1U914RavzRymJ6IU6cmuuvZtP8PenZ/mJ4ViyP+r8maOHg87qC+3qcVQ0fKWxPwRlPQdX3X5HouitCUFBK7kk27KTXaaSztZ7kbmnobDe4/jqfU1Vghs034f7R1I8Jhiqnbfc/VI8ixGj5R2prvyOfx9Ltv9bj2/T/AEaVWi40Fn7SjKTbcknbVvs2vLmeO6Qoasmmmmm001ZprJprinkZc+OGSFxObxHDxx1Jcny3+/KvpXeaRoDL6sMypwOTKDTMhUxGXOIjiR0MLKmBlriBxFoYWKQJCuxgQyFRYoPgTim+QETGTGhSk9xYsPLgWLHN9H9A0t9CtMyaG0SNCXBmbhcO280+b5FuPHNvkGl9h6X9kPR2NarLFVYpwoNaieyWIaur/wCGNpd8ovcer4nSKjsOe6M4f7no2jTtaco9bU469TttPuTjH+EprVZO/wArq5o0e9lb5LZeBXNylL+iv06fU3dfSElk7d11cwsRilU32a2LiYGMxMX209uxb7vcamdaUXn5XVy6GGlZesEnBLIrTW/48Dbz0iks7JpSut+td5WNg9JWSz3HG6Yru0Z8bp96tb9cjPxNV5dy+RJ4kyfC8IoSyRbutNeDuvKjc1NMtbymWnX7xy2IryMKeIkSWOC6FeSUYs7b/j0veZfS05J/mZwMcRIzsLVkyMoQrkZM2dRR6HgtJOT2nEY3FwdSeavesmr9rX1paqS2u90bbRc3dHKaDvPG1Z2v1UqsoL/q9Y1Dyzf8AsNQbZn4H2l7uWWd/Cl93S/3ob/A0IYbt1pN1Gv2SfYiv3/3vRczZz6QU6TUHCN2k5WjFJXV7LI43S7qPWkqlOerdzjCT1ore81mlyMKGm00uspKcopKM7uN0tikltt4Fzisn9pbnQ/lPPWST1dqTqttqW3q9nzs9Jp6UpObhKyeTUlllJJq62bGcT9qmglqxxcEr3Ua1tkr5U6nn2X3x4GNo3EVK05VHKKSa1pvKmuEVbPYtnI7aWE+9YKpQm01KDUKid0m8k896lqvwKZwWNpr5mj3kZJY9W7+dPx/3l2Hz9VpPdF+RT1MvdfkZ2Iw7i3rKSd817r3rzyMXLc5GaUFe6+3oZ401b/fIqlh5e6yqUWt3yL2k98vNfUpq0rbn5rMrmtrS/foWOG2xS2K5EYrM/vGQIQISmgEix43WwrQ6J2A8bj572yuJYiS5CLqcm978zf9GcE8RiKVHNqpUhCS3ajktf8Ay6z8DQ0Ud79leE1saqjWVKnUqX3KTSpR/wB2XkbMNpNkZS0ps9S01ib3tueS5bvkzV1MbRTck5cdXVzvwuJpPE2be78y324+H1NNiFvi7xeyS2M6PD4bSNePh3KpQe8f2/xfTfuNtWlKL1nbW2yhwW9X4lLrUH2rybs7R1d9sszGx2KjOo5wcrO71XGzV9wMNh98sl+slxZZJbbl81LJCKVrq/Hq+W31MfS6tSjHe234Ky/mbqm4Tgmpw2L8yMetgIyetVbW6NNNZd73vuKZ6IoPLVnF7n28/CW0zuVN0ZsuWcckopxWqkk3T27q25t02mZNTARf5ofHH6mNPQ6f56fxxNLpPRkqT4xfsyV7P6Gnr03xfmypy7TgZuHzSm056X2V/p2UNCrfOn8cTPw+j6cdtSn/ANyH1POIRfF+bNlorRlTET1Ibs5yberCPFjSTEvZU2rnm2X/AB/9Ho9KVCmryrUUlm26kMl5nFdGKkevxO209epHLN0+skn42qp2NjDQ+CpdmpKdSe/tqK8IxzXi2XYXRdDXVXCTcakf7Ock6U01ZxbWcbp7cw00r/AQ9n48eHJvJ60lbjS2drq3u+40GJpQoSnU6xSlJSUILWu3JNdu6yWZoqdKVsk2ltaTsu87bSmiVUvKmnk7Tg/bpT9yaX/x7VdFFfBV4OnGipKmow1Ur5u2bfO97l2OiSy6Va3b53tVdNl3/PnZpdGTi6bpSlqvX6yMnfVbsk07bNi9TutBVFToOMZa2a7Wdr5ZK+3JM56Whm6smo2jk57oxdlrdyvc2WExCdow/Zx9l+/PfPu3Lx4jyRT5eIcNxGvKlG6tSa6L82/vZ5307wfVYyskuzKWvHuqJT/1Oa8DkqyzPS/tOodulVUfapuMnzpyuvSo/I87rO35V5GDPA7OWKWWS7/vv+TCYrkWykvdRUzG9uQhZMrY8hGQbtiGIQhEARLIztwETXBeoyfJepNbcmNbchnK+5BiGMuKRfSrpfkXmTik3u/IOfMeij1b7LcLq4fEVuMqdJfwpzl/uR8jzTCSi37Ge7M9n6I0VDRtO0ba8qk3ntvJxT+GMTfGFQ2fNmfiJKMVvza9fukYekKmZocRiXTl2JWvm47r9xvdI73Y5PEttt2+Z1+HpLcvXEaYqnubClpWfCHfqo2+hJSqTc5tvVV1wUnlkjlqKzOq6MRetZ7J7O/av5+ZnzyIrjcmTNGM5Nq+3r0868Db056sVP8ANJPP3Y7El8x1idztJPamsmWvBO2q8mvZ5rb5iRwLWcnZfrZxMmpHkc2r3kvefFb++1fgxcXRUoVKfJShxt7S+hyyhfdfgk0vmjssTHUpzm8m0oxW9r2V6ZnJYjDC1M9HjeTTh1/Fp3/F+ZiYqmkk7ar4OUZXXHLZu8zo9GrqcHFxynVk234uEfBJX8Wc26B1GjIdfg1GL/EoyaceV3OD7s2vAs6K+Vo6DxPTj958OtavDf8ANfOjXyq2yX9W+L5j0q7Ty9pZxfHl3FVSg7u3it6LsHhJSdorN5L91Peze+W/I9O4Sp6/g69ld3Tw7zI6QVZxVLE0pOM5LUk0/aSs43Wx7ZbeRq49JcSsvw3zdNp/5Wl6Gx6WtRVOgtsE5SXBySUV32TfijlZMy4oppWjxz4SE8K95FPnVrerdb+HLuo2/wB/qV2o1ZvU9xJRg3zS2+JscNPM5qnNrYb/AAcrpPiacqWlUU48NSSjyF6cUdfBa2+nUi/4Zp036yj5Hk+JPZtLUuswdaG/q5Nf4orWXqkePY2nZs5nER2OpxcGpRl2r7NmukhGPJCtHMaKCtiyHaFkiNAEgSEQEQ6Ih0WqAWLEtixUPFElBis2ujFmj3DRVLUwOGhwoUr97gm/VniWjdvg/kz3CFW1GnG2ynBLu1UdSMP6Ro4ftTiFilC+ury0mj0vwW/b3HOVqR02Np3zNTWorn5G5Oo0U4uKc92a7DUG5JcWbTS+NeGpx1GlObai7X1YRV5NLjml4mXoPA603LOyyXe/16nI9NtIa+KlGL7FL8JZ5OUc6j+J2/hMeSe508EFkjb6/Zf6buh0vqtWrzrS/eVSS847CyfSiEc4yxEnzm4rzuzgliuC9WXRxa3x9WUrKuW30/w6KzTX/wAvsbjb+33TN/pHpDWqO7q1Ut0VOSSX63mpq6TqP+0q/HIwp1k9ifncspwTavq25SVyFNvZlai3Jy5vt/V+9C9Y6e+pU+Nmdo3TdWhNVKdSalsacrxlHfGS3owpUae5PzMGcrNrmDuPNkveNpxbtPod6uleGqq9elWUt+oqc4+Gu016ldbplCkrYWE1LdKpqdnmoQbTfe/A4XrhJVhe8KFgh2yrs1OvX6to63AaRnWlLrJOU32td+1K7zv428xaytJry7jQaLxvV1IyexPt/wCCWT8smdTpCjZKXgb8MtcL7Du4V/I4Zt/FB7+HT0+Rj0UbnRs7dl+HeaigjbYaJpS1KifC8Fqe5vaWaaexpp+KPH9JQsvBeit/I9R++NJRtnsueZab9p97/wBTMvEwcce5Z7T4ZwxRb7X+DSSKqmwlxGcVys4SQjFY7EZSMsIKQQxUx1IrQUNNiLlIMZFSHRJSYG40bVzS8PNWPa9E1lVwtCovzUqd+/USa80zwbCOSzSfJ2Z6V0H6Rxpx+7Yh6sG26NSeUYt+1Tk92eafN8jqcPk1Rpnn/bvDTyYlPGrcHuu5838qR1WJgaypROgrULmRo7RkEniMRKNOhT7UpzajC3Nvh/QvnlUY2zhcDKeeax4+b8l1b7l6LmzX6QxEdHYCVaVusS1aUX+bESygrb7bXyizxWtVbebb4t7W978Xc6T7QOlv/EK66q6wtK6w8XdObeUq0lubtZJ5pc2zkUznzyN/M9zCChFRjy2XyRcplkHz9CqFKTV0vkOouO0im+ozIpwu7X9CzqGs77M9nAooVEnmZEq8bPPcWqqIu7B995PzMeVTNviVWYCtzb5klGuRYpEuLCDayXyJOLjtEmyVkg7bdm/uO10Fieuoarfbh2J803+HPxXyZwzd8lt3Gx0Pi6lCopqLa2VI3X4kP5NbUauFzLHOuj5/v7tfU2+zuKjw+a5/DLZ+vy+1nYUsO09voZtOWrkCnWp1YqrSetB8L7efB8hbNvsnZxxfQ9Tw/DyjLbddH2+BZKpmm9id33HnGlqt/n5tv+Z1endJxUXSg7t/tJLZTjw73sOFx9bWZg9pZlSiv39/zocv23xEZOOOLvTd+L/fOuhitg1iMRnBs88STK2FgkJjHIAggEQyEQyYAMh0xR4RvvXqSSsDZYR9lfreXVMRZr5bma1RkslL/MDNvN+rNSnKKqiHu3ds6LA9IK9DKjiK1Ne6ptw+B5FemekWKxdvvOIrVUvZjOf4cWtjVNdlPnY0ig+K8yO6yYTyyfNDjjUG5KNN83XPx7R3O5bFmMmMpFVjNrhn2V4/MTFvZ4mu1i6nC+9LkWqbktKRFQ/tZbFhuVOFt68xGxXp2ZJoy3W5L1EdTLZ4lVytyBzfVj1M2OGk9XxK8fLJd5gtjU5D95a0lenexqEu2u82SqW3I1dSWRQ2Cno2BxszsPj5U5a0JSpve4uyl3rYzMq6Xq1F2602t69leKW000pCa2Y48TKO17fvyNEM+SEdKk67LaX0M3E4m6smrcDBlm9qFbAp23Z8SmWTW9yDlfMd02mr2sFrhZ+OwqqVbiKVnkLXFPbl5jtIatLdZIpY85XzZWyuTtifMsIQhGxCRsWpx5+aKAokpV0HZc9Xixlq8X6lCGHr7kFlsdXfceOpz/XgUJhTGpV0QrLk48w6yK0wphqEW6xExEyJhYFlx1IquG47EWa3ItWIfLyiY9yXJKcly/foNNrkWufMRyEuG4rAa4Na2xi3BcLEO5viI2LcjZFuxhbFYGwNibAjYrYbiNiAjZGwNgbFYwXA2G4ogLCEAIBAihAAhARDAcKYgwwGuFMW5LgIsTGuVXGuMB7kuLcNwAa5Li3JcYDXJcW5LgAbhuLcFxANcVsFxbgA1xbkuBsQEbAyCiAgGQgDIAgGIC0hACAqCKEAGCKEYBCKG47AcggbgA1wi3DcYhrkuC5LgA1w3EuS4ANclxbkuABuS4LkuAEBclwXAAkFuAQwgbJcAWAQEBcQEAQAgLSEIAEIiEABiEIAECQgwIiIhBoCBIQAIMQgABkIQBEIiEAAgIQBgIQgAAhCAwIAhBAQgCCADIQgAOQhAA//2Q=="
                        },
                        {
                            "id": 444,
                            "type": "image",
                            "size": 200,
                            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTje_Gd7V_ya-8f0WUEssciWNq9E81SUqy6dw&usqp=CAU"
                        },
                        {
                            "id": 555,
                            "type": "image",
                            "size": 200,
                            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJR52e-lN0FrA91pUC35PIpH1pH7dbzlZdA&usqp=CAU"
                        },

                    ],
                    "content": `<p><span data-mention="" class="mention" data-id="following1" channel-id="wjZpvIjDEMWUBdXKsUQyR33RWrx2">@following1</span> <span data-hashtag="" class="hashtag" data-id="hashtag8">#hashtag8</span> </p>`,
                    "visibility": "public",
                    "hashtags": ["tag0", "tag1", "tag2"],
                    "user_tag": [],
                    "liked": false,
                    "like_cnt": 5,
                    "comment_cnt": 3,
                    "read_cnt": 0,
                    "shared_cnt": 0,
                    "posted_at": {
                        "channel_id": 1,
                        "game_id": null,
                        "community": {
                            "id": 1,
                            "channel_id": 1,
                        },
                        "portfolio_id": null,
                    },
                    "poll": null,
                    "scheduled_for": null,
                    "status": "active",
                    "is_retweet": false,
                    "is_pinned": true
                }
            ]
        }
        return result;

    }

    getFeed(id: number) {
        const result = {
            "id": 111,
            "user": {
                "id": 1,
                "uid": 'wjZpvIjDEMWUBdXKsUQyR33RWrx2',
                "status": "owner ",
                "email": "zempie@google.name",
                "name": "젬파이",
                "nickname": "zempieeee",
                "channel_id": 12,
                "created_at": 1616117970000,
                "state": "active || block ",
                "profile_img": "https://blush-design.imgix.net/collections/Xu9zfHCDvMoRx6YhtcN4/3ab2ecb4-bd1f-4834-82df-89d183c643ca.png?w=800&auto=compress&cs=srgb",
                "post_cnt": 0,
                "liked_cnt": 7,
                "followers_cnt": 123,
                "followings_cnt": 0,
                "follows_you": true,
                "is_following": true,
                "block_you": false,
                "is_blocked": false,
                "mutes_you": false,
                "is_muted": false,
                "type": "user"
            },
            "created_at": 1625196444865,
            "attatchment_files": [
                {
                    "id": 111,
                    "type": "image",
                    "size": 200,
                    "url": "https://blush-design.imgix.net/collections/kSlBLJlsKBVuI0j1MQlv/73d85711-031c-472e-8579-fd017e9ddada.png?w=800&auto=compress&cs=srgb"
                },


            ],
            "content": "<div><p>ㄷㅈㄷㅂㄷ</p><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDSyJJYxEyv3gZclxu6GaczwEGBoIhBAdeA&amp;usqp=CAU' alt='펫플스토리] 고양이 입양하기 전 의식주 마련은 필수 - 부산일보'><p>123</p></div>",
            "visibility": "public",
            "hashtags": ["tag", "tag1"],
            "user_tag": [],
            "liked": true,
            "like_cnt": 1,
            "comment_cnt": 5,
            "read_cnt": 0,
            "shared_cnt": 0,
            "posted_at": {
                "channel_id": 1,
                "game_id": null,
                "community": {
                    "id": 1,
                    "channel_id": 1,
                },
                "portfolio_id": null,
            },
            "poll": null,
            "scheduled_for": null,
            "status": "active",
            "is_retweet": false,
            "is_pinned": false
        }
        return result;

    }

    likeList(id: number) {
        let result = [
            {
                "post_id": 11,
                "created_at": 1622615373000,
                "user": {
                    "id": 1,
                    "uid": 'wjZpvIjDEMWUBdXKsUQyR33RWrx2',
                    "email": "zempie@google.name",
                    "name": "젬파이1",
                    "nickname": "zempieeee",
                    "channel_id": 12,
                    "created_at": 1616117970000,
                    "profile_img": "https://blush-design.imgix.net/collections/Xu9zfHCDvMoRx6YhtcN4/3ab2ecb4-bd1f-4834-82df-89d183c643ca.png?w=800&auto=compress&cs=srgb",
                    "post_cnt": 0,
                    "liked_cnt": 7,
                    "followers_cnt": 123,
                    "followings_cnt": 0,
                    "follows_you": true,
                    "is_following": true,
                    "block_you": false,
                    "is_blocked": false,
                    "mutes_you": false,
                    "is_muted": false,
                    "type": "user"
                },
            },

        ]
        return result;
    }

    getCommentList(id: number) {
        let result = [
            {
                "id": 1,
                "user_id": 1,
                "user_uid": 'wjZpvIjDEMWUBdXKsUQyR33RWrx2',
                "parent_id": null,
                "post_id": 111,
                "created_at": 1622615373000,
                "content": "comment~!",
                "state": "public",
                "is_pinned": false,
                "attatchment_file":
                {
                    "id": 123,
                    "type": "image/png",
                    "size": 15762,
                    "data_unit": "bytes",
                    "url": "https://blush-design.imgix.net/collections/ob0qDoT6RsCX7xcsG6PD/51234a1a-d7ef-41e6-9ec9-75249e850f08.png?w=800&auto=compress&cs=srgb"

                },
                "like_cnt": 10,
                "dislike_cnt": 0


            },
            {
                "id": 2,
                "user_id": 2,
                "user_uid": '3HOOG0PhMeNyPjQuAMAQYW6vI7f1',
                "parent_id": null,
                "post_id": 222,
                "created_at": 1622615373000,
                "content": "comment~22222222222222!",
                "state": "public",
                "is_pinned": false,
                "attatchment_file":
                {
                    "id": 123,
                    "type": "image/png",
                    "size": 15762,
                    "data_unit": "bytes",
                    "url": "https://blush-design.imgix.net/collections/ob0qDoT6RsCX7xcsG6PD/51234a1a-d7ef-41e6-9ec9-75249e850f08.png?w=800&auto=compress&cs=srgb"

                },
                "like_cnt": 0,
                "dislike_cnt": 0


            }
        ]
        return result;
    }

    //follow
    async follow(user_uid: string) {
        return true;
        // let result=


    }

    userTimeline(id: number) {

    }

    //Search
    async search(query: string, type?: string, sort?: string) {
        console.log(query, type)
        //query: 검색어 , type: username / hashtag / gametitle / community / posting / q(all)
        let result: any;
        if (type === 'community') {
            result = [{
                "id": 1,
                "created_at": 1622615373000,
                "owner_id": 1,
                "manager_id": 2,
                "url": "community1",
                "submanager_id": null,
                "name": "sample community naaaaaaaaaaame1",
                "description": "sample community description1",
                "profile_img": "data:image/jpeg;base64,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",
                "banner_img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAFGCAMAAAClqnbFAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBrxWIAAQqkhDkAAAAASUVORK5CYII=",
                "member_cnt": 100,
                "posts_cnt": 10,
                "visit_cnt": 11111,
                "state": "public",
                "is_certificated": true,
                "is_subscribed": true
            }]
        } else if (type === "hashtag") {
            result = {
                "posts": [{
                    "id": 111,
                    "user": {
                        "id": 1,
                        "uid": 'wjZpvIjDEMWUBdXKsUQyR33RWrx2',
                        "status": "owner ",
                        "email": "zempie@google.name",
                        "name": "젬파이",
                        "nickname": "zempieeee",
                        "channel_id": 12,
                        "created_at": 1616117970000,
                        "state": "active || block ",
                        "profile_img": "https://blush-design.imgix.net/collections/Xu9zfHCDvMoRx6YhtcN4/3ab2ecb4-bd1f-4834-82df-89d183c643ca.png?w=800&auto=compress&cs=srgb",
                        "post_cnt": 0,
                        "liked_cnt": 7,
                        "followers_cnt": 123,
                        "followings_cnt": 0,
                        "follows_you": true,
                        "is_following": true,
                        "block_you": false,
                        "is_blocked": false,
                        "mutes_you": false,
                        "is_muted": false,
                        "type": "user"
                    },
                    "created_at": 1616117970000,
                    "attatchment_files": [
                        {
                            "id": 111,
                            "type": "image",
                            "size": 200,
                            "url": "https://blush-design.imgix.net/collections/kSlBLJlsKBVuI0j1MQlv/73d85711-031c-472e-8579-fd017e9ddada.png?w=800&auto=compress&cs=srgb"
                        },

                    ],
                    "content": "test Posting~~",
                    "visibility": "public",
                    "hashtags": ["tag", "tag1"],
                    "user_tag": [],
                    "liked": true,
                    "like_cnt": 1,
                    "comment_cnt": 5,
                    "read_cnt": 0,
                    "shared_cnt": 0,
                    "posted_at": {
                        "channel_id": 1,
                        "game_id": null,
                        "community": {
                            "id": 1,
                            "channel_id": 1,
                        },
                        "portfolio_id": null,
                    },
                    "poll": null,
                    "scheduled_for": null,
                    "status": "active",
                    "is_retweet": false,
                    "is_pinned": false
                },
                {
                    "id": 222,
                    "user": {
                        "id": 1,
                        "uid": 'wjZpvIjDEMWUBdXKsUQyR33RWrx2',
                        "status": "owner ",
                        "email": "zempie@google.name",
                        "name": "젬파이",
                        "nickname": "zempieeee",
                        "channel_id": 12,
                        "created_at": 1616117970000,
                        "state": "active || block ",
                        "profile_img": "https://blush-design.imgix.net/collections/Xu9zfHCDvMoRx6YhtcN4/3ab2ecb4-bd1f-4834-82df-89d183c643ca.png?w=800&auto=compress&cs=srgb",
                        "post_cnt": 0,
                        "liked_cnt": 7,
                        "followers_cnt": 123,
                        "followings_cnt": 0,
                        "follows_you": true,
                        "is_following": true,
                        "block_you": false,
                        "is_blocked": false,
                        "mutes_you": false,
                        "is_muted": false,
                        "type": "user"
                    },
                    "created_at": 1616117970000,
                    "attatchment_files": [
                        {
                            "id": 222,
                            "type": "image",
                            "size": 200,
                            "url": "https://blush-design.imgix.net/collections/kSlBLJlsKBVuI0j1MQlv/73d85711-031c-472e-8579-fd017e9ddada.png?w=800&auto=compress&cs=srgb"
                        },

                    ],
                    "content": "<div><p>ㄷㅈㄷㅂㄷ</p><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDSyJJYxEyv3gZclxu6GaczwEGBoIhBAdeA&amp;usqp=CAU' alt='펫플스토리] 고양이 입양하기 전 의식주 마련은 필수 - 부산일보'><p>123</p></div>",
                    "visibility": "public",
                    "hashtags": ["tag0", "tag1", "tag2"],
                    "user_tag": [],
                    "liked": false,
                    "like_cnt": 5,
                    "comment_cnt": 3,
                    "read_cnt": 0,
                    "shared_cnt": 0,
                    "posted_at": {
                        "channel_id": 1,
                        "game_id": null,
                        "community": {
                            "id": 1,
                            "channel_id": 1,
                        },
                        "portfolio_id": null,
                    },
                    "poll": null,
                    "scheduled_for": null,
                    "status": "active",
                    "is_retweet": false,
                    "is_pinned": true
                }],
                "game": [{}]
            }
        } else if (type === 'username') {
            result = [{
                "id": 1,
                "uid": 'wjZpvIjDEMWUBdXKsUQyR33RWrx2',
                "status": "member",
                "email": "zempie@google.name",
                "name": "젬파이_search",
                "nickname": "zempieeee",
                "channel_id": 12,
                "created_at": 1616117970000,
                "state": "active",
                "profile_img": "data:image/jpeg;base64,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",
                "post_cnt": 0,
                "liked_cnt": 7,
                "followers_cnt": 123,
                "followings_cnt": 0,
                "follows_you": false,
                "is_following": true,
                "block_you": false,
                "is_blocked": false,
                "mutes_you": false,
                "is_muted": false,
                "type": "user"
            }, {
                "id": 2,
                "uid": '123',
                "status": "member2",
                "email": "zempie2@google.name",
                "name": "젬파이2_search",
                "nickname": "zempieeee2",
                "channel_id": 12,
                "created_at": 1616117970000,
                "state": "active ",
                "profile_img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7OhfW0BhZzL3D4Swp_A7GQPwJE2OhsjXYw&usqp=CAU",
                "post_cnt": 10,
                "liked_cnt": 7,
                "followers_cnt": 13,
                "followings_cnt": 0,
                "follows_you": false,
                "is_following": true,
                "block_you": false,
                "is_blocked": false,
                "mutes_you": false,
                "is_muted": false,
                "type": "user"
            },
            {
                "id": 11,
                "uid": '789',
                "status": "member",
                "email": "zempie@google.name",
                "name": "젬파이3_search",
                "nickname": "zempieeee",
                "channel_id": 12,
                "created_at": 1616117970000,
                "state": "active",
                "profile_img": "data:image/jpeg;base64,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",
                "post_cnt": 0,
                "liked_cnt": 7,
                "followers_cnt": 123,
                "followings_cnt": 0,
                "follows_you": false,
                "is_following": true,
                "block_you": false,
                "is_blocked": false,
                "mutes_you": false,
                "is_muted": false,
                "type": "user"
            },]
        } else if (type === 'community') {
            result = [{
                "id": 1,
                "created_at": 1622615373000,
                "owner_uid": 'wjZpvIjDEMWUBdXKsUQyR33RWrx2',
                "manager_uid": '2x1H8Fn5EVdYQ9EchRPCOXhdyKn1',
                "submanager_uid": null,
                "url": "sample1",
                "name": "sample community name mmunity1",
                "description": "sample community description1 sample community description1 sample community description1 sample community description1 sample community description1 sample community description1 sample community description1 sample community description1",
                "profile_img": "data:image/jpeg;base64,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",
                "banner_img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAFGCAMAAAClqnbFAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBrxWIAAQqkhDkAAAAASUVORK5CYII=",
                "member_cnt": 100,
                "posts_cnt": 10,
                "visit_cnt": 11111,
                "state": "public",
                "is_private": true,
                "is_certificated": true,
                "is_subscribed": false,
                "channels": [
                    {
                        "id": 1,
                        "created_at": 1622615373000,
                        "name": "general",
                        "description": "null",
                        "profile_img": "https://blush-design.imgix.net/collections/kSlBLJlsKBVuI0j1MQlv/73d85711-031c-472e-8579-fd017e9ddada.png?w=800&auto=compress&cs=srgb",
                        "sort": 1,
                        "state": "public"
                    },
                    {
                        "id": 2,
                        "created_at": 1622615373000,
                        "name": "private",
                        "description": "null",
                        "profile_img": "https://blush-design.imgix.net/collections/aarkKHQ2eBWDgSC0A3U6/aa591b33-341b-41aa-a4a8-924bcc003c46.png?w=800&auto=compress&cs=srgb",
                        "sort": 1,
                        "state": "private"
                    }
                ],
                "user_block": "null"
            }]
        }
        else {
            result = {
                "user": [{
                    "id": 1,
                    "uid": 'wjZpvIjDEMWUBdXKsUQyR33RWrx2',
                    "status": "member",
                    "email": "zempie@google.name",
                    "name": "젬파이_search",
                    "nickname": "zempieeee",
                    "channel_id": 12,
                    "created_at": 1616117970000,
                    "state": "active",
                    "profile_img": "data:image/jpeg;base64,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",
                    "post_cnt": 0,
                    "liked_cnt": 7,
                    "followers_cnt": 123,
                    "followings_cnt": 0,
                    "follows_you": false,
                    "is_following": true,
                    "block_you": false,
                    "is_blocked": false,
                    "mutes_you": false,
                    "is_muted": false,
                    "type": "user"
                }, {
                    "id": 2,
                    "uid": '2x1H8Fn5EVdYQ9EchRPCOXhdyKn1',
                    "status": "member2",
                    "email": "zempie2@google.name",
                    "name": "젬파이2_search",
                    "nickname": "zempieeee2",
                    "channel_id": 12,
                    "created_at": 1616117970000,
                    "state": "active ",
                    "profile_img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7OhfW0BhZzL3D4Swp_A7GQPwJE2OhsjXYw&usqp=CAU",
                    "post_cnt": 10,
                    "liked_cnt": 7,
                    "followers_cnt": 13,
                    "followings_cnt": 0,
                    "follows_you": false,
                    "is_following": true,
                    "block_you": false,
                    "is_blocked": false,
                    "mutes_you": false,
                    "is_muted": false,
                    "type": "user"
                }],
                "group": [
                    {
                        "id": 1,
                        "created_at": 1622615373000,
                        "owner_uid": 'wjZpvIjDEMWUBdXKsUQyR33RWrx2',
                        "manager_uid": '2x1H8Fn5EVdYQ9EchRPCOXhdyKn1',
                        "submanager_uid": null,
                        "url": "sample1",
                        "name": "sample community name mmunity1",
                        "description": "sample community description1 sample community description1 sample community description1 sample community description1 sample community description1 sample community description1 sample community description1 sample community description1",
                        "profile_img": "data:image/jpeg;base64,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",
                        "banner_img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAFGCAMAAAClqnbFAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBrxWIAAQqkhDkAAAAASUVORK5CYII=",
                        "member_cnt": 100,
                        "posts_cnt": 10,
                        "visit_cnt": 11111,
                        "state": "public",
                        "is_private": true,
                        "is_certificated": true,
                        "is_subscribed": false,
                        "channels": [
                            {
                                "id": 1,
                                "created_at": 1622615373000,
                                "name": "general",
                                "description": "null",
                                "profile_img": "https://blush-design.imgix.net/collections/kSlBLJlsKBVuI0j1MQlv/73d85711-031c-472e-8579-fd017e9ddada.png?w=800&auto=compress&cs=srgb",
                                "sort": 1,
                                "state": "public"
                            },
                            {
                                "id": 2,
                                "created_at": 1622615373000,
                                "name": "private",
                                "description": "null",
                                "profile_img": "https://blush-design.imgix.net/collections/aarkKHQ2eBWDgSC0A3U6/aa591b33-341b-41aa-a4a8-924bcc003c46.png?w=800&auto=compress&cs=srgb",
                                "sort": 1,
                                "state": "private"
                            }
                        ],
                        "user_block": "null"
                    }
                ]
            }
        }
        return result;

    }

    sendComment(post_id: number, user_id: number, is_private: boolean, content?: string, attached_file?: File, parent_id?: number) {
        const formData = new FormData();
        console.log(post_id, user_id, is_private, content, parent_id)
        if (post_id) { formData.append('post_id', post_id.toString()); }
        if (user_id) { formData.append('user_id', user_id.toString()); }
        if (is_private) { formData.append('is_private', is_private.toString()); }
        if (content) { formData.append('content', content); }
        if (attached_file) { formData.append('attached_file', attached_file); }
        if (parent_id) { formData.append('parent_id', parent_id.toString()); }
    }
    deleteComment(post_id: number, comment_id: number) {
        console.log("delete", post_id, comment_id)
        // const response = this.request('post')
    }
    likeComment(comment_id: number) {
        console.log('like comment', comment_id)

    }

    sendReport(report_id: number, user_id: number, report_reason: number | string) {

        const formData = new FormData();

        console.log(report_id, user_id, report_reason)

        if (report_id) { formData.append('post_id', report_id.toString()); }
        if (user_id) { formData.append('user_id', user_id.toString()); }
        if (report_reason) { formData.append('report_reason', report_reason.toString()); }
        console.log(formData)

        return true;
    }

    //POST
    deletePost(post_id: number) {
        console.log('delete post')

    }

    uploadpost(user_uid: string, FileList: fileObjWtUrl[], visibility: string, content: string, hashtags?: string[], userTags?: string[], communityId?: number, channelId?: number, gameId?: number, portfolioId?: number, scheduled_for?: number) {
        const formData = new FormData();
        console.log(FileList)

        if (user_uid) { formData.append('user_uid', user_uid); }

        for (let i = 0; i < FileList.length; i++) {
            let file = FileList[i];
            console.log(file)
            formData.append('files[' + i + ']', JSON.stringify(file));
        }
        if (visibility) { formData.append('visibility', visibility); }
        if (content) { formData.append('content', content); }
        if (hashtags) {
            for (let i = 0; i < hashtags.length; i++) {
                formData.append('hashtags[' + i + ']', hashtags[i]);
            }
        }
        if (userTags) {
            for (let i = 0; i < userTags.length; i++) {
                formData.append('userTags[' + i + ']', userTags[i]);
            }
        }
        if (communityId) { formData.append('community_id', communityId.toString()); }
        if (channelId) { formData.append('channel_id', channelId.toString()); }
        if (gameId) { formData.append('game_id', gameId.toString()); }
        if (portfolioId) { formData.append('portfolio_id', portfolioId.toString()); }
        if (scheduled_for) { formData.append('scheduled_for', scheduled_for.toString()); }

        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
    }

    async hashtagList() {
        const response = ["ahashtag1",
            "bhashtag2",
            "chashtag3",
            "dhashtag4",
            "ehashtag5",
            "fhashtag6",
            "ghashtag7",
            "해시태그01",
            "hashtag8",
            "hashtag9",
            "hashtag10",
            "hashtag11",
            "hashtag12",
            "hashtag13",
            "hashtag14",
            "hashtag15",
            "hashtag16",
            "hashtag17",
            "hashtag18",
            "hashtag19",
            "hashtag20",]

        return response;
    }

    //USER
    async session() {
        const response = await this.request('get', '/user/verify-session', undefined, true);
        return response.result || response;
    }

    async user() {
        const response = await this.request('get', '/user/info', undefined, true);
        return response.result || response;
    }

    async verifyEmail() {
        const response = await this.request('post', '/user/verify-email', undefined, false);
        return response.result || response;
    }

    async channel(channel_id: any) {
        console.log('channel api start ')
        const response = await this.request('get', `/channel/${channel_id}`, undefined, false);
        return response.result || response;
    }

    async verifyChannelId(channel_id: any) {

        const response = await this.request('post', `/user/verify-channel`, {
            channel_id
        }, false);

        // const response = await this.request( Vue.$axios.post(`/user/verify-channel`, {
        //     channel_id
        // }) );
        return response.result || response;
    }

    async signUp(name: string) {
        // Ads.gtag_report_conversion()
        const response = await this.request('post', `/user/sign-up`, {
            name
        }, true);
        return response.result || response;
    }

    async signOut() {
        const response = await this.request('post', `/user/sign-out`, undefined, true);
        return response.result || response;
    }

    async updateUser(name: string, state_msg: string, file: File, channel_id: string, description: string) {
        const formData = new FormData();
        if (name) { formData.append('name', name); }
        if (state_msg) { formData.append('state_msg', state_msg); }
        if (file) { formData.append('file', file); }
        if (channel_id) { formData.append('channel_id', channel_id); }
        if (description) { formData.append('description', description); }

        const response = await this.request('post', `/user/update/info`, formData, false);
        return response.result || response;
    }

    async updateBanner(file: File) {
        const formData = new FormData();
        if (file) { formData.append('file', file); }

        const response = await this.request('post', `/user/update/banner`, formData, false);
        return response.result || response;
    }

    async leave(text: string, num: string = '0') {

        const response = await this.request('post', `/user/leave-zempie`, {
            num,
            text,
        }, false);

        return response.result || response;
    }

    async joinedCommunity(user_uid: string, sort?: string, limit?: number, offset?: number) {
        const result = [
            {
                "id": 122,
                "name": "sample community name1",
                "profile_img": "data:image/jpeg;base64,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",
                "state": "public",
                "member_cnt": 123
            },
            {
                "id": 22,
                "name": "sample community name2",
                "profile_img": "data:image/jpeg;base64,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",
                "state": "private",
                "member_cnt": 222
            }
        ]
        return result;

    }

    async followingList(user_uid: string) {
        const result = [
            {
                "id": 1111,
                "uid": "2x1H8Fn5EVdYQ9EchRPCOXhdyKn1",
                "email": "zempie@google.name",
                "name": "following1",
                "nickname": "zempieeee",
                "channel_id": 12,
                "created_at": 1616117970000,
                "profile_img": "http://wwww.ewqeqwe2.png",
                "post_cnt": 0,
                "liked_cnt": 7,
                "followers_cnt": 123,
                "followings_cnt": 0,
                "follows_you": true || false,
                "is_following": true || false,
                "block_you": true || false,
                "is_blocked": true || false,
                "mutes_you": true || false,
                "is_muted": true || false,
                "type": "user || developer || admin"
            },
            {
                "id": 2,
                "uid": "2x1H8Fn5EVdYQ9EchRPCOXhdyKn1",
                "email": "zempie@google.name",
                "name": "following2",
                "nickname": "following2",
                "channel_id": 12,
                "created_at": 1616117970000,
                "profile_img": "http://wwww.ewqeqwe2.png",
                "post_cnt": 0,
                "liked_cnt": 7,
                "followers_cnt": 123,
                "followings_cnt": 0,
                "follows_you": true || false,
                "is_following": true || false,
                "block_you": true || false,
                "is_blocked": true || false,
                "mutes_you": true || false,
                "is_muted": true || false,
                "type": "user || developer || admin"
            },
        ]
        return result;
    }

    async followingCnt(user_uid: string) {
        const result = 5;
        return result;
    }
    async followerList(user_uid: string) {
        const result = [
            {
                "id": 222,
                "uid": "fdfs312fdsfsdf",
                "email": "zempie@google.name",
                "name": "followers2",
                "nickname": "zempieeee",
                "channel_id": 12,
                "created_at": 1616117970000,
                "profile_img": "http://wwww.ewqeqwe2.png",
                "post_cnt": 0,
                "liked_cnt": 7,
                "followers_cnt": 123,
                "followings_cnt": 0,
                "follows_you": true || false,
                "is_following": true || false,
                "block_you": true || false,
                "is_blocked": true || false,
                "mutes_you": true || false,
                "is_muted": true || false,
                "type": "user"
            },
            {
                "id": 3333,
                "uid": "fdfs312fdsfsdf",
                "email": "zempie@google.name",
                "name": "followers2",
                "nickname": "followers2",
                "channel_id": 12,
                "created_at": 1616117970000,
                "profile_img": "http://wwww.ewqeqwe2.png",
                "post_cnt": 0,
                "liked_cnt": 7,
                "followers_cnt": 123,
                "followings_cnt": 0,
                "follows_you": true || false,
                "is_following": true || false,
                "block_you": true || false,
                "is_blocked": true || false,
                "mutes_you": true || false,
                "is_muted": true || false,
                "type": "user || developer || admin"
            },
        ]
        return result;
    }

    async follwerCnt(user_uid: string) {
        const result = 10;
        return result;
    }

    async portfolioList(user_uid: string) {
        const result = [
            {
                "id": 123,
                "title": "포폴",
                "description": "short description",
                "thumbnail_img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGD5V34aEvWYxluNXXL72QDbMSyonOgsCT_A&usqp=CAU",
                "created_at": 1622615373000,
                "is_public": true,
                "user_uid": 'wjZpvIjDEMWUBdXKsUQyR33RWrx2',
                "is_pinned": false
            },
            {
                "id": 121113,
                "title": "포폴2",
                "description": "shodsdadadadadrt description",
                "thumbnail_img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ER4vxwmGTAIxCH0VQeS5eSMu5pOAkq-nSg&usqp=CAU",
                "created_at": 1622615373000,
                "is_public": true,
                "user_uid": 'wjZpvIjDEMWUBdXKsUQyR33RWrx2',
                "is_pinned": false
            }
        ]

        return result;
    }

    async joinedCommunityList(user_uid: string) {

        let result = {
            "id": 1,
            "created_at": 1622615373000,
            "owner_uid": 'wjZpvIjDEMWUBdXKsUQyR33RWrx2',
            "manager_uid": '2x1H8Fn5EVdYQ9EchRPCOXhdyKn1',
            "submanager_uid": null,
            "url": "sample1",
            "name": "sample community name mmunity1",
            "description": "sample community description1 sample community description1 sample community description1 sample community description1 sample community description1 sample community description1 sample community description1 sample community description1",
            "profile_img": "data:image/jpeg;base64,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",
            "banner_img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAFGCAMAAAClqnbFAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBrxWIAAQqkhDkAAAAASUVORK5CYII=",
            "member_cnt": 100,
            "posts_cnt": 10,
            "visit_cnt": 11111,
            "state": "public",
            "is_certificated": true,
            "is_subscribed": false,
            "channels": [
                {
                    "id": 1,
                    "created_at": 1622615373000,
                    "name": "general",
                    "description": "null",
                    "profile_img": "https://blush-design.imgix.net/collections/kSlBLJlsKBVuI0j1MQlv/73d85711-031c-472e-8579-fd017e9ddada.png?w=800&auto=compress&cs=srgb",
                    "sort": 1,
                    "state": "public"
                },
                {
                    "id": 2,
                    "created_at": 1622615373000,
                    "name": "private",
                    "description": "null",
                    "profile_img": "https://blush-design.imgix.net/collections/aarkKHQ2eBWDgSC0A3U6/aa591b33-341b-41aa-a4a8-924bcc003c46.png?w=800&auto=compress&cs=srgb",
                    "sort": 1,
                    "state": "private"
                }
            ],
            "user_block": "null"
        }

        return result;

    }

    async getUserTimeline(user_uid: string) {
        //  /api/v1/timeline/channel/:channel_id/
        // console.log(id, channelId)
        let result: any;


        result = [
            {
                "id": 111,
                "user": {
                    "id": 1,
                    "uid": 'wjZpvIjDEMWUBdXKsUQyR33RWrx2',
                    "status": "owner ",
                    "email": "zempie@google.name",
                    "name": "젬파이",
                    "nickname": "zempieeee",
                    "channel_id": 12,
                    "created_at": 1616117970000,
                    "state": "active || block ",
                    "profile_img": "https://blush-design.imgix.net/collections/Xu9zfHCDvMoRx6YhtcN4/3ab2ecb4-bd1f-4834-82df-89d183c643ca.png?w=800&auto=compress&cs=srgb",
                    "post_cnt": 0,
                    "liked_cnt": 7,
                    "followers_cnt": 123,
                    "followings_cnt": 0,
                    "follows_you": true,
                    "is_following": true,
                    "block_you": false,
                    "is_blocked": false,
                    "mutes_you": false,
                    "is_muted": false,
                    "type": "user"
                },
                "created_at": 1616117970000,
                "attatchment_files": [
                    {
                        "id": 111,
                        "type": "image",
                        "size": 200,
                        "url": "https://blush-design.imgix.net/collections/kSlBLJlsKBVuI0j1MQlv/73d85711-031c-472e-8579-fd017e9ddada.png?w=800&auto=compress&cs=srgb"
                    },


                ],
                "content": "<p>유저 타임라인 샘플입니다. p태그</p>",
                "visibility": "public",
                "hashtags": ["프롬더레드", "젬파이"],
                "user_tag": [],
                "liked": true,
                "like_cnt": 1,
                "comment_cnt": 5,
                "read_cnt": 0,
                "shared_cnt": 0,
                "posted_at": {
                    "channel_id": 1,
                    "game_id": null,
                    "community": {
                        "id": 1,
                        "channel_id": 1,
                    },
                    "portfolio_id": null,
                },
                "poll": null,
                "scheduled_for": null,
                "status": "active",
                "is_retweet": false,
                "is_pinned": false
            },
            {
                "id": 222,
                "user": {
                    "id": 1,
                    "uid": 'wjZpvIjDEMWUBdXKsUQyR33RWrx2',
                    "status": "owner ",
                    "email": "zempie@google.name",
                    "name": "젬파이",
                    "nickname": "zempieeee",
                    "channel_id": 12,
                    "created_at": 1616117970000,
                    "state": "active || block ",
                    "profile_img": "https://blush-design.imgix.net/collections/Xu9zfHCDvMoRx6YhtcN4/3ab2ecb4-bd1f-4834-82df-89d183c643ca.png?w=800&auto=compress&cs=srgb",
                    "post_cnt": 0,
                    "liked_cnt": 7,
                    "followers_cnt": 123,
                    "followings_cnt": 0,
                    "follows_you": true,
                    "is_following": true,
                    "block_you": false,
                    "is_blocked": false,
                    "mutes_you": false,
                    "is_muted": false,
                    "type": "user"
                },
                "created_at": 1616117970000,
                "attatchment_files": [
                    {
                        "id": 123,
                        "type": "image",
                        "size": 200,
                        "url": "https://blush-design.imgix.net/collections/kSlBLJlsKBVuI0j1MQlv/73d85711-031c-472e-8579-fd017e9ddada.png?w=800&auto=compress&cs=srgb"
                    },
                    {
                        "id": 222,
                        "type": "image",
                        "size": 200,
                        "url": "data:image/png;base64,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"
                    },
                    {
                        "id": 333,
                        "type": "image",
                        "size": 200,
                        "url": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUQDxAQFRAVFRUVDw8VEBAVEA8PFRYWFhUVFRUYHiggGBolGxUVITEhJSkrLi4uFx8zODUsNygtLisBCgoKDg0OGhAQGy0lHx8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgADBAUGBwj/xABDEAACAQICBgcFBQUGBwAAAAAAAQIDEQQhBRIxQVFhBhMicYGRoTJSkrHRBxQjQvAzYoLB4UNTcqKysxUXY5PS4vH/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAMREAAgIBAgMFCAMAAwEAAAAAAAECEQMSIQQxQVFhcaHRBRMygZGxwfAUIuFiguJS/9oADAMBAAIRAxEAPwDw0JAgBAkIMCBBYYdACwbEGABbDBsSwCBYNg2IMBbEsNYNgASxLD2JYAFsCwxLAAoo9iWEAlgWHIAxLAGA0FAAAwBAKAYAgLCEIACBIEYEIkRIKGBBiESGAbEsGwUgECwbBsNYYC2DYaxLAALEsNYlgAWxLDWBYYAsLYexLCArsCxZYWwAJYjQ1gCAUUdoADEaIEDEAAMYAgLABIICsiHjben5lsHDev5ssjG+o0rKUMPaHF+pElxa8Ace9A0KkFDWXEaMVvfkFCAkFIfUj73oNaHF/rwJ6O9fVBRWkFIfVjub+pEhUJgsGwUg2GIWwbDWJYKAWwLD2JYKASwLGdhqEWrtb+YmKoxilZb+ZLQ6sjqV0YTQGi1Jb16kduD8/wChHT3k0UtCtFj7vEmtyXkKl2gUsDRfrd3kJqi09gyoVlzihXGPF+X9BaWOipgY8lwFZFiHIEggK0OmKgokmAyHEQ6GgCkFIMRkOhCpDpBiPGBJK+QCJDJFqoh6onokFMspYXWinf0FrUdW2dzJoVYxik3n3PiCtHrLaudtu75lmlVtzK7d7mJGNxuqLvu8o5tZeAUtwlHtGUagmqZv3WXD1RROk0yLg1zRK+wlKrqq1r+Iz/Ey2Wz4lbgy3DNRbvwJRd7PkRa6lc8HZX1vT+pS6XM2E5xaaT9GY7gSeNdBxUnzMJxFaMt4SfD1RRKOq7Sjn3lLg1z2JWiloVl7tuj6lTXJepBxHRWxGi7WXBepNde6vMVLt+4bFDFZfJxe6z43KmRaobGIQgqEKhkRRdr7hkiVAFIKAkMkAgoZIMUNTRNRAto07mywuAlLJJt8ErsTCU8z3XoX0Jp08LF4mM1OolOdPW1XHbqxds1ZPNX23OlBY8UVLIWqWOFOd7utvN/I8ghoKpvi13oor6LlHard6Z9CvovgLfsfOdX/AMjX47opgXGSUZQ1lZvrJt7U1ZSur3SLv5XCSVaZfRepoy8RwahcYzv/AK+p8/zwtuBfg6Fr7N289MrfZ3Tk21iGo7k6aeXNqSv5IyqH2W0WryxMvCn/AOxGXuE7vyfoYP5GDJ8Lf0f5SPLsTR7PkV0cMrptx7sz1+n9l+FW3ET+BfUvj9mWE/vp/AvqJZuHu78n6E4ThHoeSukYFWjm+89q/wCWWD/vp/DH6iS+y7CP+3qfDD6ilm4d9fJgpxXb5ep4m6I33fkezS+ybDNdnE1U914RavzRymJ6IU6cmuuvZtP8PenZ/mJ4ViyP+r8maOHg87qC+3qcVQ0fKWxPwRlPQdX3X5HouitCUFBK7kk27KTXaaSztZ7kbmnobDe4/jqfU1Vghs034f7R1I8Jhiqnbfc/VI8ixGj5R2prvyOfx9Ltv9bj2/T/AEaVWi40Fn7SjKTbcknbVvs2vLmeO6Qoasmmmmm001ZprJprinkZc+OGSFxObxHDxx1Jcny3+/KvpXeaRoDL6sMypwOTKDTMhUxGXOIjiR0MLKmBlriBxFoYWKQJCuxgQyFRYoPgTim+QETGTGhSk9xYsPLgWLHN9H9A0t9CtMyaG0SNCXBmbhcO280+b5FuPHNvkGl9h6X9kPR2NarLFVYpwoNaieyWIaur/wCGNpd8ovcer4nSKjsOe6M4f7no2jTtaco9bU469TttPuTjH+EprVZO/wArq5o0e9lb5LZeBXNylL+iv06fU3dfSElk7d11cwsRilU32a2LiYGMxMX209uxb7vcamdaUXn5XVy6GGlZesEnBLIrTW/48Dbz0iks7JpSut+td5WNg9JWSz3HG6Yru0Z8bp96tb9cjPxNV5dy+RJ4kyfC8IoSyRbutNeDuvKjc1NMtbymWnX7xy2IryMKeIkSWOC6FeSUYs7b/j0veZfS05J/mZwMcRIzsLVkyMoQrkZM2dRR6HgtJOT2nEY3FwdSeavesmr9rX1paqS2u90bbRc3dHKaDvPG1Z2v1UqsoL/q9Y1Dyzf8AsNQbZn4H2l7uWWd/Cl93S/3ob/A0IYbt1pN1Gv2SfYiv3/3vRczZz6QU6TUHCN2k5WjFJXV7LI43S7qPWkqlOerdzjCT1ore81mlyMKGm00uspKcopKM7uN0tikltt4Fzisn9pbnQ/lPPWST1dqTqttqW3q9nzs9Jp6UpObhKyeTUlllJJq62bGcT9qmglqxxcEr3Ua1tkr5U6nn2X3x4GNo3EVK05VHKKSa1pvKmuEVbPYtnI7aWE+9YKpQm01KDUKid0m8k896lqvwKZwWNpr5mj3kZJY9W7+dPx/3l2Hz9VpPdF+RT1MvdfkZ2Iw7i3rKSd817r3rzyMXLc5GaUFe6+3oZ401b/fIqlh5e6yqUWt3yL2k98vNfUpq0rbn5rMrmtrS/foWOG2xS2K5EYrM/vGQIQISmgEix43WwrQ6J2A8bj572yuJYiS5CLqcm978zf9GcE8RiKVHNqpUhCS3ajktf8Ay6z8DQ0Ud79leE1saqjWVKnUqX3KTSpR/wB2XkbMNpNkZS0ps9S01ib3tueS5bvkzV1MbRTck5cdXVzvwuJpPE2be78y324+H1NNiFvi7xeyS2M6PD4bSNePh3KpQe8f2/xfTfuNtWlKL1nbW2yhwW9X4lLrUH2rybs7R1d9sszGx2KjOo5wcrO71XGzV9wMNh98sl+slxZZJbbl81LJCKVrq/Hq+W31MfS6tSjHe234Ky/mbqm4Tgmpw2L8yMetgIyetVbW6NNNZd73vuKZ6IoPLVnF7n28/CW0zuVN0ZsuWcckopxWqkk3T27q25t02mZNTARf5ofHH6mNPQ6f56fxxNLpPRkqT4xfsyV7P6Gnr03xfmypy7TgZuHzSm056X2V/p2UNCrfOn8cTPw+j6cdtSn/ANyH1POIRfF+bNlorRlTET1Ibs5yberCPFjSTEvZU2rnm2X/AB/9Ho9KVCmryrUUlm26kMl5nFdGKkevxO209epHLN0+skn42qp2NjDQ+CpdmpKdSe/tqK8IxzXi2XYXRdDXVXCTcakf7Ock6U01ZxbWcbp7cw00r/AQ9n48eHJvJ60lbjS2drq3u+40GJpQoSnU6xSlJSUILWu3JNdu6yWZoqdKVsk2ltaTsu87bSmiVUvKmnk7Tg/bpT9yaX/x7VdFFfBV4OnGipKmow1Ur5u2bfO97l2OiSy6Va3b53tVdNl3/PnZpdGTi6bpSlqvX6yMnfVbsk07bNi9TutBVFToOMZa2a7Wdr5ZK+3JM56Whm6smo2jk57oxdlrdyvc2WExCdow/Zx9l+/PfPu3Lx4jyRT5eIcNxGvKlG6tSa6L82/vZ5307wfVYyskuzKWvHuqJT/1Oa8DkqyzPS/tOodulVUfapuMnzpyuvSo/I87rO35V5GDPA7OWKWWS7/vv+TCYrkWykvdRUzG9uQhZMrY8hGQbtiGIQhEARLIztwETXBeoyfJepNbcmNbchnK+5BiGMuKRfSrpfkXmTik3u/IOfMeij1b7LcLq4fEVuMqdJfwpzl/uR8jzTCSi37Ge7M9n6I0VDRtO0ba8qk3ntvJxT+GMTfGFQ2fNmfiJKMVvza9fukYekKmZocRiXTl2JWvm47r9xvdI73Y5PEttt2+Z1+HpLcvXEaYqnubClpWfCHfqo2+hJSqTc5tvVV1wUnlkjlqKzOq6MRetZ7J7O/av5+ZnzyIrjcmTNGM5Nq+3r0868Db056sVP8ANJPP3Y7El8x1idztJPamsmWvBO2q8mvZ5rb5iRwLWcnZfrZxMmpHkc2r3kvefFb++1fgxcXRUoVKfJShxt7S+hyyhfdfgk0vmjssTHUpzm8m0oxW9r2V6ZnJYjDC1M9HjeTTh1/Fp3/F+ZiYqmkk7ar4OUZXXHLZu8zo9GrqcHFxynVk234uEfBJX8Wc26B1GjIdfg1GL/EoyaceV3OD7s2vAs6K+Vo6DxPTj958OtavDf8ANfOjXyq2yX9W+L5j0q7Ty9pZxfHl3FVSg7u3it6LsHhJSdorN5L91Peze+W/I9O4Sp6/g69ld3Tw7zI6QVZxVLE0pOM5LUk0/aSs43Wx7ZbeRq49JcSsvw3zdNp/5Wl6Gx6WtRVOgtsE5SXBySUV32TfijlZMy4oppWjxz4SE8K95FPnVrerdb+HLuo2/wB/qV2o1ZvU9xJRg3zS2+JscNPM5qnNrYb/AAcrpPiacqWlUU48NSSjyF6cUdfBa2+nUi/4Zp036yj5Hk+JPZtLUuswdaG/q5Nf4orWXqkePY2nZs5nER2OpxcGpRl2r7NmukhGPJCtHMaKCtiyHaFkiNAEgSEQEQ6Ih0WqAWLEtixUPFElBis2ujFmj3DRVLUwOGhwoUr97gm/VniWjdvg/kz3CFW1GnG2ynBLu1UdSMP6Ro4ftTiFilC+ury0mj0vwW/b3HOVqR02Np3zNTWorn5G5Oo0U4uKc92a7DUG5JcWbTS+NeGpx1GlObai7X1YRV5NLjml4mXoPA603LOyyXe/16nI9NtIa+KlGL7FL8JZ5OUc6j+J2/hMeSe508EFkjb6/Zf6buh0vqtWrzrS/eVSS847CyfSiEc4yxEnzm4rzuzgliuC9WXRxa3x9WUrKuW30/w6KzTX/wAvsbjb+33TN/pHpDWqO7q1Ut0VOSSX63mpq6TqP+0q/HIwp1k9ifncspwTavq25SVyFNvZlai3Jy5vt/V+9C9Y6e+pU+Nmdo3TdWhNVKdSalsacrxlHfGS3owpUae5PzMGcrNrmDuPNkveNpxbtPod6uleGqq9elWUt+oqc4+Gu016ldbplCkrYWE1LdKpqdnmoQbTfe/A4XrhJVhe8KFgh2yrs1OvX6to63AaRnWlLrJOU32td+1K7zv428xaytJry7jQaLxvV1IyexPt/wCCWT8smdTpCjZKXgb8MtcL7Du4V/I4Zt/FB7+HT0+Rj0UbnRs7dl+HeaigjbYaJpS1KifC8Fqe5vaWaaexpp+KPH9JQsvBeit/I9R++NJRtnsueZab9p97/wBTMvEwcce5Z7T4ZwxRb7X+DSSKqmwlxGcVys4SQjFY7EZSMsIKQQxUx1IrQUNNiLlIMZFSHRJSYG40bVzS8PNWPa9E1lVwtCovzUqd+/USa80zwbCOSzSfJ2Z6V0H6Rxpx+7Yh6sG26NSeUYt+1Tk92eafN8jqcPk1Rpnn/bvDTyYlPGrcHuu5838qR1WJgaypROgrULmRo7RkEniMRKNOhT7UpzajC3Nvh/QvnlUY2zhcDKeeax4+b8l1b7l6LmzX6QxEdHYCVaVusS1aUX+bESygrb7bXyizxWtVbebb4t7W978Xc6T7QOlv/EK66q6wtK6w8XdObeUq0lubtZJ5pc2zkUznzyN/M9zCChFRjy2XyRcplkHz9CqFKTV0vkOouO0im+ozIpwu7X9CzqGs77M9nAooVEnmZEq8bPPcWqqIu7B995PzMeVTNviVWYCtzb5klGuRYpEuLCDayXyJOLjtEmyVkg7bdm/uO10Fieuoarfbh2J803+HPxXyZwzd8lt3Gx0Pi6lCopqLa2VI3X4kP5NbUauFzLHOuj5/v7tfU2+zuKjw+a5/DLZ+vy+1nYUsO09voZtOWrkCnWp1YqrSetB8L7efB8hbNvsnZxxfQ9Tw/DyjLbddH2+BZKpmm9id33HnGlqt/n5tv+Z1endJxUXSg7t/tJLZTjw73sOFx9bWZg9pZlSiv39/zocv23xEZOOOLvTd+L/fOuhitg1iMRnBs88STK2FgkJjHIAggEQyEQyYAMh0xR4RvvXqSSsDZYR9lfreXVMRZr5bma1RkslL/MDNvN+rNSnKKqiHu3ds6LA9IK9DKjiK1Ne6ptw+B5FemekWKxdvvOIrVUvZjOf4cWtjVNdlPnY0ig+K8yO6yYTyyfNDjjUG5KNN83XPx7R3O5bFmMmMpFVjNrhn2V4/MTFvZ4mu1i6nC+9LkWqbktKRFQ/tZbFhuVOFt68xGxXp2ZJoy3W5L1EdTLZ4lVytyBzfVj1M2OGk9XxK8fLJd5gtjU5D95a0lenexqEu2u82SqW3I1dSWRQ2Cno2BxszsPj5U5a0JSpve4uyl3rYzMq6Xq1F2602t69leKW000pCa2Y48TKO17fvyNEM+SEdKk67LaX0M3E4m6smrcDBlm9qFbAp23Z8SmWTW9yDlfMd02mr2sFrhZ+OwqqVbiKVnkLXFPbl5jtIatLdZIpY85XzZWyuTtifMsIQhGxCRsWpx5+aKAokpV0HZc9Xixlq8X6lCGHr7kFlsdXfceOpz/XgUJhTGpV0QrLk48w6yK0wphqEW6xExEyJhYFlx1IquG47EWa3ItWIfLyiY9yXJKcly/foNNrkWufMRyEuG4rAa4Na2xi3BcLEO5viI2LcjZFuxhbFYGwNibAjYrYbiNiAjZGwNgbFYwXA2G4ogLCEAIBAihAAhARDAcKYgwwGuFMW5LgIsTGuVXGuMB7kuLcNwAa5Li3JcYDXJcW5LgAbhuLcFxANcVsFxbgA1xbkuBsQEbAyCiAgGQgDIAgGIC0hACAqCKEAGCKEYBCKG47AcggbgA1wi3DcYhrkuC5LgA1w3EuS4ANclxbkuABuS4LkuAEBclwXAAkFuAQwgbJcAWAQEBcQEAQAgLSEIAEIiEABiEIAECQgwIiIhBoCBIQAIMQgABkIQBEIiEAAgIQBgIQgAAhCAwIAhBAQgCCADIQgAOQhAA//2Q=="
                    },
                    {
                        "id": 444,
                        "type": "image",
                        "size": 200,
                        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTje_Gd7V_ya-8f0WUEssciWNq9E81SUqy6dw&usqp=CAU"
                    },
                    {
                        "id": 555,
                        "type": "image",
                        "size": 200,
                        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJR52e-lN0FrA91pUC35PIpH1pH7dbzlZdA&usqp=CAU"
                    },

                ],
                "content": `<p>유저 타임라인 샘플 2<span data-mention="" class="mention" data-id="following1" channel-id="wjZpvIjDEMWUBdXKsUQyR33RWrx2">@following1</span> <span data-hashtag="" class="hashtag" data-id="hashtag8">#hashtag8</span> </p>`,
                "visibility": "public",
                "hashtags": ["tag0", "tag1", "tag2"],
                "user_tag": [],
                "liked": false,
                "like_cnt": 5,
                "comment_cnt": 3,
                "read_cnt": 0,
                "shared_cnt": 0,
                "posted_at": {
                    "channel_id": 1,
                    "game_id": null,
                    "community": {
                        "id": 1,
                        "channel_id": 1,
                    },
                    "portfolio_id": null,
                },
                "poll": null,
                "scheduled_for": null,
                "status": "active",
                "is_retweet": false,
                "is_pinned": true
            }
        ]

        return result;

    }

    async getUserInfo(user_uid: string) {
        let result = {
            "id": 1,
            "uid": 'wjZpvIjDEMWUBdXKsUQyR33RWrx2',
            "status": "owner ",
            "email": "zempie@google.name",
            "name": "젬파이",
            "nickname": "zempieeee",
            "channel_id": 12,
            "created_at": 1616117970000,
            "state": "active || block ",
            "profile_img": "https://blush-design.imgix.net/collections/Xu9zfHCDvMoRx6YhtcN4/3ab2ecb4-bd1f-4834-82df-89d183c643ca.png?w=800&auto=compress&cs=srgb",
            "post_cnt": 0,
            "liked_cnt": 7,
            "followers_cnt": 123,
            "followings_cnt": 0,
            "follows_you": true,
            "is_following": true,
            "block_you": false,
            "is_blocked": false,
            "mutes_you": false,
            "is_muted": false,
            "type": "user"
        }

        return result;
    }

    //alarm
    async alarmOnOff(type: string) {
        console.log(type)
        let result: any;
        if (type === 'comment') {
            result = true
        } else if (type === "like") {
            result = true
        } else if (type === "follow") {
            result = true
        } else if (type === "mention") {
            result = true
        } else if (type === "retweet") {
            result = true
        } else if (type === "dm") {
            result = true
        }
        return result;
    }

    async games(limit: number = 100, offset: number = 0, category?: number, sort?: string, dir?: string) {

        let url = `/games?limit=${limit}&offset=${offset}`;
        if (category !== undefined) {
            url += `&category=${category}`;
        }
        if (sort !== undefined) {
            url += `&sort=${sort}`;
        }
        if (dir !== undefined) {
            url += `&dir=${dir}`;
        }

        const response = await this.request('get', url, {
            limit,
            offset,
            category,
            sort,
            dir,
        }, false);
        return response.result || response;
    }

    async game(pathname: string) {
        const response = await this.request('get', `/game/${pathname}`, undefined, false);
        return response.result || response;
    }

    async searchGame(tag) {
        const response = await this.request('get', `/games/s/${tag}`, undefined, false);
        return response.result || response;
    }

    async featured() {
        const response = await this.request('get', `/featured`, undefined, false);
        return response.result || response;
    }

    async hashtags(tag) {
        const response = await this.request('get', `/games/hashtags/${tag}`, undefined, false);
        return response.result || response;
    }

    async tagged(id) {
        const response = await this.request('get', `/games/tagged/${id}`, undefined, false);
        return response.result || response;
    }


}


declare module 'vue/types/vue' {
    interface Vue {
        $api: Api,
    }

    interface VueConstructor {
        $api: Api,
    }
}

const _api = new Api();
const Plugin: PluginObject<any> = {
    install: (Vue) => {
        Vue.$api = _api;
    },
};
Plugin.install = (Vue) => {
    Vue.$api = _api;
    Object.defineProperties(Vue.prototype, {
        $api: {
            get() {
                return _api;
            },
        },
    });
};

Vue.use(Plugin);