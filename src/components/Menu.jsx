import buttons from "../data/Buttons";
import MenuButton from "./MenuButton";
import '../styles/menu.css'

const Menu = () => {
    return <div className="menu">
                {buttons.map((b, index) => {
                    return <MenuButton button={b} key={index} />
                })}         
            </div>
};

export default Menu;
