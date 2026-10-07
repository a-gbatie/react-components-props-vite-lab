function About({ image, about }) {
    return (
        <aside>
            <img src={image} alt="About" />
            <p>{about}</p>
        </aside>
    );
}

export default About
