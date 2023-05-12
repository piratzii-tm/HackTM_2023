import {createContext,useState} from 'react';

export const PostRegisterContext = createContext({
    userInfo : false,
    setUserInfo: () => {}
})