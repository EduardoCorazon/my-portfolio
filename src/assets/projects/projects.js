import './projects.css'
function Projects() {
    return (
      <div className='projcontainer' id='projects'>
          <div className='fullbgleft'>

          <h2 className='maintitle'>Some of My Projects</h2>
          <div className='projcontent'>

              <div className='smartfactory'>
                  <h3>SMART Factory</h3>
                  <p>Designed a smart pump efficiency system as a solution to the freezing water temperatures during the Texas Freeze of 2021</p>
                  <img className='projimg' src={require('./smartfactory.webp')} alt="image not found"/>
              </div>


              <div className='homepi'>
                  <h3>Project Orbiter</h3>
                  <p>Created a customizable RaspberryPi assistant for Music playback with voice integration using google speech to text API and other python libraries</p>
                  <img className='projimg' src={require('./respeaker.png')} alt="image not found"/>
              </div>



              <div className='smartroom'>
                  <h3>SRS Project</h3>
                  <p>Created a custom Smart Room Security system to protect on site assets for when cameras are disabled or attacked</p>
                  <img className='projimg' src={require('./smartroomf2.png')} alt="image not found"/>
              </div>



              <div className='webdev'>
                  <h3>GIS Club</h3>
                  <p>Developed a serious of Web Apps to help the Houston Community varing from community health, college, and voting</p>
                  <img className='projimg' src={require('./nutribasef.jpg')} alt="image not found"/>
              </div>







          </div>
          </div>
          <div className='floorbgleft'/>
          <div className='traf'/>
          


      </div>
    );
  }
  
  export default Projects;
  