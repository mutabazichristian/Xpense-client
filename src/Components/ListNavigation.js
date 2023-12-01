import React from "react";

function ListNavigationList() {
    const handleScrollToSummary = () => {
        const targert = document.querySelector('.summary');
        if (targert) {
            targert.scrollIntoView({
                behavior: 'smooth',
            })
        }
    }

    const handleScrollToViewExpense = () => {
        const targert = document.querySelector('.view-expense-page');
        if (targert) {
            targert.scrollIntoView({
                behavior: 'smooth',
            })
        }
    }
    const handleScrollToSTats = () => {
        const targert = document.querySelector('.statistics-page');
        if (targert) {
            targert.scrollIntoView({
                behavior: 'smooth',
            })
        }
    }
    const handleScrollToFeedback = () => {
        const targert = document.querySelector('.feedback-page');
        if (targert) {
            targert.scrollIntoView({
                behavior: 'smooth',
            })
        }
    }

    return (
        <ul className="list-navigation">
            <li onClick={handleScrollToSummary}>Home</li>
            <li onClick={handleScrollToViewExpense}>View Expense</li>
            <li onClick={handleScrollToSTats}>Stats</li>
            <li onClick={handleScrollToFeedback}>Feedback</li>
        </ul>
    )
}

export default ListNavigationList;