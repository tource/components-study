import React, { useEffect, useState } from "react";
import Card from "./Card";
import styled from "@emotion/styled";
import { getCards } from "../api/cardListApi";

const CardListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCards();
        console.log(data);
        setCards(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <CardListStyle>
      {cards.map(card => (
        <Card
          key={card.id}
          imgPath={card.imgPath}
          title={card.title}
          tags={card.tags}
          id={card.id}
        />
      ))}
    </CardListStyle>
  );
};

export default CardList;
