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
      <div className="font-bold">blog</div>
      <Link href="/dashboard">
        <a className="text-red-400">ダッシュボード</a>
      </Link>
    </div>
  );
};

export default Home;
