"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Code2 } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

export function MegaMenu({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title: string;
  description: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // close menu on path change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <Code2 className="size-6" />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto container">
          <DrawerHeader>
            <DrawerTitle className="font-serif">{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          {children}
          <DrawerFooter>
            <Button variant="link" size="lg" asChild>
              <a href="https://github.com/mattwelson" rel="noopener nofollow">
                <FaGithub />
                My Github account
              </a>
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
