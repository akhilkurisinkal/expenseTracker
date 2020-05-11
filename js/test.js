const expenseObj = {};
        const incomeObj = {};
        let incomeList = [];
        let expenseList = [];
        let arr = [];
        let inarr = [];
        let allarr = [];
        let allarrw = [];
        let totalExpense = 0;
        var joinedarr = [];
        var joinedinarr = [];
        let id = 0;
        let idi = 100;
        let globid = 0;
        var aid;
        var did;
        var aaid;
        var divid;
        var opt;
        const root = document.querySelector("#root");
        const home = document.querySelector("#home");
        const addEx = document.querySelector("#addEx");
        const stat = document.querySelector("#stat");
        const settings = document.querySelector("#settings");
        home.addEventListener("click", viewExpense, false);
        addEx.addEventListener("click", addExpense, false);
        stat.addEventListener("click", viewStat, false);
        settings.addEventListener("click", viewSettings, false);

        const allm = document.querySelector("#allm");
        const expensem = document.querySelector("#expenseb");
        const incomem = document.querySelector("#incomem");
        

        //functions
        //function to exectute on clicking plus button on nav bar
        function addExpense()
        {
            root.innerHTML = addExpenseContent();
            const saveBtn = document.querySelector("#saveBtn");
            saveBtn.addEventListener("click", saveExpense, false);

        }
        //function to exectute on clicking home on nav bar
        function viewExpense()
        {
            root.innerHTML = viewExpenseContent();
            const bottomlist = document.querySelector("#bottomlist");
            const balAmount = document.querySelector("#balAmount");
            bottomlist.innerHTML = viewAllList();
    
        }
        function viewAll()
        {
            const bottomlist = document.querySelector("#bottomlist");
            document.querySelector("#incomem").className="col-sm-5 col-md-5 tmenu";
            document.querySelector("#expenseb").className="col-sm-5 col-md-5 tmenu";
            document.querySelector("#allm").className = "col-sm-2 col-md-2 tmenu allm";
            bottomlist.innerHTML = viewAllList();
        }
        function viewEx()
        {
            const bottomlist = document.querySelector("#bottomlist");
            document.querySelector("#allm").className = "col-sm-2 col-md-2 tmenu";
            document.querySelector("#incomem").className="col-sm-5 col-md-5 tmenu";
            document.querySelector("#expenseb").className="col-sm-5 col-md-5 tmenu allm";
            bottomlist.innerHTML = viewExpenseList();
        }
        function viewIn()
        {
            const bottomlist = document.querySelector("#bottomlist");
            document.querySelector("#allm").className = "col-sm-2 col-md-2 tmenu";
            document.querySelector("#expenseb").className="col-sm-5 col-md-5 tmenu";
            document.querySelector("#incomem").className="col-sm-5 col-md-5 tmenu allm";
            bottomlist.innerHTML = viewIncomeList();
        }
        //function to exectute on clicking save button in add expense page
        function saveExpense()
        {
            const type = document.querySelector("#sel").value;
            const date = document.querySelector("#date").value;
            const category = document.querySelector("#selOpt").value;
            const desc = document.querySelector("#desc").value;
            const amount = document.querySelector("#amount").value;
            const amountc = parseInt(amount, 10);
            if(type == "expense")
            {
                expenseObj.date = new Date(date);
                expenseObj.category = category;
                expenseObj.description = desc;
                expenseObj.amount = amountc;
                expenseObj.id = id;
                id++;
                expenseList.push(expenseObj);
                console.log(expenseList);
                console.log("Saved Expense!");
                saveExpenseList();  
            }
            if(type == "income")
            {
                incomeObj.date = date;
                incomeObj.category = category;
                incomeObj.description = desc;
                incomeObj.amount = amountc;
                incomeObj.id = idi;
                idi++;
                incomeList.push(incomeObj);
                console.log(incomeList);
                console.log("Saved Income!");
                saveIncomeList();
            }
            
        }
        //to view list of expenses
        function viewExpenseList()
        {
            return joinedarr;
        }
        // to view list of income
        function viewIncomeList()
        {
            return joinedinarr;
        }
        //to view all expenses and incomes
        function viewAllList()
        {
            allarr = joinedarr.concat(joinedinarr);
            return allarr;
        }
        // to calculate total expense
        function totalExpenseCal()
        {
            let i = 0;
            for(i=0;i<expenseList.length;i++)
            {
                totalExpense = totalExpense + expenseList[i].amount;
                //balAmount.textContent = totalExpense;
                console.log(totalExpense);
    
            }
    
        } 
        //to expand each expense div on clicking arrow
        function expandDiv(aidd)
        {
            arrid = aidd;
            divid = "div"+ arrid;
            console.log(arrid);
            console.log(divid);
            const cc = document.querySelector("#"+divid);
            
            if(cc.className=="subHidden")
            {
                cc.className = "expandDiv";
                document.getElementById(arrid).innerHTML = uparrowicon() ;
                console.log(aid);
                
            }
            else
            {
                cc.className = "subHidden";
                document.getElementById(arrid).innerHTML = downarrowicon() ;
                
            }
        }
    


    //views
    //view of add expense page
    function addExpenseContent()
    {
        let addCont = `
        <div class="heading">
           <h1> Add Expense </h1>
        </div>
        <div class="main">
            <img src="images/credit.png">
           <div class="addform la">Type</div>
           <div class="addform"><select id="sel" onChange="selector();"><option value="expense">Expense</option><option value="income">Income</option></select></div>
           <div class="addform la">Date</div>
           <div class="addform la"><input type="date" id="date"></div>
           <div class="addform la">Category</div>
           <div class="addform" id="optDiv"><select id="selOpt"><option>Shopping</option><option>Utility</option><option>Food</option><option>Bank</option><option>Insurance</option<option>Loan</option>></select></div>
           <div class="addform la">Description</div>
           <div class="addform"><input id="desc" type="text"></div>
           <div class="addform la">Amount</div>
           <div class="addform"><input id="amount" type="text"></div>
           <div class="addform btn"><button id="saveBtn" class="savebtn">SAVE</button></div>
        </div>`
        return addCont;
    }

    //selector

    function selector()
    {
        var sell = document.querySelector("#sel").value;
        if(sell == "expense")
        {
            opt = `<select id="selOpt"><option>Shopping</option><option>Utility</option><option>Food</option><option>Bank</option><option>Insurance</option<option>Loan</option>></select>`
        }
        if(sell == "income")
        {
            opt =     `<select id="selOpt"><option>Salary</option><option>Pension</option><option>Business income</option><option>Investment</option></select>`
        }
        document.querySelector("#optDiv").innerHTML = opt;
    }
    //view of view expense page or home page
    function viewExpenseContent()
    {
        let viewCont =`
        <div id="top" class="top">
            <div id="topNav" class="topNav">
                <div id="allm" class="col-sm-2 col-md-2 tmenu allm" onClick="viewAll();">All</div>
                <div  class="col-sm-5 col-md-5 tmenu expensem" id="expenseb" onClick="viewEx();">Expense</div>
                <div id="incomem" class="col-sm-5 col-md-5 tmenu incomem" onClick="viewIn();">Income</div>
            </div>
            <div id="balancel" class="balancel">
                Current balance &nbsp <img src="images/10.png" class="aic">
            </div>
            <div id="balance" class="balance">
                <h1 id="balAmount" class="balAmount">Rs 25370</h1>
            </div>
        </div>
        <div id="bottom" class="bottom">
            <p  class="sortla">Breakdown for <span class="sort">this month</span></p>
            <div id="bottomlist">

            </div>
        </div>`;
        return viewCont;
    }
    //for saving the view of each expense list to new array
    function saveExpenseList()
    {
        let ic =`<img src="images/bill.png" width="40px" height="40px" style="border-radius:50%;">`
        {
            if(expenseObj.category == 'shopping')
            {
                ic = `<img src="images/shop.png" width="40px" height="40px" style="border-radius:50%;">`
            }
            if(expenseObj.category == 'food')
            {
                ic = `<img src="images/food.png" width="40px" height="40px" style="border-radius:50%;">`
            }
            if(expenseObj.category == 'utility')
            {
                ic = `<img src="images/utility.png" width="40px" height="40px" style="border-radius:50%;">`
            }
            if(expenseObj.category == 'loan')
            {
                ic = `<img src="images/bank.png" width="40px" height="40px" style="border-radius:50%;">`
            }
            if(expenseObj.category == 'travel')
            {
                ic = `<img src="images/travel.png" width="40px" height="40px" style="border-radius:50%;">`
            }
            if(expenseObj.category == 'insurance')
            {
                ic = `<img src="images/insurance.png" width="40px" height="40px" style="border-radius:50%;">`
            }
            if(expenseObj.category == 'others')
            {
                ic = `<img src="images/bill.png" width="40px" height="40px" style="border-radius:50%;">`
            }

            aid = expenseObj.id;
            did = "div"+expenseObj.id;
            arr.push(`
                    <div class="dq">
                    <div class="section">
                        <div class="col-3 col-sm-3 col-md-3 innersec ic">${ic}</div>
                        <div class="col-4 col-sm-5 col-md-5 innersec desc">${expenseObj.description}</div>
                        <div class="col-4 col-sm-4 col-md-4 innersec amt">${expenseObj.amount} </div>
                        <div class="col-1 col-sm-1 col-md-1 innersec bu" style="display:flex;justify-content:center;align-items:center;font-size:18px;font-weight:bold;"><button id="${aid}" class="arrb" onClick="expandDiv(${aid});"><i class="fa fa-angle-down"></i></button></div>
                    </div>
                    <div id="${did}" class="subHidden">
                        <div class="col-3 col-sm-3 col-md-3"></div>
                        <div class="col-4 col-sm-4 col-md-4">${expenseObj.date} </div>
                        <div class="col-4 col-sm-4 col-md-4"></div>
                        <div class="col-1 col-sm-1 col-md-1"  style="display:flex;justify-content:center;align-items:center;font-size:18px;font-weight:bold;"><button id="" onClick="deleteex(${aid});" class="delete"><i class="fa fa-trash" aria-hidden="true"></i></button></div>
                    </div>
                </div>
            
            `);
            console.log(did);
            console.log(aid);
            
        }
        joinedarr = arr.join("");  
    }
    //for saving the view of each income list to new array
    function saveIncomeList()
    {
        let icn =`<img src="images/income.png" width="40px" height="40px" style="border-radius:50%;">`;
        iaid = incomeObj.id;
        idid = "div"+incomeObj.id;
        inarr.push(`<div class="dq">
            <div class="section">
                <div class="col-3 col-sm-3 col-md-3 innersec ic">${icn}</div>
                <div class="col-4 col-sm-5 col-md-5 innersec desc">${incomeObj.description}</div>
                <div class="col-4 col-sm-4 col-md-4 innersec amt">${incomeObj.amount} </div>
                <div class="col-1 col-sm-1 col-md-1 innersec bu" style="display:flex;justify-content:center;align-items:center;font-size:18px;font-weight:bold;"><button id="${iaid}" class="arrb" onClick="expandDiv(${iaid});"><i class="fa fa-angle-down"></i></button></div>
            </div>
            <div id="${idid}" class="subHidden">
                <div class="col-3 col-sm-3 col-md-3"></div>
                <div class="col-4 col-sm-4 col-md-4">${incomeObj.date} </div>
                <div class="col-4 col-sm-4 col-md-4"></div>
                <div class="col-1 col-sm-1 col-md-1"  style="display:flex;justify-content:center;align-items:center;font-size:18px;font-weight:bold;"><button id="" onClick="deleteex(${iaid});" class="delete"><i class="fa fa-trash" aria-hidden="true"></i></button></div>
            </div>
        </div>`);
        console.log(iaid);
        console.log(idid);
        joinedinarr = inarr.join("");

    }

    //to return arrow icons
    //up arrow
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