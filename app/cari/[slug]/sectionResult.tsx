import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Props {
  query: string;
}

function SectionResult({ query }: Props) {
  const { data, error } = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher);
  let loading = !data && !error;
  return (
    <div style={{ marginTop: '15px' }}>
      <p className="text-lg">
        Hasil Pencarian : <span className="font-bold">{query}</span>
      </p>
      <div>
        {loading && 'Wait ...'}
        {data &&
          data.items.map((user: any, index: number) => {
            return (
              <ul key={index} style={{ marginTop: '10px', marginBottom: '10px' }}>
                <li>
                  <Link href={`/cari/${user.login}`}>{user.login}</Link>
                </li>
                <li>
                  <Link href={user.repos_url}> Repository</Link>
                </li>
              </ul>
            );
          })}
      </div>
    </div>
  );
}

export default SectionResult;
