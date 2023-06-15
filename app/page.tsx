// import React from 'react';
// import URLList from '../comp/URLList';

// const Home = () => {
//   const webflowUUrls = [
//     'https://aglint-ui.webflow.io/',
//     'https://aglint-ui.webflow.io/cards',
//     'https://aglint-ui.webflow.io/coach-hero',
//     'https://aglint-ui.webflow.io/dashboard',
//     'https://aglint-ui.webflow.io/signin',
//     'https://aglint-ui.webflow.io/styleguide',
//     'https://aglint-ui.webflow.io/toolbox',
//     'https://aglint-ui.webflow.io/devlink-guideline',
//     'https://aglint-ui.webflow.io/forgot-password',
//     'https://aglint-ui.webflow.io/signup',
//     'https://aglint-ui.webflow.io/resumes',
//     'https://aglint-ui.webflow.io/coaches',
//     'https://aglint-ui.webflow.io/interview',
//     'https://aglint-ui.webflow.io/network',
//     'https://aglint-ui.webflow.io/tracker',
//     'https://aglint-ui.webflow.io/jobs',
//     'https://aglint-ui.webflow.io/components/drawer',
//     'https://aglint-ui.webflow.io/components/modal',
//     'https://aglint-ui.webflow.io/onboarding',
//     'https://aglint-ui.webflow.io/company/dashboard',
//     'https://aglint-ui.webflow.io/coach/dashboard',
//     'https://aglint-ui.webflow.io/page-layout/page-layout-1',
//     'https://aglint-ui.webflow.io/page-layout/page-layout-with-sidebar',
//     'https://aglint-ui.webflow.io/navbar',
//     'https://aglint-ui.webflow.io/404-page',
//     'https://aglint-ui.webflow.io/500-page',
//     'https://aglint-ui.webflow.io/cover-letter',
//     'https://aglint-ui.webflow.io/interview-prep',
//     'https://aglint-ui.webflow.io/slidertest',
//     'https://aglint-ui.webflow.io/archive',
//     'https://aglint-ui.webflow.io/job-whishlist',
//     'https://aglint-ui.webflow.io/track-tour',
//     'https://aglint-ui.webflow.io/track-state2',
//     'https://aglint-ui.webflow.io/terms-modal',
//     'https://aglint-ui.webflow.io/profile',
//     'https://aglint-ui.webflow.io/feedback',
//     'https://aglint-ui.webflow.io/interview-module/interview-page',
//     'https://aglint-ui.webflow.io/interview-module/onboardingflow'
//   ];
  
//   const reactUrls = [
//     'http://localhost:3000/login',
//     'http://localhost:3000/signup',
//     'http://localhost:3000/forgot-password',
//     'http://localhost:3000/reset',
//     'http://localhost:3000/dashboard',
//     'http://localhost:3000/toolbox',
//     'http://localhost:3000/coach',
//     'http://localhost:3000/jobs'
//   ];

//   return (
//     <div className="w-container">
//       <h1>Welcome Aglint Design System</h1>
//       <div className="container">
//         <div className="column">
//           <div>
//             <h2>List of Webflow URLs:</h2>
//             <URLList urls={webflowUUrls} />
//           </div>
//         </div>
//         <div className="column">
//           <div>
//             <h2>List of React URL's:</h2>
//             <URLList urls={reactUrls} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { CoachLogin } from '@/devlink'
import React from 'react'

export default function Signin() {
  return (
    <CoachLogin/>
  )
}
