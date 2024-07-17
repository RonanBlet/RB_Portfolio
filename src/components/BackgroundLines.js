const BackgroundLines = ({ lineCount = 5 }) => {
    const lines = Array.from({ length: lineCount }, (_, index) => (
      <div key={index} className="background-line" style={{ left: `${(index + 1) * (100 / (lineCount + 1))}%` }}></div>
    ));
  
    return <div className="background-lines">{lines}</div>;
  };
  
  export default BackgroundLines;