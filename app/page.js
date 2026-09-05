import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="text-2xl">
      <h1>hello</h1>
      <Button>Hello</Button>
      <ThemeToggle />
      <UserButton />
    </div>
  );
}
