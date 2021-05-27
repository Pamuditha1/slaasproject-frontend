import React, {useState, useEffect} from 'react'

import {getSections} from '../services/getSections'
import {addSection} from '../services/addSection'

function Sections() {

    const [section, setsection] = useState('')
    const [key, setkey] = useState('')
    const [sections, setsections] = useState([])

    useEffect(async () => {
        // setIsLoading(true)
        const records = await getSections()
        setsections(records)
        // setIsLoading(false)

    }, [])

    const addChange = (e) => {
        if(e.target.name == 'key') {
            setkey(e.target.value)
        }
        else{
            setsection(e.target.value)
        }        

    }
    const onAdd = async () => {
        
        console.log(key)
        console.log(section)
        await addSection({
            key: key,
            section: section
        })
        setsections([...sections, {
            keyName: key,
            section: section
        }])
        setkey('')
        setsection('')
    }

    return (
        <div className="mt-5">
            <div className="row ml-3">
                <div className="mr-3">Add New Section</div>
                
                <input onChange={addChange} value={key} name="key" className="form-control col-1" type="text" />
                <input onChange={addChange} value={section} name="section" className="form-control col-4" type="text" />
                <div className="input-group-append col-2 mb-3">
                    <button onClick={onAdd} className="btn btn-outline-success">+</button>
                </div>
            </div>
            <center className="mt-5">
                <ul>
                { sections.length>0 && sections.map(g => {
                    return <h4 key={g}>{g.keyName}  -  {g.section}</h4>
                })
                }
                </ul>
            </center>
            
        </div>
    )
}

export default Sections
