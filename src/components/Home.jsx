// import { NavLink } from "react-router-dom";
import heroImage from "../assets/images/hero.png"
import NavBar from "./NavBar/NavBar";



const Home = () => {

  return (
    <div className="m-auto">
        <NavBar />
        {/* <nav className='flex justify-between items-center h-24 px-5'>
            <div className="flex items-center gap-5">
                <img src='#' alt="#" />
                <span className="text-sky-700">SmilePay</span>
            </div>
            <div 
                className="flex justify-around items-center gap-5 text-sky-700"
            >
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Features</NavLink>
                <NavLink>Services</NavLink>
            </div>
            <div className="flex justify-around items-center gap-5">
                <button>Login</button>
                <button className="p-2 bg-sky-700 px-8 rounded-lg text-white my-8">Sign Up</button>
            </div>
        </nav> */}
        <main className="flex justify-between items-center gap-5 max-[1024px]:justify-center flex-wrap h-[600px] max-[1024px]:h-[1200] max-w-5xl m-auto px-5">
            <hgroup className="max-w-sm max-[807px]:max-w-xl">
                <h1 className="text-5xl max-[1024px]:text-3xl leading-tight text-sky-700 font-bold mb-8">Discover a place to manage your money safely</h1>
                <h2 className="font-light text-sky-700 mb-8 max-[1024px]:text-sm">SmilePay helps you manage your money safely and easily so you will have peace of mind</h2>
                <button className="p-2 px-10 bg-sky-700 rounded-lg text-white">Get Started</button>
            </hgroup>
            <div className="w-1/2 flex justify-end items-center">
                <img src={heroImage} alt="#" className="w-[450px] max-[1024px]:w-[350px] max-[768px]:w-[250px]"/>
            </div>
        </main>
        <section className="flex justify-between items-center gap-5 max-[1024px]:justify-center flex-wrap h-[200px] max-[1024px]:h-[300px] max-w-5xl m-auto px-5">
            <h2 className="text-3xl leading-tight text-sky-700 font-bold text-center max-[1024px]:w-60">Trusted and secure payment service</h2>
            <p className="max-w-xs font-light text-sky-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit mollitia odit dignissimos eum accusamus sequi expedita delectus nihil veniam ex hic, vero, aut</p>
        </section>
        <section className="flex justify-between max-[1024px]:justify-center max-w-5xl m-auto flex-wrap gap-5 px-5">
            <div className="px-5 border border-sky-700 rounded-lg p-5 w-[300px]">
                <img src="#" alt="#" />
                <h3 className="text-xl text-sky-700 font-bold">Safe and Reliable</h3>
                <p className="max-w-xs font-light text-sky-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti eum rerum rem? </p>
            </div>
            <div className="px-5 border border-sky-700 rounded-lg p-5 w-[300px]">
                <img src="#" alt="#" />
                <h3 className="text-xl text-sky-700 font-bold">Easy Transaction</h3>
                <p className="max-w-xs font-light text-sky-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti eum rerum rem? </p>
            </div>
            <div className="px-5 border border-sky-700 rounded-lg p-5 w-[300px]">
                <img src="#" alt="#" />
                <h3 className="text-xl text-sky-700 font-bold">Multiple Method</h3>
                <p className="max-w-xs font-light text-sky-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti eum rerum rem? </p>
            </div>
        </section>
    </div>
  )
};

export default Home;

