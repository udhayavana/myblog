import {BrowserRouter,Routes,Route } from 'react-router'
import Home  from './pages/Home';
import Default from './layout/Default';
import Profile from './pages/Profile';
import Todo from './pages/Todo';
import Resume from'./pages/Resume';

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Default/>}>
        <Route path="/" element={<Home/> } />
        <Route path="profile" element={<Profile/> } />
        <Route path="to-do" element={<Todo/> } />
        <Route path="resume" element={<Resume/> } />
      </Route>
     </Routes>
    </BrowserRouter>
   
  )
}

export default App
