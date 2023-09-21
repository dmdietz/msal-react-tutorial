import { PageLayout } from "./components/PageLayout";
import { MainContent } from "./MainContent";
import "./App.css";

const App = () => {
  return (
    <PageLayout>
      <center>
        <MainContent />
      </center>
    </PageLayout>
  );
};

export default App;
