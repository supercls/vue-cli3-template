import service from '@/utils/fetch.js'


    // 查看此微信号是否有微信号注册
    export function getUser(data) { //fetch  promise用法
            return service({
                url: '/User/GetUser',
                method: 'get',
                params: data
            })
    };

    //获取验证码
    export function getMobileVerifyCode(data) { //fetch  promise用法
            return service({
                url: '/User/GetMobileVerifyCode',
                method: 'get',
                params: data
            })
    }
  
    // 提交绑定数据
    export function saveUser(data) { //fetch  promise用法
            return service({
                url: '/User/SaveUser',
                method: 'post',
                data
            })
        }
    // 获取医院
    export function GetYljg() {
        return service({
            url: '/Comm/GetYljg',
            method: 'get',
            params:''
        })
    }
    // 获取医院
    export function GetOpenId(data) {
        return service({
            url: '/User/GetOpenId',
            method: 'get',
            params:data
        })
    }
