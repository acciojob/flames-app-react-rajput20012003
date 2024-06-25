import React, { useState } from 'react';

const FlamesGame = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const calculateRelationship = () => {
    let modifiedName1 = name1.toLowerCase().replace(/ /g, '');
    let modifiedName2 = name2.toLowerCase().replace(/ /g, '');

    let remainingLettersCount = modifiedName1.length + modifiedName2.length;

    for (let char of modifiedName1) {
      if (modifiedName2.includes(char)) {
        modifiedName1 = modifiedName1.replace(char, '');
        modifiedName2 = modifiedName2.replace(char, '');
        remainingLettersCount -= 2;
      }
    }

    const flames = ['Siblings', 'Friends', 'Love', 'Affection', 'Marriage', 'Enemy'];
    const relationshipIndex = remainingLettersCount % flames.length;
    setResult(flames[relationshipIndex]);
  };

  const clearForm = () => {
    setName1('');
    setName2('');
    setResult('');
  };

  return (
    <div>
      <input
        type="text"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        placeholder="Enter name 1"
        data-testid="input1"
        name="name1"
      />
      <br />
      <input
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        placeholder="Enter name 2"
        data-testid="input2"
        name="name2"
      />
      <br />
      <button onClick={calculateRelationship} data-testid="calculate_relationship">
        Calculate Relationship
      </button>
      <button onClick={clearForm} data-testid="clear">
        Clear
      </button>
      <br />
      <h3 data-testid="answer">{result}</h3>
      <h3>Marriage</h3>
    </div>
  );
};

export default FlamesGame;