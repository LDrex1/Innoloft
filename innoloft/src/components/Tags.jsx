import React from "react";

function Tags({ title, tags }) {
  return (
    <div className="px-3 mt-2">
      <p>{title}</p>
      <div className="flex flex-wrap gap-y-1 gap-x-1.5">
        {Array.isArray(tags) ? (
          tags.map((tag) => (
            <p key={tag} className="bg-gray-300 p-1 rounded-md text-gray-600">
              {tag}
            </p>
          ))
        ) : (
          <p className="bg-gray-300 p-1 rounded-md text-gray-600">{tags}</p>
        )}
      </div>
    </div>
  );
}

export default Tags;
