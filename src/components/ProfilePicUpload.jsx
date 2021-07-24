import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function ProfilePicUpload(props) {
  // const [file, setFile] = useState('')
  // const [filePreview, setFilePreview] = useState('')
  // const [filename, setFilename] = useState('Choose File')

  const onChange = (e) => {
    props.setFile(e.target.files[0]);
    props.setFilename(e.target.files[0].name);
    props.setFilePreview(URL.createObjectURL(e.target.files[0]));
  };

  const resetFile = (e) => {
    e.preventDefault();
    props.setFilePreview(null);
    props.setFile(null);
    props.setFilename(null);
  };

  // const onSubmit = async e => {
  //     e.preventDefault()
  //     const formData = new FormData()
  //     formData.append('file', file)
  //     console.log(file)
  //     try{
  //         const res = await axios.post('http://localhost:3001/slaas/api/user/add-profilepic', formData, {
  //             headers: {
  //                 'Content-Type': 'multipart/form-data'
  //             }
  //         })
  //         console.log(res)
  //         toast.success(res.data)
  //     }
  //     catch(err){
  //         console.log(err)
  //         toast.error(err.response.data)
  //     }
  // }
  const style = {
    borderRadius: "150px",
    boxShadow: "0px 7px 13px black",
  };

  return (
    <div className="row mb-2">
      <div className="col-2">
        <p>Member Profile Picture</p>
      </div>
      <div className="col-4">
        <img
          style={style}
          src={props.filePreview}
          width="200px"
          height="auto"
        />
      </div>
      <div className="col-5 mt-5">
        <form onSubmit={props.onImageSubmit}>
          <div className="custom-file">
            <input
              type="file"
              name="csvFile"
              className="custom-file-input"
              id="csvFile"
              onChange={onChange}
            />
            <label className="custom-file-label" htmlFor="csvFile">
              {props.filename}
            </label>
          </div>
          <div className="row mt-2">
            {props.filePreview && (
              <>
                <div className="col-6">
                  {/* <input type="submit" className="btn btn-success" style={{width : "100%"}} value="Upload" /> */}
                </div>
                <div className="col-6">
                  <button
                    type="reset"
                    className="btn btn-danger"
                    style={{ width: "100%" }}
                    onClick={resetFile}
                  >
                    Remove
                  </button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfilePicUpload;
