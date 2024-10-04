import m from './Navbar.module.css';

function Navbar() {
    return (
        <nav>
            <div className={`${m.item} ${m.active}`}>
                <a>Профиль</a>
            </div>
            <div className={m.item}>
                <a>Лента</a>
            </div>
            <div className={m.item}>
                <a>Сообщения</a>
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