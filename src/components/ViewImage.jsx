import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { toast } from "react-toastify";

function ViewImage(props) {

    const [imagePath, setImagePath] = useState('')

    useEffect(
        async () => {
            // const res = await axios.get(`http://localhost:3001/slaas/api/user/get-profilepic/abcde`)
            // console.log(res)
            // console.log(imagePath)
            // setImagePath(res)

            axios
            .get(
                'http://localhost:3001/slaas/api/user/get-profilepic/TESTING1',
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
            <h1>Viewing Image</h1>
            <img src={imagePath} height="200px" width="auto"/>
        </div>
    )
}

export default ViewImage
