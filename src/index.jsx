import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import asyncComponent from './components/asyncComponent';
import './index.scss';

const Documentation = asyncComponent(() => import('./pages/documentation'));

class App extends React.Component {
  render() {
    // 最后两个未用模板参数的原因是路径深度不一定
    return (
      <HashRouter>
        <Switch>
          <Redirect exact from="/" to="/docs/installation.md" />
          <Redirect exact from="/docs" to="/docs/installation.md" />
          <Redirect exact from="/docs/" to="/docs/installation.md" />
          <Route path="/docs/*" component={Documentation} />
        </Switch>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
