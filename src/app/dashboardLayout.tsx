import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children }: any) {
  return (
    <>
      <main className="bg-gray-50 h-screen overflow-hidden dark:bg-white data-[theme]: dark:text-white">
        <Navbar />
        <div className="flex pt-16 overflow-hidden">
          <Sidebar />

          <div className="flex overflow-y-auto h-screen md:pl-64 overflow-hidden bg- dark:bg-black/95 w-full">
            <div className="px-4 w-full">
              <div className="my-4">{children}</div>
              <div className="h-[200px] w-full"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
