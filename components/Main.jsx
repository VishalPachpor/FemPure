import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Typewriter from "typewriter-effect";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="py-4 text-gray-700">
          <p className="uppercase py-2 tracking-widest text-gray-600 text-xl">
            Build-Explore-Grow #web 3.0
          </p>
          <h1>

            <span className="text-[#5651e5]"> </span>{" "}
          </h1>
          <h1 className="py-2  text-[#5e5d8a]">
            <Typewriter
              onInit={(typerwriter) => {
                typerwriter
                  .typeString("FemPure")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("FemPure")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("FemPure")
                  .start();
              }}
            />

          </h1>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/vishal-patil-09ba61219/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">
                <FaLinkedinIn />
              </div>
            </a>

            <a href="https://github.com/VISHAL-143x">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">
                <FaGithub />
              </div>
            </a>

            <a href="https://mail.google.com/mail/u/1/#inbox?compose=new">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">
                <AiOutlineMail />
              </div>
            </a>

            <a href="https://twitter.com/vishalP01113336">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">
                <FaTwitter />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Main;
