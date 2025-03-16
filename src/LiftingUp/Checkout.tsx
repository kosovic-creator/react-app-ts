/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import Promotions from './Promotions'
import Total from './Total'

const Checkout = () => {
    const [coupons, setCoupons] = useState<string>('');

  return (
   <>
<Promotions kupon={coupons} setKupon={setCoupons}/>
<Total kupon={coupons}/>

   </>
  )
}

export default Checkout