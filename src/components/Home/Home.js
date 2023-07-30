import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import styles from "./Home.module.css";

const Home = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <Card className={styles.home}>
      <h1>You have been entered!</h1>
      <Button onClick={ctx.onLogout}>Exit</Button>
    </Card>
  );
};

export default Home;
