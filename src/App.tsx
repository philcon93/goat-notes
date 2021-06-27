import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Box, ChakraProvider, ColorModeScript, extendTheme, ThemeConfig } from '@chakra-ui/react';
import constants from './store/constants';
import { DashboardPage, LoginPage } from './views';

const config : ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

const App: React.FC = () => {
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
