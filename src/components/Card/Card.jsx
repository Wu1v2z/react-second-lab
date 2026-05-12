import './Card.css';

function Card({ title, description, image }) {
  const handleAlert = () => {
    alert(title);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={handleAlert} className="card-btn">Дізнатися більше</button>
      </div>
    </div>
  );
}

export default Card;