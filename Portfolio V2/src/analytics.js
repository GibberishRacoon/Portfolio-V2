import ReactGA from "react-ga";

// Initialize Google Analytics
export const initGA = () => {
  const trackingID = import.meta.env.VITE_GA_ID;
  if (trackingID) {
    ReactGA.initialize(trackingID);
  } else {
    console.error("Google Analytics tracking ID not found.");
  }
};

// Log a page view
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
