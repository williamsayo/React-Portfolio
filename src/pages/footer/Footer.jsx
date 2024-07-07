import Socials from '../../components/socials/Socials'
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <>
            <Socials classes={classes} />
            <div className={classes.copyright}>
                <span>
                    &copy; 2024 Handcrafted by me, coded with Visual Studio
                </span>
            </div>
        </>
    )
}

export default Footer
