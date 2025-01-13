import React from 'react';
import './PortfolioProject.css'; // Different CSS for project pages
import Portfolio from './Portfolio';

const ManagerCloseOut = () => {
  return (
    <div>
        <div className="hero-section">
            
             <img src="/close-out/hero.png" alt="Manager Close Out" />
            
            <p className="overline">Built @ Toast, 2023</p>
            <h1>
                Overhauling the <span className="highlight"> Manager "End of Day".</span>
            </h1>           
        </div>
   
    <div className="case-study-content">
        <p className="overline">Why</p>
        <p>
             Toast decided to overhaul all of the point of sale (POS) experience to a new design system, known as POS 3.0, which I saw as an opportunity to improve the end of day experience for managers, which was particularly clunky and time consuming, resulting in users wasting time on unnecessary tasks and ultimately being confused.
        </p>
        <p>
        The restaurant manager's end-of-day close-out process involves reconciling sales, counting cash, reviewing staff performance, ensuring checks are reconciled, and securing the premises. This process ensures financial accuracy, identifies discrepancies, and prepares the restaurant for the next day. Streamlining it reduces stress, minimizes errors, and enhances overall operational efficiency.
        </p>
        <p className='overline'>Goals & Challenges</p>
        <div className='card-row'>
            <p className='card'>
            Reduce time on task for managers closing their restaurant at the end of the night.
            </p>
            <p className='card'>
            Increase task completion for individual close out tasks, such as closing open checks and clocking out employees.
            </p>
        </div>
        <p>
        <span className="highlight">It was unclear what was required vs optional</span>
        </p>
        <p>
            The existing experience used yellow andred and warning icons, making the user feel like they'd done something wrong even when they'd just opened the page for the first time.    
        </p>
        <img src="/close-out/existing.png" alt="Manager Close Out" />
        <p>
        <span className="highlight">Restaurants have individual ways of operating</span>
        </p>
        <p>
        Restaurants have individual ways of operating, so not every task will apply to every restaurant, but the current experience did not allow for flexibiltiy and restaurants are were able to customize the experience as they need.
        This led them to largely ignore the information on the screen, which was a missed opportunity.
        </p>
        <p>
        <span className="highlight">Dependencies on other parts of the experience</span>
        </p>
        <p>
        The close out day experience pulls together actions from all different parts of the POS. 
        Completing tasks required users to go off into other screens and then be routed back to close out day, 
        which created a disjointed experience.
        </p>

        <p className='overline'>What I did</p>
        <p>
        <span className="highlight">Conducted research & achieved alignment</span>
        </p>
        <p>
        There wasn't a clear understanding of how managers were using the end of day experience in their restaurants, especially across different service models (cafe/bakery, full service restaurant, bar, etc.). I staged (fancy word for shadow in a restaurant!) at a number of locations, often staying until 2 am to observe close out procedures and ask GMs questions.
        I presented these findings to the team and we agreed that with the UI refresh, it would be worthwhile to change the UX as well. 
        We knew there would be user pain associated with the re-skin due to the degree to which restaurants operate on muscle memory, so it seemed like the right time to actually teach them a new, improved process.
        </p>
        <img src="/close-out/research.png" alt="Manager Close Out" />
        <p>
        I then mapped the dependencies within the end of day experience. I created a working group with each of the designers on the teams who's work connected to end of day, as a way to maintain alignment and share ideas. We discussed opportunities for the close out day experience to connect with time entries (when employees clock in and out), reporting, our mobile app, and more.
        </p>
        <p>
        <span className="highlight">Evaluated hypotheses</span>
        </p>
        <p>
        I began exploring a few different concepts in Figma, centered around the idea of making it clear what tasks remain incomplete, and what steps should be taken to complete them. I prioritized information density and experimented with different tag colors and styling to help managers understand the state of their restaurant at a glance.
        </p>
        
        <img src="/close-out/draft1.png" alt="Manager Close Out" />
        <p>

I started with a modular approach, thinking of close out day like a dashboard. My hypothesis was that a dashboard-style view would enable users to mentally chunk the information into digestible pieces and allow users to mentally categorize where to start.

I continued my restaurant visits and began showing these early drafts to operators to get their feedback. While users found the additional information and context useful for understanding the state of things, they informed me that they think of close out as a checklist, so a linear layout might be more intuitive.
        </p>
        <img src="/close-out/draft2.png" alt="Manager Close Out" />
        <p>
        <span className="highlight">Incorporated feedback into final designs</span>
        </p>
        <p>

I incorporated this feebdack, opting for a more vertical approach, but keeping the augmented information. I also explored different mechanisms for breaking apart the existing auto-resolve feature. Originally the feature clocked out all employees and closed all paid checks without adding a tip, but the combined functionality was intimidating and many users didn't even know about the feature.
        </p>
        <img src="/close-out/final1.png" alt="Manager Close Out" />
        <img src="/close-out/final2.png" alt="Manager Close Out" />
        <p>
            I also added an "end day" button, that at first actually didn't have any functionality, but it made users feel like the process was complete, which had been a major painpoint.
        </p>
        <p className='overline'>Outcomes</p>
        <div className='card-row'>
            <p className='card'>
             <span className="highlight">26%</span>
            reduction in time on task
            </p>
            <p className='card'>
            <span className="highlight">134%</span>
            increase in auto-resolve usage
            </p>
            <p className='card'>
            <span className="highlight">59%</span>
            increase in deposit usage
            </p>
            <p className='card'>
             <span className="highlight">9%</span>
             Increase in rate of users clsoing the cash drawer
            </p>
            <p className='card'>
            <span className="highlight">38%</span>
            End day button usage (new feature!)
            </p>
            <p className='card'>
            <span className="highlight">40%</span>
            Decrease in related support tickets
            </p>
            
        </div>
        
        <p className='overline'>A new approach</p>
        
        <p>
        At the beginning of this project, the brief was to simply to update the style of the screen to use the new POS 3.0 design system. However, I identified a number of paper cuts and greater problems and determined that this was an opportunity to improve the user experience beyond just the look and feel.

This project also exposed the interdependencies between different experiences within the Toast ecosystem. While these features are owned by different teams, from the user perspective they are deeply interconnected. This project kicked off closer collaboration between teams whose work impacts the end of day experience, laying the groundwork for a more cohesive experience.
        </p>
       

    </div>
     {/* Include Portfolio component but exclude this project */}
     <Portfolio exclude="/manager-close-out" />
    </div>
  );
};

export default ManagerCloseOut;
