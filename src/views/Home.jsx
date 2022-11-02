import React from 'react';
import AppAboutUs from '../components/home/AboutUs';
import AppContact from '../components/home/Contact';
import AppFaq from '../components/home/Faq';
import AppFeatures from '../components/home/Features';

import AppHero from '../components/home/Hero';
import AppPricing from '../components/home/Pricing';
import AppWorks from '../components/home/Works';

const AppHome = () => {
  return (
    <div className='main'>
      <AppHero/>
      <AppAboutUs/>
      <AppFeatures/>
      <AppWorks/>
      <AppFaq/>
      <AppPricing/>
      <AppContact/>
    </div>
  )
}

export default AppHome
