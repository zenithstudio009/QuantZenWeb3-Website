import ReactGA from 'react-ga4';
import { CookiePreferences } from './cookies';

const TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 ID

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID, {
    gaOptions: {
      anonymizeIp: true,
    }
  });
};

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

export const trackUserConsent = (
  userId: string,
  consentGiven: boolean,
  preferences: CookiePreferences
) => {
  // Track the cookie consent event
  trackEvent(
    'Cookie Consent',
    consentGiven ? 'Accepted' : 'Declined',
    `User ${userId}`
  );

  if (consentGiven) {
    // Set user ID
    ReactGA.set({ userId: userId });
    
    // Track individual preferences
    trackEvent('Cookie Preferences', 'Necessary', preferences.necessary ? 'Enabled' : 'Disabled');
    trackEvent('Cookie Preferences', 'Marketing', preferences.marketing ? 'Enabled' : 'Disabled');
    trackEvent('Cookie Preferences', 'Analytics', preferences.analytics ? 'Enabled' : 'Disabled');
    
    // Track as conversion event
    ReactGA.event('cookie_consent', {
      user_id: userId,
      consent_status: 'granted',
      necessary: preferences.necessary,
      marketing: preferences.marketing,
      analytics: preferences.analytics,
    });
  }
};

export const trackUserSession = (userId: string) => {
  ReactGA.set({ userId: userId });
  
  trackEvent(
    'User Session',
    'Visit',
    `User ${userId}`
  );
};
