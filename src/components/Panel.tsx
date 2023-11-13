import Image from 'next/image';
import Link from 'next/link';
import React, { Children } from 'react';

export function Panel({bg, children, title, figure, url}:any) {
  return (
      <>
          <div className='w-full my-2 min-h-[120px] rounded-lg overflow-hidden'>
              <div className='w-full relative' style={{ backgroundColor: bg, }}>
                  <div className='flex group justify-between gap-10 pl-4 pr-2  py-4 group'>
                      <div className='my-auto truncate'>
                          <p className='text-[23px] font-extrabold text-white truncate whitespace-nowrap group-hover:text-[28px] hover:cursor-pointer transition'>{figure}</p>
                          <span className='text-white capitalise whitespace-nowrap text-[14px]'>{title}</span>
                      </div>
                      <div className='flex text-gray-400 text- p-2 -z-10/2 justify-end top-0 items-right'>
                          {children}
                    </div>
                  </div>
                  
                  <Link href={url} className='group sticky bottom-0 h-fit'>
                  <div className='bg-black/20 flex py-2.5'>
                      {/* <p className='text-[14px] mx-auto flex text-white group-hover:text-[16px]'><svg xmlns="http://www.w3.org/2000/svg" className=' group-hover:w-5 group-hover:h-6 w-4 h-5' viewBox="0 0 20 20"><path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/></svg></p> */}
                  </div></Link>
              </div>
          </div>
      </>
  );
}
