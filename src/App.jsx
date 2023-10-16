import { CardsTable } from "./components/CardsTable/index.jsx";

import styles from './index.module.css';

function App() {

  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.mainContainer}>
            <CardsTable />
        </div>
      </div>
    </>
  )
}

export default App
