import {useState} from "react";

import { Card } from "../Card/index.jsx";

import {shuffle} from "../../utils/shuffle.js";

import maksim from './images/maksim.png';
import sj from './images/sj.png';
import andrei from './images/andrei.jpg';
import diesel from './images/diesel.png';
import danila from './images/danila.jpg';
import bootlegers from './images/bootlegers.png';
import nataleck from './images/nataleck.jpg';
import samolet from './images/samolet.png';
import maria from './images/maria.jpg';
import ausi from './images/ausi.jpg';
import refresh from './images/refresh.svg';


import styles from './index.module.css';


const cards = [
  { id: 0, img: maksim, isFounded: false, isOpen: false, name: 'maks' },
  { id: 1, img: sj, isFounded: false, isOpen: false, name: 'maks' },
  { id: 2, img: andrei, isFounded: false, isOpen: false, name: 'andrei' },
  { id: 3, img: diesel, isFounded: false, isOpen: false, name: 'andrei' },
  { id: 4, img: danila, isFounded: false, isOpen: false, name: 'danila' },
  { id: 5, img: bootlegers, isFounded: false, isOpen: false, name: 'danila' },
  { id: 6, img: nataleck, isFounded: false, isOpen: false, name: 'nataleck' },
  { id: 7, img: samolet, isFounded: false, isOpen: false, name: 'nataleck' },
  { id: 8, img: maria, isFounded: false, isOpen: false, name: 'maria' },
  { id: 9, img: ausi, isFounded: false, isOpen: false, name: 'maria' }
];

const CardsTable = () => {
  const [cardsList, setCardsList] = useState(cards);
  const [opened, setOpened] = useState('');
  const [isRotated, setIsRotated] = useState(false);



  const handleClick = (id, name) => {
    const  closeOpenCards = () => {
      let tempArr = cardsList.slice(0);
      const foundedCardIndex = tempArr.findIndex((card) => card.id === id);
      const updatedCard = {
        ...tempArr[foundedCardIndex],
        isOpen: !tempArr[foundedCardIndex].isOpen
      };
      tempArr.splice(foundedCardIndex, 1, updatedCard);
      setCardsList(tempArr);
    }

    if (!!opened && opened !== name) {
      closeOpenCards();
      const closeAllCards = () => {
        const closedCards = cardsList.map((card) => {

          return {...card, isOpen: !!card.isFounded }
        });

        setCardsList(closedCards);
        setOpened('');
      }

      setTimeout(closeAllCards, 500);


      return null;
    }


    if (!!opened && opened === name) {
      const foundedCards = cardsList.map((card) => {

        return ({...card, isOpen: card.name === name || card.isFounded , isFounded: card.name === name || card.isFounded });
      });

      setCardsList(foundedCards);
      setOpened('');

      return null;
    }
    closeOpenCards();

    setOpened(name);
  }

  const handleRefresh = () => {
    const shuffledCards = shuffle(cardsList);
    setCardsList(shuffledCards);
    setIsRotated(!isRotated);
  }

   const cardListHtml = cardsList.map(({img, id, isFounded, isOpen, name}) =>
    <Card img={img} isFounded={isFounded} id={id} onClick={ handleClick } isOpen={isOpen} name={ name }/>
  )
  const pares = cardsList.filter((card) => card.isFounded);

  return(
    <>
      <div className={styles.header}>
        <div>
          <div className={styles.logo}>Игра найди пару</div>
          <div className={styles.content}>
            <div>Пар {pares.length / 2} найдено</div>
          </div>
        </div>

        <div  className={`${styles.image} ${isRotated ? styles.rotate : ''}`}>
          <img src={refresh} alt="" onClick={handleRefresh}/>
        </div>
      </div>
      <div className={styles.table}>
        {cardListHtml}
      </div>
    </>
  );
}

export { CardsTable };
