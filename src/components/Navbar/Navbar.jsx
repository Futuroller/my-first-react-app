import { NavLink } from 'react-router-dom';
import m from './Navbar.module.css';

function Navbar() {
    return (
        <nav>
            <div className={m.item}>
                <NavLink to='/content' className={navData => navData.isActive ? m.active : m.item}>Профиль</NavLink>
            </div>
            <div className={m.item}>
                <a>Лента</a>
            </div>
            <div className={m.item}>
                <NavLink to='/dialogs' className={navData => navData.isActive ? m.active : m.item}>Сообщения</NavLink>
            </div>
            <div className={m.item}>
                <a>Музыка</a>
            </div>
            <div className={m.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;