import { tags } from "../variables/tags";


export default function ShowTags() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-center w-full gap-8">
        {tags.map((row) => {
          return (
            <div key={row.id} className="p-2 bg-gray-300 rounded border shadow">
              <h3>{row.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
