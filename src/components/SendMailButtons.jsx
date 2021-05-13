import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function SendMailButtons({array, title, setselected}) {

    const [dropdownOpen, setOpen] = useState(false);
    // const [disabled, setdisabled] = useState(false)
    const toggle = () => setOpen(!dropdownOpen);

    const clickHandle = (s) => {
        setselected(s)
        // setdisabled(true)
    }
    return (
        <div>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret color="primary">
                    {title}
                </DropdownToggle>
                <DropdownMenu>
                    {array.map( s => (
                        <DropdownItem onClick={() => clickHandle(s)}>{s}</DropdownItem>
                                                
                    ))} 
                </DropdownMenu>
            </ButtonDropdown>
        </div>
    )
}

export default SendMailButtons
