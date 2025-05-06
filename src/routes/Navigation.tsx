import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from 'react-router-dom';
  
// import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
// import { FormikComponents } from '../03-forms/pages/FormikComponents';
// import { FormikAbstractation } from '../03-forms/pages/FormikAbstractation';
// import { RegisterPage } from '../03-forms/pages/RegisterPage';
// import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';

import { FormikAbstractation,FormikBasicPage,FormikComponents,FormikYupPage, RegisterPage } from '../03-forms/pages';
import logo from '../logo.svg';

  
  export const Navigation = () => {
    return (
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              <li>
                <NavLink to="/register" activeClassName="nav-active" exact>Register Page</NavLink>
              </li>
              <li>
                <NavLink to="/formik-basic" activeClassName="nav-active" exact>FormikBasic</NavLink>
              </li>
              <li>
                <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik Yup</NavLink>
              </li>
              <li>
                <NavLink to="/formik-components" activeClassName="nav-active" exact>Formik Components</NavLink>
              </li>
              <li>
                <NavLink to="/formik-abstractation" activeClassName="nav-active" exact>Formik Abstractation</NavLink>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/register">
              <RegisterPage/>
            </Route>
            <Route path="/formik-basic">
              <FormikBasicPage/>
            </Route>
            <Route path="/formik-yup">
              <FormikYupPage/>
            </Route>
            <Route path="/formik-components">
              <FormikComponents/>
            </Route>
            <Route path="/formik-abstractation">
              <FormikAbstractation/>
            </Route>
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }