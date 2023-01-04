import Card from '../card/card'

const  Cards = () => {
    return (
        <div>
            <h2> Meus Cards </h2>
            <div>
                <Card>
                    <h3> Titulo Card 1 </h3>
                    <p>Esse e um texto Card</p>
                </Card>

                <Card>
                    <h3> Titulo Card 2 </h3>
                    <p>Esse e um texto Card</p>
                </Card>

                <Card>
                    <h3> Titulo Card 3 </h3>
                    <p>Esse e um texto Card</p>
                </Card>

            </div>
        </div>
    )
}

export default Cards