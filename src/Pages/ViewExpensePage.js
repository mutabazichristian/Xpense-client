import React, { useState, useEffect } from "react";
import ExpensesViewer from "../Components/ExpensesViewer";
import searchIcon from "../Assets/icon-search.svg"
import instance from "../API/index";

function ViewExpenses(props) {
    const { expenseTitle, expenseAmount, expenseCategory, expenseDate, expenseImage,
        setExpenseTitle, setExpenseAmount, setExpenseCategory, setExpenseDate, setExpenseImage,
        expenseDescription, setExpenseDescription, expenses, setExpenses } = props;

    const refreshExpenses = async () => {
        console.log('refresh expenses');
        await instance
            .get('/expenses')
            .then(res => {
                if (res.data != []) {
                    setExpenses(res.data)
                } else {
                    setExpenses([]);
                }
            })
            .catch(err => console.log(err))

    }
    const deleteHandler = async (id) => {
        console.log('Id for deletion', id);
        await instance.delete('/expenses', { id })
            .then(res => {
                console.log(res);
                //refresh the expenses list
                refreshExpenses();
            })
            .catch(err => console.log(err))
    }
    const updateHandler = (event, id, expense) => {
        event.preventDefault();
        console.log('update this id', id);
        console.log('new data to be sent', expense);
    }
    useEffect(refreshExpenses, [])
    return (
        <div className="view-expense-page">
            <div className="view-expenses-container">
                <div className="view-expenses-title">
                    <h1>View Xpenses</h1>
                </div>
                <ExpensesViewer setExpenses={setExpenses}
                    expenseTitle={expenseTitle} expenseAmount={expenseAmount} expenseCategory={expenseCategory} expenseDate={expenseDate} expenseImage={expenseImage}
                    setExpenseAmount={setExpenseAmount} setExpenseTitle={setExpenseTitle} setExpenseCategory={setExpenseCategory}
                    setExpenseDate={setExpenseDate} setExpenseImage={setExpenseImage} expenseDescription={expenseDescription} setExpenseDescription={setExpenseDescription} updateHandler={updateHandler}
                    expenses={expenses} deleteHandler={deleteHandler} />
                <div className="search-bar">
                    <input type="text" placeholder="search here" />
                    <img src={searchIcon} alt="search button" className="btn-search" />
                </div>
            </div>
        </div>
    )
}
export default ViewExpenses;    