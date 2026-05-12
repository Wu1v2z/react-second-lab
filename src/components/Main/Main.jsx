import styled from 'styled-components';
import Card from '../Card/Card';

// Створюємо стилізований контейнер
const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 40px 20px;
  background-color: #f4f4f9;
  min-height: 100vh;
`;

function Main({ cards }) {
  return (
    <MainContainer>
      {cards.map((cardItem) => (
        <Card key="{cardItem.id}" title="{cardItem.title}" description="{cardItem.description}" image="{cardItem.image}"/>
      ))}
    </MainContainer>
  );
}

export default Main;