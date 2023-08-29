import { useState } from "react";

const useTagSubmit = ({ setTagsOption }) => {
  const [result, setResult] = useState(null);

  const handleTagsSubmit = (tag) => {
    // Process the data based on the tag
    const newData = `Data related to tag: ${tag}`;
    console.log(newData);
    setResult(newData);
  };

  return { result, handleTagsSubmit };
};

export default useTagSubmit;
