import classes from './About.module.css'
// import mePic from '../../assets/profile-1.png'
import mePic from '../../assets/profile-1.png'
import CV from '../../assets/CV.pdf'
import Button from '../../components/button/Button'

const About = () => {
    return (
        <>
            <header className='section-header'><p>More</p> about me</header>
            <div className={classes.section_container}>
                <div className={classes['section_pic-container']}>
                    <img src={mePic} alt="profile picture" className={classes.me} />
                </div>
                <div className={classes.section_details}>
                    <div className={classes.detail_heading}>
                        <h3>I&apos;m a passionate <p>fullstack developer</p></h3>
                    </div>
                    <div className={classes.detail_text}>
                        <p>
                            I am a motivated and versatile individual, always eager to take on new challenges.
                            With a passion for learning I am dedicated to delivering high-quality results,
                            With a positive attitude and a growth mindset.
                            I am ready to make a meaningful contribution and achieve great things.
                        </p>
                        <div className={classes.btn_group}>
                            <Button className={'secondary-btn'}>
                                <a href={CV}>
                                    <span>Download CV</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path></svg>
                                </a>
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default About