"use client "
import Image from "next/image";
import React, { MouseEventHandler, useState } from "react";
export interface customModalProps {
  isSuccess?: boolean,
  msg?: string,
  handleClick: MouseEventHandler<HTMLButtonElement>,
  errorMsg?: string,
  resetIsComplete: any
}
const Carousel = ({ title, image, bgcolor, textColor, hasBg }: any) => {
    const color = bgcolor as string
    console.log(bgcolor)
    return (<>
        <div className="h-[300px] mb-5" style={{ backgroundColor: bgcolor }}>
            <div style={!hasBg?{ backgroundImage: `url(${image})`, backgroundPosition:'right bottom', backgroundRepeat:'no-repeat', backgroundSize:'contain' }:{ backgroundImage: `url(${image})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover' }} className="w-full h-full overflow-y-hidden">
                <div className="text-white  px-10 flex h-full w-3/4" >
                    <div className="my-auto">
                        <p>Get 50% Off</p>
                        <h2 className="text-4xl text-white uppercase my-auto font-bold" style={{color: textColor}}>{title} </h2>
                    </div>
                    </div>
                <div className={`flex justify-between max-h-[150wefpx] min-h-[15sfswe0px]`}>
                        <div></div>
                        {/* <div className="w-1/3 flex">
                            <img src={image} alt="" className="mx-auto my-auto"/>
                        </div> */}
                </div>
            </div>
        </div>
  </>);
}
export default Carousel;
