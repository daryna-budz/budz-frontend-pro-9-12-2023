const table = document.getElementById("table");
let num = 1;


function addElement() {
    if(num <= 100){
      let tableRow = document.createElement("tr");
      let tableCell = document.createElement("td");
      tableCell.innerHTML = num;
      num++;

      let lastRow = table.rows[table.rows.length - 1];

      if (lastRow && lastRow.cells.length < 10) {
          lastRow.appendChild(tableCell);
      } else {
          tableRow.appendChild(tableCell);
          table.appendChild(tableRow);
      }
    }
    else{
      alert("Ви досягли максимуму:(");
    }
}




