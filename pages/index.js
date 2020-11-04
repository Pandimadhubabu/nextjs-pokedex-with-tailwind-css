import Link from "next/Link";
import Layout from "../components/Layout";
export default function Home({ pokemon }) {
  return (
    <Layout title="NextJS Pokedex">
      <h1 className="text-4xl mb-8 text-center ">The Nextjs Pokedex</h1>
      <ul>
        {pokemon.map((pokeman, index) => (
          <li key={index}>
           
              <a className="border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md">
                <span className="mr-2 font-bold">{index + 1}.</span>
                {pokeman.title}
              </a>
           
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps(context) {
  try {
    const res = await fetch("https://testgnj.vercel.app/api/news");
    const pokemon = await res.json();

    return {
      props: { pokemon },
    };
  } catch (err) {
    console.error(err);
  }
}
