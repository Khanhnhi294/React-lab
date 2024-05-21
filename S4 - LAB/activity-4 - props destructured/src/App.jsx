import Expert from "./components/Expert";

const vinhExpert = {
  name: "Vinh",
  description: "Vinh is s a professor of Computer Science at PNV",
  mail: "vinh.hoang@passerellesnumeriques.org",
};

const myExpert = {
  name: "My",
  description: "My is a professor of React JS at PNV",
  mail: "my.ngo@passerellesnumeriques.org",
};

function App() {
  return (
    <div id="app">
      <h1>Available Experts</h1>

      {/* TODO : Create 2 components Expert, for Vinh ad My */}
      {
        <Expert
        name = {vinhExpert.name}
        description ={vinhExpert.description}
        mail = {vinhExpert.mail}
        />
      }
      {
        <Expert
        name = {myExpert.name}
        description ={myExpert.description}
        mail = {myExpert.mail}
        />
      }
    </div>
  );
}

export default App;
