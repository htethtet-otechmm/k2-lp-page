This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact form — EmailJS

Copy `.env.example` to `.env.local` and fill in your EmailJS service ID,
template ID, and public key. Restart the development server after changing
these values; rebuild the application for production. These public values
are included in the browser bundle. No private EmailJS key is needed.

Configure the recipient address in your EmailJS template. Set Reply-To to
`{{reply_to}}` and use these variables in the subject/body:

```text
お問い合わせ：{{from_name}}

会社名・お名前: {{from_name}}
メールアドレス: {{reply_to}}
電話番号: {{phone}}
ご興味のあるサービス: {{service}}

{{message}}
```

Use EmailJS's normal double-brace variables so user input is escaped. The
contact form uses the official [EmailJS browser SDK](https://www.emailjs.com/docs/sdk/send/).
To verify delivery after configuration, submit the contact form with a test
message and check the configured recipient inbox. Without configuration,
the form shows an error and does not attempt to send.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
