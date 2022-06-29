import { api } from "lib/api/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Dashboard: NextPage = () => {
  const router = useRouter();

  const handleGoNewPage = async () => {
    const { data } = await api.get("/slug");

    await router.push(`/articles/${data.slug}/edit`);
  };

  return (
    <div className="">
      <div className="">dashborad</div>
      <button onClick={handleGoNewPage}>新規</button>
    </div>
  );
};

export default Dashboard;
