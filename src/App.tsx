import { useEffect, useState } from "react";

import {ToastContainer,toast,} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import StackSidebar from "./components/stacksidebar";
import Footer from "./components/Footer";

import type { Technology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<
    Technology[]
  >([]);

  const [stack, setStack] = useState<Technology[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  // Load technologies
  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);

        setLoading(false);

        toast.error(
          "Failed to load technologies"
        );
      });
  }, []);

  // Add technology
  const addToStack = (
    technology: Technology
  ): void => {
    const alreadyAdded = stack.find(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );

      return;
    }

    setStack([...stack, technology]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  // Remove technology
  const removeFromStack = (
    id: string
  ): void => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack(
      stack.filter((item) => item.id !== id)
    );

    if (removedTechnology) {
      toast.info(
        `${removedTechnology.name} removed from your stack`
      );
    }
  };

  // Remove all
  const removeAll = (): void => {
    if (stack.length === 0) {
      toast.warning(
        "Your stack is already empty!"
      );

      return;
    }

    setStack([]);

    toast.info(
      "All technologies removed from your stack"
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <Hero />

      <main
        id="technologies"
        className="section-container py-16"
      >
        <div className="mb-10 text-center">

          <p className="mb-2 font-semibold text-orange-500">
            EXPLORE
          </p>

          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Modern Technologies
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Explore popular technologies and build
            your own development stack.
          </p>

        </div>

        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">

            <div className="text-center">

              <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-orange-500"></div>

              <p className="font-medium text-slate-600">
                Loading technologies...
              </p>

            </div>

          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

            <div className="lg:col-span-3">

              <TechnologyGrid
                technologies={technologies}
                stack={stack}
                addToStack={addToStack}
              />

            </div>

            <div className="lg:col-span-1">

              <StackSidebar
                stack={stack}
                removeFromStack={
                  removeFromStack
                }
                removeAll={removeAll}
              />

            </div>

          </div>
        )}

      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        closeOnClick
        pauseOnHover
      />

    </div>
  );
}

export default App;