import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useState } from "react";
import { NavUser } from "./nav-user";

export default function Header() {
  const links = [
    { label: "Accueil", href: "/" },
    { label: "Chat", href: "/chat" },
    { label: "Activités", href: "/activities" },
  ];

  // TODO: handle auth
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://github.com/shadcn.png",
  });

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between space-x-4 p-4 w-full">
        {/* logo */}
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center space-x-2">
            <Zap className="h-6 w-6" />
            <span className="inline-block font-bold">StreamLine</span>
          </a>

          {/* nav */}
          <nav className="flex gap-6">
            {links.map((link) => (
              <a
                href={link.href}
                key={link.label}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* auth */}
        {user ? (
          <div className="flex flex-1 items-center justify-end space-x-4">
            <NavUser user={user} />
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
              <Button size="sm">Sign up</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
