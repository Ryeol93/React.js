import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  /*
    props로 연결 해줬기 때문에 지우고 'pros.속성명'으로 대체
    const expenseDate = new Date(2023, 0, 2);
    const expenseTitle = 'Car insurance';
    const expenseAmount = 294.67;
    */
  // 달력을 따로 만들기 위해 ExpenseDate 컴포넌트만듦
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
