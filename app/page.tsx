import DashboardPage from "./(pages)/dashboard/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/*<header className="relative z-20 w-full h-16 sm:h-20 lg:h-24">
        <Navbar />
      </header>*/}
      <main className="relative flex-grow">
        <DashboardPage />
      </main>
    </div>
  );
}
