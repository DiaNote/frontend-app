import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
      <h1>DiaNote</h1>
      <Outlet />
      </div>
    </>
  )
}

export default App
