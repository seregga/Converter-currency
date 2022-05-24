import s from './CurrencyPage.module.css'

import React, { useEffect, useState } from 'react'
import { BASE_URL, requestOptions } from '../api/api';
import CurrencySelect from './repeatComponents/CurrencySelect';

const CurrencyPage = ({ currencyOptions }) => {

    const [sourseCurrency, setSourseCurrency] = useState('RUB')
    const [currencies, setCurrencies] = useState('USD,EUR,AUD,GBP,PLN,AED,AFN,ALL,AMD')
    const [resultCurrencyName, setResultCurrencyName] = useState([])
    const [resultQuotes, setResultQuotes] = useState([])

    useEffect(() => {
        fetch(`${BASE_URL}/live?source=${sourseCurrency}&currencies=${currencies}`, requestOptions)
            .then(r => r.json())
            .then(data => {
                setResultQuotes([...Object.values(data.quotes)])
                setResultCurrencyName([...Object.keys(data.quotes)])
            })
    }, [sourseCurrency])


    return (
        < >
            <div className={s.currencySelect}>
                <h5 className={s.currencyTitle}>выберите валюту</h5>
                <CurrencySelect
                    currencyOptions={currencyOptions}
                    selectedCurrency={sourseCurrency}
                    onChangeCarrency={e => setSourseCurrency(e.target.value)}
                />
            </div>
            <div className={s.resultWrapper}>
                <div className={s.resultName}>
                    {resultCurrencyName.map(el => <span key={el}>{el.slice(3, 6)}</span>)}
                </div>
                <div className={s.resultQuotes}>
                    {resultQuotes.map(el => <span key={el}>{el ? el.toFixed(2) : 'empty'}</span>)}
                </div>

            </div>

        </>
    )
}
export default CurrencyPage
