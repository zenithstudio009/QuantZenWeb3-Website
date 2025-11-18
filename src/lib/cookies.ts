// Native cookie implementation - NO npm packages needed!
export interface UserData {
  name: string;
  email: string;
  country: string;
  visitDate: string;
  consent: boolean;
}

const COOKIE_NAME = 'quantzen_user_data';
const CONSENT_COOKIE = 'quantzen_consent';
const COOKIE_EXPIRY_DAYS = 365;

export const cookieUtils = {
  setCookie(name: string, value: string, days: number) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/;secure;samesite=strict`;
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

  setConsent(hasConsent: boolean) {
    this.setCookie(CONSENT_COOKIE, hasConsent.toString(), COOKIE_EXPIRY_DAYS);
  },

  hasConsent(): boolean {
    return this.getCookie(CONSENT_COOKIE) === 'true';
  },

  setUserData(userData: Partial<UserData>) {
    if (!this.hasConsent()) {
      console.warn('Cannot save user data without consent');
      return false;
    }

    const existingData = this.getUserData();
    const updatedData: UserData = {
      name: '',
      email: '',
      country: '',
      visitDate: new Date().toISOString(),
      consent: true,
      ...existingData,
      ...userData,
    };

    this.setCookie(COOKIE_NAME, JSON.stringify(updatedData), COOKIE_EXPIRY_DAYS);
    return true;
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
  },

  isFirstVisit(): boolean {
    return !this.getCookie(CONSENT_COOKIE);
  }
};
