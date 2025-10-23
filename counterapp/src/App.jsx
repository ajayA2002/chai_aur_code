import { useState } from 'react'
function App() {
 const [counter, setCount] = useState(1)
 let bouncehandled = ()=>{
   if (counter > 0 && counter < 20){
    setCount(counter =>counter + 1)
  }
 }

 let struggled = ()=>{
  if (counter > 0 && counter <= 20){
    setCount(counter =>counter - 1);
  }
 }
//  Effective range: 0 to 20 (21 possible values)

  return (
    <>
      <h1>Australian Bouncy Pitches</h1>
      <h2>Head to Head {counter}</h2>
      <button onClick={bouncehandled}>play {counter}</button>
       <br />
       <button onClick={struggled}>well left {counter}</button>
    </>
  )
}

export default App
//  bridge between your HTML page and React application