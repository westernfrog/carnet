import Notes from "../components/Notes";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Weather from "../components/Weather";
import Form from "../components/Form";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div class="row">
          <Form />
          <Weather />
        </div>
      </div>

      <Notes />
      <Footer />
    </>
  );
}
