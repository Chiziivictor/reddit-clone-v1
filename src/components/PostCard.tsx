import { LinkIcon, PhotographIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Avatar from "./Avatar";

interface Inputs {
  postTitle: string;
  postBody: string;
  postImage: string;
  subreddit: string;
}

const PostCard: React.FC = () => {
  const [imageBoxOpen, setImageBoxOpen] = useState(false);
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="sticky top-16 z-50 rounded-md border border-gray-300 bg-white p-2"
    >
      <div className="flex items-center space-x-3">
        <Avatar />

        <input
          {...register("postTitle", { required: true })}
          className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
          disabled={!session}
          type="text"
          placeholder={session ? "Enter a title" : "Sign in to create Post"}
        />

        <PhotographIcon
          onClick={() => !!watch("postTitle") && setImageBoxOpen(!imageBoxOpen)}
          className={`h-6 cursor-pointer ${
            imageBoxOpen ? "text-blue-400" : "text-gray-300"
          }`}
        />
        <LinkIcon className="h-6 cursor-pointer text-gray-300" />
      </div>

      {!!watch("postTitle") && (
        <div className="flex flex-col py-2">
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Body</p>
            <input
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              {...register("postBody")}
              type="text"
              placeholder="Text (optional)"
            />
          </div>

          <div className="flex flex-col py-2">
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">Subreddit</p>
              <input
                className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                {...register("subreddit", { required: true })}
                type="text"
                placeholder="i.e. reactjs"
              />
            </div>
          </div>

          {imageBoxOpen && (
            <div className="flex flex-col py-2">
              <p className="min-w-[90px]">Image URL:</p>
              <input
                className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                {...register("postImage")}
                type="text"
                placeholder="Optional..."
              />
            </div>
          )}

          {Object.keys(errors).length > 0 && (
            <div>
              {errors.postTitle?.type === "required" && (
                <p>- Post Title is required</p>
              )}
              {errors.subreddit?.type === "required" && (
                <p>- Subreddit is required</p>
              )}
            </div>
          )}

          {!!watch("postTitle") && (
            <button
              type="submit"
              className="w-full h-10 rounded-full bg-blue-400 text-white"
            >
              Create Post
            </button>
          )}
        </div>
      )}
    </form>
  );
};

export default PostCard;
