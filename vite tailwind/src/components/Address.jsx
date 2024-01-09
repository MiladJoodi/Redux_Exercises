import React from 'react'

function Address() {
  return (
    <div className="flex pt-2 justify-between">
          <div className="flex gap-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 fill-orange-500" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
          <p>ارسال به تهران</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 fill-gray-600" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        </div>
  )
}

export default Address