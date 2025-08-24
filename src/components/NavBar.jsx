import Footer from '../components/Footer';
import Logo from '../assets/logo.jpg'

const NavBar = () => {
    const showMenu  = () => {
        const menu = document.querySelector('.menu');
        menu.classList.remove('hide');
        menu.classList.add('show');
    }

    const hideMenu  = () => {
        const menu = document.querySelector('.menu');
        menu.classList.remove('show');
        menu.classList.add('hide');
    }

    return (
        <>
            <div className="nav-bar-mobile">
                <a href="https://regexjs-doc.vercel.app"><img src={Logo} alt="Logo" width="1024" height="1024"/> <span className="flex">RegexJS</span></a>
                <span className="menu-btn" onClick={showMenu}>&#9776;</span>
            </div>
            <div className="nav-bar-desktop">
                <a href="https://regexjs-doc.vercel.app" className="logo"><img src={Logo} alt="Logo" width="1024" height="1024"/> <span className="flex">RegexJS</span></a>
                <ul className="nav-links">
                    <li><a href="#intro">Introduction</a></li>
                    <li><a href="#get-started">Get started</a></li>
                    <li><a href="#sample-codes">Sample codes</a></li>
                </ul>
            </div>
            <aside className="menu hide">
                <span className="hide-btn" onClick={hideMenu}>x</span>
                <a href="https://regexjs-doc.vercel.app" className="menu-header"><img src={Logo} alt="Logo" width="1024" height="1024"/> <span className="flex">RegexJS</span></a>
                <ul className="menu-links">
                    <li><a href="#intro">Introduction</a></li>
                    <li><a href="#get-started">Get started</a></li>
                    <li><a href="#sample-codes">Sample codes</a></li>
                </ul>
                <Footer />
            </aside>
        </>
    )
}

export default NavBar