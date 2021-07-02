import React from 'react';
import CardAction from '../components/card-action'

class CardContent extends React.Component{
    render(){
        return(
            <div className={"card col s12"}>
                <div className="card-content">
                    <span className="card-title">{this.props.title}</span>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default CardContent