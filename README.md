# Umami Script for Next.js

[![npm version](https://img.shields.io/npm/v/umami-script-nextjs)](https://www.npmjs.com/package/umami-script-nextjs)
[![npm downloads](https://img.shields.io/npm/dm/umami-script-nextjs)](https://www.npmjs.com/package/umami-script-nextjs)
[![License](https://img.shields.io/npm/l/umami-script-nextjs)](https://github.com/Rico00121/umami-script-nextjs/blob/main/LICENSE)

A simple, lightweight Next.js component for integrating [Umami Analytics](https://umami.is/) into your Next.js application.

📦 [npm package](https://www.npmjs.com/package/umami-script-nextjs) | 🐛 [Report Bug](https://github.com/Rico00121/umami-script-nextjs/issues) | 💡 [Request Feature](https://github.com/Rico00121/umami-script-nextjs/issues)

## Features

- 🚀 **Simple Integration** - Just add the component to your layout
- 🔒 **Privacy-Focused** - Uses Umami, a privacy-focused analytics platform
- ⚙️ **Configurable** - Supports environment variables and props
- 📦 **TypeScript** - Fully typed with TypeScript
- 🎯 **Zero Dependencies** - Only uses Next.js built-in Script component

## Installation

Install via npm:

```bash
npm install umami-script-nextjs
```

Or using yarn:

```bash
yarn add umami-script-nextjs
```

Or using pnpm:

```bash
pnpm add umami-script-nextjs
```

📦 [View on npm](https://www.npmjs.com/package/umami-script-nextjs)

## Usage

### Basic Usage

1. Add your Umami website ID to your environment variables:

```env
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your-website-id-here
```

2. Import and add the component to your `app/layout.tsx`:

```tsx
import UmamiScript from 'umami-script-nextjs';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <UmamiScript />
      </body>
    </html>
  );
}
```

### Advanced Usage

You can also pass props directly to the component:

```tsx
<UmamiScript
  websiteId="your-website-id"
  scriptSrc="https://your-umami-instance.com/script.js"
  strategy="afterInteractive"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `websiteId` | `string` | `process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID` | Your Umami website ID |
| `scriptSrc` | `string` | `"https://cloud.umami.is/script.js"` | Umami script source URL |
| `strategy` | `'afterInteractive' \| 'lazyOnload' \| 'beforeInteractive' \| 'worker'` | `"afterInteractive"` | Next.js Script loading strategy |

## Requirements

- Next.js 13+ (App Router)
- React 18+

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
