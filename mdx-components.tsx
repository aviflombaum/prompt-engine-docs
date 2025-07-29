import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import { Step, Steps } from "fumadocs-ui/components/steps";
import * as AccordionComponents from "fumadocs-ui/components/accordion";
import * as FilesComponents from "fumadocs-ui/components/files";
import { Card } from "fumadocs-ui/components/card";
import { Callout } from "fumadocs-ui/components/callout";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { DocsPage, DocsBody, DocsDescription, DocsTitle } from "fumadocs-ui/page";
import * as icons from "lucide-react";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...(icons as unknown as MDXComponents),
    ...defaultMdxComponents,
    ...TabsComponents,
    ...FilesComponents,
    ...AccordionComponents,
    DocsPage,
    TypeTable,
    Callout,
    DocsBody,
    DocsDescription,
    DocsTitle,
    Step,
    Steps,
    Card,
    ...components,
  };
}
