import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Input from './components/Input'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyList = useCurrencyInfo(from);
  const options  = Object.keys(currencyList);

  const convertAmount = () =>{
    setConvertedAmount(amount*currencyList[to]);
  }
  const swap = () =>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  return (
    <>
      <div className="container  h-screen bg-no-repeat bg-cover  " style={{ backgroundImage: `url('public/bg-currency.jpg')`}}>
            <h1 className="text-5xl text-red-900 p-5">Currency converter</h1>
        <div className="bg-inherit border-white border w-1/2 p-8 translate-y-1/2 bg-blur m-auto rounded-3xl" style={{backdropFilter: 'blur(5px)'}}>
            <Input
              label="From"
              amount={amount}
              currency={from}   
              onAmountChange={(newAmount)=>setAmount(newAmount)}
              onCurrencyChange={(newCurrency)=>setConvertedAmount("Amount") && setFrom(newCurrency)}
              currencyOptions={options}
              amountDisable={false}
              currencyDisable={false}
              className="mx-4 w-full"
            />
            <div className='relative w-full h-2'>
              <button onClick={swap} className="absolute top-0 left-0 right-0 end-0 m-auto -translate-y-1/2 block bg-black text-white p-1 w-1/5 rounded-lg border-white border-4">Swap</button>
            </div>
            <Input
              label="To"
              amount={convertedAmount}
              currency={to}   
              onCurrencyChange={(newCurrency)=>setTo(newCurrency)}
              currencyOptions={options}
              amountDisable={true}  
              currencyDisable={false}
              className="mx-4 w-full"
            />
            <button onClick={convertAmount} className="absolute bg-blue-700 text-white p-2 w-2/4 rounded-lg left-1/2 -translate-x-1/2">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </div>
      </div>
    </>
  )
}

export default App
