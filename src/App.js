import React from "react";
import "./styles/app.css";

function App() {
  return (
    <div className="flex h-screen bg-gray-500">
      <div className="text-gray-600 w-9/12 mx-auto my-auto h-64 bg-gray-400 rounded-lg border-8 border-gray-600 border-opacity-25 flex flex-col shadow-2xl">
        <div className="flex flex-row justify-around py-6 content-center">
          <p className="text-2xl tracking-wider text-center">
            DAYAMOY ADHIKARI
          </p>
          <img
            className="justify-self-end rounded-full w-auto h-24"
            src="https://he-s3.s3.amazonaws.com/media/avatars/adhikaridayamoy/resized/180/photo.jpg"
            alt="display-img"
          />
        </div>
        <p className="font-hairline tracking-wider text-2xl text-right">
          Learning Tailwindcss
          <span className="text-red-500 font-extrabold text-4xl">.</span>
        </p>
      </div>
    </div>
  );
}

export default App;
