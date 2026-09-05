import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WritingList } from "@/components/WritingList";

export const metadata: Metadata = { title: "Writing | Vamsi Krishna" };

export default function WritingIndex() {
  return (
    <>
      <Nav />
      <main id="main" className="mx-auto w-full max-w-[1200px] px-5 sm:px-10 xl:px-0 pt-16 pb-24">
        <h1 className="display mb-4 text-4xl sm:text-5xl">Writing</h1>
        <p className="mb-10 max-w-xl text-ink-2">Notes on ML, agents, history, and whatever else.</p>
        <WritingList />
      </main>
      <Footer />
    </>
  );
}
