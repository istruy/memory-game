import React from 'react';
import './Message.css';

type MessageType = {
    isVictory: boolean;
    countMove?: number;
    onClickRestartGame: () => void;
}

const Message = ({ isVictory, countMove, onClickRestartGame }: MessageType) => {
    return (
        <div className='message__body'>
            {isVictory ? <div><p className='message__text'>УРА, ВЫ ВЫИГРАЛИ!</p><p>ЭТО ЗАНЯЛО {countMove} ХОДОВ</p></div>
                : <div><p className='message__text'> УВЫ, ВЫ ПРОИГРАЛИ</p><p>У ВАС КОНЧИЛИСЬ ХОДЫ</p></div>}
            <button className='message__button' onClick={onClickRestartGame}>СЫГРАТЬ ЕЩЕ</button>
        </div>
    )
};

export default Message;