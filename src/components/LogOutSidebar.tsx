"use client"
import { useState } from "react";
const LogOutSidebar = ({isShow, logOut, isLoading}: any) => {
    // const [isShow, setIsShow] = useState(false)
  return (
    <div className={isShow?"block min-h-[200px] border right-0 bg-white rounded-lg min-w-[200px] absolute":"hidden"}>
              <div className='flex'>
                  <button onClick={(e) => {
                      e.preventDefault()
                      logOut()
                  }} className='m-auto border px-4 py-1 mt-4 rounded-md'>
                      {
                          isLoading?"Logging out ...": "logout"
                      }
                  </button>
            </div>
          </div>
  )
}

export default LogOutSidebar