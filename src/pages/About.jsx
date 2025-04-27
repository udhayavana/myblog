import heroBg from '../img/hero-bg.jpg';

const About = () => {
    return (
        <>
        <section id="about" className="about section light-background">
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <p>I am working as Technical lead at LTIMindtree with 10 Yrs of Experience in Php,MySql.</p>
          </div>
    
          <div className="container" data-aos="fade-up" data-aos-delay="100">
    
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4">
                <img src="#" className="img-fluid" alt="No image" />
              </div>
              <div className="col-lg-8 content">
                <h2>Web Developer.</h2>
                <p className="fst-italic py-3">
                  ******
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>14 Oct 1989</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 9176026812</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Chennai, India</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>35</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.Tech</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>udhayavana@gmail.com</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available in Weekends</span></li>
                    </ul>
                  </div>
                </div>
                <p className="py-3">
                   ****
                 </p>
              </div>
            </div>
    
          </div>
    
        </section>


<section id="skills" className="skills section light-background">

  <div className="container section-title" data-aos="fade-up">
    <h2>Skills</h2>
    <p>*****</p>
  </div>
  <div className="container" data-aos="fade-up" data-aos-delay="100">

    <div className="row skills-content skills-animation">

      <div className="col-lg-6">

        <div className="progress">
          <span className="skill"><span>Php</span> <i className="val">90%</i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progress">
          <span className="skill"><span>Laravel</span> <i className="val">70%</i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progress">
          <span className="skill"><span>JavaScript</span> <i className="val">50%</i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

      </div>

      <div className="col-lg-6">

        <div className="progress">
          <span className="skill"><span>React Js</span> <i className="val">40%</i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className="progress">
          <span className="skill"><span>MySql</span> <i className="val">80%</i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

      </div>

    </div>

  </div>

</section>
</>


    
    );
};

export default About;