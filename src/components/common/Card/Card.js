import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardItem = styled.div`
  flex: 1 0;
  box-sizing: border-box;
  margin: 0.3125em;
  background-color: #fff;
  color: #171e42;
  height: 350px;
  width: 350px;

  @media (min-width: 430px) {
    max-width: calc(50% - 0.625em);
  }

  @media (min-width: 630px) {
      max-width: calc(40% - 0.625em);
  }
  @media (min-width: 840px) {
      max-width: calc(25% - 0.625em);
  }
`;

CardItem.displayName = 'CardItem';

const Img = styled.img`
  @media (min-width: 430px) {
    width: 180px;
  }
  @media (min-width: 630px) {
    width: 200px;
  }
  @media (min-width: 840px) {
    width: 200px;
  }
  @media (min-width: 1040px) {
    width: 250px;
  }
  @media (min-width: 1250px) {
    width: 300px;
  }

`;
Img.displayName = 'Img';

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.p`
  color: '#ccc';
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.01071em;
`;

Title.displayName = 'Title';

const CardContent = styled.div`
  display: bloc;
  justify-content: center;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.p`
  color: #767676;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
`;

const Card = ({ name, image, price }) => {
  return (
    <CardItem>
      <CardHeader>
        <Title>{name}</Title>
      </CardHeader>
      <CardContent>
        <Img src={image} alt={name} />
      </CardContent>
      <CardFooter>
        <Content>Price: {price}</Content>
      </CardFooter>
    </CardItem>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Card;
