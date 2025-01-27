import Footer from "./components/Footer";
import Header from "./components/Header";

export function PublicBase(props: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
