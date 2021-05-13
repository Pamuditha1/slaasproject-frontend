import React, { Component } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import {api} from '../services/api'

class FileUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            fileName: ""
        }
    }

    onChangeHandler=event=>{

        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
            fileName: event.target.files[0].name
        })
    
    }
    onClickHandler = (e) => {
        e.preventDefault()
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        axios.post(`${api}/user/upload-members`, data, {
        })
        .then(res => {
            console.log(res.data);
            toast.success(res.data);
        })
        .catch(function (error) {
            
            console.log(error.response.data);
            toast.error(error.response.data);
            
        });
        
    }

    render() {
        return (
            <>
            {/* <div>
                <input type="file" name="file"  onChange={this.onChangeHandler}/>
                <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
            </div> */}
            <div className="container">
            <h1>CSV Uploader</h1>
            <form onSubmit={this.onClickHandler}>
                <div className="custom-file">
                    <input type="file" name="file" className="custom-file-input" id="file" onChange={this.onChangeHandler}/>
                    <label className="custom-file-label" htmlFor="file">{this.state.fileName}</label>
                </div>
                <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4"/>
            </form>
            </div>
            </>
            
            
        );
    }
}

export default FileUploader;