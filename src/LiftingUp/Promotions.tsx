/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'

interface PromotionsProps {
    kupon: string;
    setKupon: React.Dispatch<React.SetStateAction<string>>;
}

const Promotions: React.FC<PromotionsProps> = ({ kupon, setKupon }) => {
setKupon('10');
    return (
        <div>Promotions: {kupon}</div>
    )
}

export default Promotions