import Link from "next/link";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import { Step, Steps } from "fumadocs-ui/components/steps";
import * as AccordionComponents from "fumadocs-ui/components/accordion";
import * as icons from "lucide-react";
import * as FilesComponents from "fumadocs-ui/components/files";
import { Card } from "fumadocs-ui/components/card";
import { Callout } from "fumadocs-ui/components/callout";
import { DocsPage, DocsBody, DocsDescription, DocsTitle } from "fumadocs-ui/page";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <p className="text-fd-muted-foreground">
        You can open{" "}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline">
          /docs
        </Link>{" "}
        and see the documentation.
      </p>
    </main>
  );
}
