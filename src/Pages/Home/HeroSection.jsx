import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import AssignmentIcon from '@mui/icons-material/Assignment';
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Zach!</p>
          <div id="top">
            <div class="header-content container p-b-2">
             <div class="row bg-white">
               <div class="col-md-10 p-t-2 p-b-2">
                <h1 className="smaller">
                      <span class="typing-words">
                			<span>Graduate Student.</span>
                      <span>Software Developer.</span>
                			<span>Responsible AI Researcher.</span>
                			<span>NLP Engineer.</span>
                			<span>Sociotechnical Thinker.</span>
                		</span>
                </h1>
            </div>
        </div>
    </div>
</div>
<br/>
<br/>
<br/>
<i>MIT Master's of Engineering, Computer Science and Artificial Intelligence Laboratory, Decentralized Information Group, <b>2023-2024</b>.</i>
<i>MIT Bachelor of Science, Computer Science and Engineering, <b>2018-2022</b>.</i>
<br/>
<div className = 'icons'>
  <Link href='https://www.linkedin.com/in/zach-johnson-079b2117a/' target='_blank'>
    <LinkedInIcon style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '50px'}}/>
  </Link>
  <Link href='https://github.com/zjohhson' style={{color: 'black'}} target="_blank">
    <GitHubIcon style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '50px'}}/>
  </Link>
  <Link  href='mailto:zjohnson@mit.edu' style={{color: '#393d76'}}>
    <EmailIcon style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}}/>
  </Link>
  <Link  href='https://drive.google.com/file/d/1_kpj4fKEYUMAeXQNuEOjI4XoLrRwywTW/view?usp=sharing' style={{color: '#5A5A5A'}} target="_blank">
    <AssignmentIcon style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px'}}/>
  </Link>
</div>
        </div>
        {/* <button className="btn btn-primary">Get In Touch</button> */}
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
    
  );
}
