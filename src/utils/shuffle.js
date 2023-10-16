const shuffle = (cardsList) => {
  const closedCards = cardsList.map((card) => ({...card, isOpen: false, isFounded: false }));
  return closedCards.sort(() => Math.random() - 0.5);
}

export { shuffle };
