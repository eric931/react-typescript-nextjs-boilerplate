import React from "react";
import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from "next";
import RootContainer from "../styles/RootContainer";

// This gets called on every request
export const getServerSideProps: GetServerSideProps  = async context => {
  // Pass data to the page via props
  return { props: {} };
};

const Demo: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => (
  <RootContainer>
    Demo Page
  </RootContainer>
);

export default Demo;
