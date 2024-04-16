import {
  // About,
  Contact,
  Experiance,
  Footer,
  Header,
  Nav,
  Portfolio,
  Hoppies,
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
      <Hoppies />
      <Contact />
      <Footer />
    </>
  );
}
