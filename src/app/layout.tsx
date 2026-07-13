import Box from "@mui/material/Box";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Header } from "@/components/layout/Header";
import { Navigation } from "@/components/layout/Navigation";
import { ChatbotWidget } from "@/features/chatbot/ChatbotWidget";
import { ThemeRegistry } from "@/lib/ThemeRegistry";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Supplier Management",
  description: "Supplier KPI dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <ThemeRegistry>
          <Header />
          <Navigation />
          <Box component="main" sx={{ p: 3 }}>
            {children}
          </Box>
          <ChatbotWidget />
        </ThemeRegistry>
      </body>
    </html>
  );
}
