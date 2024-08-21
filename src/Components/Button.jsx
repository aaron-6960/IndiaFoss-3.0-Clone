import React from 'react'

function Button({children}) {
  return (
    <div className="relative grow">
      <div className="h-16 w-full min-w-80 border-[3px]  border-black bg-slate-50 z-10 flex font-semibold justify-center hover:text-[#8F979F] hover:underline items-center text-xl">
        <p>{children}</p>
      </div>
      <div className="absolute bg-green-500 min-w-80 h-16 w-full left-2 top-[8px] z-[-1]" />
    </div>
  );
}

export default Button