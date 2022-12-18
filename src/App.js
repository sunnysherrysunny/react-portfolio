import React from 'react'
import {useRoutes} from 'react-router-dom'
import Header from './components/shared/header';
import Footer from './components/shared/footer';
import routes from './router/index'

function App() {
  const element = useRoutes(routes)
  return (
    <div className="pt-0.5 container mx-auto">
      <Header/>
      <div>
      {element}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
