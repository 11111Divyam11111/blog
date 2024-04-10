import Link from "next/link";
import { DisLike, Like } from "./blog/workFunction";
import Footer from "./_components/Footer";

export default function Home() {
  return (<>
    <div className="flex flex-col mt-5 p-3">
      <div className="flex justify-center my-3 flex-row gap-10">
        <Link href="/blog">
          <button className="btn btn-md btn-warning">
            View Blogs
          </button>
        </Link>
        <Link href="/blog/create">
          <button className="btn btn-md btn-warning">
            Create Blog
          </button>
        </Link>
        <Link href="/user">
          <button className="btn btn-md btn-warning">
            Sign up
          </button>
        </Link>
      </div>
      <div className="flex flex-col mt-10">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold">Some Recent Blogs</h1>
        </div>
        <div className="grid md:grid-cols-1 grid-cols-1 gap-5">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div>
              <p className="text-xl font-bold mb-2">Creator: Jose Murinho</p>
              <p className="text-gray-700">
                I am 56 now and yesterday I was 20 and today I'm 56. Time flies,
                time flies, and I think one day you will regret if you don't
                reach what you can reach. There is a huge difference between a
                player that keeps consistency and the player that has moments,
                and that is what makes a difference between a top player and a
                player with top potential. I'm not expecting you to be the man
                of the match every game, I'm not expecting you to score goals
                every game. I just want to tell you that I think you will
                regret. You should demand more from you, not me demanding more
                from you, not me, nobody, you. I think you should demand more
                from you. Um, thank you mate...
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <Like />
                  <DisLike />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div>
              <p className="text-xl font-bold mb-2">Creator: Charles Darwin</p>
              <p className="text-gray-700">
                Charles Darwin proposed the Theory of Evolution through
                natural selection, explaining how species evolve over time. His
                seminal work "On the Origin of Species" laid the foundation for
                modern evolutionary biology. Topic: Renaissance Art
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <Like />
                  <DisLike />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div>
              <p className="text-xl font-bold mb-2">Creator: Scott Wu</p>
              <p className="text-gray-700">
                The world's first AI software engineer, named Devin, is a
                groundbreaking creation by Cognition Labs, introduced as a fully
                autonomous AI software engineer. Devin's capabilities are
                revolutionary, enabling it to plan, execute complex engineering
                tasks, recall context, learn over time, fix mistakes, and
                actively collaborate with users. Equipped with common developer
                tools and the ability to work independently or alongside human
                engineers, Devin sets a new standard in AI-driven software
                development. Notably, Devin has demonstrated exceptional
                performance on the SWE-bench coding benchmark, resolving
                real-world GitHub issues with an impressive success rate,
                surpassing previous state-of-the-art models. This innovative AI
                model represents a significant advancement in the field of
                artificial intelligence, offering a glimpse into the future of
                AI-driven software engineering and automation..
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <Like />
                  <DisLike />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      <Footer/>


    </div>
  </>

  );
}
