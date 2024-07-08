
import React,{useState, useEffect} from 'react';
import Card from './Components/Card';
import data from './assets/data.json'
import Header from './Components/Header'




const App = () => {

 
  return (

    <>
    
 
    <Header/>
    <div className='flex flex-wrap gap-5 justify-center'>{data.map((element) => (<Card {...element}></Card>))}</div>
        
    
       
       
    </>


  )
}

export default App;