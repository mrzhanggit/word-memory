import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Families from './pages/Families'
import FamilyDetail from './pages/FamilyDetail'
import Study from './pages/Study'
import Quiz from './pages/Quiz'
import Letters from './pages/Letters'
import Stats from './pages/Stats'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/families" element={<Families />} />
        <Route path="/family/:id" element={<FamilyDetail />} />
        <Route path="/study" element={<Study />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/letters" element={<Letters />} />
        <Route path="/stats" element={<Stats />} />
      </Route>
    </Routes>
  )
}
