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
            Cybersecurity engineer with 3+ years of experience helping companies implement secure policies by explaining and developing security solutions in ways business owners understand. Background in electrical engineering and computer science with strong verbal and presentation skills.
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
  