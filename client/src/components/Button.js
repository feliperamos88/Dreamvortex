const Button = ({ action, text, addClass }) => {
  return (
    <button onClick={() => action()} className={`${addClass} game-button`}>
      {text}
    </button>
  );
};

export default Button;
