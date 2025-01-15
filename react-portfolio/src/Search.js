import React from 'react';
import './PortfolioProject.css'; // Different CSS for project pages
import Portfolio from './Portfolio';

const Search = () => {
  return (
    <div>
       
<div class="hero-section-wrapper">
  <div class="hero-section">
    <img src="/search/hero.png" alt="Search screen on laptop" />
    <header>
      <div class="intro">
        <p class="overline">If you only read this...</p>
        <h1>
          I led design on Toast's <span class="highlight">web-based operating system</span> and 
          <span class="highlight">increased search usage by 12%.</span>
        </h1>
        <p>
          Toast, a restaurant point of sale system, also has a "back office" web application for managers and operators.
          Over time, the navigation had become more and more cluttered, making it hard to find crucial functionality. I redesigned
          search, making it significantly easier to use, and paving the way for more navigation changes (2024).
        </p>
      </div>
    </header>
  </div>
</div>


    <div className="case-study-content">

        <p className="overline">Now, let's get into it!</p>
        <p>
        In early 2024, I took over the Toast Web Operating System, which included search, navigation, and homepage. Many teams over
        many years had attempted to improve the navigation and system experience of Toast Web, but due to shifting priorities, the 
        vast number of stakeholders (every team! literally!), and user pain in change management they hadn't been able to get much traction. 
        I spearheaded digestible but still impactful changes to the search experience that significantly improved the findability of pages
        within Toast Web.

        </p>
       
        <p className='overline'>Goals & Challenges</p>
        <div className='card-row'>
            <p className='card'>
            

            Help users find what they need in Toast Web, whether they're looking for something for the first time or the thousandth time
            </p>
            <p className='card'>
           
            Enhance search with embedded features that save users time and allow them to complete simple tasks more easily
            </p>
        </div>
       
        <p>
        <span className="highlight">Overtime, Toast Web had ballooned in size and scope</span>
        </p>
        <p>
           The Toast back office sees a <em>massive</em> amount of usage, with 1B+ page views per year, the majority of them being on desktop.
           Originally, the back office only existed to support the point of sale, as it was where operators went to set up their menus.
           Over time, tons of features were added such as reporting, takeout and delivery, and more recently things like inventory, catering,
           and marketing.
        </p>
        <img src="/search/usage.png" alt="Existing gifting flow" />

        <p>
            The navigation had not meaningfully changed in the past 10 years, with a "link farm" that is woefully out of date, but that users
            are very attached to, and then a "side nav" that simply had more and more items to it. Some of the items in the nav are nested,
            but still both listed at the top level (e.g. Payroll is also part of Employees). Over time, this has made it harder and harder
            for people to find things.
        </p>
        <img src="/search/waves.png" alt="Existing gifting flow" />


        <p>
        <span className="highlight">Users were forced to memorize the nav structure</span>
        </p>


        <p>
            Through extensive research, we determined there were 2 primary personas in regards to navigation:
        </p>

        <div className='card-row'>
            <p className='card'>
            <strong>Task focused</strong>
            People who value fast fixes, and are likely to search to find things, but they're
            also quick to call support, which is very expensive for Toast.
            </p>
            <p className='card'>
            <strong>Map builders</strong>
            People who take time learning the system, some even going so far as to write down
                    routes to  find certain pages that they need, but aren't intuitive. They will only search as a last resort,
                    and dislike it immensely because they want to know where things live. This group is extremely resistant to change.
            </p>
        </div>

         <p>
        <span className="highlight">Toast had 2 painful change management experiences earlier in the year</span>
        </p>

        <p>
        <span className="highlight">Multiple, conflicting experiences were all live at the same time</span>
        </p>
        <img src="/search/global-nav.jpg" alt="Existing gifting flow" />

        
       
        <p className='overline'>What I did</p>
        <p>
        <span className="highlight">Algined with literally every team at Toast</span>
        </p>
        <p>
            I worked with our AI foundations team to determine requirements and nice-to-haves for this tool, that would make it easy for me and other non-technical folks to use.
        </p>
        <img src="/admin-tool/brainstorm_sketch.png" alt="Manager Close Out" />
        
        
        <p>
        <span className="highlight">The Donut</span>
        </p>
        <p>
            I worked very closesly with engineering, designing this draft live while talking with them. This project moved extremely fast, and I was able to rely on front end 
            engineers to make smart decisions about the UI.
        </p>

        <img src="/admin-tool/draft.png" alt="Manager Close Out" />
        
        <p>
        <span className="highlight">Actual search improvements</span>
        </p>
       
        <img src="/admin-tool/langfuse-trace.png" alt="Manager Close Out" />  

        <p>
            The team runs a weekly evaluation to determine the % of accuracy for Sous Chef. Within answers that are considered "correct" (they pull the right data), we determine
            a subset of responses that fail in terms of formatting. We also collect feedback on a 1-5 scale from users within the app.
             Those responses then become the basis for the admin tool work.
        </p>

        <img src="/admin-tool/final.png" alt="Manager Close Out" />  
        <p>
           Then, myself or other experts use the admin tool to adjust the metadata that Sous Chef uses when creating responses. We're able to add definitions or knowledge
           to Sous Chef (basically tell it what it needs to know), as well as add instructions for formatting. For instance, Sous Chef often defaults to one dimension (sales),
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
             Non-engineers are making changes to the metadata for Sous Chef
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
            made it possible for all types of folks to contribute to the output of Sous Chef and helps us move a lot faster.
         </p>
       


    </div>
     {/* Include Portfolio component but exclude this project */}
     <Portfolio exclude="/admin-tool" />
    </div>
  );
};

export default Search;
