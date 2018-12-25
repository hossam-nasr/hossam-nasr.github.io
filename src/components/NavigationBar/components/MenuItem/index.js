import React, { Component } from "react";
import {Item} from "./styles"

class MenuItem extends Component {
    render () {
        return <Item selected={this.props.selected}>{this.props.children}</Item>
    }
}

export default MenuItem