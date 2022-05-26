import s from './ConverterPage.module.css';

import React, { useEffect, useRef, useState } from 'react'
import CurrencySelect from './repeatComponents/CurrencySelect';
import { BASE_URL, requestOptions } from '../api/api';
import FieldNumber from './FieldNumber';



const ConverterPage = (props) => {
    const {
        currencyOptions,
        toCurrency,
        fromCurrency,
        setToCurrency,
        setFromCurrency
    } = props

    const [amount, setAmount] = useState('')
    const [result, setResult] = useState(0)
    const fieldRef = useRef()

    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`${BASE_URL}/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`,
                requestOptions)
                .then(r => r.json())
                .then(data => setResult(data.result))
        }
    }, [fromCurrency, toCurrency, amount])
    useEffect(() => {
        fieldRef.current.addEventListener('keyup', function () {
            this.value = this.value.replace(/[^\d]/g, '');
        })
    }, [])

    return (
        <div className={s.converterWrapper}>
            <section className={s.converterUpRow}>
                <FieldNumber
                    className={s.converterFiled}
                    fieldRef={fieldRef}
                    amount={amount}
                    setAmountConvert={e => setAmount(e.target.value)}
                />
                <CurrencySelect
                    currencyOptions={currencyOptions}
                    selectedCurrency={fromCurrency}
                    onChangeCarrency={e => setFromCurrency(e.target.value)}
                    className={s.converterSelectUp}
                />
            </section>
            <div className={s.equalSign}>=</div>
            <section className={s.converterDownRow}>
                <div className={s.converterResult}>
                    <span className={s.converterResultColor}>Всего: </span>
                    <span>{result ? result.toFixed(2) : 'empty'}</span>
                </div>
                <CurrencySelect
                    currencyOptions={currencyOptions}
                    selectedCurrency={toCurrency}
                    onChangeCarrency={e => setToCurrency(e.target.value)}
                    className={s.converterSelectDown}
                />
            </section>
        </div>
    )
}
export default ConverterPage
