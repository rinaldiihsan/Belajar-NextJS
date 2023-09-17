'use client';
import React, { useState } from 'react';
import SectionResult from './[slug]/sectionResult';

const Cari = () => {
  const [query, setQuery] = useState('');

  const onSearch = (e: any) => {
    e.preventDefault();
    const inputQuery = e.target[0].value;
    setQuery(inputQuery);
  };

  return (
    <div>
      <form onSubmit={onSearch} className="flex w-full space-x-3 mt-4">
        <input className=" mr-4 bg-zinc-100 px-3 w-5/6 rounded-md h-10 " placeholder="Cari User Github" />
        <button className="bg-stone-600 p-2 w-1/6 text-white rounded-lg text-bold hover:bg-stone-700">Cari Orang</button>
      </form>

      {query && <SectionResult query={query} />}
    </div>
  );
};

export default Cari;
