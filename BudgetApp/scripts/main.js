function submitValues() {

    //Income values
    let salaryValue = Number(document.getElementById("salary").value);

    let addnlIncValue = Number(document.getElementById("addnlInc").value);

    let totalIncomeCalc = salaryValue + addnlIncValue;

    //Needs values
    let rentValue = Number(document.getElementById("rent").value);

    let homeInsValue = Number(document.getElementById("homeIns").value);

    let autoInsValue = Number(document.getElementById("autoIns").value);

    let healthInsValue = Number(document.getElementById("healthIns").value);

    let oopmcValue = Number(document.getElementById("oopmc").value);

    let lifeInsValue = Number(document.getElementById("lifeIns").value);

    let eleGasValue = Number(document.getElementById("ele/gas").value);

    let waterValue = Number(document.getElementById("water").value);

    let garbageValue = Number(document.getElementById("trash").value);

    let grocValue = Number(document.getElementById("groc").value);

    let carPayValue = Number(document.getElementById("carPay").value);

    let carMaintValue = Number(document.getElementById("carMaint").value);

    let carGasValue = Number(document.getElementById("carGas").value);

    let pubTransValue = Number(document.getElementById("pubTrans").value);

    let phoneBillValue = Number(document.getElementById("phone").value);

    let otherValue = Number(document.getElementById("otherNeeds").value);

    let totalNeedsCalc = rentValue + homeInsValue + autoInsValue + healthInsValue + oopmcValue + lifeInsValue + eleGasValue + waterValue + garbageValue + grocValue + carPayValue + carMaintValue + carGasValue + pubTransValue + phoneBillValue + otherValue;

    //Wants values
    let cloAccValue = Number(document.getElementById("cloAcc").value);

    let eatOutValue = Number(document.getElementById("eatOut").value);

    let barsValue = Number(document.getElementById("bars").value);

    let specEveValue = Number(document.getElementById("specEve").value);

    let clubMemValue = Number(document.getElementById("clubMem").value);

    let travValue = Number(document.getElementById("trav").value);

    let petsValue = Number(document.getElementById("pets").value);

    let tvSvcValue = Number(document.getElementById("tvSvc").value);

    let homeDecValue = Number(document.getElementById("homeDec").value);

    let otherWantsValue = Number(document.getElementById("otherWants").value);

    let totalWantsCalc = cloAccValue + eatOutValue + barsValue + specEveValue + clubMemValue + travValue + petsValue + tvSvcValue + homeDecValue + otherWantsValue;

    //Savings and payments values
    let emeFndValue = Number(document.getElementById("emeFnd").value);

    let savCntValue = Number(document.getElementById("savCnt").value);

    let kCntValue = Number(document.getElementById("401kCnt").value);

    let retCntValue = Number(document.getElementById("retCnt").value);

    let otherInvValue = Number(document.getElementById("otherInv").value);

    let ccPayValue = Number(document.getElementById("ccPay").value);

    let exLnPayValue = Number(document.getElementById("exLnPay").value);

    let otherSavingsValue = Number(document.getElementById("otherSavings").value);

    //totals calculations
    let totalSavingsCalc = emeFndValue + savCntValue + kCntValue + retCntValue + otherInvValue + ccPayValue + exLnPayValue + otherSavingsValue;

    let totalExpensesCalc = totalNeedsCalc + totalWantsCalc + totalSavingsCalc;

    let leftoverBudgetCalc = totalIncomeCalc - totalExpensesCalc;

    //main dashboard values
    let leftoverBudgetValue = document.getElementById("budget-value");
    leftoverBudgetValue.innerHTML = "$" + leftoverBudgetCalc;

    let totalIncomeValue = document.getElementById("income-value");
    totalIncomeValue.innerHTML = "$" + totalIncomeCalc;

    let totalExpensesValue = document.getElementById("expenses-value");
    totalExpensesValue.innerHTML = "$" + totalExpensesCalc;

    //expense breakdown values
    let totalNeedsValue = document.getElementById("needsActVal");
    totalNeedsValue.innerHTML = "$" + totalNeedsCalc;

    let totalNeedsPct = Math.round((totalNeedsCalc / totalExpensesCalc) * 100);
    let needsPct = document.getElementById("needsActPct");
    needsPct.innerHTML = totalNeedsPct + "%";

    let totalWantsValue = document.getElementById("wantsActVal");
    totalWantsValue.innerHTML = "$" + totalWantsCalc;

    let totalWantsPct = Math.round((totalWantsCalc / totalExpensesCalc) * 100);
    let wantsPct = document.getElementById("wantsActPct");
    wantsPct.innerHTML = totalWantsPct + "%";

    let totalSavingsValue = document.getElementById("savingsActVal");
    totalSavingsValue.innerHTML = "$" + totalSavingsCalc;

    let totalSavingsPct = Math.round((totalSavingsCalc / totalExpensesCalc) * 100);
    let savingsPct = document.getElementById("savingsActPct");
    savingsPct.innerHTML = totalSavingsPct + "%";

    //50,30, 20 comp values
    let needsCompCalc = Math.round(totalIncomeCalc * 0.5, 2);
    let needsCompValue = document.getElementById("needsCompVal");
    needsCompValue.innerHTML = "$" + needsCompCalc;

    let wantsCompCalc = Math.round(totalIncomeCalc * 0.3, 2);
    let wantsCompValue = document.getElementById("wantsCompVal");
    wantsCompValue.innerHTML = "$" + wantsCompCalc;

    let savingsCompCalc = Math.round(totalIncomeCalc * 0.2, 2);
    let savingsCompValue = document.getElementById("savingsCompVal");
    savingsCompValue.innerHTML = "$" + savingsCompCalc;

    //Expense breakdown table percentage calculations
    const upArrow = String.fromCharCode(8593);
    const downArrow = String.fromCharCode(8595);

    let needsPctDiffValue = document.getElementById("needsPctDiff");
    let needsPctDiffCalc = Math.abs(50 - totalNeedsPct);

    if (totalNeedsPct > 50) {
        needsPctDiffValue.classList.add("greaterThanRec");
        needsPctDiffValue.innerHTML = upArrow + " " + needsPctDiffCalc + "%";
    } else if (totalNeedsPct < 50) {
        needsPctDiffValue.classList.add("lessThanRec");
        needsPctDiffValue.innerHTML = downArrow + " " + needsPctDiffCalc + "%";
    } else {
        needsPctDiffValue.innerHTML = needsPctDiffCalc + "%"
    }

    let wantsPctDiffValue = document.getElementById("wantsPctDiff");
    let wantsPctDiffCalc = Math.abs(30 - totalWantsPct);

    if (totalWantsPct > 30) {
        wantsPctDiffValue.classList.add("greaterThanRec");
        wantsPctDiffValue.innerHTML = upArrow + " " + wantsPctDiffCalc + "%";
    } else if (totalWantsPct < 30) {
        wantsPctDiffValue.classList.add("lessThanRec");
        wantsPctDiffValue.innerHTML = downArrow + " " + wantsPctDiffCalc + "%";
    } else {
        wantsPctDiffValue.innerHTML = wantsPctDiffCalc + "%"
    }

    let savingsPctDiffValue = document.getElementById("savingsPctDiff");
    let savingsPctDiffCalc = Math.abs(20 - totalSavingsPct);

    if (totalSavingsPct > 20) {
        savingsPctDiffValue.classList.add("greaterThanRec");
        savingsPctDiffValue.innerHTML = upArrow + " " + savingsPctDiffCalc + "%";
    } else if (totalSavingsPct < 20) {
        savingsPctDiffValue.classList.add("lessThanRec");
        savingsPctDiffValue.innerHTML = downArrow + " " + savingsPctDiffCalc + "%";
    } else {
        savingsPctDiffValue.innerHTML = savingsPctDiffCalc + "%"
    }

    //Budget category table calculations
    let transAmt = document.getElementById("transAmt");
    let transAmtCalc = autoInsValue + carPayValue + carMaintValue + carGasValue + pubTransValue;
    transAmt.innerHTML = "$" + transAmtCalc;

    let houseAmt = document.getElementById("houseAmt");
    let houseAmtCalc = rentValue + homeInsValue + homeDecValue;
    houseAmt.innerHTML = "$" + houseAmtCalc;

    let insAmt = document.getElementById("insAmt");
    let insAmtCalc = homeInsValue + autoInsValue + healthInsValue + lifeInsValue;
    insAmt.innerHTML = "$" + insAmtCalc;

    let foodAmt = document.getElementById("foodAmt");
    let foodAmtCalc = grocValue + eatOutValue;
    foodAmt.innerHTML = "$" + foodAmtCalc;

    let entAmt = document.getElementById("entAmt");
    let entAmtCalc = barsValue + specEveValue + tvSvcValue + travValue;
    entAmt.innerHTML = "$" + entAmtCalc;

    let dbtRepAmt = document.getElementById("dbtRepAmt");
    let dbtRepAmtCalc = ccPayValue + exLnPayValue;
    dbtRepAmt.innerHTML = "$" + dbtRepAmtCalc;
    
    let retAmt = document.getElementById("retAmt");
    let retAmtCalc = kCntValue + retCntValue;
    retAmt.innerHTML = "$" + retAmtCalc;
}