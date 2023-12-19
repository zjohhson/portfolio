import BackHomeNavbar from "./BackHomeNavBar";
export default function Jailbreak() {

    return (
      <div>
      <BackHomeNavbar/>
      <br/>
      <br/>
      <br/>
      <section>
        <div >
          <div style={{display: "flex", justifyContent: "center",background: '#E5F3FD', padding: '30px'}}>
            {/* <p className="section--title">About</p> */}
            <h2>Generative Adversarial Learning for Automatic Red-Teaming against Large Language Model Jailbreak Attacks</h2>
            </div>
            <div style={{textAlign: 'center', background: '#E5F3FD', padding: '30px'}}>
            <h3>See full project proposal <a href='https://drive.google.com/file/d/1A7fVwS_VQZAYP8dN3wMqcdA_pfkH1IyH/view?usp=sharing'>here</a>.</h3>
            <br></br>
            <p>Jailbreaking’ Large Language Models (LLMs) — feeding in prompts that bypass the model’s safety
guardrails and cause it to produce a harmful output — is a critical safety issue impacting the world of
Generative AI, and yet is impossible to avoid completely due to its dynamic nature. While popular Generative
AI language models such as ChatGPT aim to minimize outputting hate speech, misinformation, violent text,
instructions on building weapons, etc., they are not entirely successful. Despite developers implementing as
many safeguards as possible to defend against known adversarial attacks, bad actors are constantly devising
new and creative ways to jailbreak LLMs. Thus, the pool of jailbreak prompts for popularly used LLMs is
always growing.</p><br/>
<p>Red-teaming — the practice of stress-testing a model via input prompts to discover its weak spots and
possible areas of attack — is a popular method for identifying and defending against adversarial jailbreak
prompts that can jailbreak a LLM. Considering AI’s rapid development, coupled with its current lack of a
structured regulation or auditing framework, red-teaming is the industry standard for guaranteeing safety
and robustness of Generative AI models.</p><br/>
<p>This approach, however, is largely static in nature. Red-teaming is conventionally done by gathering
talented developers to manually brainstorm potential jailbreak prompts, and then test these on LLMs.
Prompts that successfully yield a jailbreak attack are stored in some central database, and are used to
fine-tune the LLM so as to not fall victim to these prompts in future iterations.</p><br/>
<p>There are several pitfalls to this approach. For example, it is unscalable as the number and creativity
of jailbreak prompts devised by adversaries increases. According to OpenAI’s page on its Red-Teaming
Network, they conduct a rigorous application process to select a pool of skilled experts in fields such as law,
cybersecurity, biology, anthropology, computer science, etc. to robustly and effectively discover weak spots
in ChatGPT. This process of carefully selecting applicants for each iteration of GPT, along with manuall
probing the model to find its weak points, is an incredibly time and resource intensive process that may be
difficult to uphold as more models and iterations of LLMs are developed.</p><br/>
<p>For my Master's of Engineering thesis project, I aim to improve the safety of Large Language Generative AI Models by addressing the
 pitfalls of current red teaming approaches by creating a dynamic and algorithmic framework
for generating and detecting unforeseen jailbreak prompts. Specifically, I use a Generative Adversarial
Network (GAN) to achieve two outcomes: 1) leveraging an adversary to generate a rich and dynamic dataset
of jailbreak prompts that can be used for enhancing the safety of a currently existing LLM, and 2) utilizing
these adversarial generations to train a discriminator model that can robustly identify unforeseen jailbreak
prompts for LLMs. This approach is both scalable and robust. By algorithmically generating jailbreak
prompts as opposed to manually via a team of experts, we can greatly increase the scale and creativity
of the jailbreak prompts that we use for red-teaming. This allows us to create a rich dataset, including
unconventional and unforeseen jailbreak prompts, which will in turn yield more robust and safe defense
against adversarial attacks against LLMs.</p><br/>
<p>Currently (as of Fall 2023), this project is ongoing, and as more progress is made, it will be updated here.</p>
          </div>
          {/* <div style={{display: 'flex', justifyContent: 'center'}}>
          <a href='https://chatnyt-1acc81fc0a7a.herokuapp.com/' target='_blank'>
                <div>
            <button  style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}className='btn btn-outline-primary'>Play ChatNYT!</button></div></a>
        </div> */}
        </div>
      </section>
      </div>
    );
  }
  