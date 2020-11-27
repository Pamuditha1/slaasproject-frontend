import React, { Component } from 'react';

class Header extends Component {
    style = {
        height: "100px",
        backgroundColor: "blue",
        textAlign: "center",
        marginBottom: "20px",
        color: "white",
        fontSize: "30px",
        fontFamily: "Times New Roman",
        padding: "10px",

    }
    render() {
        return (
            <div style={this.style} className="sticky-top">
                SLAAS Member Manager
            </div>
        );
    }
}

export default Header;