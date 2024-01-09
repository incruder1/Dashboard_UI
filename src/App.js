import './App.css'; 
import SideBar from './components/SideBar/SideBar.jsx';
import PageContent from './components/pageContent/pageContent'
 
function App() {
  return (
    <>
      <div className='main-div'>
        <SideBar />
        <PageContent />
      </div>
    </>
  );
}

export default App;
