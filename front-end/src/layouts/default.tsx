// import { Link } from "@nextui-org/link";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container flex-grow">{children}</main>
    </div>
  );
}
