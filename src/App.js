import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/AboutPage";
import AboutPageLink from "./components/AboutPageLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                    <AboutPageLink />
                                </>
                            }
                        />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
    );
}

export default App;
