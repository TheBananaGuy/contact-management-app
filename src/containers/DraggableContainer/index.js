import React, { useState, useCallback, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import DraggableCard from 'components/DraggableCard';
import update from 'immutability-helper';
import ContactCard from 'components/ContactCard';
import PropTypes from 'prop-types';

const DraggableContainer = ({ items }) => {
  const [cards, setCards] = useState(items || []);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex];

      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [cards]
  );

  useEffect(() => {
    setCards(items);
  }, [items]);

  useEffect(() => {
    if (cards.length) {
      const newOrder = cards.map(card => card.id);

      localStorage.setItem('contactsOrder', newOrder);
    }
  }, [cards]);

  return (
    <DndProvider backend={Backend}>
      {cards.map((card, index) => (
        <DraggableCard key={card.id} index={index} id={card.id} moveCard={moveCard}>
          <ContactCard data={card} />
        </DraggableCard>
      ))}
    </DndProvider>
  );
};

DraggableContainer.propTypes = {
  items: PropTypes.any,
};

export default DraggableContainer;
