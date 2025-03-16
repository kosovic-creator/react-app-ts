/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';


export default function ParentComponent() {
  const [sharedState, setSharedState] = useState('');

  const handleStateChange = (newValue:any) => {
    setSharedState(newValue);
  };

  return (
    <div>
      <ChildComponent1
        value={sharedState}
        onChange={handleStateChange}
      />
      <ChildComponent2 value={sharedState} />
    </div>
  );
}

