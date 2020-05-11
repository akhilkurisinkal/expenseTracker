function addTransactionView()
{
        return `
                <div id="pageHeader" class="pageHeader">
                    <h1> Add Expense </h1>
                </div>
                <div id="addTForm" class="addTForm">
                    <img src="images/credit.png">
                    <div class="addTFormControl">Type</div>
                    <div class="addTFormControl"><select class="form-control" id="transactionType" onChange="typeSelector();"><option>SELECT</option><option value="expense">Expense</option><option value="income">Income</option></select></div>
                    <div class="addTFormControl">Date</div>
                    <div class="addTFormControl"><input class="form-control" type="date" id="transactionDate"></div>
                    <div class="addTFormControl">Category</div>
                    <div  id="categoryDiv" class="addTFormControl"><select class="form-control" id="transactionCategory"><option>SELECT</option><option>Shopping</option><option value="utility">Utility</option><option>Food</option><option>Bank</option><option>Insurance</option<option>Loan</option>></select></div>
                    <div class="addTFormControl">Description</div>
                    <div class="addTFormControl"><input class="form-control" id="transactionDescription" type="text"></div>
                    <div class="addTFormControl">Amount</div>
                    <div class="addTFormControl"><input class="form-control" id="transactionAmount" type="text"></div>
                    <div class="addTFormControl"><button id="saveButton" style="width: 150px;height:40px;background-color:#000;color:#fff;border:none;border-radius:8px;margin-top:10px;">SAVE</button></div>
                </div>`;
}
function viewTransactionsView()
{
        return` <div id="topDiv" class="topDiv">
                    <div id="topMenu" class="topMenu">
                        <div id="allButton" class="col-sm-2 col-md-2 topMenuInner activeButton">All</div>
                        <div id="expenseButton" class="col-sm-5 col-md-5 topMenuInner expensem">Expense</div>
                        <div id="incomeButton" class="col-sm-5 col-md-5 topMenuInner incomem">Income</div>
                    </div>
                    <div id="balanceAmountLabel" style="margin-top: 40px;font-weight: 500;">
                        Current balance &nbsp <img src="images/10.png">
                    </div>
                    <div style="margin-top:20px;">
                        <h1  id="balanceAmount" style="font-size: 40px;font-family:'Source Serif Pro';font-weight: 800;">Rs 0</h1>
                    </div>
                </div>
                <div id="bottomDiv" class="bottomDiv">
                    <p style="color:#888;text-align:center;">Breakdown for <span style="color:#000;">this month</p>
                    <div id="bottomList" style="height:100%;overflow:scroll;">
                    </div>
                </div>`
}
function viewList(sn)
{
    let categoryIcon =`<img src="images/bill.png" class="categoryIcon">`;
    let divId = "div"+sn.id;
    if(sn.category == 'shopping')
    {
        categoryIcon = `<img src="images/shop.png" width="40px" class="categoryIcon">`
    }
    if(sn.category == 'food')
    {
        categoryIcon = `<img src="images/food.png" width="40px" class="categoryIcon">`
    }
    if(sn.category == 'utility')
    {
        categoryIcon = `<img src="images/utility.png" width="40px" class="categoryIcon">`
    }
    if(sn.category == 'loan')
    {
        categoryIcon = `<img src="images/bank.png" width="40px" class="categoryIcon">`
    }
    if(sn.category == 'travel')
    {
        categoryIcon = `<img src="images/travel.png" width="40px" class="categoryIcon">`
    }
    if(sn.category == 'insurance')
    {
        categoryIcon = `<img src="images/insurance.png" width="40px" class="categoryIcon">`
    }
    return `<div class="dq">
    <div class="section">
        <div class="col-3 col-sm-3 col-md-3 innersec ic">${categoryIcon}</div>
        <div class="col-4 col-sm-5 col-md-5 innersec desc">${sn.description}</div>
        <div class="col-4 col-sm-4 col-md-4 innersec amt">${sn.amount} </div>
        <div class="col-1 col-sm-1 col-md-1 innersec bu" style="display:flex;justify-content:center;align-items:center;font-size:18px;font-weight:bold;"><button id="${sn.id}" class="arrb" onClick="expandDiv(${sn.id});"><i class="fa fa-angle-down"></i></button></div>
    </div>
    <div id="${divId}" class="subHidden">
        <div class="col-3 col-sm-3 col-md-3"></div>
        <div class="col-4 col-sm-4 col-md-4">${sn.date} </div>
        <div class="col-4 col-sm-4 col-md-4"></div>
        <div class="col-1 col-sm-1 col-md-1"  style="display:flex;justify-content:center;align-items:center;font-size:18px;font-weight:bold;"><button id="" onClick="deleteex(g);" class="delete"><i class="fa fa-trash" aria-hidden="true"></i></button></div>
    </div>
</div>`;
}
function expandDiv(arrowId)
{
    console.log(arrowId +" is down arrow button ID");
    hiddenId = "div"+arrowId;
    console.log(hiddenId +" is down arrow button ID");
    if( document.getElementById(hiddenId).className == "subHidden")
    {
        document.getElementById(hiddenId).className = "expandDiv";
        document.getElementById(arrowId).innerHTML = uparrowicon() ;
    }
    else
    {
        document.getElementById(hiddenId).className = "subHidden";
        document.getElementById(arrowId).innerHTML = downarrowicon() ;
        
    }
}
function uparrowicon()
{
    let uparrowEl = `<i class="fa fa-angle-up"></i>`;
    return uparrowEl;
}
    //down arrow
function downarrowicon()
{
    let downarrowEl = `<i class="fa fa-angle-down"></i>`;
    return downarrowEl;
}
function typeSelector()
{
    var tType = document.querySelector("#transactionType").value;
    if(tType == "expense")
    {
        categories = `<select class="form-control" id="transactionCategory"><option>SELECT</option><option>Shopping</option><option value="utility">Utility</option><option>Food</option><option>Bank</option><option>Insurance</option<option>Loan</option>></select>`
    }
    if(tType == "income")
    {
        categories =     `<select class="form-control" id="transactionCategory"><option>SELECT</option><option>Salary</option><option>Pension</option><option>Business income</option><option>Investment</option></select>`
    }
    document.querySelector("#categoryDiv").innerHTML = categories;
}



