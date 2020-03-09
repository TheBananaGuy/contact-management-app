import React, { useEffect, useState } from 'react';
import { fetchAllContacts } from 'services/ContactsApi';
import { Jumbotron, Alert } from 'react-bootstrap';
import DraggableContainer from '../../../containers/DraggableContainer';

const Main = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const order = localStorage.getItem('contactsOrder');

    const testRequest = async () => {
      setError('');

      await fetchAllContacts()
        .then(contacts => {
          if (order && order.length) {
            const orderedContacts = [];

            order.split(',').forEach(id => {
              orderedContacts.push(contacts.find(c => Number(c.id) === Number(id)));
            });

            return setData(orderedContacts);
          }
          setData(contacts);
        })
        .catch(e => {
          setError(e.message);
        });
    };

    testRequest();
  }, []);

  return (
    <>
      <Jumbotron>
        <h1>Contacts overview</h1>
        <p>Drag contacts around to reorder them</p>
      </Jumbotron>
      {error && <Alert variant="danger">{error}</Alert>}
      {data && <DraggableContainer items={data} />}
    </>
  );
};

export default Main;
