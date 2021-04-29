import React, {useState ,useEffect} from 'react'

function EmailComponent(props) {
    // console.log(props.location.data.emails[0].original.email)
    // console.log(props)
    // const [emails, setemails] = useState([])
    // useEffect(async () => {
    //     if(props.location.data) {
    //         setemails(props.location.data.emails)
    //     }
        
    // }, []);
    console.log("Email Props", props)

    return (
        <div>
            Sending Emails to 
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
