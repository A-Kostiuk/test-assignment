import React from 'react';
import Card from '../../ui/card/card';
import { List, ListItem } from './styles';

function CardsList({ error, isLoaded, items }) {
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <List>
        {items.map((user) => (
          <ListItem key={user.id}>
            <Card {...user} />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default CardsList;
