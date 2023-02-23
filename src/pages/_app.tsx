import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import NavBar from "@/components/NavBar";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <NavBar />
      <div className="h-16 mb-0 sm:mb-3"></div>
      <div className="bg-gray-300 min-h-screen">
        {/* <div className="bg-gray-200 sm:min-h-screen sm:px-12 py-12 sm:py-8"> */}
        <Component {...pageProps} />
        {/* </div> */}
      </div>
    </SessionContextProvider>
  );
}
export default MyApp;
