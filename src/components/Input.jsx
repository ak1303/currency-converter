import { useState, useEffect, useId} from "react";


const Input = ({
    amount,
    label,
    currency="usd",
    currencyOptions=[],
    onAmountChange,
    onCurrencyChange,
    amountDisable=false,
    currencyDisable=false,
    className=""
})=>{

const id  = useId();
    return (
        <>
            <div className={`bg-white flex text-slate-600 rounded-lg p-5 ${className}`}>
                <div className="flex-1">
                    <label htmlFor="amount" className="block w-3/5 p-3">{label} </label>
                    <input 
                        type="number"   
                        id={id} 
                        placeholder="Amount"
                        value={amount}
                        onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                        disabled={amountDisable}
                        className="outline-none block w-3/5 p-3"
                    />
                </div>
                <div className="flex-1">
                    <div className="block w-3/5 p-3">Currency Type</div>
                    <select
                        value={currency} 
                        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)} 
                        disabled={currencyDisable}
                        className="outline-none block w-3/5 p-3"
                     >
                        {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>))}
                    </select>
                </div>
            </div>
        </>
    )
}
export default Input;