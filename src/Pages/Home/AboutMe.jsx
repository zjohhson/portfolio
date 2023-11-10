export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About</p> */}
          <h1 className="skills-section--heading">About Me</h1>
          <br/>
          <p className="hero--section-description">I am a Master's of Engineering student in MIT's Computer Science and Artificial Intelligence Laboratory. I work with the <a href='https://www.csail.mit.edu/research/decentralized-information-group-dig'>Decentralized Information Group (DIG)</a>, where I am researching algorithmic methods for red-teaming Large Language Models, in order to detect adversarial input (jailbreak) prompts.</p>
          <p className="hero--section-description">I am incredibly passionate about AI Ethics, Safety, and Responsibility! I am a Lead Author for MIT's <a href='https://sciencepolicyreview.org/leadership/'>Science Policy Review</a>. I am also part of MIT's <a href='https://computing.mit.edu/cross-cutting/social-and-ethical-responsibilities-of-computing/'>Social and Ethical Responsibilities of Computing</a>, where I am researching detection methods for LLM-driven misinformation.</p>
          <p className="hero--section-description">Outside of my research and studies, I enjoy marathon running, backpacking, skiing, camping, and pretty much anything else outdoors!</p>
        </div>
      </div>
    </section>
  );
}
