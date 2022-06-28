import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="">
      <div className="">blog</div>
      <Link href="/dashboard">
        <a>ダッシュボード</a>
      </Link>
    </div>
  );
};

export default Home;
