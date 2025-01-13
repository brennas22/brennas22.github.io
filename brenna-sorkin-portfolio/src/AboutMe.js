import React from 'react';
import './App.css';

const AboutMe = () => {
  return (
    <div>
       
<div className="container">
                <header className="hero">
                  <div className="profile-pic">
                    <img src="/about-me.png" alt="Profile" />
                  </div>
                  <div className="intro">
                    <p className="overline">If you only read this...</p>
                    <h1>
                      I love <span className="highlight">eating pasta, making cakes, cuddling with my cat, and knitting.</span> Also,
                       <span className="highlight">I have an amputated finger</span>, so I care a lot about accessibility.
                    </h1>
                    
                  </div>
                </header>
              </div>


    <div className="case-study-content">

       
        <img src="/design_process.png" alt="Existing gifting flow" />
        
        <p>
        I have experience in prouct design, strategy, and research research, as well as pixel pushing and front end development (I built this website!). 
        My expertise in accessibility intersects with my love for design, as I am passionate about ensuring that all people have equal access to services and products.
        </p>

        <p>
        I graduated magna cum laude from Northeastern University in Boston, MA with a degree in UX Design and Computer Science. I graduated with University Honors 
        Program Distinction, Honors in the College of Arts, Media, and Design, and as a member of Northeastern's Huntington 100 (a program that
         "honors outstanding students for achievements which are commensurate with the university’s mission, ideals, values, and Academic Plan.").
        </p>
       

        <p className='overline'>Other fun stuff</p>
    

        <p>
        Outside of work, I spend a lot of time cooking and baking and purchasing too many condiments that all have to be refrigerated. I love making cakes, and bring them to
        every social gathering. I also knit! I live in Cambridge, MA with my husband and absolute gremlin of a cat, Atticus.
         </p>
       


    </div>
   
    </div>
  );
};

export default AboutMe;
