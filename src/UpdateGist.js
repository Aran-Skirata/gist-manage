import React from "react";
import Wrapper from "./Wrapper";

class UpdateGist extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        description: '',
        filename: '',
        content: '',
        gistId: ''
        
      };

  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  
    handleChange(event) {
      let nam = event.target.name;
      let val = event.target.value;
   

      this.setState({[nam]: val});
    
    }


    handleSubmit(event) {

      event.preventDefault();
      let ghWrapper = new Wrapper('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');

      let payload = {
        "description": this.state.description,
        "public": true, 
        "files":
        {
            [this.state.filename] : 
          {
            "content": this.state.content
          }
        }
      }
      var currentTime = new Date();
      var time = currentTime.toLocaleString() //+ '/' + currentTime.getMonth() + '/' + currentTime.getFullYear() + '@' + currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
      ghWrapper.updateGist(this.state.gistId,payload);
      localStorage.setItem("Last ModID",this.state.gistId);
      localStorage.setItem("Last ModTime",time);
      alert("Gist zmodyfikowany!");
      
    }

  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
            ID zmienianego gista:
            <br />
            <input type="text" name="gistId" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Nazwa wraz z rozszerzeniem:
            <br />
            <input type="text" name="filename" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Opis:
            <br />
            <input type="text" name ="description" onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Zawartość:
            <br />
            <textarea name="content" rows="20" cols = "100" onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Wyślij" />
        </form>
      );
    }
  }

  export default UpdateGist;