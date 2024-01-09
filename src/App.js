import './App.css';
import { Fragment } from 'react';
import SideNav from './components/sideNav/sideNav.jsx';
import PageContent from './components/pageContent/pageContent'
 
function App() {
  return (
    <Fragment>
      <div className='main-div'>
        <SideNav />
        <PageContent />
      </div>
    </Fragment>
  );
}

export default App;
