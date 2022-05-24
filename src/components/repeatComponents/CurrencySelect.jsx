import s from './CurrencySelect.module.css'

import React from 'react'

const CurrencySelect = ({ currencyOptions, selectedCurrency, onChangeCarrency }) => {
    return (
        < >
            <select className={s.select} value={selectedCurrency} onChange={onChangeCarrency}>
                {currencyOptions.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
        </>
    )
}
export default CurrencySelect
