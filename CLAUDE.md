# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js documentation site for PromptEngine, built with Fumadocs (a Next.js documentation framework). PromptEngine is a Rails engine for managing AI prompts with version control, testing, and optimization features.

## Development Commands

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Build for production
bun build

# Start production server
bun start
```

## Architecture

### Core Structure

- **Documentation Framework**: Fumadocs MDX with Next.js 15
- **Styling**: Tailwind CSS v4
- **AI Integration**: Uses Inkeep API for chat functionality
- **Content**: MDX files located in `content/docs/`

### Key Files

- `source.config.ts`: Fumadocs configuration for content sources
- `lib/source.ts`: Content source loader configuration
- `app/layout.config.tsx`: Shared layout configurations
- `app/api/chat/route.ts`: AI chat endpoint using Inkeep API

### Route Structure

- `app/(home)`: Landing page and marketing pages
- `app/docs`: Documentation layout and pages
- `app/api/search/route.ts`: Search functionality
- `app/api/chat/route.ts`: AI chat integration

### Content Organization

Documentation content is organized in `content/docs/` with the following structure:
- `getting-started/`: Installation, configuration, quickstart guides
- `features/`: Core features documentation
- `guides/`: Integration and best practices guides
- `reference/`: API and configuration reference

### MDX Components

The site uses Fumadocs UI components including:
- Cards
- Callout
- Tabs/TabsList/TabsTrigger/TabsContent

## Dependencies Note

Uses bun as the package manager. AI SDK dependencies (@ai-sdk/openai, @ai-sdk/react) are configured to work with Inkeep API for documentation-specific chat functionality.