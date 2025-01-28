import Footer from "./components/Footer";
import Header from "./components/Header";

export function Base(props: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="min-h-screen min-w-screen flex flex-col">
        {props.children}
        <Footer />
      </div>
    </>
  );
}
