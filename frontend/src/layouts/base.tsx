import Footer from "./components/Footer";
import Header from "./components/Header";

export function Base(props: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Header />
      <div className="flex-grow">{props.children}</div>
      <Footer />
    </div>
  );
}
