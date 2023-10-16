const shuffle = require("./shuffle.js");

describe('shuffle', () => {
  it('должна возвращать массив с тем же количеством элементов', () => {
    const cardsList = [
      { id: 1, isOpen: true, isFounded: true },
      { id: 2, isOpen: false, isFounded: false },
      // Добавьте больше карточек по вашему усмотрению
    ];

    const result = shuffle(cardsList);

    expect(result).toHaveLength(cardsList.length);
  });

  it('должна перемешивать массив карточек', () => {
    const cardsList = [
      { id: 1, isOpen: true, isFounded: true },
      { id: 2, isOpen: false, isFounded: false },
      { id: 3, isOpen: false, isFounded: false },
    ];

    const shuffledCards = shuffle(cardsList);

    // Массив shuffledCards не равен исходному массиву
    expect(shuffledCards).not.toEqual(cardsList);

    // Длина массива shuffledCards остается неизменной
    expect(shuffledCards).toHaveLength(cardsList.length);

  });
});
