import React from "react";
import Wrapper from "./Wrapper";

class DeleteGist extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          gistid: ''
      };

  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  
    handleChange(event) {

      this.setState({gistid: event.target.value});
    
    }


    handleSubmit(event) {

      event.preventDefault();
      let ghWrapper = new Wrapper('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');
      ghWrapper.deleteGist(this.state.gistid);
      var currentTime = new Date();
      var time = currentTime.toLocaleString() //+ '/' + currentTime.getMonth() + '/' + currentTime.getFullYear() + '@' + currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
      localStorage.setItem("Last DeleteID",this.state.gistid);
      localStorage.setItem("Last DeleteTime",time);
      alert("Gist usunięty!")
    }

  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            ID Gist który należy usunąć:
            <br />
            <input type="text" name="filename" size="40" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Wyślij" />
        </form>
      );
    }
  }

  export default DeleteGist;