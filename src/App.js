import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./FeedbackData";
import AboutPage from "./components/AboutPage";
import AboutPageLink from "./components/AboutPageLink";
import { v4 as uuidv4 } from "uuid";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);
    const handleDelete = (id) => {
        let resp = window.confirm("Do you want to delete the comment?");
        if (resp) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    const handleAddFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    return (
        <>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <FeedbackForm
                                        handleAddFeedback={handleAddFeedback}
                                    />
                                    <FeedbackStats feedback={feedback} />
                                    <FeedbackList
                                        feedback={feedback}
                                        handleDelete={handleDelete}
                                    />
                                    <AboutPageLink />
                                </>
                            }
                        />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
