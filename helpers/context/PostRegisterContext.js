import {createContext,useState} from 'react';

export const PostRegisterContext = createContext({
    userInfo : false,
    setUserInfo: () => {},
    notification: false,
    setNotification: () => {},
    todayDate:0,
    setTodayDate:()=>{}
})