import React from 'react';

class UserSearch extends React.Component {

render() {
    return (
   
      <form className="search" onSubmit={this.handleClick.bind(this)}>
        <input ref="search" className="searchbox" type="text" placeholder="type a username"/>
        <input type="submit" className="searchbutton" value="Search GitHub User" />
      </form>
   
    )
  }
  
  handleClick(e) {
    e.preventDefault()
    let username = this.refs.search.value
    this.props.fetchUser(username)
    this.refs.search.value = ''
  }

}

export default UserSearch;