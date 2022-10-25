import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CardListing from './pages/CardListing/CardListing'
import CardOrder from './pages/CardOrder/CardOrder'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CardListing />} />
        <Route path='/card-order' element={<CardOrder />} />
      </Routes>
    </Router>
  )
}

export default App
