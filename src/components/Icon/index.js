import React, { Component } from 'react';
import symbol_defs from '../../assets/images1/icons.svg'

export default class Icon extends Component {
    render() {
        return (
                <svg viewBox={this.props.viewBox ? this.props.viewBox : "0 0 16 16"} className={`icon icon-${this.props.viewClass}`}>
                    <use xlinkHref={`${symbol_defs}#icon-${this.props.icon}`} href={`${symbol_defs}#icon-${this.props.icon}`}/>

                </svg>
        );
    }
}