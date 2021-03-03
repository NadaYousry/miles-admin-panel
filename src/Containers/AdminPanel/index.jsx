import React, { useContext, useEffect, useState } from "react";
import useWindowResize from "../../cutomHooks/useWindowResize";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import * as LazyComponents from "./../../utlis/LazyLoading";
import { Nav } from "react-bootstrap";
import { Suspense } from "react";
import Loader from "../../components/Loader";
import "./style.css";
export const ItemsContext = React.createContext();
export const ColumnContext = React.createContext();
const AdminPanel = () => {
  const [itemsFromBackend, setItemsFromBackend] = useState([
    {
      id: "1",
      title: "Tennis Class",
      place: "The country club",
      price: "60",
      status: "active",
      registration_count: "15/20",
      startDate: new Date(2021, 6, 5, 9, 30),
      endDate: new Date(2021, 6, 5, 11, 30),
    },
    {
      id: "2",
      title: "Yoga Class",
      place: "The country club",
      price: "50",
      status: "completed",
      registration_count: "5/5",
      startDate: new Date(2021, 6, 10, 12, 0),
      endDate: new Date(2021, 6, 10, 13, 0),
    },
    {
      id: "3",
      title: "Tennis Class",
      place: "The country club",
      price: "80",
      status: "active",
      registration_count: "6/10",
      startDate: new Date(2021, 6, 20, 9, 30),
      endDate: new Date(2021, 6, 20, 11, 30),
    },
    {
      id: "4",
      title: "Fitness Class",
      place: "The country club",
      price: "150",
      status: "completed",
      registration_count: "8/10",
      startDate: new Date(2021, 6, 21, 14, 30),
      endDate: new Date(2021, 6, 21, 15, 30),
    },
    {
      id: "5",
      title: "Yoga Class",
      place: "The country club",
      price: "100",
      status: "soon",
      registration_count: "7/15",
      startDate: new Date(2021, 6, 18, 12, 0),
      endDate: new Date(2021, 6, 18, 13, 35),
    },
  ]);
  const [columnsFromBackend, setColumnsFromBackend] = useState([
     {
      id:'potentialClassColumn',
      title: "Potential Classes",
      items: itemsFromBackend,
    },
     {
       id:'upcomingClassColumn',
      title: "Upcoming",
      items: [],
    },
     {
      id:'inProgressClassColumn',
      title: "In Progress",
      items: [],
    },
     {
      id:'doneClassColumn',
      title: "Program Completed",
      items: [],
    },
  ]);
  useEffect(() => {
    setColumnsFromBackend([
       {
        id:"potentialClassColumn" , 
        title: "Potential Classes",
        items: columnsFromBackend[0].items,
      }, {
        id:"upcomingClassColumn" , 
        title: "Upcoming",
        items: columnsFromBackend[1].items,
      },
       {
        id:"inProgressClassColumn" , 
        title: "In Progress",
        items: columnsFromBackend[2].items,
      },
       {
         id:"doneClassColumn" , 
        title: "Program Completed",
        items: columnsFromBackend[3].items,
      },
    ]);
  }, [itemsFromBackend]);
  const isMobileScreen = useWindowResize();
  return (
    <div className="admin-panel-container container-fluid">
      <div className="container">
        <Nav className={`${isMobileScreen ? "px-0" : ""} navbar`}>
          <NavLink
            activeClassName="active"
            to={`/miles-admin-panel/admin/about`}
            className="nav-link"
          >
            About
          </NavLink>
          <NavLink
            activeClassName="active"
            to={`/miles-admin-panel/admin/classes`}
            className="nav-link"
          >
            Classes
          </NavLink>
          <NavLink
            activeClassName="active"
            to={`/miles-admin-panel/admin/calendar`}
            className="nav-link"
          >
            Calendar
          </NavLink>
        </Nav>
      </div>

      <Switch>
        <ItemsContext.Provider value={[itemsFromBackend, setItemsFromBackend]}>
          <ColumnContext.Provider
            value={[columnsFromBackend, setColumnsFromBackend]}
          >
          <Route path={`/miles-admin-panel/admin/about`}>
              <Suspense fallback={<Loader />}>
                <LazyComponents.AdminAboutPage
                  isMobileScreen={isMobileScreen}
                />
              </Suspense>
            </Route>
          <Route path={`/miles-admin-panel/admin/classes`}>
              <Suspense fallback={<Loader />}>
                <LazyComponents.AdminClassesPage />
              </Suspense>
            </Route>
              <Route path={`/miles-admin-panel/admin/calendar`}>
              <Suspense fallback={<Loader />}>
                <LazyComponents.AdminCalendar />
              </Suspense>
            </Route>
            <Redirect exact from="/miles-admin-panel" to="admin/about" />
          </ColumnContext.Provider>
        </ItemsContext.Provider>
      </Switch>
    </div>
  );
};

export default AdminPanel;
