import FeaturedPost from "../../components/featuredPost";
import qs from "qs";
import {
  fetchCategories,
  fetchNodeJs,
  fetchPython,
  fetchReact,
  fetchTechnologies,
} from "../../http";
import Layout from "../../components/layout";

const Category = (props) => {
  return (
    <Layout data={props}>
      <FeaturedPost data={props} />
    </Layout>
  );
};

export default Category;

export async function getStaticPaths() {
  const query = qs.stringify(
    {
      fields: ["slug"],
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  const slugs = await fetchCategories(query);

  const pathArray = [];

  slugs.data.data.forEach(myFunction);

  function myFunction(value, index, array) {
    pathArray.push({ params: { category: value.attributes.slug } });
  }

  return {
    paths: pathArray,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  // Fetch data from external API

  // const catQuery = qs.stringify(
  //   {
  //     populate: {
  //       articles: true,
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

  const pythonQuery = qs.stringify(
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

  const python = await fetchPython(pythonQuery);


  const reactQuery = qs.stringify(
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

  const react = await fetchReact(reactQuery);

  const nodeQuery = qs.stringify(
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

  const node = await fetchNodeJs(nodeQuery);


  

  

  //   console.log(articles.data.data,query);

  // Pass data to the page via props

  return {
    props: {
      // categories: categories.data.data,
      
      technologies: {
        item: technologies.data.data,
        pagination: technologies.data.meta.pagination,
        parentPath: "technologies",
      },
      python: {
        item: python.data.data,
        pagination: python.data.meta.pagination,
        parentPath: "python",
      },
      react: {
        item: react.data.data,
        pagination: react.data.meta.pagination,
        parentPath: "reactjs",
      },
      node: {
        item: node.data.data,
        pagination: node.data.meta.pagination,
        parentPath: "nodeJs",
      },
      
    },
  };
}
