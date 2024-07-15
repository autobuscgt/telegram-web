import React, { useState, useEffect } from 'react';

function DateComponent() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p style={{fontFamily:'BetterVCR',marginLeft:'5px'}}>Date: {currentDate.toLocaleString().substring(0,10)}</p>
    </div>
  );
}

export default DateComponent;
