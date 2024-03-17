import { CardLink } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl">Building Instructions Documentation renderer</h1>
      <div>
        <CardLink
          href={"docs/building-instructions/introduction"}
          title={"Building Instructions Docs"}
          content={
            "Learn how to use the Building Instructions Documentation renderer"
          }
        />
      </div>
    </div>
  );
}
