import React from "react";
import Layout from "../components/Layout";
import Link from "next/Link";
export default function pokemon({ pokeman }) {
  return (
    <Layout title={pokeman.ogTitle}>
      <h1 className="text-4xl mb-2 text-center capitalize">
        {pokeman.id}. {pokeman.ogTitle}
      </h1>
      <img className="mx-auto" src={pokeman.image} alt={pokeman.name} />

      <p>
        <span className="font-bold mr-2">Height:</span>
        {pokeman.ogTitle}
      </p>
      <h2 className="text-2xl mt-6 mb-2">Types</h2>

      <p className="mt-10 text-center">
        <Link href="/">
          <a className="text-2xl underline">Home</a>
        </Link>
      </p>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const res = await fetch(
      `https://www.opengraph.xyz/.netlify/functions/metadata/?url=${id}`
    );
    const pokeman = await res.json();

    return {
      props: { pokeman },
    };
  } catch (err) {
    console.error(err);
  }
}
