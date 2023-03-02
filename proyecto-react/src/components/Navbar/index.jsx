import styles from "./navbar.module.css";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import CartWidget from "../CartWidget";

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <h1>Tienda Coca-Cola</h1>
      <div className={styles.menu}>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>Inicio</Button>
          <Button>Comprar</Button>
          <Button disabled>Contacto</Button>
        </ButtonGroup>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
