import Navbar from './components/Navbar';
import Input from './components/Input';
import Output from './components/Output';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col w-full md:flex-row'>
        <Input />
        <Output />
      </div>
    </>
  );
};

export default App;
