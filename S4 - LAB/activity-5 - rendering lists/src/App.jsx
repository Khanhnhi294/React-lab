import Expert from "./components/Expert";

const allExperts = [
  {
    name: "Vinh",
    description: "Vinh is s a professor of Computer Science at PNV",
    mail: "vinh.hoang@passerellesnumeriques.org",
  },
  {
    name: "My",
    description: "My is a professor of React JS at PNV",
    mail: "my.ngo@passerellesnumeriques.org",
  },
  {
    name: "Ronan",
    description: "Ronan is the best teacher of all PN",
    mail: "ronan.ogor@passerellesnumeriques.org",
  },
  {
    name: "Thuy",
    description: "Thuy is an amazing Algorithm teacher at PNV",
    mail: "thuy.le@passerellesnumeriques.org ",
  },
];

function App() {
  return (
    <div id="app">
      <h1>Available Experts</h1>

      {/* TODO : Display all experts using Expert components */}
      {
        allExperts.map((item,index)=>(
          <Expert
          key ={ index}
          name = {item.name}
          description = {item.description}
          mail = {item.mail}
          />
        ))
      }
    
    </div>
  );
}

export default App;
