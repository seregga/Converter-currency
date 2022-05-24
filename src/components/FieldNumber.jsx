import React from 'react'

const FieldNumber = ({ setAmountConvert, amount, fieldRef }) => {
    return (
        <div>
            <input className={''}
                ref={fieldRef}
                value={amount}
                onChange={setAmountConvert}
                type="text"
                placeholder='введите сумму'
            />
        </div>
    )
}
export default FieldNumber
