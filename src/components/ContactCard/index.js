import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ContactCard = ({ data }) => {
  const contact = data;

  return (
    <Card className="my-4" border="info" bg="light">
      <Card.Header>
        <Card.Title>{`${contact.firstName} ${contact.lastName}`}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Link href={`mailto:${contact.email}`}>{contact.email}</Card.Link>
        {contact.phone && <Card.Link href={`tel:${contact.phone}`}>{contact.phone}</Card.Link>}
      </Card.Body>
    </Card>
  );
};

ContactCard.propTypes = {
  data: PropTypes.object,
};

export default ContactCard;
