import StatCard from './StatCard';
import CustomerList from './CustomerList';
import PopularProducts from './PopularProducts';
import Chart from './Chart';

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
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Dashboard</h1>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
                {/* Left Side - 8 columns */}
                <div className="md:col-span-8 space-y-6">
                    <CustomerList customers={customers} />
                    <Chart />
                </div>

                {/* Right Side - 4 columns */}
                <div className="md:col-span-4">
                    <PopularProducts products={products} />
                </div>
            </div>

        </div>
    );
}
