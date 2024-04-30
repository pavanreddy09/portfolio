import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const mine = {
  projects: [
    {
      name: "Note App",
      description:
        "A simple note taking website that allows users to register/login to create, view, search, edit and delete notes.",
      techstack: ["React", "NodeJS", "Express", "MongoDB", "jsonwebtoken"],
      githublink: "https://github.com/pavanreddy09/noteApp-MERN",
      livelink: "",
    },
    {
      name: "Basic Music Player",
      description:
        "A simple Music Player Play music from the playlist, features includes forward/backward, play/pause music and volume control.",
      techstack: ["HTML", "CSS", "JavaScript"],
      githublink: "https://github.com/pavanreddy09/Music-Player",
      livelink: "https://pavanreddy09.github.io/Music-Player/",
    },
    {
      name: "Todo App",
      description:
        "A simple Todo website that allows user to create a tasks, and user can edit, delete or mark as completed the tasks.(task will be stored in browser local storage)",
      techstack: ["HTML", "CSS", "JavaScript"],
      githublink: "https://github.com/pavanreddy09/TodoApp",
      livelink: "https://pavanreddy09.github.io/TodoApp/",
    },
    {
      name: "Tic Tac Toe",
      description:
        "A simple website where user can play a tic tac toe game, sound effects while playing",
      techstack: ["HTML", "CSS", "JavaScript"],
      githublink: "https://github.com/pavanreddy09/Tic-Tac-Toe/",
      livelink: "https://pavanreddy09.github.io/Tic-Tac-Toe/",
    },
  ],
  skills: [
    {
      name: "HTML",
      logo: "/assets/html-logo.png",
    },
    {
      name: "CSS",
      logo: "/assets/css-logo.png",
    },
    {
      name: "JavaScript",
      logo: "/assets/js-logo.png",
    },
    {
      name: "React",
      logo: "/assets/react-logo.png",
    },
    {
      name: "NodeJS",
      logo: "/assets/nodejs-logo.png",
    },
    {
      name: "ExpressJS",
      logo: "/assets/express-logo.png",
    },
    {
      name: "MySQL",
      logo: "/assets/sql-logo.png",
    },
    {
      name: "Python",
      logo: "/assets/python-logo.png",
    },
    {
      name: "Flutter",
      logo: "/assets/flutter-logo.png",
    },
    {
      name: "MongoDB",
      logo: "/assets/mongodb-logo.png",
    },
    {
      name: "Postgres",
      logo: "/assets/postgres-logo.png",
    },
    {
      name: "PHP",
      logo: "/assets/php-logo.png",
    },
    {
      name: "Jest",
      logo: "/assets/jest-logo.png",
    },
  ],
};

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Projects projects={mine.projects} />
      <Skills skills={mine.skills} />
      <Contact />
    </div>
  );
}

export default App;
