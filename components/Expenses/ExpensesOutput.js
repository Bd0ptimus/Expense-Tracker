import {View, StyleSheet} from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';


function ExpenseOutput({expenses, periodName}){
    return (<View style={styles.container}>
        <ExpensesSummary expenses={expenses} periodName={periodName}/>
        <ExpensesList expenses={expenses}/>
    </View>);
}

export default ExpenseOutput;

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding : 24,
        backgroundColor: GlobalStyles.colors.primary700
    },
});