import { useEffect, useState } from 'react'
import left from './assets/chevron-left.svg'
import './App.css'
import Date from './components/Date.jsx'
import Dishes from './components/Dishes.jsx'
import Popular from './components/Popular.jsx'
import Rec from './components/Rec.jsx'
import Footer from './components/footer.jsx'


function App() {
  
    const [repos, setRepos] = useState([])
    
    useEffect(() => {
     fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/')
                     .then(response => response.json())
                     .then(data => setRepos(data))

    
    }, [])
  console.log(repos);

  return (
    
    <div className="App">
      <div className='wrapper'>
      <div className="header">
      <img src = { left}></img>
      
      <h1> Select Dishes</h1>
     
      </div>
      <Date/>
      <Dishes/>
     <Popular data ={ repos.popularDishes}/>
     <Rec data={repos.dishes}/>
     <Footer/>
     </div>
     </div>
     
  )
}

export default App