import React, { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import Layout from "./components/layout/Layout";
// import AllQuotes from "./pages/AllQuotes";
// import NewQuote from "./pages/NewQuote";
// import NotFound from "./pages/NotFound";
// import QuoteDetail from "./pages/QuoteDetail";
import Comments from "./components/comments/Comments";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/quotes" />} />

          <Route path="/quotes" element={<AllQuotes />} />

          <Route path="/quotes/:quoteId/*" element={<QuoteDetail />}>
            <Route
              path=""
              element={
                <div className="centered">
                  <Link className="btn--flat" to="comments">
                    Load comments
                  </Link>
                </div>
              }
            />

            <Route path="comments" element={<Comments />} />
          </Route>

          <Route path="/new-quote" element={<NewQuote />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
