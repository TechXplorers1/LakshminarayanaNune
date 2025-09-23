
'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 border-t py-12 text-gray-400">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <div className="bg-primary text-primary-foreground rounded-md px-2 py-1 text-sm font-bold">
              LN
            </div>
            <span className="font-bold text-lg text-white">
              Lakshminarayana Nune
            </span>
          </div>
          <p className="text-muted-foreground mt-2 max-w-sm mx-auto md:mx-0">
            Creating thoughtful digital experiences through user-centered design
            and creative problem-solving.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-end gap-4 text-center md:text-right">
          <p className="text-sm text-muted-foreground">
            &copy; {year} Lakshminarayana Nune. All rights reserved.
          </p>
          <a href="#home">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-gray-800 border-gray-700 hover:bg-gray-700"
            >
              <ArrowUp className="h-5 w-5 text-white" />
              <span className="sr-only">Scroll to top</span>
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
}
