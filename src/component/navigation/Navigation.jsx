import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import { mainroutes } from "../routes/mainroutes";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/auth/authAction";
import NavigationItem from "./navigationItem";
import PublicRoute from "../routes/PublicRoute";
import PrivateRoute from "../routes/PrivateRoute";
import styles from "./navigation.module.css";

const Navigation = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const dispatch = useDispatch();
  const onHandleLogout = () => {
    dispatch(signOut());
  };
  return (
    <>
      <ul className={styles.list}>
        {mainroutes.map((route) => (
          <NavigationItem {...route} isAuth={isAuth} key={route.path} />
        ))}
      </ul>
      {isAuth && (
        <button onClick={onHandleLogout} className={styles.button}>
          Logout
        </button>
      )}

      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
          {mainroutes.map((route) =>
            route.isPrivate ? (
              <PrivateRoute {...route} isAuth={isAuth} key={route.path} />
            ) : (
              <PublicRoute {...route} isAuth={isAuth} key={route.path} />
            )
          )}
        </Switch>
      </Suspense>
    </>
  );
};

export default Navigation;

// import React from "react";
// // import { Switch, Route, NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import { mainroutes } from "../routes/mainroutes";
// import { useDispatch, useSelector } from "react-redux";
// import { signOut } from "../redux/auth/authAction";
// import styles from "./navigation.module.css";

// const Navigation = () => {
//   const isAuth = useSelector((state) => state.auth.isAuth);
//   const dispatch = useDispatch();
//   const onHandleLogout = () => {
//     dispatch(signOut());
//   };
//   return (
//     <>
//       <ul className={styles.list}>
//         {mainroutes.map(({ path, name, exact, isPrivate, restricted }) => (
//           <>
//             {!isAuth && !isPrivate && restricted && (
//               <li key={path} className={styles.item}>
//                 <NavLink to={path} exact={exact} activeClassName="activeLink">
//                   {name.toUpperCase()}
//                 </NavLink>
//               </li>
//             )}
//           </>
//         ))}
//       </ul>
//       <button onClick={onHandleLogout}>Logout</button>
//     </>
//   );
// };

// export default Navigation;
