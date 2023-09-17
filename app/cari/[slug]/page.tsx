import React, { Suspense } from 'react';
import repoList from './sectionRepos';

const getDataUsers = async (param: string) => {
  const res = await fetch(`https://api.github.com/users/${param}`);
  return res.json();
};

const Details = async ({ params }: { params: { slug: string } }) => {
  const dataUser = await getDataUsers(params.slug);

  return (
    <div>
      <p style={{ marginTop: '14px' }}>Details: {params.slug}</p>
      <div>{JSON.stringify(dataUser)}</div>

      <Suspense fallback={<div style={{ marginTop: '15px' }}>Sedang Mengambil Repository.......</div>}>
        <div>{repoList({ slug: params.slug })}</div>
      </Suspense>
    </div>
  );
};

export default Details;
