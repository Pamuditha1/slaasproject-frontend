import React, {useState ,useEffect} from 'react'

function EmailComponent(props) {
    // console.log(props.location.data.emails[0].original.email)
    // console.log(props)
    // const [emails, setemails] = useState([])
    // useEffect(async () => {
    //     if(props.emailsList) {
    //         setemails(props.emailsList)
    //         console.log("setted emails", emails)
    //     }
        
    // }, []);
    // console.log("Email Props", props)
    console.log(props)

    return (
        <div>
            Sending Emails to HEllo
            {/* <p>{props.emailsList[0].id}</p> */}
            {/* {props.location.data.emails.map((e) => (
                <p>{e.original.email}</p>
            ))
            } */}
            {/* <h1>Sending mails from here</h1>
            {
                props.emails.map((e) => (
                    <p>{e.original.email}</p>
                )
                    
                )
            } */}
        </div>
    )
}

export default EmailComponent
