import type { MetaFunction } from "@remix-run/node";
import { ListVideos } from "../variables/videos";
import { Link } from "react-router-dom";

export const meta: MetaFunction = () => {
  return [{ title: "Videos" }, { name: "description", content: "Description" }];
};

export default function Index() {
  const registerTagsInSessionStorage = (videoTags: Array<number>) => {
    const actualTags = JSON.parse(
      sessionStorage.getItem("videoTags") as string
    );

    if (actualTags !== null) {
      const newTags = actualTags.concat(videoTags);
      sessionStorage.setItem("videoTags", JSON.stringify(newTags));
    } else {
      const newTags = videoTags;
      sessionStorage.setItem("videoTags", JSON.stringify(newTags));
    }

    return alert("Tags registradas com sucesso");
  };
  return (
    <div>
      <div className="flex items-center justify-center gap-5 p-8">
        {ListVideos.map((row) => (
          <Link
            to={`/`}
            key={row.id}
            className="p-2 bg-gray-400 rounded"
            onClick={() => {
              registerTagsInSessionStorage(row.tagsId);
            }}
          >
            <div className="w-full h-[200px] bg-blue-500 rounded"></div>
            <div className="text-white p-4">
              <h2 className="text-2xl">{row.title}</h2>
              <p>{row.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
