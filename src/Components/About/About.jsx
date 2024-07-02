import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptate nemo eos autem impedit, perspiciatis recusandae, repellat eum debitis sit sunt eius. Explicabo sapiente nobis provident repellendus, obcaecati, minus odio voluptatibus quasi, unde possimus incidunt. Vitae, cumque?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptate nemo eos autem impedit, perspiciatis recusandae, repellat eum debitis sit sunt eius. Explicabo sapiente nobis provident repellendus, obcaecati, minus odio voluptatibus quasi, unde possimus incidunt. Vitae, cumque?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptate nemo eos autem impedit, perspiciatis recusandae, repellat eum debitis sit sunt eius. Explicabo sapiente nobis provident repellendus, obcaecati, minus odio voluptatibus quasi, unde possimus incidunt. Vitae, cumque?</p>
      </div>
    </div>
  )
}

export default About


// import './About.css'
// import about_img from '../../assets/about.png'
// import play_icon from '../../assets/play-icon.png'
// import PropTypes from 'prop-types';

// const About = ({ setPlayState }) => {
//   return (
//     <div className='about'>
//       <div className="about-left">
//         <img src={about_img} alt="About" className='about-img' />
//         <img src={play_icon} alt="Play" className='play-icon' onClick={() => setPlayState(true)} />
//       </div>
//       <div className="about-right">
//         <h3>ABOUT UNIVERSITY</h3>
//         <h2>Nurturing Tomorrows Leaders Today</h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptate nemo eos autem impedit, perspiciatis recusandae, repellat eum debitis sit sunt eius. Explicabo sapiente nobis provident repellendus, obcaecati, minus odio voluptatibus quasi, unde possimus incidunt. Vitae, cumque?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptate nemo eos autem impedit, perspiciatis recusandae, repellat eum debitis sit sunt eius. Explicabo sapiente nobis provident repellendus, obcaecati, minus odio voluptatibus quasi, unde possimus incidunt. Vitae, cumque?</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptate nemo eos autem impedit, perspiciatis recusandae, repellat eum debitis sit sunt eius. Explicabo sapiente nobis provident repellendus, obcaecati, minus odio voluptatibus quasi, unde possimus incidunt. Vitae, cumque?</p>
//       </div>
//     </div>
//   );
// };

// // Define prop types
// About.propTypes = {
//   setPlayState: PropTypes.func.isRequired,
// };

// export default About;
