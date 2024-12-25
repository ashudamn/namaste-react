import { useEffect, useState } from "react";

const useUserOnlineStatus = () =>{
    const [online,setOnline] = useState(null);
    useEffect(()=>{
        window.addEventListener('online', function(e) {
            console.log('And we\'re back :).');
            setOnline(true);
          }, false);
          
          window.addEventListener('offline', function(e) {
            console.log('Connection is down.');
            setOnline(false);
          }, false);
    },[]);

    return online;
}

export default useUserOnlineStatus;