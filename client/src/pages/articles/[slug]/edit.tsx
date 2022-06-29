import type { NextPage } from "next";
import { useForm } from "react-hook-form";

const ArticlesSlugEdit: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    // reset, // 入力内容をリセット
    // getValues, // フォーム全体のデータをreturn
    formState: { isSubmitting, errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = async () => {
    console.log(watch("content"));
  };

  return (
    <div className="新規記事作成">
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea rows={15} className="w-full" {...register("content", {})} />
        <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default ArticlesSlugEdit;
