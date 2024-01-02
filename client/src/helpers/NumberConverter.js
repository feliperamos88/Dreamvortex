const NumberConverter = (num) => {
  const numObj = {
    1: 'Act I',
    2: 'Act II',
    3: 'Act III',
    4: 'Act IV',
    5: 'Act V',
  };
  return numObj[num];
};

export default NumberConverter;
