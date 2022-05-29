import './portfolio.css'
function Portfolio() {
    // remember to change color: http://ghchart.rshah.org/<HEX COLOR>/MercenaryHarpy6

    return (
      <div className='portcontainer' id='portfolio'>
        
        <div className='fullbgright'>
          <div>
              <h2 className='maintitle'>Technical Skills</h2>
              <div className='portcontent'>

              <div className='skillslist'>
              <h3 style={{borderBottom: 'solid'}}>Cybersecurity skills</h3>
              <ul>
                <li><a>Experience with the majority of Kali tools including:</a></li>
                <ul>
                    <li><a>Nmap, Netcat, Wireshark</a></li>
                    <li><a>BurpSuite, Metasploit Framework, Autopsy</a></li>
                    <li><a>John the Ripper, Hashcat, Hydra </a></li>
                  </ul>
                <li><a>Experience with CISCO switches and basic Networking</a></li>
                <li><a>Strong Background in these Operating Systems:</a>
                <ul>
                    <li><a>Debian (Ubuntu)</a></li>
                    <li><a>Arch Linux</a></li>
                    <li><a>Windows and Mac OSX</a></li>
                  </ul>
                </li>
                <li><a>Experience with CTS Challenges and Vulnerability Analysis</a></li>
                <li><a>Currently studying for CCNA certification exam and Cyber Defense</a></li>
              </ul>
              </div>

                <div className='tryhackmecontainer'>
                  <img className='tryhackmebox' src={require('./TryHackmeActivity.png')} alt="MyTryHackmeActivity"/>
                  <img className='tryhackmebadge' src="https://tryhackme-badges.s3.amazonaws.com/MercenaryHarpy6.png" alt="TryHackMe"/>
                </div>

                <div className='languageslist'>
              <h3 style={{borderBottom: 'solid'}} >Programming Skills</h3>
              <ul>
                <li><a>Programming Languages:</a>
                <ul>
                    <li><a>Python and C</a></li>
                    <li><a>HTML, CSS, Javascript, ReactJS</a></li>
                    <li><a>Java</a></li>
                  </ul>
                </li>
                <li><a>Experience with Docker and Virtualization</a></li>
                <li><a>Programming for IOT and DevSecOps approach</a></li>
                <li><a>Experience with Arduino, RaspberryPi, and the creation/implementation of electric circuits</a></li>
                <li><a>Currently exploring/learning AWS</a></li>
              </ul>
              </div>

                <div className='githubcontainer'>
                <h3 className='githubtitle'>My github</h3>
                <img className='gitbox' src="http://ghchart.rshah.org/EduardoCorazon" alt="Eduardo Corazon's Github chart" />
                <a className='githublink' href='https://github.com/EduardoCorazon'>EduardoCorazon</a>
                </div>
                

              </div>
          </div>
          </div>

          <div className='floorbgright'/>
      </div>
    );
  }
  
  export default Portfolio;