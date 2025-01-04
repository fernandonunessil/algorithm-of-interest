import React from "react";
import { handleInterestsUser } from "../functions/functions";

interface Tag {
  id: number;
  name: string;
}

export default function Interests() {
  const [userInterests, setUserInterests] = React.useState<Tag[]>([]);

  const showInterests = async () => {
    try {
      const interests = await handleInterestsUser();
      setUserInterests(interests);
    } catch (error) {
      console.error("Error fetching user interests:", error);
    }
  };

  return (
    <div className="text-center p-8">
      <h2 className="text-2xl">Top 3 interesses do usuario</h2>
      <div className="p-4">
        <button
          onClick={showInterests}
          className="p-2 bg-blue-500 rounded text-white"
        >
          Mostrar Interesses
        </button>
      </div>
      {userInterests.length > 0 ? (
        <ul>
          {userInterests.map((row) => (
            <li key={row.id}>
              <span>{row.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No interests found.</p>
      )}
    </div>
  );
}
