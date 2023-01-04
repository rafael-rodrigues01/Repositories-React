import React from "react";
import './card.css'

// utilizando para pega o titulo com props
// class Card extends React.Component {
//     render(){
//         return (
//             <div className="card">
//                 <h3> {this.props.title} </h3>
//                 <p> esse e um texto do card </p>
//             </div>
//         )
//     }
// }

    // rendendizando uma função utilizando props
    // const Card = (props) => {
    //     return (
    //         <div className="card">
    //             <h3> {props.title}</h3>
    //             <p>Esse e um texto Card</p>
    //         </div>
    //     )
    // }

    // renderizando com props children 
    const Card = (props) => {
        return (
            <div className="card">
                {props.children}
            </div>
        )
    }

export default Card