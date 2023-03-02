import styles from "./cartwidget.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const index = () => {
  return (
    <div className={styles.cartWidget}>
      <div>1</div>
      <ShoppingCartIcon />
    </div>
  );
};

export default index;
