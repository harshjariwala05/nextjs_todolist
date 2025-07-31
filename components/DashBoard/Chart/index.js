import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars() {
    return (
        <div className=" h-100 bg-[#FFFFFF] rounded-xl p-6 shadow">
            <div>
                <h1 className="text-3xl font-semibold mb-4">Product View</h1>
            </div>
            <div className="flex items-start mb-4 w-full h-80 relative">
                <BarChart
                    xAxis={[{ data: ['22', '23', '24', '25', '26', '27', '28', '29'] }]}
                    series={[{ data: [4, 3, 5, 6, 1, 5, 7, 6] }]}
                    responsive

                />
            </div>
        </div>
    );
}
