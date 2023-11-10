"use client"

import algoliasearch from 'algoliasearch/lite';
import { Hit as AlgoliaHit } from 'instantsearch.js';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
// import singletonRouter from 'next/router';
import React from 'react';
// import { renderToString } from 'react-dom/server';
import {
  DynamicWidgets,
  InstantSearch,
  Hits,
  Highlight,
  RefinementList,
  SearchBox,
  InstantSearchServerState,
  InstantSearchSSRProvider,
  getServerState,
} from 'react-instantsearch';
import { createInstantSearchRouterNext } from 'react-instantsearch-router-nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const searchClient = algoliasearch(
  '1H8TO0RHHP',
  '8d8d474170f8d306904c4675045b6f4e'
);

type HitProps = {
  hit: AlgoliaHit<{
    lastname: string;
    firstname: number;
  }>;
};

function Hit({ hit }: HitProps) {
  return (
    <>
      <div className='flex gap-5'>
        {/* <Highlight hit={hit} attribute="firstname" className="Hit-label" /> */}
        <Link href={'/products'}>
        <div className='border px-4 py-2 gap-5 flex border-red-500'>
          <span className="Hit-price ">{hit.lastname}</span>
          <span className="Hit-price">{hit.firstname}</span>
      </div></Link>
      </div>
    </>
  );
}

// type HomePageProps = {
//   serverState?: InstantSearchServerState;
//   url?: string;
// };

export default function HomePage({ serverState, url }: any) {
  // const router = useRouter()
  return (
    <InstantSearchSSRProvider {...serverState}>

      <InstantSearch
        searchClient={searchClient}
        initialUiState={{
          "dev_rogroup": {
            query: "Fonchu",
            page: 1
          }
        }}
        indexName="dev_rogroup"
        routing={true}
        insights={true}
      >
        <div className="Container">
          <div>
            {/* <DynamicWidgets fallbackComponent={FallbackComponent} /> */}
          </div>
          <div className='h-screen'>
            <SearchBox className='text-black' style={{padding:'10px'}} />
            <Hits className='text-black' hitComponent={Hit} />
          </div>
        </div>
      </InstantSearch>
    </InstantSearchSSRProvider>
  );
}

// function FallbackComponent({ attribute }: { attribute: string }) {
//   return (
//     <Panel header={attribute}>
//       <RefinementList attribute={attribute} />
//     </Panel>
//   );
// }

// export const getServerSideProps: GetServerSideProps<HomePageProps> =
//   async function getServerSideProps({ req }) {
//     const protocol = req.headers.referer?.split('://')[0] || 'https';
//     const url = `${protocol}://${req.headers.host}${req.url}`;
//     // const serverState = await getServerState(<HomePage url={url} />, {
//     //   renderToString,
//     // });

//     return {
//       props: {
//         // serverState,
//         url,
//       },
//     };
//   };
