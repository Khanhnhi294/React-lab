export function CourseGoal(props) {
  const {title, description} = props
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function App() {
  const data = [
    {title: "React", description: "Good goal"},
    {title: "Tailwind", description: "Good goal"}
  ]
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>{/* OUTPUT AT LEAST THREE CourseGoal components here */}</ul>
      <ul>
        {
          data.map((item,index)=>(
            <CourseGoal 
              key= {index}
              title={item.title}
              description ={item.description}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
