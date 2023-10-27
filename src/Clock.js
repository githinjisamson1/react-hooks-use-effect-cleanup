import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  // use cleanup funtion to prevent memory leaks/infinite loop
  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;

// TODO: cleanup function
// use to prevent memory leak/infinite loop
// it is a function returned by useEffect

// !When using the useEffect hook in a component, you might end up with some long-running code that you no longer need once the component is removed from the page. 

// !React's solution is to have our useEffect function return a cleanup function, which will run when the component is unmounted, i.e., when it is no longer being returned by its parent.
