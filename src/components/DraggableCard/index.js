import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import './DraggableCard.scss';

const type = 'draggableCard';

const DraggableCard = ({ id, index, moveCard, children }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: type,
    hover(item, monitor) {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (
        (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) ||
        (dragIndex > hoverIndex && hoverClientY > hoverMiddleY)
      )
        return;

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type, id, index },

    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div ref={ref} className={`draggable__card ${isDragging ? 'draggable__card--invisible' : ''}`}>
      {children}
    </div>
  );
};

DraggableCard.propTypes = {
  id: PropTypes.number,
  index: PropTypes.number,
  moveCard: PropTypes.any,
  children: PropTypes.any,
};

export default DraggableCard;
