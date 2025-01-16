import React from 'react';
import './PortfolioProject.css'; // Different CSS for project pages
import Portfolio from './Portfolio';
import { Link } from 'react-router-dom';

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
            In 2023 and 2024 Toast unfortunately had 2 instances of rollouts that were extremely painful for customers. The first was a
            $0.99 fee that was attached to online orders automatically, and paid by the guest to Toast. Restaurants felt like Toast was grabbing
            a piece of their pie and the fee was ultimately rolled back. The second was "POS 3.0", which was a full reskin of Toast's point of 
            sale software. While there were key improvements (humble brag, check out <Link to="/manager-close-out" >Manager End of Day</Link> for
            some of my own POS 3.0 work), users did not feel prepared for the change - especially because it was mainly messaged to owners
            and the message never made its way down to servers on the floor, who rely primarily on muscle memory. Ultimately pepole did come 
            to like the new experience, but adapting was extremely difficult.
        </p>

        <p>
        <span className="highlight">There are a lot of conflicting priorities impacting the space</span>
        </p>
        <p>
            Quite literally <em>every single</em> team at Toast was a stakeholder for the operating system, and without clear guidelines
            there was frequent jockeying for space. This created an experience for users where there were too many ways to get around
            <em>and</em> advertisements and upsells were mixed into the experience (secretly!)
        </p>

        <p>
           In the image below you can see a purple highlight on everything from the homepage that is navigation (takes the user somewhere else)
           and in orange everything that is an upsell or ad (whether the user knows it or not)
        </p>
        <img src="/search/conflict.png" alt="Existing gifting flow" />
            
        
       
        <p className='overline'>What I did</p>
        <p>
        <span className="highlight">Introuced "The Donut" (aka drove alignment)</span>
        </p>
        <p>
           To even begin overhauling the Toast Web back office, there needed to be alignment on the scope of the team and what we were trying
           to tackle. I introduced the concept of the "donut", which is the outer ring ouf a webpage. The donut became the guiding framework
           by which we started to tackle problems (and to understand which problems to leave to individual product teams).
          </p>

        {/* <img src="/search/donut.png" alt="the areas encompassing the operating system" /> */}
        <img src="/search/donut-approach.png" alt="the areas encompassing the operating system" />

       
        
        <p>
        <span className="highlight">Actual search improvements</span>
        </p>

        <p>
            We had found that Toast's existing search was being used essentially as a last resort, and that trust in it was extremely low.
            As a result, we added thousands of search terms and links that were previously resulting in dead ends. We also streamlined
            the layout of the homepage to make the access points to search and navigation clearer, plus we introduced autocomplete to help users
            get to the right pages faster.
        </p>

        <img src="/search/autocomplete.png" alt="Manager Close Out" />  
        <p>
          In the results, we created filters to allow users to search for only a certain type of result and, maybe most excitingly, we 
          created "widgets" that allow users to take action directly in search. These widgets are designed to tackle activities that come up
          often, but can be difficult to get to in a pinch.
        </p>
        <p>
          For example, we now let users change the quantity of items or mark them in/out of stock just by searching for the item name. Other
          widgets include employee details, qr code setup, active discounts, and more!
        </p>
        <img src="/search/search-widget.png" alt="Manager Close Out" />  
          
       

        <p>
        <span className="highlight">Custom quick actions / pinned pages</span>
        </p>
        <p>
          When we looked at the core jobs to be done (JTBD) across the system, we saw that they are a lot more complex than when the site was
          originally designed, and although they largely can be separated into front of house, back of house, and back office tasks, 
          there are a huge number of tasks to do, and on top of that, every restaurant has different aspects they prioritize
          (visual by Maggie Price).
        </p>
        
        <img src="/search/jtbd.png" alt="the areas encompassing the operating system" />
        

        <p>
          This led to the creation of "custom pins". We already had the concept of quick actions - a section on the homepage
          with a few preset links to the most visited pages - and it was shown to be the most used form of navigation (over 50% of page
          views in Toast Web are to a single report). However, we noticed that restaurants often have a few key tasks that are crucial to
          them, so we introduced a feature to allow them to easily pin those pages and access them any time. This feature is still in beta
          as of late 2024, but user testing and early rollout have shown strong signals!
        </p>

        <img src="/search/pin.png" alt="the areas encompassing the operating system" />



        <p className='overline'>Outcomes</p>
        <div className='card-row'>
            <p className='card'>
             <span className="highlight">12%</span>
             Increase in search per user rate
            </p>
            <p className='card'>
            <span className="highlight">Basically 0%</span>
            Rate of dead end searches 
            </p>
            <p className='card'>
            <span className="highlight">19%</span>
            Improvement in position of clicked result 
            </p>    
        </div>
   
        <p>
          We've been able to successfully drive more traffic to search and, crucially, users who are searching are more successfully finding
          what they need. We also minimized the pain of change by only changing exactly what we needed to test, and not making any additional
          changes without extremely strong evidence.
        </p>
        
       

        <p className='overline'>A new approach</p>

        <p>
            This project kicked off a whole new wave of work on the operating system "donut," and paved the way for running more, small
            experiments that improve the user experience, without sending our customers spiraling due to needing to adapt to the changes.
         </p>
       


    </div>
     {/* Include Portfolio component but exclude this project */}
     <Portfolio exclude="/search" />
    </div>
  );
};

export default Search;
