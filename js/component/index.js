export function tnTable() {
    function addRow(tableObj) {
        // console.log("Added new row to existing table",tableObj)
    }
    function removeRow(tableObj, rowId) {
        // console.log("remove row from existing table",tableObj)
    }
    function generateTable(rowNum = 2, colNum = 2) {
        // creates a <table> element and a <tbody> element
        const tbl = document.createElement("table");
        const tblBody = document.createElement("tbody");

        // creating all cells
        for (let i = 0; i < rowNum; i++) {
            // creates a table row
            const row = document.createElement("tr");

            for (let j = 0; j < colNum; j++) {
                // Create a <td> element and a text node, make the text
                // node the contents of the <td>, and put the <td> at
                // the end of the table row
                const cell = document.createElement("td");
                const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }

            // add the row to the end of the table body
            tblBody.appendChild(row);
        }

        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        document.body.appendChild(tbl);
        // sets the border attribute of tbl to '2'
        // tbl.setAttribute("border", "2");
    }

    function setBackground(eleId, backgrounColor) {
        // now, get all the p elements in the document
        //const paragraphs = document.getElementsByTagName("p");
        // get the second paragraph from the list
        //const secondParagraph = paragraphs[1];
        const ele = document.getElementsById(eleId);

        // set the inline style
        ele.style.background = backgrounColor;
    }

    return {
        generateTable,
        addRow,
        removeRow,
        setBackground
    }
}