import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useFetch } from "../../hooks";
import styles from "../styles/Home.module.css";

const Dashboard: NextPage = () => {
  const a = useFetch("/posts");

  console.log(a);

  return (
    <div className="">
      <div className="">dashborad</div>
      <button>新規</button>
    </div>
  );
};

export default Dashboard;
