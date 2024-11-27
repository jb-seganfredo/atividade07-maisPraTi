import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SimpleCounter from './components/SimpleCounter';
import BackgroundChanger from './components/BackgroundChanger';
import ChoresList from './components/ChoresList';
import Timer from './components/Timer';
import ListFilter from './components/ListFilter';
import ImageGallery from './components/ImageGallery';
import SpecialTimer from './components/SpecialTimer';
import SimpleForm from './components/SimpleRegistrationForm';

import Tabs from './components/Tabs';
import PostsList from './components/PostList';

export default function App() {
  return (
    <Router>
      <div className="App">
       
        <ul className='flex flex-wrap justify-center gap-4 p-4 text-white'>
          
          <li className='bg-sky-900 text-white p-4 rounded'><Link to="/counter">Counter</Link></li>
          <li className='bg-sky-900 text-white p-4 rounded'><Link to="/background">Background Changer</Link></li>
          <li className='bg-sky-900 text-white p-4 rounded'><Link to="/chores">Chores List</Link></li>
          <li className='bg-sky-900 text-white p-4 rounded'><Link to="/timer">Timer</Link></li>
          <li className='bg-sky-900 text-white p-4 rounded'><Link to="/filter">List Filter</Link></li>
          <li className='bg-sky-900 text-white p-4 rounded'><Link to="/SimpleForm">Register Form</Link></li>
          <li className='bg-sky-900 text-white p-4 rounded'><Link to="/PostList">PostList</Link></li>            
          <li className='bg-sky-900 text-white p-4 rounded'><Link to="/ImageGallery">Gallery</Link></li>
          <li className='bg-sky-900 text-white p-4 rounded'><Link to="/SpecialTimer">Special Timer</Link></li>
          <li className='bg-sky-900 text-white p-4 rounded'><Link to="/Tabs">Tabs</Link></li>            

        </ul>
        
        <Routes>

          <Route path="/counter" element={<SimpleCounter />} />
          
          <Route path="/background" element={<BackgroundChanger />} />

          <Route path="/chores" element={<ChoresList />} />

          <Route path="/timer" element={<Timer />} />

          <Route path="/filter" element={<ListFilter />} />

          <Route path="/SimpleForm" element={<SimpleForm />} />

          <Route path='/PostList' element={<PostsList />} />

          <Route path='/ImageGallery' element={<ImageGallery />} />

          <Route path='/SpecialTimer' element={<SpecialTimer />} />

          <Route path='/Tabs' element={<Tabs />} />
          
        </Routes>
      </div>
    </Router>
  );
}
