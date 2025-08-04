import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars() {
    return (
        <div className=" h-100 bg-[#FFFFFF] rounded-xl p-6 w-full max-w-full overflow-x-auto shadow mb-2">

            <div className="flex flex-wrap justify-between items-center mb-7 gap-x-4 gap-y-3">
                <div className="flex items-center">
                    <div className="w-4 h-8 rounded bg-[#CABDFF] mr-3"></div>
                    <h1 className="text-2xl font-semibold text-[#1A1D1F]">Product views</h1>
                </div>

                <div>
                    <select className="border border-gray-200 rounded-md px-4 py-2 text-sm font-medium text-[#1A1D1F] focus:outline-1 focus:ring-1 focus:ring-black">
                        <option>All time</option>
                        <option>In a year</option>
                        <option>Per month</option>
                    </select>
                </div>
            </div>

            <div className="flex items-start mb-4 w-full h-80 relative ml-[-30px] overflow-hidden">
                <BarChart
                    xAxis={[{ data: ['22', '23', '24', '25', '26', '27', '28', '29'] }]}
                    series={[{ data: [4, 3, 5, 6, 1, 5, 7, 6] }]}
                />
            </div>
        </div>
    );
}
