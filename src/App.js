import React from 'react'
import CopyUrl from './component/CopyUrl'
import PasteUrl from './component/PasteUrl'
// import Content from './component/Content'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<CopyUrl />}
          />

          <Route
            path="/PasteUrl"
            element={<PasteUrl />}
          />

          {/* <Route
            path="/:uuid"
            element={<Content />}
          /> */}


        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App