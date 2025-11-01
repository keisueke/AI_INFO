export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-foreground/60">
            © 2024 AI Learning Site. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-foreground/60">
            <a href="#" className="hover:text-foreground">
              About
            </a>
            <a href="#" className="hover:text-foreground">
              Contact
            </a>
            <a href="#" className="hover:text-foreground">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


