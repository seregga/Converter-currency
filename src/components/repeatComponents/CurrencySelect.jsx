import React from 'react'

const CurrencySelect = ({ currencyOptions, selectedCurrency, onChangeCarrency, className }) => {
    return (
        < >
            <select className={className} value={selectedCurrency} onChange={onChangeCarrency}>
                {currencyOptions.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
        </>
    )
}
export default CurrencySelect
