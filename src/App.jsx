
import './main.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Dashboard } from './Pages'

function App() {

  return (
    <div>
<Router>
  <Routes>
    <Route path='/' element={<Dashboard />}></Route>
    {/* <Route path="*"  element={<NotFound />}></Route> */}
  </Routes>

</Router>

    </div>
  )
}

export default App
