import BackHomeNavbar from "./BackHomeNavBar";
export default function JPL() {

    return (
      <div>
      <BackHomeNavbar/>
      <br/>
      <br/>
      <br/>
      <section>
        <div style={{display: "flex", justifyContent: "center", background: '#F5FBFF', padding: '30px'}}>
          <img src="./img/jpl.png" style={{height: '30em', width: '50em'}} alt="Chat" />
        </div>
        <div >
          <div style={{display: "flex", justifyContent: "center",background: '#E5F3FD', padding: '30px'}}>
            {/* <p className="section--title">About</p> */}
            <h2 >NASA JPL Research Project: Using Deep Learning to Segment Cell Nuclei in Multiplexed Images</h2>
            </div>
            <div style={{textAlign: 'center', background: '#E5F3FD', padding: '30px'}}>
            <p>During the summer of 2021, I was a ML Research Intern at NASA's Jet Propulsion Laboratory. My project took a slight detour from the typical aerospace endeavors taking place at JPL, and instead focused on the taks of robustly identifying cell nuclei in microscopy images for cancer research. This project was in partnership with the University of Nebraska Medical Center.</p>
            <br/>
            <p>The main probem we were facing was that state of the art computer vision models were not accurately localizing and segmenting cell nuclei in  microscopy images, mainly due to the fact that these nuclei were not very distinct from the background. Often times, CV models were blurring cell nuclei together, or missing them entirely, yielding inaccurate cell counts in images.</p>
            <br/>
            <p>We sought to develop a model that could more accurately detect and count cells by performing the task of background contrast enhancement, along with cell segmentation and counting, all in one pass. To do this, we leveraged the architecture from a well known state of the art segmentation model, <a href='https://lmb.informatik.uni-freiburg.de/people/ronneber/u-net/'>U-NET</a>.</p>
            <br/>
            <p>We created an ensemble network relying on U-NET's architecture so that it simultaneously performed background enhancement. We used a popular background subtraction algorithm, called <a target="_blank" href='https://scikit-image.org/docs/stable/auto_examples/segmentation/plot_rolling_ball.html'>Rolling Ball</a>, to subtract the background of our training data. We used this as a ground truth, and trained a CNN to perform automatic background subtraction. We used this pre-trained CNN in our final ensemble model.
              This involved freezing the CNN's weights, and feeding the outputs of our CNN into the U-NET model. As a result, our raw microscope input images would pass through our ensembled network, and our network would output a masked image containing much more accurate cell counts.
            </p>
            <br/>
            <p>To measure the success of our ensembled model, we measured average precision for cells, where we used a IOU threshold to determine a positive. Our model yielded a two-fold improvement in precision over the state of the art U-NET model with no automatic background enhancement.</p>
            <br/>
            <p>This project greatly improved my skills in working with DNNs, CV models, and creating models from scratch. I was also lucky enough to present this work at the <a target="_blank" href='https://cafcw21.virtualpostersession.org/'>2021 Computational Approaches for Cancer Workshop</a>!</p>
            <br/>
            <p>The final report from my research can be found <a target="_blank" href='https://drive.google.com/file/d/13mUdJfLVLXP7NzcjvtURb7-h-sAbF8tF/view?usp=sharing'>here</a>.</p>
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
  