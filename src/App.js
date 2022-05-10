import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className={'flex sm:flex-row flex-col bg-gray-100'}>
        <div className={'sm:hidden inline-block justify-center items-center flex m-10'}>
        <img className={'h-48 w-48 rounded-full border-4 border-black'} alt='img' src={`images/img.png`} />
        </div>
        <div className={'h-screen w-screen sm:w-1/2'}>
          <h1 className={'title2 text-7xl text-left  ml-10 sm:ml-36 sm:mt-24 mt-5'}>Hi, I'm Yuval.</h1>
          <p className={'body-lite text-xl pt-5 text-left sm:ml-36 ml-10'}><span className={'font-medium'}>Full-Stack Web Developer.</span></p>
          <p className={'body-lite text-xl pt-2 text-left sm:ml-36 ml-10'}>Familiar with a wide range of programming utilities and languages.</p>
          <p className={'body-lite text-xl pt-2 text-left sm:ml-36 ml-10'}>Knowledgeable of backend and frontend development requirements.</p>
          <p className={'body-lite text-xl pt-2 text-left sm:ml-36 ml-10'}>Complex problem-solver with an analytical and driven mindset.</p>
          <div className={'flex flex-row mt-5 sm:ml-36 ml-8'}>
            <button className={'bg_blue py-1 px-6 rounded-full text-white body-lite m-1 w-28 sm:w-32 hover:bg-black'}>#HTML</button>
            <button className={'bg_green py-1 px-6 rounded-full text-white body-lite m-1 w-28 sm:w-32 hover:bg-black'}>#CSS</button>
            <button className={'bg_pink py-1 px-6 rounded-full text-white body-lite m-1 w-28 sm:w-32 hover:bg-black'}>#C/C++</button>
            <button className={'bg_purple py-1 px-6 rounded-full text-white body-lite m-1 w-28 sm:w-32 hover:bg-black'}>#Git</button>
          </div>
          <div className={'flex flex-row mt-1 sm:ml-36 ml-8'}>
            <button className={'bg_purple py-1 px-6 rounded-full text-white body-lite m-1  w-28 sm:w-32 hover:bg-black'}>#React</button>
            <button className={'bg_blue2 py-1 px-6 rounded-full text-white body-lite m-1 w-28 sm:w-32 hover:bg-black'}>#JavaScript</button>
            <button className={'bg_blue py-1 px-6 rounded-full text-white body-lite m-1 w-28 sm:w-32 hover:bg-black'}>#Node.js</button>
            <button className={'bg_green py-1 px-6 rounded-full text-white body-lite m-1 w-28 sm:w-32 hover:bg-black'}>#SQL</button>
          </div>
          <p className={'mt-5 sm:ml-36 ml-10 body-lite text-xl border-b border-black hover:border-b-4 cursor-pointer hover:font-medium'}>Check out my work</p>
        </div>
        <div className={'hidden sm:inline-block h-screen w-1/2'}>
          <img className={'w-full'} alt='img' src={`images/img.png`} />
        </div>
      </div>
    </div>
  );
}

export default App;
