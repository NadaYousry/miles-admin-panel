import React, { Suspense } from "react";
import { Nav } from "react-bootstrap";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import * as LazyComponents from "./../../utlis/LazyLoading";
import "./style.css";
import Loader from "../../components/Loader";
const HomePageBodyContainer = ({ isMobileScreen }) => {
  return (
    <>
      <div className="home-container container pt-5  px-4 " id="home-container">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 col-lg-4">
              <h1 className="heading text-left">
                Clubhouse Woodridge Tennis Academy
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Nav className={`${isMobileScreen?"px-0":""} navbar`}>
                <NavLink
                  activeClassName="active"
                  to={`/about`}
                  className="nav-link"
                >
                  About
                </NavLink>
                <NavLink
                  activeClassName="active"
                  to={`/group-lessons`}
                  className="nav-link"
                >
                  Group Lesson
                </NavLink>
                <NavLink
                  activeClassName="active"
                  to={`/private-lessons`}
                  className="nav-link"
                >
                  Private Lesson
                </NavLink>
                <NavLink
                  activeClassName="active"
                  to={`/reviews`}
                  className="nav-link"
                >
                  reviews
                </NavLink>
                <NavLink
                  activeClassName="active"
                  to={`/gallery`}
                  className="nav-link"
                >
                  gallery
                </NavLink>
                <NavLink
                  activeClassName="active"
                  to={`/faq`}
                  className="nav-link"
                >
                  FAQ
                </NavLink>
              </Nav>
              <Switch>
                <Route path={`/about`}>
                  <Suspense fallback={<Loader />}>
                    <LazyComponents.AboutPage isMobileScreen={isMobileScreen} />
                  </Suspense>
                </Route>
                <Route path={`/reviews`}>
                  <Suspense fallback={<Loader />}>
                    <LazyComponents.ReviewsPage
                      isMobileScreen={isMobileScreen}
                    />
                  </Suspense>
                </Route>
                <Route path={`/gallery`}>
                  <Suspense fallback={<Loader />}>
                    <LazyComponents.GalleryPage />
                  </Suspense>
                </Route>
                <Route path={`/private-lessons`}>
                  <Suspense fallback={<Loader />}>
                    <LazyComponents.PrivateLessonsPage isMobileScreen={isMobileScreen}/>
                  </Suspense>
                </Route>
                <Route path={`/group-lessons`}>
                  <Suspense fallback={<Loader />}>
                    <LazyComponents.GroupLessonsPage isMobileScreen={isMobileScreen}/>
                  </Suspense>
                </Route>
                <Route path={`/faq`}>
                  <Suspense fallback={<Loader />}>
                    <LazyComponents.FAQsPage isMobileScreen={isMobileScreen}/>
                  </Suspense>
                </Route>
                <Redirect exact from="/" to="about" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageBodyContainer;
