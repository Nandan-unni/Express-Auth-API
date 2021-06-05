import "./index.css";
import "./tablet.css";
import "./mobile.css";
import Modal from "../Modal";

const ThemeChooser = ({ handleClose, opened }) => {
  return (
    <Modal onClose={handleClose} opened={opened}>
      Choose Theme
    </Modal>
  );
};

export default ThemeChooser;
