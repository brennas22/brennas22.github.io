import React from 'react';
import './PortfolioProject.css';
import MorePortfolio from './MorePortfolio';

const ToastIQ = () => {
  return (
    <div>

<div class="hero-section-wrapper">
  <div class="hero-section">
    <img src="/toastiq/hero.png" alt="Toast IQ assistant" />
    <header>
      <div class="intro">
        <p class="overline">If you only read this...</p>
        <h1>
          I built the core system behind <span class="highlight">Toast IQ</span> — bringing an AI assistant from <span class="highlight">0 → GA across 40,000+ restaurant locations.</span>
        </h1>
        <p>
          Toast IQ is an AI assistant embedded across Toast Web and Toast Now. For General Availability, I led the design of its foundational experience — defining how insights, actions, permissions, and in-context guidance work together as a cohesive assistant system.
        </p>
      </div>
    </header>
  </div>
</div>


    <div className="case-study-content">

        <p className="overline">Now, let's get into it!</p>
        <p>
          In 2023, Toast began investing seriously in AI. The goal wasn't to ship a chatbot, it was to build an assistant that could:
        </p>
        <ul>
          <li>Understand restaurant data</li>
          <li>Take real action inside Toast</li>
          <li>Scale across multiple product surfaces</li>
          <li>Launch confidently to all SMB customers</li>
        </ul>
        <p>
          To go GA, we needed a core assistant system that handled insights, actions, permissions, onboarding, and rollout at scale.
        </p>
       

        <p className='overline'>Goals & Challenges</p>
        <div className='card-row'>
            <p className='card'>
              Operators have thousands of small business questions, but lack time and analytical bandwidth.
            </p>
            <p className='card'>
              Even data-savvy operators struggle to translate insight into operational change.
            </p>
            <p className='card'>
              Toast needed to ship a trusted, permission-aware assistant across multiple surfaces, safely and at scale.
            </p>
        </div>

        <p>
          <span className="highlight">The Customer Problem</span>
        </p>
        <p>
          Operators are constantly asking themselves how their businesses could be doing better, and they have thousands of little questions, such as:
        </p>
        <ul>
          <li>Why were sales down yesterday?</li>
          <li>Which items are underperforming?</li>
          <li>Should I adjust staffing this weekend?</li>
          <li>Did that promotion actually work?</li>
        </ul>
        <p>
          But most operators:
        </p>
        <ul>
          <li>Don't have the time to analyze the data</li>
          <li>Don't have formal financial training</li>
          <li>Use a patchwork of tools and spreadsheets</li>
          <li>Struggle to turn insight into action</li>
        </ul>
        <p>
          Even highly data-driven operators hit friction because understanding data is one thing, but operationalizing it is another, entirely.
          Through research, we saw three emerging personas:
        </p>
        <div className='card-row'>
            <p className='card'>
              <strong>Financially Unaware</strong>
              First-time or small-scale owners who rely heavily on intuition.
            </p>
            <p className='card'>
              <strong>DIY-ers</strong>
              Owners who manage finances themselves across many tools and spreadsheets.
            </p>
            <p className='card'>
              <strong>Data-Driven Pros</strong>
              Operators who use reports actively and may delegate tracking to accountants or bookkeepers.
            </p>
        </div>
        <p>
          These personas span a wide spectrum of data literacy, but they all share the same need: <em>Help me understand what's happening... and tell me what to do next.</em>
        </p>

        <p>
          <span className="highlight">The Product Challenge</span>
        </p>
        <p>
          Designing Toast IQ for GA meant solving both a customer problem and a system problem. We needed to:
        </p>
        <ul>
          <li>Build an assistant that works for low-literacy and high-literacy users alike</li>
          <li>Deliver proactive insights without overwhelming the user</li>
          <li>Enable action-taking inside Toast — not just surface metrics</li>
          <li>Respect complex permissions and publishing paradigms</li>
          <li>Launch safely across tens of thousands of restaurants</li>
        </ul>
        <p>
          And we had additional constraints:
        </p>
        <ul>
          <li>Recent change management pain across Toast products</li>
          <li>Multiple product teams building into the assistant</li>
          <li>High stakes around financial data accuracy</li>
          <li>A need to build trust quickly</li>
        </ul>
        <p>
          Ultimately, the goal was to build a core assistant system that:
        </p>
        <ul>
          <li>Bridges the gap between data and action</li>
          <li>Works across skill levels</li>
          <li>Feels reliable in operational contexts</li>
          <li>Scales across Toast Web and Toast Now</li>
        </ul>


        <p className='overline'>What I did</p>

        <p>
          <span className="highlight">1. Defined the core assistant experience across Web and iOS</span>
        </p>
        <p>
          To go GA, Toast IQ needed to feel like a durable product surface — not a beta experiment.
        </p>
        <p>
          I led design for:
        </p>
        <ul>
          <li>The core chat interaction model</li>
          <li>Entry points in Toast Web (left nav) and Toast Now (dedicated tab)</li>
          <li>Loading states, renaming from Sous Chef → Toast IQ, legal disclosures, and onboarding splash</li>
          <li>Error handling and graceful degradation for permission-gated data</li>
        </ul>
        <p>
          The goal: make Toast IQ feel like a native part of Toast's operating system.
        </p>

        <div className="side-by-side">
          <img src="/toastiq/web-q-and-a.gif" alt="Toast IQ Q&A interaction" />
          <img src="/toastiq/chat-tn.gif" alt="Toast IQ on Toast Now" />
         
        </div>

        <p>
          <span className="highlight">2. Built the "For You" personalized insights system</span>
        </p>
        <p>
          GA required proactive value, not just reactive answers.
        </p>
        <p>
          We built a scalable "For You" feed that:
        </p>
        <ul>
          <li>Surfaces the top 14 high-priority metrics (Sales, Labor, Menu, Employee Performance)</li>
         
          <li>Introduces suggested follow-ups to create habit loops</li>
          <li>Connects to Toast Now notifications to drive re-engagement</li>
        </ul>
        <p>
          My role included:
        </p>
        <ul>
          <li>Designing the feed hierarchy and visual system</li>
          <li>Defining suggested follow-up patterns</li>
          <li>Establishing interaction patterns for metric exploration</li>
        </ul>
        <p>
          This transformed IQ from "Ask anything" to "Here's what matters."
        </p>

        <img src="/toastiq/for-you-feed.png" alt="Toast IQ For You personalized insights feed" />

        <p>
          <span className="highlight">3. Designed the first-generation Actions platform</span>
        </p>
        <p>
          To go GA, IQ needed to take real action.
        </p>
        <p>
          We committed to supporting 15+ high-value actions across Toast, including:
        </p>
        <ul>
          <li>86'ing items</li>
          <li>Updating menu prices</li>
          <li>Stock read and update</li>
          <li>Reservation management</li>
          <li>Menu and modifier edits</li>
        </ul>
        <p>
          I led design for:
        </p>
        <ul>
          <li>Action confirmation UX (review → commit model)</li>
          <li>Respecting existing publishing paradigms</li>
          <li>Permission-aware behavior</li>
          <li>Clear distinction between suggestion and execution</li>
        </ul>
        <p>
          This work established trust (and laid the groundwork required for future automation.)
        </p>

        <div className="side-by-side">
          <img src="/toastiq/86-mobile.gif" alt="86ing an item on mobile" />
          <img src="/toastiq/price-update-web.gif" alt="Updating menu prices on web" />
        </div>

        <p>
          <span className="highlight">4. Designed Ridealong (contextual assistant on Web)</span>
        </p>
        <p>
          Beyond modal chat, we built "ridealong mode", an in-context assistant embedded across Toast Web pages.
        </p>
      
        <ul>
          <li>Context-aware starter prompts ("minis")</li>
          <li>Guardrails for how many prompts per page</li>
          <li>JTBD framing tied to what the user is currently doing</li>
          <li>Default-open experiments to measure impact on WAU and retention</li>
          <li>Instrumentation for engagement and downstream action tracking</li>
        </ul>
        <p>
           Ridealong shifted IQ from a destination to a companion because it allowed us to embed the assistant in the
            user's workflow, rather than requiring them to navigate to a new page. We were able to surface specific insights 
            and actions based on the user's current context, which helped them learn how to use the assistant.
        </p>

        <img src="/toastiq/ridealong.gif" alt="Toast IQ Ridealong contextual assistant" />

        <p>
          <span className="highlight">5. Built the GA permissioning and rollout system</span>
        </p>

        <p>
          Our initial rollout was limited to a particular type of restaurant, so we needed to design a permissioning and rollout system that would allow us to show the assistant to the right audience. This included:
        </p>
        <ul>
          <li>Which users see Toast IQ (key permissions required)</li>
          <li>SMB vs MM/ENT segmentation rules</li>
          <li>Enterprise "Request Access" workflow</li>
        </ul>
        <p>
          I worked closely with product and engineering to design experience tiers:
        </p>
        <ul>
          <li>Full Experience</li>
          <li>Lite Experience (access but no permissions)</li>
          <li>No Experience (MM/ENT only)</li>
        </ul>
        <p>
          This ensured we launched safely, confidently, and without surprise exposure.
        </p>

        <img src="/toastiq/no-access.png" alt="Toast IQ no access experience" />

        <p className='overline'>Outcomes</p>
        <div className='card-row'>
            <p className='card'>
              <span className="highlight">40,000+</span>
              Weekly Active Locations
            </p>
            <p className='card'>
              <span className="highlight">47%</span>
              Week-over-week retention
            </p>
            <p className='card'>
              <span className="highlight">1M+</span>
              Threads since GA (Oct '25)
            </p>
        </div>

        <p>
          Since GA, Toast IQ has become a meaningful product surface across Toast Web and Toast Now. Over half of restaurants have tried the assistant, and engagement continues to grow as proactive insights and contextual experiences deepen usage.
        </p>
        <p>
          Most importantly, the core system we built now supports scalable expansion, as Toast IQ has become <em>the</em> foundational part of Toast's AI strategy, 
          and we are now able to build on it to create more 
          advanced agents and automations.</p>

        <blockquote>
          <p>
            "[Toast's CEO] (along with probably the entirety of Toast's workforce) knows Toast IQ is the future of the company. Luckily, restaurants like it. Already, over half of Toast restaurants have used Toast IQ, collectively sending over a million queries. For now, he said, Toast IQ acts as a smart assistant. (He also called it a 'copilot.') But it'll soon evolve into an automation tool that taps a fleet of agents — AI that performs specific tasks — to run a restaurant."
          </p>
          <cite>— <a href="https://www.expedite.news/p/toast-has-big-plans-for-ai" target="_blank" rel="noopener noreferrer">Kristen Hawley, Expedite</a></cite>
        </blockquote>

        <p className='overline'>A new approach</p>
        <p>
          Shipping Toast IQ to GA laid the foundation for how we design AI at Toast.
        </p>
        <p>
          Rather than treating AI as a feature, we treated it as the actual system:
        </p>
        <ul>
          <li>Proactive, not just reactive</li>
          <li>Permission-aware</li>
          <li>Contextual</li>
          <li>Composable</li>
          <li>Embedded across surfaces</li>
        </ul>
        
        

    </div>
     {/* Include Portfolio component but exclude this project */}
     <MorePortfolio exclude="/toast-iq" />
    </div>
  );
};

export default ToastIQ;
