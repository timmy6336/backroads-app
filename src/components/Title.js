const Title = ({ word_1, word_2 }) => {
  return (
    <div className="section-title">
      <h2>
        {word_1} <span>{word_2}</span>
      </h2>
    </div>
  );
};

export default Title;
