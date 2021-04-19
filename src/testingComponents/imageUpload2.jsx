import React, {useState} from 'react'
import axios from 'axios'
import { toast } from "react-toastify";

function ProfilePicUpload() {

    const [file, setFile] = useState('')
    const [filePreview, setFilePreview] = useState('')
    const [filename, setFilename] = useState('Choose File')

    const onChange = e => {
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
        setFilePreview(URL.createObjectURL(e.target.files[0]))
    }

    const resetFile = e => {
        e.preventDefault()
        setFilePreview(null)
        setFile(null)
        setFilename(null)
    }

    const onSubmit = async e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file) 
        console.log(file)
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

    return (
        <div className="container">
            <h1>Image Upload</h1>
                <form onSubmit={onSubmit}>
                    <div className="custom-file">
                        <input type="file" name="csvFile" class="custom-file-input" id="csvFile" onChange={onChange}/>
                        <label className="custom-file-label" htmlFor="csvFile">{filename}</label>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <input type="submit" className="btn btn-success" style={{width : "100%"}} value="Upload" />
                        </div>
                        {filePreview && (
                            <div className="col-6">
                                <button type="reset" class="btn btn-danger" style={{width : "100%"}} onClick={resetFile}>Remove File</button>
                            </div>
                        )}
                    </div>                    
                </form>   
            <img style={{ width: "100%" }, { height: "200px"}} src={filePreview} />
            
            
        </div>
    )
}

export default ProfilePicUpload
