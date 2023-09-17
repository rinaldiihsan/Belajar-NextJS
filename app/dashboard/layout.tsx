import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 bg-slate-500 p-8 text-white">
      <p>Ini Layout khusus untuk dashboard</p>
      {children}
    </div>
  );
}
