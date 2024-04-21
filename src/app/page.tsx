import { useState } from "react";

const Home = () => {
  const [text, setText] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  const handleAddButtonClick = () => {
    console.log("Text:", text);
    console.log("Image URL:", imageUrl);

    setText("");
    setImageUrl("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Enter text..."
          value={text}
          onChange={handleTextChange}
          className="border border-gray-300 px-2 py-1 rounded"
        />
        <input
          type="text"
          placeholder="Enter image URL..."
          value={imageUrl}
          onChange={handleImageUrlChange}
          className="border border-gray-300 px-2 py-1 rounded"
        />
        <button
          onClick={handleAddButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </div>
      <div className="mt-4">
        <p>Text: {text}</p>
        {imageUrl && <img src={imageUrl} alt="User uploaded" className="mt-2" />}
      </div>
    </div>
  );
};

export default Home;
