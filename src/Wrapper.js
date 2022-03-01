import React, {Component} from 'react';
import axios from 'axios';


export default class Wrapper extends Component {
  state = {
    gists: [],
    public: false
  }
constructor(token)
{
    super(token);
    // this.token = token;
    this.client = axios.create({
        baseURL: 'https://ancient-gorge-72513.herokuapp.com/https://api.github.com/',
        responseType: 'json',
        headers: {
          'X-Custom-Header': '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',
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': 'token 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'
        }
      })
}

  componentDidMount()
  {
      this.client.get('https://ancient-gorge-72513.herokuapp.com/https://api.github.com/gists')
      .then(res => {this.setState({
        gists: res.data
      });
    });
  }


//GET request
getRequest(path) {
    return this.client.get(path)
}

//DELETE request
deleteRequest(path) {
    return this.client.delete(path)
}

//POST Request
postRequest(path, payload) {
    return this.client.post(path, payload)
}

//Root (Zwraca wszystkie gisty)
root() {
    return this.getRequest('/')
}

//utworzenie gista
createGist(payload) {
    return this.postRequest('/gists', payload)
}

// GET specific gist
getGist(gistId) {
    return this.getRequest(`/gists/${gistId}`)
}

//usunięcie gista
deleteGist(gistId) {
    return this.deleteRequest(`/gists/${gistId}`)
}

// modyfikacja gista
updateGist(gistId,payload) {
    return this.postRequest(`/gists/${gistId}`,payload)
}

 

  render() {
    return (
      
      <div>
      <ol>
        {this.state.gists.map(gist => <li key={gist.id}><img src={gist.owner.avatar_url} alt="could not load avatar" width="40" height="40"/><br /><a href={"https://gist.github.com/" + gist.owner.login + "/" + gist.id} target="_blank" rel="noreferrer">{gist.id}</a><p>{gist.description}</p></li>)} 
      </ol>
      </div>
    )
  }
}

