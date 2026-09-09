import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          // "MERN Stack Developer",
          "Educator",
          "Technical Trainer",
          "Freelancer",
          "FrontEnd Web Developer",
          "ShineVerse Founder",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
