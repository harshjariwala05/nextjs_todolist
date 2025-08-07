import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <div className="flex items-start mb-4 w-full max-w-[670px] h-auto relative ml-[-30px] overflow-y-hidden">
      <LineChart
        xAxis={[{ data: ['Apr', 'May', 'Jun', 'July', 'Aug', 'Sep'], scaleType: 'point', axisLine: { visible: true }, },]}
        yAxis={[{ min: 300, max: 1800, axisLine: { visible: true }, },]}
        grid={{ vertical: false }}
        series={[{ data: [300, 1600, 1100, 1400, 1700, 800], showMark: false, color: '#3B82F6', curve: 'bumpX', },]}
        height={270}
      />
    </div>
  );
}
