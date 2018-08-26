import { Layout } from 'antd';
import * as React from 'react';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
