import React from "react";
import Head from "next/head";
import BlogDetail from "../../Components/blogs/BlogDetail";

const Detail = ({ Blog }) => {
  console.log(Blog);
  return (
    <>
      <Head>
        <title>Toggle Tech Lab</title>
        <meta name="description" content="" />
      </Head>
      <BlogDetail Blog={Blog.singleProperty} />
    </>
  );
};

export default Detail;

export async function getServerSideProps({ req, res, resolvedUrl }) {
  const paths = resolvedUrl.split("/");
  const id = paths[paths.length - 1];
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${id}`
  );
  const Blog = await response.json();
  return { props: { Blog } };
}
