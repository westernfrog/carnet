"use client";

import Cards from "./components/Cards";
import Form from "./components/Form";
import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Form />
        <Cards />
      </QueryClientProvider>
    </>
  );
}
