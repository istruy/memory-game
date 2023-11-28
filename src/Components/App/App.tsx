import React, { useEffect } from 'react';
import { useState } from "react"
import { cards } from '../../utils';
import './App.css';
import Card from '../Card/Card';
import Message from '../Message/Message';
import GameInfo from '../GameInfo/GameInfo';

const App = () => {
    const [countMove, setCountMove] = useState(0);
    const [guessedCards, setGuessedCards] = useState(0);
    const [openCardsElement, setOpenCardsElement] = useState<string[]>([]);
    const [allCards, setAllCards] = useState(cards.concat(cards).map((item, index) => {
        return { ...item, item: item, id: index, isOpen: false, guessed: false, disable: false }
    }).sort(() => Math.random() - 0.5));

    const onClickCard = (card: string, id: number) => {
        const filteredNotIdAllCards = allCards.filter((item) => item.id !== id);
        const filteredAllCards = allCards.filter((item) => item.id === id);

        if (openCardsElement.length >= 2) {
            filteredNotIdAllCards.map((item) => item.isOpen = false);
            filteredAllCards.map((item) => item.isOpen = true);
            filteredAllCards.map((item) => item.disable = true);
            setOpenCardsElement([card]);
        } else {
            filteredAllCards.map((item) => item.isOpen = true);
            filteredAllCards.map((item) => item.disable = true);
            setOpenCardsElement((prev) => [...prev, card]);
        }
        setAllCards(allCards);
        setCountMove((prev) => prev + 1);
    };

    useEffect(() => {
        if (openCardsElement.length && openCardsElement[0] === openCardsElement[1]) {
            allCards.map((item) => item.disable = false);
            setAllCards(allCards);
            setTimeout(() => {
                allCards.map((item) => item.isOpen = false);
                allCards.filter((item) => Object.keys(item.item)[0] === openCardsElement[0]).map((item) => item.guessed = true);
                setAllCards(allCards);
                setOpenCardsElement([]);
            }, 1500);
            setGuessedCards((prev) => prev + 1);
        } else if (openCardsElement.length === 2 && openCardsElement[0] !== openCardsElement[1]) {
            allCards.map((item) => item.disable = false);
            setAllCards(allCards);
            setTimeout(() => {
                setOpenCardsElement([]);
                allCards.map((item) => item.disable = false);
                allCards.map((item) => item.isOpen = false);
                setAllCards(allCards);
            }, 1500);
        };
    }, [openCardsElement]);

    const onClickRestartGame = () => {
        setAllCards(cards.concat(cards).map((item, index) => {
            return { ...item, item: item, id: index, isOpen: false, guessed: false, disable: false }
        }).sort(() => Math.random() - 0.5));
        setGuessedCards(0);
        setCountMove(0);
    };

    return (
        <div className='game__body'>
            <header className='game__header'>
                <h1>MEMORY</h1>
            </header>
            <main className='game-wrapper'>
                <GameInfo countMove={countMove} isLeft={true} />
                <section className='cards'>
                    {allCards.map((item) => {
                        return <Card key={item.id} id={item.id} card={item.item} isOpen={item.isOpen} guessed={item.guessed} onClick={onClickCard} disable={item.disable} />
                    })
                    }
                </section>
                <section className='message__wrapper'>
                    {(guessedCards === allCards.length / 2) && <Message isVictory={true} countMove={countMove} onClickRestartGame={onClickRestartGame} />}
                    {(countMove === 40) && <Message isVictory={false} onClickRestartGame={onClickRestartGame} />}
                </section>
                <GameInfo countMove={countMove} isLeft={false} />
            </main>
        </div>
    )

}

export default App;