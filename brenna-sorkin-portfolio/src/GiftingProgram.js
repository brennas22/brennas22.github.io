import React from 'react';
import './PortfolioProject.css'; // Different CSS for project pages
import Portfolio from './Portfolio';

const ManagerCloseOut = () => {
  return (
    <div>
        <div className="hero-section">
            
             <img src="/gifting-program/hero.png" alt="Manager Close Out" />
            
            <p className="overline">Built @ Drizly, 2022</p>
            <h1>
                Leading <span className="highlight">Drizly's Gifting Program.</span>
            </h1>           
        </div>
   
    <div className="case-study-content">
        <p className="overline">Why</p>
        <p>
        In early 2022, gifting emerged as a top use case for the platform, but the existing experience created a lot of friction and did not surprise or delight customers because it was not differentiated from the core on-demand experience.    
        </p>
        <p>
        I led design on the initative to redo the entire experience. This included the sender discovery and purchase execution 
        all the way through the recipient receiving the gift. I coordinated with 4 consumer engineering squads, retailer operations, brand & marketing, and leadership to achieve overwhelmingly successful program enhancements.
        </p>
        <p className='overline'>Goals & Challenges</p>
        <div className='card-row'>
            <p className='card'>
            Establish Drizly as the go-to platform for beverage & alcohol gifting by delivering a best-in-class gifting experience for senders + recipients.
            </p>
            <p className='card'>
            Make Drizly a first choice for more shopping occasions; grow “non-core” (where core = 60-mins-or-less) orders to ⅓ of all gross bookings $.
            </p>
        </div>
       
        <p>
        <span className="highlight">It is difficult to shop for someone else</span>
        </p>
        <p>
        When sending a gift on Drizly, the gift sender had to select an item for their recipient, but they might not know what that person likes to drink, or they might only have a limited idea (e.g. "my friend loves whiskey, but I don't - what's the difference between bourbon and rye?").   
        </p>
        <img src="/gifting-program/existinggift.gif" alt="Existing gifting flow" />
        <p>
        <span className="highlight">Friction during gift purchasing</span>
        </p>
        <p>
        Once a sender has managed to pick out an item, there were a number of obstacles to actually completing the purchase. Sending a gift required knowing the recipient's exact address, email, and phone number. Oftentimes recipients weren't home to receive their gifts or didn't have ID; if they were able to get the delivery, it was often wrapped poorly.
        </p>
        <img src="/gifting-program/hierarchy_issues.png" alt="Existing gifting flow" />

        <p>
        <span className="highlight">Misalignment of teams and effort</span>
        </p>
        <p>
        With the instructions from on high to completely burn down the gifting program and rebuild it, there was a scramble for teams from all across the organization to start new projects. These projects often were coordinated with one another through Product and business needs, but not through the lens of the user. Making improvements to the overall experience would require these teams to all work in sync to prioritize the user flow from top to bottom.
        </p>
        <span className="highlight">Legal and regulatory constraints</span>
        <p>
        Drizly is a dual-sided marketplace which connects shoppers with local liquor stores. In the US, the three tier system means that a business must be one of supplier, distributor, OR, retailer, but never more than one. Drizly technically exists outside of this system, merely facilitating purchases, but not actually executing them. As such, Drizly cannot ever hold money and cannot select a store for a user to shop from - they must always make that choice themselves. As a result, there are interesting design constraints as far as how we can direct the user to make the ideal choice.
        </p>

        <p className='overline'>What I did</p>
        <p>
        <span className="highlight">Achieved alignment</span>
        </p>
        <p>
        With the instructions from on high to completely burn down the gifting program and rebuild it, there was a scramble for teams from all across the organization to start new projects. These projects often were coordinated with one another through Product and business needs, but not through the lens of the user. Making improvements to the overall experience would require these teams to all work in sync to prioritize the user flow from top to bottom.
       </p>
        <img src="/gifting-program/journey.png" alt="Manager Close Out" />
        <p>
        I coordinated with our program manager to plan and lead a day-long onsite comprised of leadership from all over the org, including Product, Engineering, Retailer Operations, Brand, and others. We mapped the entire experience, layering in data and insights from everyone in the room, which helped us understand the gaps in the experience. This onsite laid the groundwork for all future gifting work and helped align high-level stakeholders. </p>
        <p>
        <img src="/gifting-program/brainstorm.png" alt="Manager Close Out" />
        <p>

After leaders across Drizly had a shared understanding of the problems in the existing gifting experience, I facilitated 3 brainstorm sessions with people from across the entire organization. Where the onsite was comprised of members of leadership, these brainstorms served as a way for the boots-on-the-ground team members who deal with gifting every day to share their perspectives. The ideas generated in these brainstorms and the subsequent affinity mapping of opportunity areas became the concepts around which we prioritized and designed.
        </p>
        <span className="highlight">Prioritized opportunities</span>
        </p>
        <p>
        Though many opportunities were identified, we needed to make sure we weren't putting all our eggs in one basket or biting off more than we could chew. In order to actually make headway on improving gifting, we needed to prioritize. For my part, I see it as my role (roll*) to always be the voice of the user. I collaborated with my counterparts to understand the business and operations implications, but I always kept as my North Star the experience that the gift user would have throughout.
        </p>
        <p>
We conducted a number of user research studies to examine the sender & recipient experiences, learn from our customer service team in-depth, and even observe how users shop in store, not on Drizly. I conducted a competitor / comparator analysis to understand what features of our competitors were appealing and that we should consider adopting.
        </p>
        <div className='card-row'>
            <p className='card'>
            Streamline info entry
            </p>
            <p className='card'>
            Digital occasion cards
            </p>
            <p className='card'>
            Remove surprise gifts
            </p>
            <p className='card'>
            Make email optional
            </p>
            <p className='card'>
            Transform emails
            </p>
            <p className='card'>
            Collect gifting intent
            </p>
            <p className='card'>
            Recipient experience
            </p>
            <p className='card'>
            Shop by gift occasion
            </p>
            <p className='card'>
            Personalized gifting quiz
            </p>
            
        </div>

        <p className='overline'>Approach</p>


        <p>
        <span className="highlight">Streamline gift checkout</span>
        </p>
        <p>
        The foundational piece of the experience was the ability to actually checkout and send a gift succesfully. 
        Digging into our data and user research revealed some key problems:
        </p>
        <div className='card-row'>
            <p className='card'>
             <span className="highlight">14%</span>
            of gift senders entered their own email address
            </p>
            <p className='card'>
            <span className="highlight">17%</span>
            Drop off at gift details step of checkout
            </p>
            <p className='card'>
            <span className="highlight">3x</span>
            the contact rate is for gift vs non-gift orders
            </p>
           
            
        </div>
        <p>
        Shoppers were confusing their own information with the recipient's, partially due to poor hierarchy and layout and also partially because many gift senders do not know their friend's/family's email address - just their phone number.
        </p>
        <img src="/gifting-program/giftcheckout_loop.gif" alt="Manager Close Out" />
        <p>
        Where before, information was mixed together between sender and recipient without any clear deliniation or explanation of next steps, now it is separated into clear sections with copy reinforcing the process. We moved to a more "single page checkout" experience, which allows users to enter and review information all in one place.
        </p>
        <p>
        On iOS, we kept a multi-step approach due to technical constraints, but we regrouped the information to allow for more 
        concise navigation through the process.
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
