import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
  constructor(props){
    super(props);
    
    console.log("Parent constructor")
  }
   componentDidMount(){
    console.log("Parent componentDidMount")
   
   
  }
  render(){
    console.log("Parent render");
    return (<>
        <div>
          <h1>About</h1>
          <h2>This is Namaste React Web Series</h2>
          <User name='Ashutosh Kushwah  (functional)'/>
          <UserClass name='Child1' location='Hyderabad'/>
          <UserClass name='Child2' location='Hyderabad'/>
        </div>
      </>)
  }
}
/*
const About = () => {
    return (
      <>
        <div>
          <h1>About</h1>
          <h2>This is Namaste React Web Series</h2>
          <User name='Ashutosh Kushwah  (functional)'/>
          <UserClass name='Ashutosh Kushwah (class)' location='Hyderabad'/>
        </div>
      </>
    );
  };
  */

  export default About;
  