import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions}
      links={[
        {
          type: "custom",
          children: (
            <Link
              href="https://github.com/aviflombaum/prompt_engine"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </Link>
          ),
        },
        {
          type: "custom",
          children: (
            <Link
              href="https://prompt-engine-demo.avi.nyc"
              target="_blank"
              rel="noopener noreferrer">
              Demo
            </Link>
          ),
        },
        // other items
      ]}>
      <DocsLayout
        tree={source.pageTree}
        {...baseOptions}>
        {children}
      </DocsLayout>
    </HomeLayout>
  );
}
