"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar"; // Import the Sidebar component
const inter = Inter({ subsets: ["latin"] });
import {store } from '../redux/store'
import { Provider } from 'react-redux'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
      
      <head>
    
    <title>Spotify</title>

</head>
      <body className={inter.className}>

      <Header />
        {children}
        </body>
    </html>
    </Provider>
  
  );
}
