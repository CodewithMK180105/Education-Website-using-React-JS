import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1>We Ensure a better Education for a better world</h1>
        <p>
            On our cutting edge cirriculum is designed to empower students with the knowledge, skills and expiriences need to excel in the dynamic field of education.
        </p>
        <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero