import React from "react";

function CurrentTime() {
  const renderTime = () => {
    return new Date().toLocaleTimeString()
  }

  return (
    <div>
      <h1>{renderTime()}</h1>
    </div>
  )
}

export default CurrentTime