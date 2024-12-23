import { useEffect, useState } from "react";
const User = (props) =>{
    const {name} =props; 
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(1);

    useEffect(()=>{

        //call api to get user info

        return ()=>{
            //write cleanup code fro resources
        }
    },[])
    return <div className="user-card">
        <h1>{count}</h1>
        <h2>{count2}</h2>
        <h2>Name: {name}</h2>
        <h3>Location: Hyderabad</h3>
        <h3>Contact: @ashudamn1995</h3>
    </div>
}

export default User;