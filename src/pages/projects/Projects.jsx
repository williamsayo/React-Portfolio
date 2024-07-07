import classes from './Projects.module.css'
// import { useState } from 'react'
import ProjectCard from '../../components/UI/ProjectCard'
import { selectedWorks } from '../../util/utilities'
// import { selectedWorks } from '../../util/utilities'

const Projects = () => {
    const filteredProjects = selectedWorks
    // const [filteredProjects, setFilteredProjects] = useState(selectedWorks);
    // const [currentTab, setCurrentTab] = useState('');

    // const onFilter = (category) => {
    //     if (category === 'all') {
    //         setFilteredProjects(selectedWorks)
    //     } else {
    //         setFilteredProjects(selectedWorks.filter(project => project.category === category))
    //     }
    //     setCurrentTab(category)
    // }

    return (
        <>
            <div className={classes.container}>
                <h3 className='section-header'>
                    <span>My Works</span>
                    <p>Recent projects</p>
                </h3>
                <div className={classes["projects-container"]}>
                    <div className={classes.wrapper}>
                        {/* <ul className={classes["projects-tabs"]}>
                            <li><button onClick={() => onFilter('all')} className={currentTab === 'all' ? classes.current : ''}>all</button></li>
                            <li><button onClick={() => onFilter('web')} className={currentTab === 'web' ? classes.current : ''}>web</button></li>
                            <li><button onClick={() => onFilter('desktop')} className={currentTab === 'desktop' ? classes.current : ''}>desktop</button></li>
                        </ul> */}
                        <ul className={classes['portfolio-list']}>
                            {filteredProjects.map((project, index) => (
                                <ProjectCard key={index} project={project} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
