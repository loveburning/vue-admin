/**
 Function: 用户接口
 User: burning <923398776@qq.com>
 Date: 2020年05月28日
 */

import request from '@/components/request'

// 登录
export const login = data => {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

// 获取用户数据
export const getUserData = data => {
    return request({
        url: '/user/getUserData',
        method: 'post',
        data
    })
}

// 保存用户数据
export const saveUserData = data => {
    return request({
        url: '/user/saveUserData',
        method: 'post',
        data
    })
}
