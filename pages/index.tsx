import type { NextPage } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import { Year, Record } from "./types/HomeTypes";

interface HomeProps {
  years: Year[];
}

const Home: NextPage = ({ years }: HomeProps) => {
  years.sort((a, b) => a.fields.Name - b.fields.Name);
  const images = years.map((year) => year.fields.Image);
  return (
    <Layout>
      <Header images={images} />
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
