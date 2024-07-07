import Socials from '../../components/socials/Socials'
import classes from './Home.module.css'
// import profilePic from '../../assets/profile.jpg'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <>
            {/* <div className={classes['section_pic-container']}>
                <img src={profilePic} alt="Ayo profile picture" />
            </div> */}
            <div className={classes.section_text}>
                <span className={classes.hello}>HEY! I&apos;M</span>
                <h3 className={classes.name}>Williams Ayo</h3>
                <span className={classes.job}>fullstack developer</span>
                <div className={classes.hero_btn}>
                    <Link to='contact' spy={true} smooth={true} offset={-80} duration={100} className={'secondary-btn'}>
                        <span>Say hello</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
                    </Link>
                    <Link to='about' spy={true} smooth={true} offset={-80} duration={100} className={'text-btn'} >
                        <span>About me</span>
                    </Link>
                </div>
            </div>
            <Socials classes={classes} >
                <li>
                    <p className={classes.sm_text}>follow me</p>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 19.1642L18.2071 12.9571L16.7929 11.5429L12 16.3358L7.20711 11.5429L5.79289 12.9571L12 19.1642ZM12 13.5143L18.2071 7.30722L16.7929 5.89301L12 10.6859L7.20711 5.89301L5.79289 7.30722L12 13.5143Z"></path></svg>
                </li>
            </Socials>
        </>
    )
}

export default Home
