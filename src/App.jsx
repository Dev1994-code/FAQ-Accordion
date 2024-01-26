import React from "react";
import questions from "./questions";
import Form from "./Form";
import Header from "./Header";

function App() {
    return (
        <>
            <Header /> 
        <div className="questions" id="container">
                {questions.map((question) => (
                    <Form key={question.id} question={question}/>
                )) }
            </div>
        </>
            )
}


export default App;