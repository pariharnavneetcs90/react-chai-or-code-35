// https://www.youtube.com/watch?v=AFDYnd-XPa8&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=11
//4th

import { useState } from 'react'

import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo';

import './App.css'


function App() {

  //states bana reha hai 
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertAmount,setConvertAmount] = useState(0)

  //hook use
  const currencyInfo =  useCurrencyInfo(from)

  //useCurrencyInfo se jo data a raha hai line-28 './hooks/useCurrencyInfo',  vo  object format me a raha hai 
  // to hume user kyo keys de ga taki vo access kar sake (keys de ga value thodi de ga )
  const options =  Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to) // from ke andar to ki value
    setTo(from) // to ke andar from ki value 

    setConvertAmount(amount)
    setAmount(convertAmount)
  }

  //ye vo state hai jo hume final result display kare gi 

  const convert  =() =>{
    // user ne jo bhi diya hai multiplication karna hai
    // 1 rupaye 80 usd to multiply hi to kare ga  user ne 2 inr diya to 2*80 = 160

   setConvertAmount(amount * currencyInfo[to]) // currencyInfo(usd ki value) hai usse keys milti hai jisme bhi convert karna hai vo to(inr) se milti hai 
  }
//--------------------------------------------------------------------------------------------------------------------------
   return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                       // form hai to submit to ho ga hi 
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()// line no 37 me functionality hai 
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox   /* ye sab  import { InputBox } from './components' se a raha hai  */

                                label="From"
                                amount={amount} // 15 line
                                currencyOptions={options} //25
                                onCurrencyChange={(currency) => setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap} // 27 
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                               label="to"
                                amount={convertAmount} // 18 
                                currencyOptions={options} //25smae
                                onCurrencyChange={(currency) => setTo(currency)} //currency -- jo bhi current  currency  ki value hai , setTo(currency) me set kar de ga 
                                selectCurrency={from}
                               
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()} {/*usd to inr */}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );


}

export default App
