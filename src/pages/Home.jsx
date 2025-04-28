import heroBg from '../img/283833.jpg';
import { Typewriter } from 'react-simple-typewriter';

const handleType = (number) => {
    // access word count number
    console.log(number);
};

const handleDone = () => {
    console.log(`Done after 5 loops!`)
};

//       <img src={heroBg} alt="" data-aos="fade-in" className="" />
   
const Home = () => {
    return (  <section className="section hero">

    <div className="container" data-aos="fade-up" data-aos-delay="100">
    
     <h2>Udhayavanan Sambath</h2>

     <p>I'm  &nbsp;&nbsp;
     <Typewriter
            words={['Backend Developer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
          </p>
    </div>
    </section>);
};

export default Home;