import React from 'react'
import Button from '../Button';


interface TotalProps {
    kupon: any;
}

const Total: React.FC<TotalProps> = ({ kupon }) => {
    return (
        <div>
            <div>Total: {kupon}</div>
            <Button text="Total" bgColor="blue" color='white' />
        </div>
    )
}

export default Total