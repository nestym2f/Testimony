import './App.css';
import Testimony from './components/Testimony';
import NavBar from './components/NavBar';
import Header from './components/Header';
import {useEffect, useState} from 'react';

function App() {
    const [dataToTestimony, setdataToTestimony] = useState();

    useEffect(() => {
        const getTestimonials = async () => {
            const allTestimonials = await fetchTestimonies()
            setdataToTestimony(allTestimonials)
        }
        
        getTestimonials()
    },[])

    //Fetch Customers
    const fetchTestimonies = async () => {
        const res = await fetch('http://localhost:5000/testimonies')
        const data = await res.json()
        return data
    }
  return (
    <div className="App">        
        <div className="container">
            <NavBar/>
            <Header/>
            <div className="container">
                {
                    dataToTestimony ?
                    dataToTestimony.map(
                        (testimony, index) => {
                            return <Testimony dataToTestimony={testimony}/>
                        }
                    ) :
                    []
                }              
            </div>            
        </div>        
    </div>
  );
}

export default App;
