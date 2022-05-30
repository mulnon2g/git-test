const getEvenNumber = () => {
  const evenNumber = [];
  for (i = 1; i < 51; i++) {
    if (i % 2 === 0) {
      evenNumber.push(i);
    }
  }
  return evenNumber;
};
