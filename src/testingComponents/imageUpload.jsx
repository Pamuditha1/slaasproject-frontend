import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios'
import { toast } from "react-toastify";

class UploadPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        file: null ,
        filename: null
    };
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
    this.submitImage = this.submitImage.bind(this)
  }
  onChange(event) {
    this.setState({
        file: URL.createObjectURL(event.target.files[0])
    });
  }

  resetFile(event) {
    event.preventDefault();
    this.setState({ file: null });
  }

  async submitImage(e) {
    e.preventDefault()
        const formData = new FormData()
        formData.append('file', this.state.file) 
        console.log(this.state.file)
        try{
            const res = await axios.post('http://localhost:3001/slaas/api/user/add-profilepic', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(res)
            toast.success(res.data) 
        } 
        catch(err){
            console.log(err)
            toast.error(err.response.data) 
        }
  }

  render() {
      console.log(this.state.file)
    return (
      <div>
        <input type="file" onChange={this.onChange} />
        {this.state.file && (
          <div style={{ textAlign: "center" }}>
            <button type="submit" onClick={this.submitImage}>Submit File</button>
            <button onClick={this.resetFile}>Remove File</button>
          </div>
        )}
        <img style={{ width: "100%" }, { height: "200px"}} src={this.state.file} />
      </div>
    );
  }
}

export default UploadPreview
