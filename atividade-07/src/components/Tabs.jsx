import { useState } from 'react';

function TabComponent() {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-4">
      <div className="flex mt-6 bg-slate-800">
        <button
          onClick={() => handleTabClick('about')}
          className={`py-6 px-20 font-bold border-r-2 border-r-slate-800 ${activeTab === 'about' ? 'bg-slate-500 text-white' : 'bg-gray-400'}`}
        >
          About
        </button>
        <button
          onClick={() => handleTabClick('contact')}
          className={`py-6 px-20 font-bold border-r-2 border-r-slate-800 ${activeTab === 'contact' ? 'bg-slate-500 text-white' : 'bg-gray-400'}`}
        >
          Contact
        </button>
        <button
          onClick={() => handleTabClick('faq')}
          className={`py-6 px-20 font-bold ${activeTab === 'faq' ? 'bg-slate-500 text-white' : 'bg-gray-400'}`}
        >
          FAQ
        </button>
      </div>

      <div>
        {activeTab === 'about' && (
          <div className="text-center bg-slate-500 p-7">
            <h2 className="text-2xl font-bold p-4">About</h2>
            <p className='px-20 py-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, unde tenetur doloribus voluptatum eum incidunt? Neque enim, harum vel repellat quia facere porro suscipit tempore doloribus natus, adipisci at obcaecati.</p>
          </div>
        )}
        {activeTab === 'contact' && (
          <div className="text-center bg-slate-500 p-7">
            <h2 className="text-2xl font-bold p-4">Contact</h2>
            <p className='px-20 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, dolores rerum. Eius id recusandae, nulla dolorum iure dolorem amet pariatur incidunt nobis magnam nisi consectetur unde cum, voluptatem totam dolor.</p>
          </div>
        )}
        {activeTab === 'faq' && (
          <div className="text-center bg-slate-500 p-7">
            <h2 className="text-2xl font-bold p-4">FAQ</h2>
            <p className='px-20 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus voluptatum soluta vero enim in ipsa a eum explicabo blanditiis nulla repudiandae, beatae vitae, sint consequatur nobis molestiae sequi error.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TabComponent;
