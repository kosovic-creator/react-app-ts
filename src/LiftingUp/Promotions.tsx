/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import Button from '../Button';


interface PromotionsProps {
    kupon: string;
    setKupon: React.Dispatch<React.SetStateAction<string>>;
}

const Promotions: React.FC<PromotionsProps> = ({ kupon, setKupon }) => {
    setKupon('10');
    return (
        <>

            <div>Promotions: {kupon}</div>
            <Button text="Promotion" bgColor="red" color='white' />
        </>

    )
}

export default Promotions