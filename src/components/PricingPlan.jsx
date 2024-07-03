import React, { useState } from 'react';

const PricingPlan = () => {
    return (
        <section className="bg-gray-200 mb-12 rounded-lg py-12 px-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-black lg:text-4xl sm:text-4xl">Pricing &amp; Plans</h2>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">Choose the best plan that suits you. If in doubt, you can always start with free.</p>
                </div>

                {/* lg and up */}
                <div className="hidden mt-16 lg:block">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="py-8 pr-4"></th>

                                <th className="px-4 py-8 text-center">
                                    <span className="text-base font-bold text-red-500"> FREE </span>
                                    <p className="mt-6 text-4xl font-bold">$0</p>
                                    <p className="mt-2 text-base font-normal text-gray-500">Per month</p>
                                </th>

                                <th className="px-4 py-8 text-center">
                                    <span className="text-base font-bold text-red-500"> PRO </span>
                                    <p className="mt-6 text-4xl font-bold">$99</p>
                                    <p className="mt-2 text-base font-normal text-gray-500">Per month</p>
                                </th>

                                <th className="px-4 py-8 text-center bg-[#1d1f1f] rounded-t-xl">
                                    <span className="px-4 py-2 text-base font-bold text-white bg-red-500 rounded-full"> EXPERT </span>
                                    <p className="mt-6 text-4xl font-bold text-white">$150</p>
                                    <p className="mt-2 text-base font-normal text-gray-200">Per month</p>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="py-4 pr-4 font-medium border-b border-gray-200">Uploaded Painting</td>

                                <td className="px-4 py-4 text-center border-b border-gray-200">02</td>

                                <td className="px-4 py-4 text-center border-b border-gray-200">10</td>

                                <td className="px-4 py-4 text-center text-white bg-[#1d1f1f] border-b border-white/20">50</td>
                            </tr>

                            <tr>
                                <td className="py-4 pr-4 font-medium border-b border-gray-200">Sales Statistics</td>

                                <td className="px-4 py-4 text-center border-b border-gray-200">Yes</td>

                                <td className="px-4 py-4 text-center border-b border-gray-200">Yes</td>

                                <td className="px-4 py-4 text-center text-white bg-[#1d1f1f] border-b border-white/20">Yes</td>
                            </tr>

                            <tr>
                                <td className="py-4 pr-4 font-medium border-b border-gray-200">Visitor Statistics</td>

                                <td className="px-4 py-4 text-center border-b border-gray-200">No</td>

                                <td className="px-4 py-4 text-center border-b border-gray-200">Yes</td>

                                <td className="px-4 py-4 text-center text-white bg-[#1d1f1f] border-b border-white/20">Yes</td>
                            </tr>

                            <tr>
                                <td className="py-4 pr-4 font-medium border-b border-gray-200">Recommendation Feed</td>

                                <td className="px-4 py-4 text-center border-b border-gray-200">No</td>

                                <td className="px-4 py-4 text-center border-b border-gray-200">Yes</td>

                                <td className="px-4 py-4 text-center text-white bg-[#1d1f1f] border-b border-white/20">Yes</td>

                            </tr>

                            <tr>
                                <td className="py-4 pr-4 font-medium border-b border-gray-200">Sales Commission</td>

                                <td className="px-4 py-4 text-center border-b border-gray-200">20%</td>

                                <td className="px-4 py-4 text-center border-b border-gray-200">15%</td>

                                <td className="px-4 py-4 text-center text-white bg-[#1d1f1f] border-b border-white/20">10%</td>

                            </tr>

                            <tr>
                                <td className="py-6 pr-4"></td>

                                <td className="px-4 py-6 text-center">
                                    <a href="#" title="" className="inline-flex items-center font-semibold text-red-500 hover:text-red-700 transition">
                                        Get Started
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </a>
                                </td>

                                <td className="px-4 py-6 text-center">
                                    <a href="#" title="" className="inline-flex items-center font-semibold text-red-500 hover:text-red-700 transition">
                                        Get Started
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </a>
                                </td>

                                <td className="px-4 py-6 text-center text-white bg-red-500 rounded-b-xl hover:bg-[#1d1f1f] transition hover:cursor-pointer">
                                    <a href="#" title="" className="inline-flex items-center font-semibold text-white">
                                        Get Started
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </a>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* xs to lg */}
            <div className="block mt-12 border-t border-b border-gray-200 divide-y divide-gray-200 lg:hidden">
                <div className="grid grid-cols-3 text-center divide-x divide-gray-200">
                    <div className="px-2 py-2">
                        <span className="text-sm font-bold text-red-500"> FREE </span>
                        <p className="mt-2 text-xl font-bold">$0</p>
                        <span className="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                    </div>

                    <div className="px-2 py-2">
                        <span className="text-sm font-medium text-red-500"> PRO </span>
                        <p className="mt-2 text-xl font-bold">$99</p>
                        <span className="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                    </div>

                    <div className="px-2 py-2">
                        <span className="text-sm font-medium text-red-500"> EXPERT </span>
                        <p className="mt-2 text-xl font-bold">$150</p>
                        <span className="mt-1 text-sm font-normal text-gray-500"> Per month </span>
                    </div>

                </div>

                <div className="px-2 py-4 sm:px-4">
                    <p className="font-semibold">Uploaded Painting</p>
                </div>

                <div className="grid grid-cols-3 text-center divide-x divide-gray-200">
                    <div className="px-2 py-2">02</div>

                    <div className="px-2 py-2">10</div>

                    <div className="px-2 py-2">50</div>

                </div>

                <div className="px-2 py-4 sm:px-4">
                    <p className="font-semibold">Sales Statistics</p>
                </div>

                <div className="grid grid-cols-3 text-center divide-x divide-gray-200">
                    <div className="px-2 py-2">Yes</div>

                    <div className="px-2 py-2">Yes</div>

                    <div className="px-2 py-2">Yes</div>

                </div>

                <div className="px-2 py-4 sm:px-4">
                    <p className="font-semibold">Visitor Statistics</p>
                </div>

                <div className="grid grid-cols-3 text-center divide-x divide-gray-200">
                    <div className="px-2 py-2">No</div>

                    <div className="px-2 py-2">Yes</div>

                    <div className="px-2 py-2">Yes</div>

                </div>

                <div className="px-2 py-4 sm:px-4">
                    <p className="font-semibold">Recommendation Feed</p>
                </div>

                <div className="grid grid-cols-3 text-center divide-x divide-gray-200">
                    <div className="px-2 py-2">No</div>

                    <div className="px-2 py-2">Yes</div>

                    <div className="px-2 py-2">Yes</div>

                </div>

                <div className="px-2 py-4 sm:px-4">
                    <p className="font-semibold">Sales Commission</p>
                </div>

                <div className="grid grid-cols-3 text-center divide-x divide-gray-200">
                    <div className="px-2 py-2">20%</div>

                    <div className="px-2 py-2">15%</div>

                    <div className="px-2 py-2">10%</div>

                </div>

                <div className="grid grid-cols-3 text-center divide-x divide-gray-200">
                    <div className="px-1 py-2 sm:px-4">
                        <a href="#" title="" className="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-red-500 border border-transparent rounded-md hover:bg-[#1d1f1f]" role="button"> Get Started </a>
                    </div>

                    <div className="px-1 py-2 sm:px-4">
                        <a href="#" title="" className="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-red-500 border border-transparent rounded-md hover:bg-[#1d1f1f]" role="button"> Get Started </a>
                    </div>

                    <div className="px-1 py-2 sm:px-4">
                        <a href="#" title="" className="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-red-500 border border-transparent rounded-md hover:bg-[#1d1f1f]" role="button"> Get Started </a>
                    </div>

                </div>
            </div>
        </section>

    )
}
export default PricingPlan;