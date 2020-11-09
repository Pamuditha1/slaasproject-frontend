import React, { Component } from 'react';

class Header extends Component {
    style = {
        height: "100px",
        backgroundColor: "blue",
        textAlign: "center",
        marginBottom: "20px",
        color: "white",
        fontSize: "50px",
        fontFamily: "Times New Roman",
        padding: "10px"

    }
    render() {
        return (
            <div style={this.style}>
                SLAAS Member Manager
            </div>
        );
    }
}

export default Header;