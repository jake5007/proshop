import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Footer, Header } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};
export default App;
