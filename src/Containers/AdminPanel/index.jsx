import React, { useContext, useEffect, useState } from "react";
import useWindowResize from "../../cutomHooks/useWindowResize";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import * as LazyComponents from "./../../utlis/LazyLoading";
import { Nav } from "react-bootstrap";
import { Suspense } from "react";
import Loader from "../../components/Loader";
import "./style.css";
export const ItemsContext =React.createContext();
export const ColumnContext =React.createContext();
const AdminPanel = () => {
  const [itemsFromBackend, setItemsFromBackend] = useState([
    { id: "1", name: "Tennis Class", place: "The country club", price: "60"  , status:"active"},
    { id: "2", name: "Yoga Class", place: "The country club", price: "50"  , status:"completed"},
    { id: "3", name: "Tennis Class", place: "The country club", price: "80"  , status:"active"},
    { id: "4", name: "Fitness Class", place: "The country club", price: "150" , status:"completed" },
    { id: "5", name: "Yoga Class", place: "The country club", price: "100" , status:"soon" },
  ]);
  const [columnsFromBackend,setColumnsFromBackend] = useState({
    potentialClassColumn: {
      name: "Potential Classes",
      items: itemsFromBackend,
    },
    upcomingClassColumn: {
      name: "Upcoming",
      items: [],
    },
    inProgressClassColumn: {
      name: "In Progress",
      items: [],
    },
    doneClassColumn: {
      name: "Program Completed",
      items: [],
    },
  });
  useEffect(()=>{
    setColumnsFromBackend({
      potentialClassColumn: {
        name: "Potential Classes",
        items: columnsFromBackend.potentialClassColumn.items,
      },
      upcomingClassColumn: {
        name: "Upcoming", 
        items: columnsFromBackend.upcomingClassColumn.items,
      },
      inProgressClassColumn: {
        name: "In Progress",
        items: columnsFromBackend.inProgressClassColumn.items,
      },
      doneClassColumn: {
        name: "Program Completed",
        items: columnsFromBackend.doneClassColumn.items,
      },
    })
  } , [itemsFromBackend])
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
            </Nav>
          </div>

            <Switch>
              <Route path={`/miles-admin-panel/admin/about`}>
                <Suspense fallback={<Loader />}>
                  <LazyComponents.AdminAboutPage
                    isMobileScreen={isMobileScreen}
                  />
                </Suspense>
              </Route>
              <Route path={`/miles-admin-panel/admin/classes`}>
                <Suspense fallback={<Loader />}>
                  <ItemsContext.Provider value={[itemsFromBackend,setItemsFromBackend]}>
                  <ColumnContext.Provider value={[columnsFromBackend,setColumnsFromBackend]}>
                  <LazyComponents.AdminClassesPage
                  />
                  </ColumnContext.Provider>
                  </ItemsContext.Provider>
                </Suspense>
              </Route>
              <Redirect exact from="/miles-admin-panel" to="miles-admin-panel/admin/about" />
            </Switch>
    </div>
  );
};

export default AdminPanel;
