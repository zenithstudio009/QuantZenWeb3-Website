export interface CookiePreferences {
  necessary: boolean;
  marketing: boolean;
  analytics: boolean;
}

export interface UserData {
  userId: string;
  preferences: CookiePreferences;
  visitDate: string;
  consent: boolean;
}

const COOKIE_NAME = 'quantzen_user_data';
const CONSENT_COOKIE = 'quantzen_consent';
const PREFERENCES_COOKIE = 'quantzen_preferences';
const COOKIE_EXPIRY_DAYS = 365;

const generateUserId = () => {
  return 'user_' + Math.random().toString(36).substr(2, 9) + Date.now();
};

export const cookieUtils = {
  setCookie(name: string, value: string, days: number) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/;samesite=strict`;
  },

  getCookie(name: string): string | null {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },

  deleteCookie(name: string) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  },

  setConsent(hasConsent: boolean, preferences: CookiePreferences) {
    this.setCookie(CONSENT_COOKIE, hasConsent.toString(), COOKIE_EXPIRY_DAYS);
    this.setCookie(PREFERENCES_COOKIE, JSON.stringify(preferences), COOKIE_EXPIRY_DAYS);
    
    if (hasConsent) {
      this.initializeUserData(preferences);
    }
  },

  hasConsent(): boolean {
    return this.getCookie(CONSENT_COOKIE) === 'true';
  },

  getPreferences(): CookiePreferences {
    const prefs = this.getCookie(PREFERENCES_COOKIE);
    if (!prefs) {
      return { necessary: true, marketing: false, analytics: false };
    }
    try {
      return JSON.parse(prefs);
    } catch {
      return { necessary: true, marketing: false, analytics: false };
    }
  },

  initializeUserData(preferences: CookiePreferences) {
    const existingData = this.getUserData();
    
    if (!existingData) {
      const userData: UserData = {
        userId: generateUserId(),
        preferences,
        visitDate: new Date().toISOString(),
        consent: true,
      };
      
      this.setCookie(COOKIE_NAME, JSON.stringify(userData), COOKIE_EXPIRY_DAYS);
      return userData;
    }
    
    return existingData;
  },

  getUserData(): UserData | null {
    const data = this.getCookie(COOKIE_NAME);
    if (!data) return null;
    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  },

  clearAll() {
    this.deleteCookie(COOKIE_NAME);
    this.deleteCookie(CONSENT_COOKIE);
    this.deleteCookie(PREFERENCES_COOKIE);
  },

  isFirstVisit(): boolean {
    return !this.getCookie(CONSENT_COOKIE);
  }
};
