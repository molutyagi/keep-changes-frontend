import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const HomePage = () => {
  return (
    <div  className="flex flex-col space-x-10 bg-[#FFF1F1] ">
    <Navbar/>
    <Hero/>
    
    </div>
  )
}

export default HomePage