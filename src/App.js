import {Header} from "./components/Header/Header";
import {SectionHero} from "./components/SectionHero/SectionHero";
import {SectionWork} from "./components/SectionWork/SectionWork";

function App() {
  return (
    <div className="App">
      <Header/>
      <SectionHero/>
        <SectionWork/>
    </div>
  );
}

export default App;
