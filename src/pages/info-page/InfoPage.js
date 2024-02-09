import { useState } from "react";
import Checkbox from "../../components/common/buttons/checkbox";
import LoadingDiv from "../../components/common/templates/loading-div";
import StandardBtn from "../../components/common/buttons/standard-btn";
import styles from "./InfoPage.module.css";

function InfoPage() {
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  function onClickStayLoggedIn() {
    setStayLoggedIn(!stayLoggedIn);
  }

  function handleClick() {
    alert("Hallo von der Info Seite");
  }

  return (
    <div className={styles.mainContainer}>
      <div>This is my homepage</div>
      <LoadingDiv />
      <Checkbox isChecked={stayLoggedIn} onClick={onClickStayLoggedIn} />
      <StandardBtn text={"Klick mich!"} onClick={handleClick}></StandardBtn>
      <button onClick={handleClick}>Klick mich!</button>
    </div>
  );
}

export default InfoPage;
