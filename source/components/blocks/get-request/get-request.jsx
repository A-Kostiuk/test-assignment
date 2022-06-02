import React, { useState, useEffect } from 'react';
import CardsList from '../../layout/cards-list/cards-list';
import { Section } from '../../styled';
import Button from '../../ui/Button/button';
import Title from '../../ui/title/title';

const URL =
  'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6';

function GetRequest() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFollowing, setIsFollowing] = useState(null);
  const [items, setItems] = useState([]);
  const [responce, setResponce] = useState(null);

  const handlerClick = () => {
    fetch(responce.links.next_url)
      .then((res) => res.json())
      .then((result) => {
        setResponce(result);
        setItems([...items, ...result.users]);
        setIsFollowing(result.page !== result.total_pages);
      });
  };

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setResponce(result);
          setItems(result.users);
          setIsFollowing(result.page !== result.total_pages);
        },
        (err) => {
          setIsLoaded(true);
          setError(err);
        },
      );
  }, []);
  return (
    <Section>
      <Title level={1} marginBottom={50}>
        Working with GET request
      </Title>
      <CardsList error={error} items={items} isLoaded={isLoaded} />
      {isFollowing && (
        <Button color="yellow" minWidth={120} onClick={handlerClick}>
          Show more
        </Button>
      )}
    </Section>
  );
}

export default GetRequest;
