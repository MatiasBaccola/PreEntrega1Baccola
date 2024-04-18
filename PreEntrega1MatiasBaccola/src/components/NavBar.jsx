import AList from "./AList";
import CartWidget from "./CartWidget";
import './NavBar.css';


function NavBar() {
    return (
        <div className="navbar__container">
            <AList />
            <CartWidget />

        </div>
    );
}

export default NavBar;