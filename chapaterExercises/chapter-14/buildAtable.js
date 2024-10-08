// EXERCISE---------------------------------------------------------------14.1
// Given a dataset of mountains, an array of objects with name, height, and place properties, generate the DOM structure for a table that enumerates the objects. It has one column per key and one row per object, plus a header row with <th> elements at the top, listing the column names.
// Write this so that the columns are automatically derived from the objects, by taking the property names of the first object in the data. Show the resulting table in the document by appending it to the element that has an id attribute of "mountains". Once you have this working, right-align cells that contain number values by setting their style.textAlign property to "right".

// Sample dataset of mountains
const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

function createTable(data) {
  // Create the table element
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Get column headers from the keys of the first object
  const headers = Object.keys(data[0]);

  // Create the header row
  const headerRow = document.createElement("tr");
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  // Create the body rows
  data.forEach((item) => {
    const row = document.createElement("tr");
    headers.forEach((header) => {
      const cell = document.createElement("td");
      const value = item[header];
      cell.textContent = value;

      // Right-align number values
      if (typeof value === "number") {
        cell.style.textAlign = "right";
      }

      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });

  // Append thead and tbody to the table
  table.appendChild(thead);
  table.appendChild(tbody);

  return table;
}

// Get the container element with id "mountains"
const container = document.getElementById("mountains");

// Generate the table and append it to the container
const table = createTable(mountains);
container.appendChild(table);
