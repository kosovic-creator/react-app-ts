import React from 'react'

interface TotalProps {
    kupon: any;
}

const Total: React.FC<TotalProps> = ({ kupon }) => {
    return (
        <div>Total: {kupon}</div>
    )
}

export default Total