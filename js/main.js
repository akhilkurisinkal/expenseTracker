let idCounter = 0;
let allTransactionsArray = [];
let transactionViewArray = [];
let totalExpense = 0;
let totalIncome = 0;
let balanceAmount = 0;
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
document.querySelector("#homeButton").addEventListener("click", viewTransactions, false);
document.querySelector("#addButton").addEventListener("click", addTransaction, false);
document.querySelector("#allButton").addEventListener("click", viewTransactions, false);
document.querySelector("#expenseButton").addEventListener("click", viewTransactions, false);
document.querySelector("#incomeButton").addEventListener("click", viewTransactions, false);
function addTransaction()
{
    document.querySelector("#root").innerHTML = addTransactionView();
    document.querySelector("#saveButton").addEventListener("click", saveTransaction, false);
}
function saveTransaction()
{
    const transactionObject = {};
    transactionObject.id = idCounter;
    transactionObject.type = document.querySelector("#transactionType").value;
    transactionObject.date = new Date(document.querySelector("#transactionDate").value);
    const date = transactionObject.date;
    transactionObject.day = date.getDay();
    transactionObject.month = date.getMonth();
    transactionObject.year = date.getFullYear();
    transactionObject.category = document.querySelector("#transactionCategory").value;
    transactionObject.description = document.querySelector("#transactionDescription").value;
    transactionObject.amount = document.querySelector("#transactionAmount").value;
    idCounter++;
    allTransactionsArray.push(transactionObject);
    console.log(allTransactionsArray);
    if(transactionObject.type == "expense")
    {
        totalExpense = totalExpense + transactionObject.amount;
    }
    if(transactionObject.type == "income")
    {
        totalIncome = balanceAmount + transactionObject.amount;
    }
    balanceAmount = balanceAmount-totalExpense;
}
function viewTransactions()
{
    document.querySelector("#root").innerHTML = viewTransactionsView();
    document.querySelector("#allButton").addEventListener("click", viewTransactions, false);
    document.querySelector("#expenseButton").addEventListener("click", viewTransactions, false);
    document.querySelector("#incomeButton").addEventListener("click", viewTransactions, false);
    document.querySelector("#balanceAmount").textContent = "Rs "+balanceAmount;
    const buttonId = this.id;
    console.log(buttonId);
    document.querySelector("#bottomList").innerHTML = transactionsListView(buttonId);

}
function transactionsListView(buttonId)
{
    var transactionType;
    if(buttonId == "allButton" || buttonId == "homeButton")
    {
        transactionViewArray = allTransactionsArray.map(transactionObject => {if (transactionObject.month == currentMonth) {return viewList(transactionObject);} });
        document.querySelector("#incomeButton").className="col-sm-5 col-md-5 topMenuInner";
        document.querySelector("#expenseButton").className="col-sm-5 col-md-5 topMenuInner";
        document.querySelector("#allButton").className = "col-sm-2 col-md-2 topMenuInner activeButton";
    }
    if(buttonId == "expenseButton")
    {
        transactionViewArray = allTransactionsArray.map(transactionObject => {if (transactionObject.type == "expense" && transactionObject.month == currentMonth) { return viewList(transactionObject); }});
        document.querySelector("#allButton").className = "col-sm-2 col-md-2 topMenuInner";
        document.querySelector("#incomeButton").className="col-sm-5 col-md-5 topMenuInner";
        document.querySelector("#expenseButton").className="col-sm-5 col-md-5 topMenuInner activeButton";
    }
    if(buttonId == "incomeButton")
    {
        transactionViewArray = allTransactionsArray.map(transactionObject => {if (transactionObject.type == "income" && transactionObject.month == currentMonth) { return viewList(transactionObject);}});
        document.querySelector("#allButton").className = "col-sm-2 col-md-2 topMenuInner";
        document.querySelector("#expenseButton").className="col-sm-5 col-md-5 topMenuInner";
        document.querySelector("#incomeButton").className="col-sm-5 col-md-5 topMenuInner activeButton";
    }
    transactionViewArray = transactionViewArray.join("");
    console.log(transactionViewArray);
    console.log("View for each transaction created");
    return transactionViewArray;
}
