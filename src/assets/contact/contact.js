import './contact.css'
function Contact() {
    return (
      <div className='contcontainer' id='contact'>
          <div className='fullbgcont'>
          <h2 className='maintitle' style={{color: 'black', fontSize: '4vmin'}}>Contact</h2>
            <div className='contcontent'>
              <h3 className='contlink'>Email: <a className='actcontlink' href="mailto: corazoneduardo@att.net">corazoneduardo@att.net</a></h3>
              <h3 className='contlink'>LinkedIn: <a className='actcontlink' href="https://www.linkedin.com/in/eduardo-corazon-21b362222/">eduardo-corazon</a></h3>
              <h3 className='contlink'>Insta: <a className='actcontlink' href="https://www.instagram.com/eduardo.antonio.corazon/">eduardo.antonio.corazon</a></h3>
              <h3 className='contlink'>Phone: <a className='actcontlink'>(281) 386-9057</a></h3>
            </div>
          </div>
      </div>
    );
  }
  
  export default Contact;
  