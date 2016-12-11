import React from 'react';
import {render} from 'react-dom';
import UserSearch from './UserSearch.jsx';
import Results from './Results.jsx';


class App extends React.Component {

constructor(props) {
    super(props)
    
    this.state = {
      username: '',
      avatar: '',
      reposnumber: '',
      repos: [],
      notFound: ''
    }
  }
  render() {
    return (
      <div>
        <UserSearch fetchUser={this.fetchUser.bind(this)}/>
        <Results data={this.state} />
      </div>
    )
  }

  //calling API 

  fetchApi(url) { 
    
    fetch(url)
      .then((res) => {
		
      //Handling Errors

  		if (res.ok) {
    		return res.json();
  		} else {
    		this.setState({
    			reposnumber: 'nc',
        	notFound: 'Not Found'
            })
  		    }
	    })

      .then((data) => {
        if (data.length == 0) {
			  this.setState({
        		reposnumber: '0',
        		notFound: 'Found but 0'
              })
      	}

      	else {
          this.setState({
          	username: data[0].owner.login,
          	avatar: data[0].owner.avatar_url,
          	reposnumber: data.length,
          	repos: data,
          	notFound: data.message
          })
        }
      })

      .catch((err) => console.log('Request Error'))
      
  }
  
  fetchUser(username) {
    let url = `https://api.github.com/users/${username}/repos?per_page=200`
    this.fetchApi(url)
  }
  
}


render(<App/>, document.getElementById('app'));