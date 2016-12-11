import React from 'react';

class Results extends React.Component {


  render() {

  	let data = this.props.data

  	if (data.reposnumber === '0') {
      return (<div className="card nr">This user have not repositories yet</div>);
    } 

  	else if (data.notFound === 'Not Found') {
      return (<div className="card nf">Sorry: This user not exist</div>);
    }

    else if (data.username != '') {
    return (
      <div>
        <div className="card results">
          <div className="bcard">
            <div className="usern"> <img src={data.avatar} className="usr-avatar"/> </div>
            <div className="usern un"> {data.username}</div>
          </div>
      	  <div className="bcard rn">{data.reposnumber} repositories</div>
        </div>

        <ul id="repo">
        	{data.repos.map((repos,i) => <li key={i}><span className="title">{repos.name}</span> <br/> <a href={repos.html_url} target="_blank">{repos.html_url}</a></li> )}
      	</ul>
      </div>
    );
  }

  else return (<div className="card"></div>);
    
 }


}

export default Results;