import './index.css'

function HostScreen({ question, correctPlayer }) {
    return (
      <div className="host-screen">
        <h1 className="game-title">KBC Game</h1>
        <h2 className="question">{question.question}</h2>
        <ul className="options">
          {question.options.map((option, index) => (
            <li key={index} className="option">{option}</li>
          ))}
        </ul>
        {correctPlayer && <h3 className="winner-message">Congratulations {correctPlayer}!</h3>}
      </div>
    );
  }

export default HostScreen