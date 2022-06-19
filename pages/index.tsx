import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import { Year, Record } from "./types/HomeTypes";

interface HomeProps {
  years: Year[];
}

const Home: NextPage = ({ years }: HomeProps) => {
  years.sort((a, b) => a.fields.Name - b.fields.Name);
  return (
    <Layout>
      <div className={styles.years}>
        {years.map((year) => {
          return (
            <Link href={`/posts/${year.fields.Name}`} key={year.id}>
              <div
                id={year.fields.Name.toString()}
                style={{
                  backgroundImage: `url(${year.fields.Image[0].url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}
              >
                <p>{year.fields.Name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;

export async function getStaticProps({}) {
  const url = `https://api.airtable.com/v0/appvWjkNwxwdONFnS/Home\?api_key\=${process.env.DB_KEY}`;
  const response = await fetch(url);
  const record: Record = await response.json();
  return {
    props: { years: record.records },
  };
}
