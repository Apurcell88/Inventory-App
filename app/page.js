import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className='h-screen  bg-gray-900 md:justify-center pt-10'>
      <div className='flex-col justify-end text-center h-4/5 px-1'>
        <h1 className='text-3xl font-bold mb-4 text-gray-300 md:text-5xl'>Welcome to <span className='text-pink-800'>PixelPlay Haven</span></h1>
        <p className='nav--description'>We are a game store located in Chicago, IL</p>
        <p className='nav--description'>Feel free to browse our products and gaming categories above</p>
      </div>
      <Footer />
    </main>
  )
}