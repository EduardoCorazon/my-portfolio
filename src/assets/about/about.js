import './about.css'
function About() {
    return (
      <div className='aboutcontainer'>
        <div className ='fullbgleftinit'>
          <h1 className='abouttitle' id='about'>A little bit about me...</h1>
          <div className='aboutcontent'>
            <div className='abouttext'>
            <h3 className='aboutint'>Hello! I'm Eddy</h3>
            <p className='aboutpara'>
            I’m a highly passionate Cybersecurity professional with 2+ years of experience with a background in electric circuits, computer/software design, and vulnerability analysis. Cybersecurity is huge part of our society for both individuals and companies regardless of size. Vulnerabilities are all around us from our electric grid and water sources to our home networks and electronic devices, hence the need to implement good security practices and secure our network and data. To me cybersecurity is more than a need, it’s a genuine passion. I’m always eager to build on my academic foundations of both electrical engineering and computer science in order to design and create new tools or gain deeper knowledge on how things operate. In cybersecurity there’s a plethora of things to learn each with their own respective aspects and everyday there’s something new. I’m currently heading to my Junior year of college and I’m actively looking to gain more experience in my field and provide my all. If you would like to contact me, please feel free to reach out in the contact tab!
            </p>
            </div>
            <div className='fullpic'>
              <img className='fullbodypic' src={require('./FullBodyshot.jpg')} alt="image not found"/>
            </div>
          </div>
        </div>
        <div className='tra1'/>
      </div>
    );
  }
  
  export default About;
  