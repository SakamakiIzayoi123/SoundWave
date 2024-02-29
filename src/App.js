import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppRouters from './routers'
import Layout from './layouts'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {AppRouters.publicRouter.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <route.component />
                </Layout>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
