import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { toast } from "react-toastify";

function ViewImage(props) {

    const [imagePath, setImagePath] = useState('')

    useEffect(
        async () => {
            axios
            .get(
                `http://localhost:3001/slaas/api/user/get-profilepic/${props.nic}`,
                { responseType: 'arraybuffer' },
            )
            .then(response => {
                const base64 = btoa(
                new Uint8Array(response.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    '',
                ),
                );
                setImagePath("data:;base64," + base64);
            });
    },[]);

    return (
        <div className="row mb-2">
            <p1>Profile Picture</p1>
            <img src={imagePath} height="200px" width="auto"/>
        </div>
    )
}

export default ViewImage
