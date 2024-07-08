
import React,{useState, useEffect} from 'react';
import Card from './Card';
import data from './assets/data.json'




const App = () => {

 
  return (

    <>
    
    <div className='flex flex-wrap gap-5 justify-center'>{data.map((element) => (<Card {...element}></Card>))}</div>
        
        <div >
        <Header/>
        </div>
    </>


  )
}

export default App;