import DashboardHeader from "../../components/DashboardHeader";
import Sidebar from "../../components/sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen text-gray-800">
      <Sidebar />
      <main className="flex-1 p-6">
        <DashboardHeader />
      </main>
    </div>
  );
}
