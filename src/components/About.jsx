function About({
  image = "https://via.placeholder.com/215", //if parent provides an image prop use it, otherwise use this default image
  about
}) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  )
}

export default About