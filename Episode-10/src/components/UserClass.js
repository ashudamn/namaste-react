import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
       // this.state={count:0,count2:2};
        this.state={
            userInfo:{
              name:'Dummy',
              location:'Dummy location'
            }
          }
        console.log(this.props.name+" child constructor")
    }
    async componentDidMount(){
        console.log(this.props.name+" child component did mount");
        const data  =await fetch('https://api.github.com/users/ashudamn');
        const userJsonData = await data.json();
        console.log(userJsonData);
        this.setState({
            userInfo:userJsonData
          });

          this.intervalId = setInterval(()=>{
            console.log('user class logging');
          },1000);
    }
    componentDidUpdate(){
        console.log("component did update");
    }
    componentWillUnmount(){
        console.log("user class unmount");
        clearInterval(this.intervalId);
    }
    render(){
        console.log(this.props.name+" child render")
        const {name,location}=this.state.userInfo;
        return <><div className="user-card">
           <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: @ashudamn1995</h3>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>increase</button>
    </div></>;
    }
}

export default UserClass;