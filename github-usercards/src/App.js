import React from 'react';
import axios from 'axios';
import UserCard from './components/userCard';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      userData: {},
      userFollowers: []
    }
  }

  componentDidMount(){

    // User Data
    axios.get(`https://api.github.com/users/alecthomasquinn`)
      .then(result => {
        console.log('userData:', result.data);
        this.setState({ userData: result.data});
      })
      .catch(error => {
        console.log("userData get error:", error)
      })

      // User Follower Data
      axios.get(`https://api.github.com/users/alecthomasquinn/followers`)
      .then(result => {
        console.log('userFollowers', result.data);
        this.setState({ userFollowers: result.data});
      })
      .catch(error => {
        console.log("userFollowers get error:", error)
      })
  }

  
  render(){
    return (
      <>
        <h1>{this.state.userData.name}</h1>
        <UserCard 
          userData={this.state.userData}
          userFollowers={this.state.userFollowers}
        />
      </>
    );
  }
}

export default App;
