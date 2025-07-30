import HomeIcon from '@mui/icons-material/Home';
export default function Sidebar() {
    return (
        <div className="w-64 flex fixed bg-[#FCFCFC] shadow-md md:flex flex-col">
            <div>
                <h1 className="text-2xl font-bold text-center p-4">Sidebar</h1>
            </div>
            <div className=" mb-auto font-semibold bg-white shadow p-5 h-screen">
                <HomeIcon fontSize='large' className="inline-block mr-2" />
                Home
            </div>
            
        </div>
    );
}