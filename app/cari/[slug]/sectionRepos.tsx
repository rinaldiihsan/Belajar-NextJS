import React from 'react';

const getDataRepos = async (param: string) => {
  const res = await fetch(`https://api.github.com/users/${param}/repos`);
  await new Promise((time) => setTimeout(time, 2000));
  return res.json();
};

const repoList = async ({ slug }: any) => {
  const dataRepos = await getDataRepos(slug);

  return (
    <>
      <p style={{ marginTop: '14px' }}>List Repository</p>
      <div>{JSON.stringify(dataRepos)}</div>
    </>
  );
};

export default repoList;
