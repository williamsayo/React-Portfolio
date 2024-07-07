import { useScroll } from '../../hooks/useScroll'
import classes from './Header.module.css'
import { Link } from 'react-scroll'
import { useState } from 'react'
import skillsIcon from '../../assets/skill-level-advanced.svg'
import aboutIcon from '../../assets/about-me.svg'
import projectsIcon from '../../assets/projects.svg'

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const { scrollPos } = useScroll()

    const handleToggleMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <header id='header' className={scrollPos > 250 ? 'sticky' : ''}>
            <nav id={classes.desktop_nav} className={scrollPos > 250 ? classes.sticky : ''}>
                <Link to='home' smooth={true} offset={-80} duration={100} className={classes.logo}>Williams</Link>
                <ul className={classes.nav_links}>
                    <li><Link to='home' spy={true} smooth={true} activeClass={classes.active} offset={-80}
                        duration={100}>Home</Link></li>
                    <li><Link to='about' spy={true} smooth={true} activeClass={classes.active} offset={-80}
                        duration={100}>About</Link></li>
                    <li><Link to='skills' spy={true} offset={-80} activeClass={classes.active}
                        duration={100} smooth={true}  >Skills</Link></li>
                    <li><Link to='projects' offset={-80} activeClass={classes.active}
                        duration={100} spy={true} smooth={true}  >Projects</Link></li>
                    <li><Link to='contact' offset={-80} activeClass={classes.active}
                        duration={100} spy={true} smooth={true}>Contact</Link></li>
                </ul>
            </nav>
            <nav id={classes.hamburger_nav} className={scrollPos > 250 ? classes.sticky : ''}>
                <div className={classes.logo}>Williams</div>
                <div className={classes.hamburger_menu}>
                    <div onClick={handleToggleMenu} className={menuIsOpen ? `${classes.hamburger_icon} ${classes.open}` : classes.hamburger_icon}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <ul className={menuIsOpen ? `${classes.menu_links} ${classes.open}` : classes.menu_links}>
                    <li>
                        <Link to='home' spy={true} smooth={true} offset={-80} duration={100} onClick={handleToggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19Z"></path></svg>
                        </Link>
                    </li>
                    <li>
                        <Link to='about' spy={true} smooth={true} offset={-80} duration={100} onClick={handleToggleMenu}>
                            <img src={aboutIcon} alt="About me" />
                        </Link>
                    </li>
                    <li>
                        <Link to='skills' spy={true} smooth={true} offset={-80} duration={100} onClick={handleToggleMenu}>
                            <img src={skillsIcon} alt="skills" />
                        </Link>
                    </li>
                    <li>
                        <Link to='projects' spy={true} smooth={true} offset={-80} duration={100} onClick={handleToggleMenu}>
                            <img src={projectsIcon} alt="projects" />
                        </Link>
                    </li>
                    <li>
                        <Link to='contact' spy={true} smooth={true} offset={-80} duration={100} onClick={handleToggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
