import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import type { ReactNode } from "react";
import { baseUrl, createMetadata } from 'lib/metadata';

export const metadata = createMetadata({
  title: {
    template: '%s | PromptEngine',
    default: 'PromptEngine Docs',
  },
  description: 'A Rails Engine for Managing Prompts in Your LLM Application',
  metadataBase: baseUrl,
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <head>
        <script
          defer
          data-domain="prompt-engine-docs.avi.nyc"
          src="https://a.wip.dev/js/script.js"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
