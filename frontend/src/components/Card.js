import './Card.css';
import {useEffect, useState} from "react";
import CardService from "../services/card.service";

function Card() {
    const [cardData, setCardData] = useState('');

    useEffect(() => {
        const cardService = new CardService();
        cardService.getCard(setCardData);
    }, []);

    return (
        <div className="Card">
            <p>Hello World from CARD</p>
            <p>The result of a card:</p>
            <p>ObjectID: {cardData._id}</p>
            <p>Title: {cardData.title}</p>
            <p>Cost: {cardData.cost}</p>
        </div>
    );
}

export default Card;
