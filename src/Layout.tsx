import { Outlet } from 'react-router'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

export default function Layout() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
