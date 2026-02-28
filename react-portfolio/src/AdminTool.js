import React from 'react';
import './PortfolioProject.css'; // Different CSS for project pages
import MorePortfolio from './MorePortfolio';

const AdminTool = () => {
  return (
    <div>
       
<div class="hero-section-wrapper">
  <div class="hero-section">
    <img src="/admin-tool/hero.png" alt="Gifting Program" />
    <header>
      <div class="intro">
        <p class="overline">If you only read this...</p>
        <h1>
          I created a tool <span class="highlight">to refine AI outputs</span> and I actively<span class="highlight"> contribute to Toast's codebase!</span>
        </h1>
        <p>
          While working on Toast's AI-powered assistant for restaurant operators ("Toast IQ"), it became apparent that there was a need
          to refine the metadata that the AI was using to generate answers. I created a tool that allows non-technical team members to contribute
          code that significantly impacts the performance of the asisstant (2024).
        </p>
      </div>
    </header>
  </div>
</div>


    <div className="case-study-content">

        <p className="overline">Now, let's get into it!</p>
        <p>
        In 2024, I was leading design on Toast IQ (formerly known as "Sous Chef"), the first AI-powered assistant built for restaurant operators, which aims to help folks make better, more
        informed decisions about their business. While we were able to improve the accuracy of the assistant (referring to the specific ability for the agent to
        retrieve the correct data) we were struggling to design the outputs in a way that were most useful. I created an internal tool that allowed non-engineers to refine
        the answers from the assistant, giving crucial time back to the engineering team and directly impacting the product experience.
        </p>
       
        <p className='overline'>Goals & Challenges</p>
        <div className='card-row'>
            <p className='card'>
            Make the best use of the valuable and limited time of the Toast IQ team
            </p>
            <p className='card'>
            Curate the output from the AI assistant to give users the best possible answers to their questions
            </p>
        </div>
       
        <p>
        <span className="highlight">Refining outputs was extremely time intensive</span>
        </p>
        <p>
            When we embarked on creating the admin tool, the previous process for improving an output was extremely manual, time consuming, and involved a lot of back and forth.
            Essentially, when using Toast IQ, if I noticed an output that should be changed I had to use prompt engineering to get to the outcome I wanted (trial and error),
            then send screenshots of every step to the team's tech lead, who would then do his own prompting to actually update the metadata in the codebase.
        </p>
        <img src="/admin-tool/annotated_brainstorm.png" alt="Existing gifting flow" />
        <p>
        <span className="highlight">Knowledge was trapped in peoples' heads</span>
        </p>
        <p>
            The Toast IQ team had a ton of subject matter expertise, but there was no way to get the information into the assistant. Often, crucial insights would be lost to 
            random Slack threads or conversations, because there wasn't any way to actually incorporate them.
        </p>
       
        <p className='overline'>What I did</p>
        <p>
        <span className="highlight">Whiteboard session with AI foundations team</span>
        </p>
        <p>
            I worked with our AI foundations team to determine requirements and nice-to-haves for this tool, that would make it easy for me and other non-technical folks to use.
        </p>
        <img src="/admin-tool/brainstorm_sketch.png" alt="Manager Close Out" />
        
        
        <p>
        <span className="highlight">Draft solutions</span>
        </p>
        <p>
            I worked very closesly with engineering, designing this draft live while talking with them. This project moved extremely fast, and I was able to rely on front end 
            engineers to make smart decisions about the UI.
        </p>

        <img src="/admin-tool/draft.png" alt="Manager Close Out" />
        
        <p>
        <span className="highlight">Actually use the tool</span>
        </p>
       
        <img src="/admin-tool/langfuse-trace.png" alt="Manager Close Out" />  

        <p>
            The team runs a weekly evaluation to determine the % of accuracy for Toast IQ. Within answers that are considered "correct" (they pull the right data), we determine
            a subset of responses that fail in terms of formatting. We also collect feedback on a 1-5 scale from users within the app.
             Those responses then become the basis for the admin tool work.
        </p>

        <img src="/admin-tool/final.png" alt="Manager Close Out" />  
        <p>
           Then, myself or other experts use the admin tool to adjust the metadata that Toast IQ uses when creating responses. We're able to add definitions or knowledge
           to Toast IQ (basically tell it what it needs to know), as well as add instructions for formatting. For instance, Toast IQ often defaults to one dimension (sales),
           when operators actually want multiple pieces of data in a table.
        </p> 
        <img src="/admin-tool/metadata.png" alt="Manager Close Out" />  
        <p>
           By adjusting the information passed to the LLM, we can craft responses that address the exact needs of our users. We also save a ton of time in cycles -- non-engineers
           can now put up pull requests directly in Github, which are then approved by the team, putting metadata quickly back into the product.
        </p> 
        <img src="/admin-tool/output.png" alt="Manager Close Out" />    


       

        <p className='overline'>Outcomes</p>
        <div className='card-row'>
            <p className='card'>
             <span className="highlight">Daily!</span>
             Non-engineers are making changes to the metadata for Toast IQ
            </p>
            <p className='card'>
            <span className="highlight">100+</span>
            PRs put up in the first few months
            </p>
            
           
            
        </div>

        <img src="/admin-tool/feedback.png" alt="Manager Close Out" />    

        <p>
        We've been able to move significantly faster, and customers are noticing the difference! Our quality measures are steadily improving. Note: responses often move
        from no data to mixed when they're not formatted right, and then from mixed to great when the admin tool is used.
         </p>
        <img src="/admin-tool/accuracy.png" alt="Manager Close Out" />    

        
       

        <p className='overline'>A new approach</p>

        <p>
            This project marked a big shift in how we think about AI at Toast and how we plan to incorporate the subject matter expertise across Toast. The admin tool
            made it possible for all types of folks to contribute to the output of Toast IQ and helps us move a lot faster.
         </p>
       


    </div>
     {/* Include Portfolio component but exclude this project */}
     <MorePortfolio exclude="/admin-tool" />
    </div>
  );
};

export default AdminTool;
