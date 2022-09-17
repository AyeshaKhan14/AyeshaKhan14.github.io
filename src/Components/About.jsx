import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full max-h-screen mb-20		 bg-orange-700	 text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full                 ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-zinc-900	">
            About
          </p>
        </div>
        <div className="p-10 rounded-full  bg-stone-900">
        <p className="text-2xl font-medium">
        I have completed Bachelor of Engineering degree in Computer Science  with a penchant
        for creating websites .I'm a full-stack web developer
      with hands-on experience in building websites with MERN
     stack , and I'm very passionate and dedicated to my work.   </p>      
  {/* <br />
        <p className="text-lg">
         Proficient in  CODING Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start my career as an entry-level software engineer with a reputed firm driven by technology.
        </p> */}
        </div>
        
      </div>
    </div>
  );
};

export default About;
