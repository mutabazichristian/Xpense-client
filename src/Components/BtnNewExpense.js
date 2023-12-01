import React from "react";

function BtnNewExpense() {
    const handleScrollToNewExpense = () => {
        const targert = document.querySelector('.new-expense');
        if (targert) {
            targert.scrollIntoView({
                behavior: 'smooth',
            })
        }
    }
    return (
        <div onClick={handleScrollToNewExpense} className="btn-new-expense">
            <p>+ New Expense</p>
        </div>
    )
}

export default BtnNewExpense;