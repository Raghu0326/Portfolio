import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));
import { LoadingProvider } from "./context/LoadingProvider";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <LoadingProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={
              <MainContainer>
                <Suspense fallback={null}>
                  <CharacterModel />
                </Suspense>
              </MainContainer>
            } />
            <Route path="/work/:id" element={<ProjectDetails />} />
          </Routes>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
