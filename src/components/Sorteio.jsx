import React from 'react'
import Card from './Card'

export default props => {
    const max = props.max
    const min = props.min
    return (
        <Card title = "Sorteio de um número" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{parseInt(Math.random() * (max - min) + min)}</strong>
                </span>
            </div>
        </Card>
    )
}
