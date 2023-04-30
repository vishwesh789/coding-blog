import Head from "next/head";
import Topics from "../components/topics";
import FeaturedPost from "../components/featuredPost";
import PopularTags from "../components/popularTags";
import { fetchArticles, fetchCarrers, fetchCategories, fetchTechnologies } from "../http";
import Layout from "../components/layout";
import qs from "qs";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>codewithgolu - Health and Wealth Blog Website</title>
        <meta
          name="description"
          content="Our Vision is to share our knowledge related to Coding and Careers related to it. Let us embark together on this quest for the truth... and have some fun along the way."
        />
      </Head>
      <>
        <main className="herooooooooooooo">
          <article>
            <Layout data={props}>
              {/* <Hero /> */}
              {/* <Topics data={props} /> */}
              <FeaturedPost data={props} />
              {/* <PopularTags /> */}
              {/* <RecentPosts /> */}
            </Layout>
          </article>
        </main>
      </>
    </>
  );
}

export async function getStaticProps({ query }) {
  // Fetch data from external API

  // const catQuery = qs.stringify(
  //   {
  //     populate: {
  //       articles: true,
  //       careers: true,
  //       technologies: true,
  //       lifestyles:true,
  //       image: true,
  //     },
  //   },
  //   {
  //     encodeValuesOnly: true,
  //   }
  // );

  // const categories = await fetchCategories(catQuery);

  

  

  const technologyQuery = qs.stringify(
    {
      populate: {
        category: true,
        image: true,
        author: true,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const technologies = await fetchTechnologies(technologyQuery);


  // Pass data to the page via props
  return {
    props: {
      // categories: categories.data.data,
      technologies: {
        item: technologies.data.data,
        pagination: technologies.data.meta.pagination,
        parentPath:"technologies"
      },
    },
  };
}
