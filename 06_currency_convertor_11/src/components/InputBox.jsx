// 2nd step
import React from 'react'

//ye input feild hai 2 input le reaha hai 
//1st label,amount.....,2nd classname
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [], // default emprty array [] agar user na de to
    selectCurrency = 'usd', //deafault taki user na de to kam se kam usd reha 
   
    className = "",
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>  {/* ${className} is liye likha hai kyo ki hum user se css bhi le rahe hai  */}
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}  {/*variable se aye ga data line-6*/}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    
                    value={amount} // line 7  // yahi to amout likhe ga user 
                    
                    //agar amount change hua to

                    onChange={(eventhai) => onAmountChange && onAmountChange( Number(eventhai.target.value))} // onAmountChange && onAmountChange() matalb agar onAmountChange hai to onAmountChange use kare ga nahi nahi kare ga 
                    // onAmountChange && onAmountChange() safty ke liye taki app crash na ho 
                    //  Number(eventhai.target.value) -- kyo ki event string me ata hai to usko number me convert kar diya 

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency} /* selectCurrency varaible se aye gi line 11 default abhi usd hai  */

                    //iske bhi value chage ho gi
                    onChange={(eventhai) => onCurrencyChange && onCurrencyChange(eventhai.target.value)} // (eventhai.target.value) ko number ma change nahi kare ga kyo ki hume string hi chaye eg-usd,inr
                >   
                    {/* loop */}
                    {currencyOptions.map((currency)=> (
                      
                        /*loop lagye ga option me kyo ki kai option hai eg-usd,inr,yen */

                        <option value="currency" key={currency}>   {/*key de ga loop me for optimisation ,  use key for loops performance */}

                             {currency}  {/* usd */}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
