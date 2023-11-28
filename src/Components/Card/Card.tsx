import React from 'react'
import './Card.css';

type CardType = {
    card: object;
    guessed: boolean;
    isOpen: boolean;
    id: number;
    disable: boolean;
    onClick: (card: string, index: number) => void;
}

const Card = ({ card, onClick, isOpen, id, guessed, disable }: CardType) => {

    return (
        <>
            {guessed
                ? <div className='card-item'></div>
                : isOpen
                    ? <div className={`card-item open-card ${disable ? 'disable' : ''}`} onClick={() => onClick(Object.keys(card)[0], id)}><img src={Object.values(card)[0]} alt="" /></div >
                    : <div className='card-item close-card' onClick={() => onClick(Object.keys(card)[0], id)}>К/С</div>
            }
        </>
    )
}

export default Card;