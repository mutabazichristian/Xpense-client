import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import SummaryPage from '../Pages/SummaryPage';
import NewExpensePage from '../Pages/NewExpensePage';
import ViewExpensesPage from '../Pages/ViewExpensePage';
import StatisticsPage from '../Pages/StatisticsPage';
import FeedbackPage from '../Pages/FeedbackPage';

const HomePage = (props) => {
    const [expenseTitle, setExpenseTitle] = useState('untitled');
    const [expenseAmount, setExpenseAmount] = useState(0);
    const [expenseCategory, setExpenseCategory] = useState('');
    const [expenseDate, setExpenseDate] = useState('');
    const [expenseImage, setExpenseImage] = useState(null);
    const [expenseDescription, setExpenseDescription] = useState('');
    const [expenses, setExpenses] = useState([]);
    const { userType, setUserType } = props;

    return (
        <div>
            <Navbar userType={userType} setUserType={setUserType} />
            <SummaryPage
                userType={userType}
                setUserType={setUserType}
            />
            <NewExpensePage
                expenseTitle={expenseTitle} expenseAmount={expenseAmount} expenseCategory={expenseCategory} expenseDate={expenseDate} expenseImage={expenseImage}
                setExpenseAmount={setExpenseAmount} setExpenseTitle={setExpenseTitle} setExpenseCategory={setExpenseCategory}
                setExpenseDate={setExpenseDate} setExpenseImage={setExpenseImage} expenseDescription={expenseDescription} setExpenseDescription={setExpenseDescription}
                expenses={expenses} setExpenses={setExpenses}
            />
            <ViewExpensesPage expenses={expenses} setExpenses={setExpenses}
                expenseTitle={expenseTitle} expenseAmount={expenseAmount} expenseCategory={expenseCategory} expenseDate={expenseDate} expenseImage={expenseImage}
                setExpenseAmount={setExpenseAmount} setExpenseTitle={setExpenseTitle} setExpenseCategory={setExpenseCategory}
                setExpenseDate={setExpenseDate} setExpenseImage={setExpenseImage} expenseDescription={expenseDescription} setExpenseDescription={setExpenseDescription}
            />
            <StatisticsPage />
            <FeedbackPage />
        </div>
    );
};

export default HomePage;