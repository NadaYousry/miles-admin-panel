import React from "react";

export const AdminPanel = React.lazy(() =>
  import("./../containers/AdminPanel")
);
export const Home = React.lazy(() =>
  import("./../containers/HomePage")
);
export const HomePageBodyContainer = React.lazy(() =>
  import("./../containers/HomePageBodyContainer")
);
export const AboutPage = React.lazy(() =>
  import("./../containers/AboutPage")
);
export const PrivateLessonsPage = React.lazy(() =>
  import("./../containers/PrivateLessonsPage")
);
export const GroupLessonsPage = React.lazy(() =>
  import("./../containers/GroupLessonsPage")
);
export const ReviewsPage = React.lazy(() =>
  import("./../containers/ReviewsPage")
);
export const GalleryPage = React.lazy(() =>
  import("./../containers/GalleryPage")
);
export const FAQsPage = React.lazy(() =>
  import("./../containers/FAQsPage")
);
export const Loader = React.lazy(() =>
  import("./../components/Loader")
);
export const AdminAboutPage = React.lazy(() =>
  import("./../containers/AdminAboutPage")
);
export const AdminClassesPage = React.lazy(() =>
  import("./../containers/AdminClassesPage")
);