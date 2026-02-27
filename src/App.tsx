import React from 'react';
import BasketComponent from './components/Basket';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f5f7f5] text-slate-900">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <BasketComponent />
      </div>
    </div>
  );
};

export default App;
