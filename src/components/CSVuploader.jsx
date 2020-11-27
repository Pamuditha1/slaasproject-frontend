import React, {useState} from 'react'
import axios from 'axios'
import { toast } from "react-toastify";

function CSVuploader() {

    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('Choose File')

    const onChange = e => {
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
    }
    const onSubmit = async e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file) 
        console.log(file)
        try{
            const res = await axios.post('http://localhost:3000/slaas/api/user/upload-members', formData, {
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

    return (
        <div className="container">
            <h1>CSV Uploader</h1>
            <form onSubmit={onSubmit}>
                <div className="custom-file">
                    <input type="file" name="csvFile" class="custom-file-input" id="csvFile" onChange={onChange}/>
                    <label className="custom-file-label" htmlFor="csvFile">{filename}</label>
                </div>
                <input type="submit" value="Upload" className="btn btn-primary btn-block mt-4"/>
            </form>
            
            
        </div>
    )
}

export default CSVuploader
