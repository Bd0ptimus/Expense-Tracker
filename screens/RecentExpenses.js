import { useContext, useEffect, useState } from 'react';

import ExpenseOutput from '../components/Expenses/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDate } from '../util/date';
import { fetchExpenses } from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';
function RecentExpenses(){
    const[isFetching, setIsFetching] = useState(true);
    const expensesCtx =  useContext(ExpensesContext);
    const [error, setError] = useState();
    // const [fetchedExpenses, setFetchedExpenses] = useState([]);
    useEffect(()=>{
        async function getExpenses(){
            setIsFetching(true);
            console.log('before fetch');
            try{
                const expenses =  await fetchExpenses();
                expensesCtx.setExpenses(expenses);

            }catch(error){
                setError('Could not fetch expenses');
            }
            console.log('after fetch');
            setIsFetching(false);
            // setFetchedExpenses(expenses);
        }
        getExpenses();
    },[]);

    function errorHandler(){
        setError(null);
    }

    if(error && !isFetching){
        return <ErrorOverlay message={error} onConfirm={errorHandler}/>
    }
    if(isFetching){
        return <LoadingOverlay/>;
    }
    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDate(today, 7);

        return (expense.date >= date7DaysAgo) && (expense.date <= today);
    });
    return <ExpenseOutput expenses={recentExpenses} periodName="Last 7 days"/>;

}

export default RecentExpenses;