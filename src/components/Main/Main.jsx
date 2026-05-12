import Card from '../Card/Card';
import './Main.css';


function Main({ cards }) {
  return (
    <main className="main-container">
      {cards.map((cardItem) => (
        <Card 
          key={cardItem.id} 
          title={cardItem.title} 
          description={cardItem.description} 
          image={cardItem.image} 
        />
      ))}
    </main>
  );
}

export default Main;