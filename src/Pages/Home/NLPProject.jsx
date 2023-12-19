import BackHomeNavbar from "./BackHomeNavBar";
export default function NLPProject() {

    return (
      <div>
      <section id="NLPProject" className="about--section--test">
        <BackHomeNavbar/>
        <br></br>
        <div className="about--section--img--test">
          <img src="./img/poster.png" style={{height: '57em', width: '45em'}} alt="Chat" />
        </div>
        <div className="hero--section--content--box about--section--box" style={{height: '55em', width: '45em'}}>
          <div className="hero--section--content">
            {/* <p className="section--title">About</p> */}
            <h2 className="skills-section--heading">Measuring Political Sentiment in Tweets through Weighted Hashtag Analysis</h2>
            <h3><i>MIT 6.8610 Final Project, See final paper <a href='https://drive.google.com/file/d/1YP8lB3kXKD6tXG8ITDzQHiYFL88nDhPM/view?usp=sharing'>here</a>.</i></h3>
            <br/>
            <p style={{fontSize: '16px'}}>Tweets are an abundant source of opinionated statements from the general public, and analyzing the political sentiment behind them could yield important insights, such as predictions on the outcome of a presidential election <a href='https://ieeexplore.ieee.org/abstract/document/7395825?casa_token=uUpkFuB5e5cAAAAA:NBFID3M3gMM_DLeJ9dTUuu22IrnVq5Ad53j7MyCQMeoeUhyk3h7HOTJ8oIeV8Bg_3ns4vTsXtg'>(Ibrahim et al., 2015)</a>. However, many existing analyses of political Tweets either consider hashtags with equal weight as the rest of the text <a href='https://link.springer.com/chapter/10.1007/978-981-19-0475-2_3'>(Varma and Harsha, 2022)</a> or remove them from training data entirely <a href='https://ieeexplore.ieee.org/abstract/document/9091774'>(Harjule et al., 2020)</a>. In this project, we create a political sentiment analyzer that places more weight on the embedding vectors corresponding to hashtagged phrases while conducting political sentiment analysis on Tweets, as hashtags often times convey critical information regarding a person's political affiliations, are shared between people who have similar views, and can contribute a significant amount to understanding political sentiment.</p>
            <br/>
            <p style={{fontSize: '16px'}}>We analyze the impact of scaling hashtagged word embedding vectors through 4 different model architectures for political sentiment classification that span both context-agnostic and context-dependent embeddings: a Naive Word2Vec model trained on our custom Tweet vocabulary with a Logistic Regression head, a <a href='https://radimrehurek.com/gensim/models/word2vec.html'>Pre-trained Word2Vec model</a> with a Logistic Regression head, a Pre-trained Contextualized Embedding Transformer (<a href='https://huggingface.co/docs/transformers/model_doc/distilbert'>DistilBERT</a>) for Sequence Classification model, and a RNN-based Classifier with a Sigmoid activation head for sequence classification.</p>
            <br/>
            <p style={{fontSize: '16px'}}>We use datasets from Kaggle (<a href='https://www.kaggle.com/datasets/manchunhui/us-election-2020-tweets'>Hashtag Donald Trump, Hashtag Joe Biden</a>, <a href='https://www.kaggle.com/code/ratan123/data-analysis-of-tweets-on-australian-election'>Aus Pol 2019</a>) for our political tweets dataset (label '1'), and <a href='https://huggingface.co/datasets/tweet_eval/viewer/irony'>HuggingFace's Tweet Eval Irony dataset</a> for our non-political tweets (label '0').</p>
            <br/>
            <p style={{fontSize: '16px'}}>We find two key discoveries: 1) Scaling the embedding vectors corresponding to hashtagged phrases increases political sentiment analysis for each model across nearly all metrics (Accuracy, Precision, Recall F1 Score) for some k > 1, and 2) Our DistilBERT model performs better than our other models across all metrics, implying that context is important for the task of political sentiment analysis (however, not necessarily context via sequential modeling, as our RNN performs quite poorly compared to our other models).</p>
            <br/>
            <p style={{fontSize: '16px'}}>The Python notebooks used to run the experiments for this project can be found at <a href='https://github.com/zjohhson/6861Project/tree/main'>this Github repository</a>.</p>
          </div>
          {/* <br/>
          <br/> */}
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
  