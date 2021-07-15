
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {Layout} from 'antd'
import MenuSider from './components/sider/MenuSider';
import Home from './components/page/home/Home'
import About from './components/page/about/About';
import 'antd/dist/antd.css';

const {Header,Footer} = Layout;

function App() {
  return (
    <Router>
       <Layout style={{ minHeight: '100vh' }}>
            <MenuSider />
            <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
          </Switch>
          <Footer style={{ textAlign: 'center' }}>Shop Now ©2021 Created by 404 Team</Footer>
        </Layout>
       </Layout>
    </Router>
    
  );
}

export default App;
