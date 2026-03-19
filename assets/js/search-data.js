// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-activities",
          title: "activities",
          description: "Activities organized by the CS&amp;Law Europe Network. **These monthly activities rotate and take place every last Friday of the month from 12.30-1.30 CET** -- sign up with the Google sheet to get a calendar invite.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/activities/";
          },
        },{id: "news-we-started-the-cs-amp-amp-law-european-network-with-a-kickoff-meeting-where-we-discussed-the-goals-and-objectives-of-the-network-and-future-events-to-achieve-them",
          title: 'We started the CS&amp;amp;amp;Law European Network with a kickoff meeting where we discussed...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
