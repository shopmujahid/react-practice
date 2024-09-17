import "./App.css";

const skills = [
  {
    skill: "SQL",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#2662EA",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#EFD81D",
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "#E84F33",
  },
  {
    skill: "C#",
    level: "advanced",
    color: "#60DAFB",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="family.JPG" alt="family"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Mujahid's Family</h1>
      <p>
        Sweet and small family, Hidayath wants to be a Doctor. Nausheen is a
        School Teacher and Mujahid is a Software Engineer. We like eating
        Biryani and spicy food.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
        {level === "beginner" && "👶"}
      </span>
    </div>
  );
}

export default App;
