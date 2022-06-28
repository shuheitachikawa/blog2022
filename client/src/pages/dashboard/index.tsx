import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

const Dashboard: NextPage = () => {
  const handleCreateNewPost = async () => {
  }

  return (
    <div className="">
      <div className="">dashborad</div>
      <button onClick={handleCreateNewPost}>新規</button>
    </div>
  );
};

export default Dashboard;
