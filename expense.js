let expense_per_category = [0, 0, 0, 0, 0];
let count = 4;

update_sum();

function update_sum() {
    const sum = document.querySelectorAll(".sum");
    for (let i = 0; i < sum.length; i++) {
        sum[i].innerHTML = " - " + expense_per_category[i] + " Rs. spent";
    }
}

function add_expense() {
    const amount = document.getElementsByClassName("form-input")[0].value;
    const date = document.getElementsByClassName("form-input")[2].value;
    const note = document.getElementsByClassName("form-input")[3].value;
    const category = document.getElementsByClassName("form-input")[1].selectedIndex;
    const selected = document.getElementsByTagName("option")[category].value;

    if (amount && date && note && selected) {
        alert("Successfully Added Expenses !!!!");
        const table = document.getElementsByTagName("table")[0];
        const new_row = document.createElement("tr");
        new_row.innerHTML = `<td>${amount}</td><td>${selected}</td><td>${date}</td><td>${note}</td>`;
        table.appendChild(new_row);

        expense_per_category[category] = parseInt(expense_per_category[category]) + parseInt(amount);
        update_sum();
        document.getElementsByClassName("add-new-expense")[0].style.display = "none";
    } else {
        alert("Please enter all Details!");
    }
}

function add_category() {
    const new_category_value = document.getElementsByName("new-category")[0].value;
    if (new_category_value) {
        const dropdown = document.getElementsByName("category")[0];
        const available_category = document.getElementsByClassName("available-categories")[0];
        const new_category_option = document.createElement("option");
        new_category_option.innerHTML = new_category_value;
        dropdown.appendChild(new_category_option);
        
        count++;
        expense_per_category[count] = 0;
        const new_category_span = document.createElement("span");
        new_category_span.innerHTML = `${new_category_value} <span class="sum">-${expense_per_category[count]} Rs spent</span>`;
        available_category.appendChild(new_category_span);
        document.getElementsByClassName("add-category")[0].style.display = "none";
    }
}

function add_category_page() {
    const addCategoryElem = document.getElementsByClassName("add-category")[0];
    if (addCategoryElem.style.display === "block") {
        addCategoryElem.style.display = "none";
    } else {
        addCategoryElem.style.display = "block";
    }
}

function add_expense_page() {
    const addExpenseElem = document.getElementsByClassName("add-new-expense")[0];
    if (addExpenseElem.style.display === "block") {
        addExpenseElem.style.display = "none";
    } else {
        addExpenseElem.style.display = "block";
    }
}
