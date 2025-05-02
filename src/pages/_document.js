import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head/>
      <body className="bg-background text-foreground">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
