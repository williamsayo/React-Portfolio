import ImageSlider from './ImageSlider'
import classes from './ProjectsCard.module.css'
import { useEffect, useState } from "react"

const ProjectCard = ({ project }) => {
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex === project.image.length - 1 ? 0 : prevIndex + 1))
    }, 10000);

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <li className={classes["project-card"]}>
        <a href={project.link}>
          <ImageSlider classes={classes} >
            {project.image.map((image, index) => (
              <img key={index} className={classes['project-image']}
                src={image} alt={project.title} style={{ translate: `${-100 * imageIndex}%` }} />
            ))}
          </ImageSlider>
          <div className={classes.overlay}>
            <div className={classes.logo}>
              {
                project.language.map((lang, index) => (
                  <img key={index} src={lang.img} alt={lang.name} />
                ))
              }
            </div>
            <div className={classes.details}>
              <h3>{project.title}</h3>
              <span>{project.description}</span>
            </div>
          </div>
        </a>
      </li>
      <div className={classes["slider-nav"]}>
        {
          project.image.map((_, index) => (
            <button key={index} className={`${index === imageIndex ? classes.active : ''}`} onClick={() => setImageIndex(index)}></button>
          ))
        }
      </div>
    </div>
  )
}

export default ProjectCard
