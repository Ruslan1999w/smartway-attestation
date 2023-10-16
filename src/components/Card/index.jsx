import styles from './index.module.css';

import smartwayLogo from './apple-icon.png';

const Card = ({
  img,
  id,
  isFounded=false,
  isOpen,
  onClick,
  name,
}) => {

  const renderFront = () => {

    return(<img src={img} />)
  };
  const renderBack = () => (
    <img src={smartwayLogo}/>
  );

  const renderCard = () => {
    if (isOpen) {
      return renderFront();
    } else {
      return renderBack();
    }
  }

  return(
    <div className={styles.cardWrapper} onClick={() => onClick(id, name)}>
      {renderCard()}
    </div>
  );
}

export { Card };
