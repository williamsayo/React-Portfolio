import classes from './Skills.module.css'
import { frontendSkills,backendSkills } from '../../util/utilities'

const Skills = () => {
    return (
        <>
            <div className={classes.container}>
                <header className='section-header'>
                    <span>My skills</span>
                    <p>Here are some of my skills on which I have honed over the years.</p>
                </header>
                <div className={classes['skill-box']}>
                    <ul className={`${classes.skills} ${classes.frontend}`}>
                        <span className={classes.heading}>Frontend</span>
                        {frontendSkills.map((skill, index) => (
                            <li key={index} className={classes.skill}>
                                <span className={classes.skill_name}><img src={skill.image} alt={skill.name} />{skill.name}</span>
                                <div className={classes['skill-bar']}>
                                    <div className={`${classes['skill-per']} ${classes[skill.class]}`} style={{maxWidth:`${skill.skillLevel}`}} level={skill.skillLevel} >
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className={`${classes.skills} ${classes.backend}`}>
                        <span className={classes.heading}>Backend</span>
                        {backendSkills.map((skill, index) => (
                            <li key={index} className={classes.skill}>
                                <span className={classes.skill_name}><img src={skill.image} alt={skill.name} />{skill.name}</span>
                                <div className={classes['skill-bar']}>
                                    <div className={`${classes['skill-per']} ${classes[skill.class]}`} style={{maxWidth:`${skill.skillLevel}`}} level={skill.skillLevel}></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Skills
