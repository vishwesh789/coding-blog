import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import qs from "qs";
import {fetchNodeJs } from "../../http";
import Head from "next/head";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";
import PopularTags from "../../components/popularTags";
import RecentPosts from "../../components/recentPosts";
import { useEffect, useState } from "react";

import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { reactJson } from "../../data-json/react";
import { nodeJson } from "../../data-json/node";

const NodeJs = (props) => {
  console.log("propsssssssss in nodeJs", props);
  const {
    content,
    title,
    metaDesc,
    tags,
    slug,
    readTime,
    img,
    author,
  } = props;
  useEffect(() => {
    generateRandomRelatedPost();
    generatePopularRelatedPost();
    return () => {};
  }, []);

  const [randomPosts, setRandomPosts] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);

  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Create an empty array to store the randomly selected items

  const generateRandomRelatedPost = () => {
    const selectedItems = [];
    while (selectedItems.length < 5) {
      const randomItem = getRandomItem(nodeJson);
      if (!selectedItems.includes(randomItem)) {
        selectedItems.push(randomItem);
      }
    }

    setRandomPosts((oa) => [...oa, selectedItems]);
  };

  const generatePopularRelatedPost = () => {
    const selectedItems = [];
    while (selectedItems.length < 5) {
      const randomItem = getRandomItem(nodeJson);
      if (!selectedItems.includes(randomItem)) {
        selectedItems.push(randomItem);
      }
    }

    setPopularPosts(selectedItems);
  };


  return (
    <Layout data={props}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDesc} />

        <meta
          property="og:url"
          content={`https://www.codewithgolu.com/nodeJs/${slug}/`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={metaDesc}
        />
        <meta property="og:image" content={img} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="codewithgolu.com" />
        <meta
          property="twitter:url"
          content={`https://www.codewithgolu.com/nodeJs/${slug}/`}
        />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content={metaDesc}
        />
        <meta name="twitter:image" content={img} />
      </Head>
      <div className="container" style={{ marginTop: 120 }}>
        <div className="card feature-card">
          <figure
            className="card-banner img-holder"
            style={{ "--width": 1602, "--height": 903 }}
          >
            <Image
              src={img}
              width="1602"
              height="903"
              loading="lazy"
              alt={title}
              className="img-cover"
            />
          </figure>

          <div style={{ flexDirection: "row", display: "flex", gap: 5 }}>
            <FacebookShareButton
              url={`https://www.codewithgolu.com/nodeJs/${slug}/`}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <PinterestShareButton
              url={`https://www.codewithgolu.com/nodeJs/${slug}/`}
            >
              <PinterestIcon size={32} round />
            </PinterestShareButton>
            <RedditShareButton
              url={`https://www.codewithgolu.com/nodeJs/${slug}/`}
            >
              <RedditIcon size={32} round />
            </RedditShareButton>
            <WhatsappShareButton
              url={`https://www.codewithgolu.com/nodeJs/${slug}/`}
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <LinkedinShareButton
              url={`https://www.codewithgolu.com/nodeJs/${slug}/`}
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <TelegramShareButton
              url={`https://www.codewithgolu.com/nodeJs/${slug}/`}
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <TwitterShareButton
              url={`https://www.codewithgolu.com/nodeJs/${slug}/`}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>

          <div className="card-content">
            <div className="card-wrapper">
              <div className="card-tag">
                {tags.map((tag, index) => {
                  return (
                    <Link href="#" className="span hover-2" key={index}>
                      #{tag}
                    </Link>
                  );
                })}
              </div>

              <div className="wrapper">
                <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                <span className="span">
                  {readTime} mins read
                </span>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="profile-card">
                <div>
                  <p className="card-title">
                    By:{" "}
                    {author.data.attributes.username}
                  </p>

                  {/* <p className="card-subtitle">25 Nov 2022</p> */}
                </div>
              </div>
            </div>
            <h1
              className="headline headline-3"
              style={{
                fontSize: 30,
              }}
            >
              {title}
            </h1>
            {/* <div
              className="content"
              style={{
                marginTop: 30,
                wordSpacing: 3,
                fontSize: 18,
                fontWeight: "normal",
              }}
              dangerouslySetInnerHTML={{
                __html: m,
              }}
            /> */}
            <div
              className="content"
              style={{
                marginTop: 30,
                wordSpacing: 3,
                fontSize: 18,
                fontWeight: "normal",
              }}
            >
              <MDXRemote {...content} components={Image} />
            </div>
          </div>
        </div>
      </div>
      <RecentPosts
        randomPosts={randomPosts}
        popularPosts={popularPosts}
        cat={"nodeJs"}
      />
      <PopularTags />
    </Layout>
  );
};

export async function getStaticPaths() {
  const query = qs.stringify(
    {
      fields: ["slug"],
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  const slugs = await fetchNodeJs(query);
  // console.log("slugsssssss",slugs.data)
  const pathArray = [];

  slugs.data.data.forEach(myFunction);

  function myFunction(value, index, array) {
    pathArray.push({ params: { node: value.attributes.slug } });
  }

  return {
    paths: pathArray,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  // Fetch data from external API
  // console.log("contexttttt", context);

  // const catQuery = qs.stringify(
  //   {
  //     populate: {
  //       nodeJs: true,
  //       articles: true,
  //       image: true,
  //     },
  //   },
  //   {
  //     encodeValuesOnly: true,
  //   }
  // );

  // const categories = await fetchCategories(catQuery);

  const nodeQueryWithFilter = qs.stringify(
    {
      populate: {
        category: true,
        image: true,
        author: true,
        body: true,
      },
      filters: {
        slug: { $eq: context.params.node },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const node = await fetchNodeJs(nodeQueryWithFilter);

  const content = await serialize(
    node.data.data[0].attributes.body.content,
    {
      mdxOptions: {
        rehypePlugins: [rehypePrism, rehypeCodeTitles], // add rehype-prism-plus plugin here
      },
    }
  );
  const tech = node.data.data[0].attributes;

  // console.log("technology ssrrrrrrrrrr", context);

  // Pass data to the page via props
  return {
    props: {
      // categories: categories.data.data,
      // technology: technology.data.data,
      content: content,
      title: tech.title,
      metaDesc: tech.metaDesc,
      tags: tech.tags,
      slug: tech.slug,
      readTime: tech.readTime,
      img: tech.img,
      author: tech.author,
    },
  };
}

export default NodeJs;
