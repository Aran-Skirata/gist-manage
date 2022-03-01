import React from "react";
import axios from "axios";

class ListGists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      numberOfPages: 20
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState({ currentPage: value });
  }

  render() {
    return (
      <div>
        <ViewGists postId={this.state.currentPage}/>
        <SelectPage
          currentPage={this.state.currentPage}
          numberOfPages={this.state.numberOfPages}
          handleClick={this.handleClick}
        />
        strona: {this.state.currentPage}
      </div>
    );
  }
}

function SelectPage(props) {
  const pages = [];

  for (let i = 1; i <= props.numberOfPages; i++) {
    pages.push(
      <button key={i} onClick={() => props.handleClick(i)}>
        {i}
      </button>
    );
  }

  return <div>{pages}</div>;
}


class ViewGists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gists: []
    };
  }

  componentDidMount() {
    this.getGists(this.props.postId);
  }

  componentDidUpdate() {
    this.getGists(this.props.postId);
  }

  getGists(postId) {
    axios
      .get(`https://ancient-gorge-72513.herokuapp.com/https://api.github.com/gists/public?per_page=20&page=${postId}`)
      .then(response => this.setState({ gists: response.data }))
      .catch(error => console.log(error));
      }

  render() {
    const gists = this.state.gists.map(gist => (
      <li key={gist.id}><img src={gist.owner.avatar_url}  alt="could not load avatar" width="40" height="40"/><a href={"https://gist.github.com/" + gist.owner.login + "/" + gist.id} target="_blank" rel="noreferrer">{gist.id}</a><p>{gist.description}</p></li>
    ));

    return gists.length > 0 ? <ol>{gists}</ol> : <span>loading</span>;
  }
}

export default ListGists;