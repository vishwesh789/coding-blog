export const GA_MEASUREMENT_ID = process.env.GOOGLE_MEASUREMENT_ID;
export const pageview = (url) => {
    // console.log("urlllllllllllllllllllllllll",url)
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};



