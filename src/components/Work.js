import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Work = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
        <br></br>
    <section className="work" id="work">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Work Experience</h2>
                        <br></br>
                        
                        <h3>1. Graduate Professional Assistant, Kennesaw State University (Aug 2024 - May 2025)</h3>
                        <p> 
                            <ul>
                            <li>Research different user-centric methods for mental health mobile app development.</li>
                            <li>Demonstrated communication skills, Developed responsive websites and web applications</li>
                            <li>Provided technical support for design tools and software, Supported faculty in conducting usability research studies</li>
                            <li>Documented technical lab reports for system evaluations</li>
                            </ul>
                        </p>
                        <h3>2. Full Stack Developer, Sahyadri Aerospace (Aug 2021 - Aug 2023)</h3>
                        <p> 
                        <ul>
                            <li>Developed a web-based customer support portal to replace the previous email-based system, enabling
                            customers to raise and track support issues.</li>
                            <li>Utilized <b>React</b> for the front-end, <b>Node.js</b> and <b>Express</b> for back-end services, and <b>MongoDB</b> for data
                            storage, ensuring seamless performance and scalability.</li>
                            <li>Utilized strong leadership skills to guide a cross-functional team towards successful completion of complex
                            tasks in agile development methodologies.</li>
                            <li>Reduced issue resolution time by 30%, from 3 days to 2 days, significantly improving customer satisfaction.</li>
                            <li>Revamped the admin user interface for edge computing device management in factories, transitioning from wired to wireless connections; achieved a reduction in installation time by 40% and enhanced operational flexibility.</li>
                            <li>Leveraged <b>Vue.js</b> for front-end development, <b>Node.js</b> for back-end services, <b>Ajax</b> for dynamic content loading, and Shell Scripting for device setup automation.</li>
                        </ul>
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
    </div>
  )
}
