import React from "react";
import Router from "next/router";
import { MainLayout } from "../../components/MainLauout";
import {AboutInterface} from "../../interfaces/post";

interface AboutPageProps {
  title: AboutInterface
}

export default function About({title}:AboutPageProps) {
  const linkClickHandler = () => {
    Router.push('/')
  }

  return <MainLayout>
      <h1>{JSON.stringify(title)}</h1>
      <button onClick={linkClickHandler}>Go back to home</button>
    </MainLayout>
    
}

About.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/about`);
  const data: AboutInterface = await response.json();

  return {
    title: data.title
  }
}