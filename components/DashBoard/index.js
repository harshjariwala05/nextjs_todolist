import PopularProducts from './PopularProducts';
import Chart from './Chart';
import ProTips from './ProTips';
import Comments from './Comments';
import Ads from './Ads';
import RefundRequest from './RefundRequest';
import StatCards from './StatCard';

export default function Dashboard() {
    const customers = [
        { name: 'Gladyce', image: 'https://ui8-core.herokuapp.com/img/content/avatar.jpg' },
        { name: 'Elbert', image: 'https://ui8-core.herokuapp.com/img/content/avatar-1.jpg' },
        { name: 'Joyce', image: 'https://ui8-core.herokuapp.com/img/content/avatar-2.jpg' }
    ];

    const products = [
        {
            name: 'Crypter - NFT UI kit',
            image: 'https://ui8-core.herokuapp.com/img/content/product-pic-1@2x.jpg',
            earning: '2453.80',
        },
        {
            name: 'Bento Matte 3D illustration 1.0',
            image: 'https://ui8-core.herokuapp.com/img/content/product-pic-2@2x.jpg',
            earning: '105.60',
        },
        {
            name: 'Excellent material 3D chair',
            image: 'https://ui8-core.herokuapp.com/img/content/product-pic-3@2x.jpg',
            earning: '648.60',
        },
        {
            name: 'Crypter - NFT UI kit',
            image: 'https://ui8-core.herokuapp.com/img/content/product-pic-1@2x.jpg',
            earning: '2453.80',
        },

    ];

    return (
        <div className="min-h-screen bg-[#F4F4F4] overflow-x-hidden px-4 py-6 md:px-6 md:py-8">
            <div className='flex flex-col flex-1 w-full max-w-full my-0 mx-0 mb-6'>
                <div className="mb-6 text-[40px] leading-[1.2] font-semibold md:mb-4 ">Dashboard</div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 ">
                    <div className="col-span-12 md:col-span-8 space-y-6">
                        <StatCards customers={customers} />
                        <Chart />
                        <ProTips />
                        <Ads />
                    </div>

                    <div className="col-span-12 md:col-span-4 space-y-6">
                        <PopularProducts products={products} />
                        <Comments />
                        <RefundRequest />
                    </div>
                </div>
            </div>
        </div>
    );
}