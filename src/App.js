import './base.scss';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/homescreen/HomeScreen';

function App() {
  return (
    <div>
      <Header />
      <div className="app-container border border-info">
        <Sidebar />
      </div>
      <Container fluid className='app_main border border-primary'>
        <HomeScreen />
      </Container>
    </div>
  );
}

export default App;
