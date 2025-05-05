# Happy Dance - Modern Web Application Monorepo

A cutting-edge monorepo built with Next.js, shadcn/ui, and Turborepo, designed for optimal developer experience and performance.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js, TypeScript, and shadcn/ui
- **Monorepo Architecture**: Efficient code sharing and management using Turborepo
- **Beautiful UI Components**: Pre-built, accessible components from shadcn/ui
- **Type Safety**: Full TypeScript support across the entire project
- **Optimized Builds**: Fast builds and development experience with Turborepo
- **Consistent Styling**: Tailwind CSS for consistent and responsive design

## 📦 Project Structure

```
happy-dance/
├── apps/
│   └── web/          # Next.js web application
├── packages/
│   └── ui/           # Shared UI components
├── turbo.json        # Turborepo configuration
└── package.json      # Root package.json
```

## 🛠️ Getting Started

1. **Install Dependencies**

```bash
pnpm install
```

2. **Initialize shadcn/ui**

```bash
pnpm dlx shadcn@latest init
```

3. **Start Development Server**

```bash
pnpm dev
```

## 🎨 Adding Components

To add new shadcn/ui components to your application:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

Components will be automatically placed in the `packages/ui/src/components` directory.

## 🎯 Using Components

Import components from the shared UI package:

```tsx
import { Button } from "@workspace/ui/components/button";
```

## 🎨 Styling

The project uses Tailwind CSS for styling. Configuration files are set up to work seamlessly with the UI package:

- `tailwind.config.ts`: Configured for the monorepo structure
- `globals.css`: Includes necessary Tailwind directives and custom styles

## 🏗️ Development

- **Build**: `pnpm build`
- **Lint**: `pnpm lint`
- **Test**: `pnpm test`

## 📝 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
