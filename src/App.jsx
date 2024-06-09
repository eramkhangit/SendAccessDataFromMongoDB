
import './App.css'
import DBpart2 from './Components/DBpart2'
import MangoDB from './Components/MangoDB'

function App() {


  return (
    <>
     <h1>Check data from database MangoDB</h1>
     <MangoDB />
     <div style={{margin:'3rem'}}>
        <DBpart2/>
     </div>
    </>
  )
}

export default App
