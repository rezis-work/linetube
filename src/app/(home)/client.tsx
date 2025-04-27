"use client";

import { trpc } from "@/trpc/cient";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({ text: "Rezi" });
  return <div>Page client says: {data.greeting}</div>;
};
