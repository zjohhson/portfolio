import BackHomeNavbar from "./BackHomeNavBar";
export default function ChatNYT() {

    return (
      <div>
      <BackHomeNavbar/>
      <section id="ChatNYT" className="about--section">
        <div className="about--section--img">
          <img src="./img/ChatNYTdemo.gif" style={{height: '30em', width: '40em'}} alt="Chat" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            {/* <p className="section--title">About</p> */}
            <h1 className="skills-section--heading">ChatNYT</h1>
            <br/>
            <br/>
            <p>It is no secret that Wordle took the world by storm in 2022. It allowed people to connect with their friends, family, and peers through a little bit of healthy competition. Personally, I look forward to challenging my partner who lives across the country in a Wordle match everyday (even though I more often than not lose 😔). </p>
            <p>As somebody who hates to lose, coupled with being an AI-optimist who likes to throw AI at trivial problems, I wanted to see how I could leverage Generative AI to help me in my daily Wordle endeavors. I mean, considering that there are more than <b><i>158,000</i></b> 5-letter words in the English language, how am I supposed to guess just one of them in 6 tries? Preposterous. Ridiculous.</p>
            <p>Introducing <a href='https://chatnyt-1acc81fc0a7a.herokuapp.com/'>ChatNYT</a>, a ChatGPT assisted Wordle game! This game allows the user to prompt ChatGPT for a hint that connects their most previous guess to the hidden word <i>at most once</i>. The hope is that the user can narrow down the possible list of 5 letter words that they are guessing.</p>
            <p>We know that <i><a href='https://papers.nips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html'>Language Models are Few Shot Learners</a></i>. For this project, I ask ChatGPT to connect the hidden word with the most previous guess (in nontrivial ways, i.e. other than the fact that they are both 5 letter words), and feed in several examples to allow ChatGPT to perform few-shot in-context learning in the hopes to make the hints more helpful. </p>
            <p>This app was created using React and the OpenAI API (GPT-3.5).</p>
          </div>
          <br/>
          <br/>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <a href='https://chatnyt-1acc81fc0a7a.herokuapp.com/' target='_blank'>
                <div>
            <button  style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}className='btn btn-outline-primary'>Play ChatNYT!</button></div></a>
        </div>
        </div>
      </section>
      </div>
    );
  }
  