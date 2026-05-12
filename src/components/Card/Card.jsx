import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  background-color: white;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
  text-align: center;
`;

const CardTitle = styled.h3`
  margin-bottom: 10px;
  color: #333;
`;

const CardDescription = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
`;

const CardButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

function Card({ title, description, image }) {
  const handleAlert = () => {
    alert(title);
  };

  return (
    <CardContainer>
      <CardImage src="{image}" alt="{title}"/>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardButton onClick="{handleAlert}">Дізнатися більше</CardButton>
      </CardContent>
    </CardContainer>
  );
}

export default Card;