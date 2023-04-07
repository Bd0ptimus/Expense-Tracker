import { useContext } from 'react';
import ExpenseOutput from '../components/Expenses/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
function AllExpenses(){
    const expensesCtx =  useContext(ExpensesContext);
    return <ExpenseOutput expenses={expensesCtx.expenses} periodName="Total"/>;
}

export default AllExpenses;