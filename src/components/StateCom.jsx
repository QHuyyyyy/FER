import React, { useState, useEffect } from 'react';

export default function StateCom() {
  const [count, setCount] = useState(0);
  const [vnd, setVND] = useState(0);
  useEffect(() => {
    setVND(count*25000)
  },[count]);
  return (
    <div> StateCom
        <p>$: {count} -VND : {vnd}</p>
      <button onClick={() => setCount(count + 1)}>  Click me  </button>
    </div>
  );
}
