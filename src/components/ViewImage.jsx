import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { api } from "../services/api";

function ViewImage(props) {
  const [imagePath, setImagePath] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    async function fetchImage() {
      console.log("View Image Props", props);
      axios
        .get(`${api}/user/get-profilepic/${props.nic}`, {
          responseType: "arraybuffer",
        })
        .then((response) => {
          if (typeof response.data == "object") {
            setMsg(response.data.msg);
          }
          const base64 = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          setImagePath("data:;base64," + base64);
        });
    }
    fetchImage();
    console.log(imagePath);
  }, []);

  const style = {
    borderRadius: "150px",
    boxShadow: "0px 7px 13px black",
  };

  return (
    <div className="row mb-2">
      <p>Profile Picture</p>
      {imagePath ? (
        <img src={imagePath} style={style} height="auto" width="200px" />
      ) : (
        <p className="align-middle text-center mt-5" style={{ color: "blue" }}>
          No Member Image
        </p>
      )}
    </div>
  );
}

export default ViewImage;
