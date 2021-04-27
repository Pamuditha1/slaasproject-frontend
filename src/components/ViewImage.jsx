import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { toast } from "react-toastify";

function ViewImage(props) {

    const [imagePath, setImagePath] = useState('')
    const [msg, setMsg] = useState('')

    useEffect(
        async () => {
            // const res = await axios.get(`http://localhost:3001/slaas/api/user/get-profilepic/abcde`)
            // console.log(res)
            // console.log(imagePath)
            // setImagePath(res)
            console.log('View Image Props', props)
            axios
            .get(
                `http://localhost:3001/slaas/api/user/get-profilepic/${props.nic}`,
                { responseType: 'arraybuffer' },
            )
            .then(response => {
                if(typeof response.data == 'object') {
                    setMsg(response.data.msg)
                }
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
            {imagePath ? 
                <img src={imagePath} height="auto" width="100%"/> 
                :            
                <p className="align-middle text-center mt-5" style={{color: "blue"}}>No Member Image</p>
            }
        </div>
    )
}

export default ViewImage
