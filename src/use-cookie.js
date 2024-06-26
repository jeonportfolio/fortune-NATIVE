import { useEffect, useState } from "react";

const getRamdomCookieKey = () => {
    const cookieLen = 15;
    const randomNum = Math.floor(Math.random() * cookieLen);
    return `cookie_${randomNum + 1}`
    //범위가 1부터 15까지 된다.
};

export const useCookie = () => {
    const [cookieKey, setCookieKey] = useState("");
    
    

    useEffect( () => {
        const randomCookieKey = getRamdomCookieKey();
        setCookieKey(randomCookieKey);
    },[]);

    return {
        cookieKey,
    };
};