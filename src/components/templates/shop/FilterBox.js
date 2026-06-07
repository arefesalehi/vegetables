'use client'
import React, { useEffect } from 'react';
import 'flowbite'
import { initFlowbite } from 'flowbite';
const FilterBox = ({children, title, id}) => {


useEffect(() => {
    initFlowbite(); // دستی initialize می‌کنیم
}, []);

    return (
        <div className='w-[85%] m-auto mt-10'>
            <div id={`accordion-${id}`} data-accordion="collapse">
                <h2 id={`accordion-heading-${id}`}>
                    <button
                        type="button"
                        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                        data-accordion-target={`#accordion-body-${id}`}
                        aria-expanded="true"
                        aria-controls={`accordion-body-${id}`}
                    >
                        <span className='pr-8 text-md font-bold '>{title}</span>
                        <svg
                            data-accordion-icon
                            className="w-3 h-3 rotate-180 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5 5 1 1 5"
                            />
                        </svg>
                    </button>
                </h2>

                <div
                      id={`accordion-body-${id}`}
                    className="hidden rounded-b-[10px] w-full border-[1px] border-solid border-gray-300 pb-3"
                    aria-labelledby={`accordion-heading-${id}`}
                >
                  {children}
                </div>




            </div>
        </div>

    );
};

export default FilterBox;
