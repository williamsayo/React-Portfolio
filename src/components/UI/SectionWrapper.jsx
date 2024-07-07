function SectionWrapper(props) {
    return (
        <section id={props.id} {...props} >
            {props.children}
        </section>
    )
}

export default SectionWrapper
