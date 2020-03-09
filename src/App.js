import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BasePages from 'pages/Base';
import Contacts from 'pages/Contacts';
import PageContainer from './containers/PageContainer';

function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <Switch>
          <Route path="/" exact component={BasePages.Main} />
          <Route path="/about" exact component={BasePages.About} />
          <Route path="/contacts" exact component={Contacts.Overview} />
          <Route path="/temp" exact component={BasePages.Temp} />
          <Route path="/" component={BasePages.Show404} />
        </Switch>
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
