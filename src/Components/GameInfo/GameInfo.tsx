import React from 'react';

type GameInfoProps = {
    countMove: number;
    isLeft: boolean;
}

const GameInfo = ({ countMove, isLeft }: GameInfoProps) => {

    return (
        isLeft
            ? <section className='game-info'>
                <h2 className='info__text'> СДЕЛАНО ХОДОВ</h2>
                <div className='game-count'>{countMove}</div>
            </section>
            : <section className='game-info'>
                <h2 className='info__text'>ОСТАЛОСЬ ПОПЫТОК</h2>
                <div className='game-count'>{40 - countMove}</div>
            </section>
    )
};

export default GameInfo;