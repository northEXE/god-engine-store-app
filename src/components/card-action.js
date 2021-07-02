import React from 'react'

class CardAction extends React.Component{
    render(){
        return(
            <div className="card-action">
                {this.props.children}
            </div>
        )
    }
}

export default CardAction