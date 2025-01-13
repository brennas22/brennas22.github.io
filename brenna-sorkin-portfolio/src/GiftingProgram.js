import React from 'react';
import './PortfolioProject.css'; // Different CSS for project pages
import Portfolio from './Portfolio';

const GiftingProgram = () => {
  return (
    <div>
        {/* <div className="hero-section">
             <img src="/gifting-program/hero.png" alt="Manager Close Out" />
            <p className="overline">Built @ Drizly, 2022</p>
            <h1>
                Leading <span className="highlight">Drizly's Gifting Program.</span>
            </h1>           
        </div> */}

        {/* <div className="container">
                        <header className="hero">
                          <div className="portfolio-pic">
                          <img src="/gifting-program/hero.png" alt="Manager Close Out" />

                          </div>
                          <div className="intro">
                            <p className="overline">If you only read this...</p>
                            <h1>
                            I led design on the initative to redo the end to end gifting experience at Drizly. This included the sender discovery and purchase execution 
        all the way through the recipient receiving the gift. I coordinated with 4 consumer engineering squads, retailer operations, brand & marketing, 
        and leadership to achieve overwhelmingly successful program enhancements.
                            </h1>
                            
                          </div>
                        </header>
                      </div> */}
<div class="hero-section-wrapper">
  <div class="hero-section">
    <img src="/gifting-program/hero.png" alt="Gifting Program" />
    <header>
      <div class="intro">
        <p class="overline">If you only read this...</p>
        <h1>
          I overhauled <span class="highlight">Drizly's Gifting Program.</span>
        </h1>
        <p>
          I led the initiative to redo the end-to-end gifting experience at Drizly, including sender discovery and
          purchase execution all the way through the recipient receiving the gift. I worked across 4 engineering squads,
          retailer operations, brand & marketing, and leadership to achieve program enhancements (2022).
        </p>
      </div>
    </header>
  </div>
</div>


    <div className="case-study-content">
        {/* <p className="overline">If you only read this...</p>
        <p>
        I led design on the initative to redo the end to end gifting experience at Drizly. This included the sender discovery and purchase execution 
        all the way through the recipient receiving the gift. I coordinated with 4 consumer engineering squads, retailer operations, brand & marketing, 
        and leadership to achieve overwhelmingly successful program enhancements.
        </p> */}

        <p className="overline">Now, let's get into it!</p>
        <p>
        In early 2022, gifting emerged as a top use case for Drizly's platform, but the existing experience created a lot of friction and did not surprise or delight customers because it was not differentiated from the core on-demand experience.    
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
        <img src="/gifting-program/ios_final.png" alt="Manager Close Out" />
        <p>
            As part of streamlining the experience, we made recipient email address an optional field and also removed the option to make a gift a surprise,
            thereby significantly reducing the chance of the recipient not being home to get their gift.
        </p>

        <p className='overline'>Outcomes</p>
        <div className='card-row'>
            <p className='card'>
             <span className="highlight">10%</span>
             Reduction in drop off at the gift details step
            </p>
            <p className='card'>
            <span className="highlight">1%</span>
            Reduction in void rate resulting from the removal of surprise gifts (where the recipient might not be home)
            </p>
            
           
            
        </div>
        <p>
        By revamping the foundational checkout piece of the experience we were able to convert more users who were already quite far along in the funnel, but had been boucing due to friction.
        </p>

        
       

        <p className='overline'>Approach</p>
        <p>
        <span className="highlight">Help senders find the right product & store</span>
        </p>
        <p>
        Prior to this work, shoppers in search of a gift had to browse the same way as non-gift shoppers: by slogging through literally 
        thousands of available products. While we can debate the merits of this for any user, for gifters this was particularly a problem 
        since they are not shopping for themselves and are often operating on only a limited idea of what their recipient would enjoy.
        </p>
        <p>
        We created solutions for both shoppers who need just a little guidance and those who need complete hand-holding throughout the process. 
        For independent shoppers, we needed to create a strong "gifting home" - a hub where they could go for gifting-specific products and 
        guidance.
        </p>
        <img src="/gifting-program/new_gift_web.png" alt="Manager Close Out" />
        <p>
        We created a space on web and apps that felt differentiated from the regular, on-demand shopping experience, and we directed shoppers 
        to it as soon as they indicated an interest in gifting (on web, this meant redirecting them from the address capture page).
        </p>
        <p>
        Here, tailroed products are surfaced and organized by occasion, rather than product category, which research showed is how our gifters 
        tend to think. If a user shops by occasion, the relevant card selection will carry through to checkout, maintaining a coherent thread 
        throughout the experience.
        </p>
        <img src="/gifting-program/guided_quiz.gif" alt="Manager Close Out" />
        <p>
        For shoppers who needed more help finding a product, we designed a guided gift quiz, which allowed us to recommend specific products 
        and gave us space to highlight some fun brand moments.
        </p>
        
        <p className='overline'>Outcomes</p>
        <div className='card-row'>
            <p className='card'>
             <span className="highlight">$4.72</span>
             Average spend increase through gifting hub
            </p>
            <p className='card'>
            <span className="highlight">4%</span>
            Increase in conversion for gift senders
            </p>
            <p className='card'>
            <span className="highlight">49%</span>
            V1 guided gift quiz completion rate
            </p>
        </div>


        <p className='overline'>Approach</p>
        <p>
        <span className="highlight">Revamp recipient experience</span>
        </p>
        <p>
        While removing surprise gifting eliminated some issues with recipient not home, poor recipient experience was still contributing to 
        dissatisfaction and unsuccessful gifts. A large part of the issue was due to communication of expectations, namely that recipients must be home at the time of delivery and that they will need to show ID.
        </p>
        <img src="/gifting-program/emails.png" alt="Manager Close Out" />
        <p>
        The easiest thing to tackle right off the bat was our transactional email communications - that is, non-marketing emails related 
        to product actions.
        </p>
        <img src="/gifting-program/existing_recipient_web.png" alt="Manager Close Out" />
        
        <p>
        We transformed what was previously a single page form with no context into a clearly laid out experience with key information 
        appropriately highlighted. We also brought in the digital card that the sender chooses to increase the personalized feel.
        </p>
        <img src="/gifting-program/recipient_experience.gif" alt="Manager Close Out" />
        <p>
        We also added functionality to allow gift recipients to change their address if the sender messed it up slightly. If the address is too
         far away to be delivered by the same store we have to void it, but we if the address was close, just not quite right, it can be 
         delivered by the same store. Each CX contact costs Drizly over $1, so being able to manually adjust
          these addresses is a big win. (For context - a 5% reduction in contact rate saves Drizly nearly $10,000).
        </p>

        <p className='overline'>Outcomes</p>
        <div className='card-row'>
            <p className='card'>
             <span className="highlight">68%</span>
             Wrong address isues that can be resolved by the same store
            </p>
            <p className='card'>
            <span className="highlight">23%</span>
            Higher conversion rate, turning recipient into shopper, if they received a card with their gift
            </p>
        </div>

        <p className='overline'>A new approach</p>

        <p>
        When this initiatve launched, there wasn't consensus across the funnel on the consumer side, let alone across the whole organization, 
        which needed to work together to see gifting from 50,000 ft. By leading cross-discipline brainstorms and workshops, folks became aware 
        of what was happening in other parts of the company and were able to coordinate with the relevant people to achieve symbiosis on
         particular areas of the program.
         </p>
        <p>
            By having design as the central voice in the initiative, I was able to keep a vision of the entire user flow from top to bottom and ensure that the shopper experience was coheisve across these many different facets.
        </p>


    </div>
     {/* Include Portfolio component but exclude this project */}
     <Portfolio exclude="/gifting-program" />
    </div>
  );
};

export default GiftingProgram;
