import Header from "../../components/Header";
import Layout from "../../components/layout";
import { Year, Record } from "../types/HomeTypes";

interface PostProps {
  record: Year;
}

const Post = ({ record }: PostProps) => {
  return (
    <Layout>
      <Header images={[]} />
      <div
        className="subImage"
        style={{
          backgroundImage: `url(${record.fields.SubImage[0].url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      ></div>
      <h2>2021</h2>
    </Layout>
  );
};

export default Post;

export async function getStaticProps({}) {
  const url = `https://api.airtable.com/v0/appvWjkNwxwdONFnS/Home/recoKUYrU1qqD72KR\?api_key\=${process.env.DB_KEY}`;
  const response = await fetch(url);
  const record: Record = await response.json();
  return {
    props: { record },
  };
}
