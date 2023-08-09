import style from './NavBar.module.css'
import logo from '../../assets/images/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    const [navExpanded, setNavExpanded] = useState(false)

    const openNav = () => {
        setNavExpanded(!navExpanded)
    }
    const closeNav = () => setNavExpanded(false)
    return (
        <header>
            <nav className={style.nav}>
                <Link to={'/'}><img className={style.logo} src={logo} alt={logo} /></Link>
                <ul 
                className={navExpanded ? `${style.navLinks} ${style.expanded}` : style.navLinks}
                >
                    <li>
                        <span  
                            onClick={() => {closeNav()}}
                            className="font-light text-sky-700"
                        >Home</span>
                    </li>
                    <li>
                        <span 
                            onClick={() => {closeNav()}}
                            className="font-light text-sky-700"
                        >About</span>
                    </li>
                    <li>
                        <span 
                            onClick={() => {closeNav()}}
                            className="font-light text-sky-700"
                        >Features</span>
                    </li>
                    <li>
                        <span 
                            onClick={() => {closeNav()}}
                            className="font-light text-sky-700"
                        >Services</span>
                    </li>
                    <li className={style.hiddenButtons}>
                        <button>Login</button>
                        <button className="p-2 bg-sky-700 px-8 rounded-lg text-white my-8">Sign Up</button>
                    </li>
                </ul>
                <div className='flex justify-around items-center gap-5' id={style.hideButtons}>
                    <button>Login</button>
                    <button className="p-2 bg-sky-700 px-8 rounded-lg text-white my-8">Sign Up</button>
                </div>
                <div 
                    className={navExpanded ? `${style['icon-three']} ${style['active-three']}` : style['icon-three']}
                    onClick={openNav}
                >
                    <div className={`${style['hamburger']} ${style['hamburger-three']}`}></div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar