import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Box, ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import constants from './store/constants';
import { DashboardPage, LoginPage } from './views';
import { theme } from './store/theme';


const App: React.FC = () => {
  console.log(process.env.REACT_APP_FB_KEY);
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Box>
          <Switch>
              <Route path={constants.LOGIN_ROUTE} component={LoginPage} />
              <Route path={constants.DASHBOARD_ROUTE} exact={true} component={DashboardPage} />
              <Redirect to={constants.DASHBOARD_ROUTE} />
          </Switch>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
