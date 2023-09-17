'use client';
import React, { useEffect } from 'react';

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Disini ada error yaa</p>
      <button onClick={() => reset()}>Coba Ulang </button>
    </div>
  );
};

export default error;
