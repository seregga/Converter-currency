import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ConverterPage from './components/ConverterPage';
import CurrencyPage from './components/CurrencyPage';
import { BASE_URL, requestOptions } from './api/api';
import NavBar from './components/NavBar';


function App() {

    const [currencyOptions, setCurrencyOptions] = useState([])
    const [fromCurrency, setFromCurrency] = useState('')
    const [toCurrency, setToCurrency] = useState('')

    useEffect(() => {
        fetch(BASE_URL + '/list', requestOptions)
            .then(r => r.json())
            .then(data => {
                setCurrencyOptions([...Object.keys(data.currencies)])
                setFromCurrency([Object.keys(data.currencies)[0]])
                setToCurrency(Object.keys(data.currencies)[2])
            })
    }, [])

    return (
        <div className='app-wrapper'>
            <nav className='app-wrapper-navbar'>
                <NavBar />
            </nav>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route exact path='/' element={<ConverterPage
                        currencyOptions={currencyOptions}
                        fromCurrency={fromCurrency}
                        setFromCurrency={setFromCurrency}
                        toCurrency={toCurrency}
                        setToCurrency={setToCurrency}
                    />} />

                    <Route path='/currency' element={<CurrencyPage
                        currencyOptions={currencyOptions}
                    />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

