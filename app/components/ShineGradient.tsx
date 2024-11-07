"use client";

const ShineGradient = () => {
  return (
    <div className={`
      bg-no-repeat 
      absolute 
      top-0 
      size-full 
      z-5 
      overflow-hidden
      rounded-md
      bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,.5)_50%,transparent_75%,transparent_100%)]                 
      bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] 
      transition-all duration-0
      hover:bg-[position:-200%_0,0_0] hover:duration-[1500ms]`}></div>
  )
}

export default ShineGradient
