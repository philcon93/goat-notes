import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';
import constants from './store/constants';
import { DashboardPage, LoginPage } from './views';
import { NavBar } from './components';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <Box>
          <Switch>
              <Route path={constants.LOGIN_ROUTE} component={LoginPage} />
              <Route path={constants.DASHBOARD_ROUTE} exact={true} component={DashboardPage} />
              <Redirect to={constants.DASHBOARD_ROUTE} />
          </Switch>
          <Box>&copy; {new Date().getFullYear()} {constants.COMPANY_NAME}</Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
