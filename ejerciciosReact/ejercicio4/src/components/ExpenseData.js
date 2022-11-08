import "./ExpenseData.css"

function ExpenseData(props) {
    const month = props.date.toLocaleString('es-ES', { month: 'long' });
    const day = props.date.toLocaleString('es-ES', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
  );
}

export default ExpenseData;