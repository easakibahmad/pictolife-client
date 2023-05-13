import '../globals.css';
import {AiFillFacebook } from 'react-icons/ai';



export default function Page() {
  return (
    <div className="my-8  bg-white grid grid-cols-1">
      <div className="lg:w-3/12 w-4/6 mx-auto border pt-12 pb-8">
        <h1 className="text-center text-3xl mb-10">Smartgram</h1>
              <form action="" className="grid grid-cols-1 md:px-6 px-3 gap-4">
                  <button className='text-blue-600 flex justify-center items-center '><span className='text-xl mr-2'><AiFillFacebook></AiFillFacebook></span> Log in with facebook</button>
                                    <div className="divider">OR</div>

                  <div className='grid grid-cols-1 gap-3'> <input type="text" className='focus:outline-none focus:border-blue-300 border w-full py-1 px-2' />
                      <input type="text" className='focus:outline-none focus:border-blue-300 border w-full py-1 px-2' />
                      <input type="text" className='focus:outline-none focus:border-blue-300 border w-full py-1 px-2' />
                  <input type="text" className='focus:outline-none focus:border-blue-300 border w-full py-1 px-2'/></div>
                            <button type='submit' className="bg-blue-500 font-bold text-white py-1 px-2">Sign up</button>
                  

        </form>
          </div>
          <div className='lg:w-3/12 flex  mx-auto px-6 py-4 items-center justify-center mt-4 w-4/6 border'>
              <p className='text-center text-sm'>Have an account? <span className="text-blue-400 font-bold">Log in</span></p>
          </div>
    </div>
  );
}
