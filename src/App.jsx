import {BrowserRouter,Routes,Route } from 'react-router'
import Home  from './pages/Home';
import Default from './layout/Default';
import About from './pages/About';
import Todo from './pages/Todo';
import Profile from'./pages/Profile';
import Weather from './pages/Weather';

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Default/>}>
        <Route path="/" element={<Home/> } />
        <Route path="about" element={<About/> } />
        <Route path="to-do" element={<Todo/> } />
        <Route path="profile" element={<Profile/> } />
        <Route path="weather" element={<Weather/> } />
      </Route>
     </Routes>
    </BrowserRouter>
   
  )
}

export default App
