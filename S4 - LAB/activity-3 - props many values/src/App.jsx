import Header from "./components/Header.jsx";
import Concept from "./components/Concept.jsx";

import componentsImg from "./assets/components.png";
import propsImg from "./assets/props.png";
import jsxImg from "./assets/jsx-ui.png";

const COMPONENTS_DATA = {
  image: componentsImg,
  title: "Components",
  description:
    "The core UI building block - compose the user interface by combining multiple components.",
};

const PROPS_DATA = {
  image: propsImg,
  title: "Props",
  description:
    "Make components configurable (and therefore reusable) by passing input data to them.",
};

const JSX_DATA = {
  image: jsxImg,
  title: "JSX",
  description:
    "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
};

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <Concept
              image={COMPONENTS_DATA.image}
              title={COMPONENTS_DATA.title}
              description={COMPONENTS_DATA.description}
            />
            <Concept
              image={PROPS_DATA.image}
              title={PROPS_DATA.title}
              description={PROPS_DATA.description}
            />
            <Concept
              image={JSX_DATA.image}
              title={JSX_DATA.title}
              description={JSX_DATA.description}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
