import {
  // About,
  Contact,
  Experiance,
  Footer,
  Header,
  Nav,
  Portfolio,
  Hobbies,
  Up,
} from "./components/ExportComps";
export default function App() {
  return (
    <>
      <Up />
      <Header />
      <Nav />
      {/* <About /> */}
      <Experiance />
      <Portfolio />
      <Hobbies />
      <Contact />
      <Footer />
    </>
  );
}
