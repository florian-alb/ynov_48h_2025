import { Map } from "@/components/map/Map";
import { Base } from "@/layouts/base";

export default function Home() {
  return (
    <Base>
      <div className="h-[calc(100vh-4rem)]">
        <Map />
      </div>
    </Base>
  );
}
