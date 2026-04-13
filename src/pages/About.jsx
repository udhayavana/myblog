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

        <div className="mb-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h4 className="text-xl font-bold text-gray-800 mb-2">PHP</h4>
          <p className="mb-2"><strong className="text-blue-600">Usage:</strong> Server-side web development, backend logic, API development</p>
          <p><strong className="text-blue-600">Advantages:</strong> Widely used, large community, cost-effective hosting, rapid development</p>
        </div>

        <div className="mb-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h4 className="text-xl font-bold text-gray-800 mb-2">Laravel</h4>
          <p className="mb-2"><strong className="text-blue-600">Usage:</strong> PHP framework for building robust web applications, MVC architecture</p>
          <p><strong className="text-blue-600">Advantages:</strong> Elegant syntax, built-in tools, security features, scalable</p>
        </div>

        <div className="mb-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h4 className="text-xl font-bold text-gray-800 mb-2">JavaScript</h4>
          <p className="mb-2"><strong className="text-blue-600">Usage:</strong> Client-side scripting, interactive web features, DOM manipulation</p>
          <p><strong className="text-blue-600">Advantages:</strong> Runs in browsers, versatile, asynchronous programming, rich ecosystem</p>
        </div>

      </div>

      <div className="col-lg-6">

        <div className="mb-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h4 className="text-xl font-bold text-gray-800 mb-2">React JS</h4>
          <p className="mb-2"><strong className="text-blue-600">Usage:</strong> Building dynamic user interfaces, single-page applications</p>
          <p><strong className="text-blue-600">Advantages:</strong> Component-based, virtual DOM, reusable components, performance</p>
        </div>

        <div className="mb-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <h4 className="text-xl font-bold text-gray-800 mb-2">MySQL</h4>
          <p className="mb-2"><strong className="text-blue-600">Usage:</strong> Relational database management, data storage and retrieval</p>
          <p><strong className="text-blue-600">Advantages:</strong> Reliable, ACID compliance, SQL standard, widely supported</p>
        </div>

      </div>

    </div>

  </div>

</section>
</>


    
    );
};

export default About;