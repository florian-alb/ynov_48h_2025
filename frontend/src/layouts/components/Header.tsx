import { Button } from "@/components/ui/button";
import { Link, Zap } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="h-6 w-6" />
            <span className="inline-block font-bold">StreamLine</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              to="#features"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Features
            </Link>
            <Link
              to="#testimonials"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              to="#pricing"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm">Sign up</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
