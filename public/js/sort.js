//JS to move label on focus
$("#username").focusin(function () {
  $("#username ~ label").animate(
    {
      fontSize: "0.8rem",
      top: "-0.7rem",
      padding: "0.25rem",
    },
    80
  );
});
$("#username").focusout(function () {
  if ($(this).val() === "") {
    $("#username ~ label").animate(
      {
        fontSize: "1rem",
        top: "1rem",
        padding: 0,
      },
      80
    );
  }
});

$("#usernameError").focusin(function () {
  $("#usernameError ~ label").animate(
    {
      fontSize: "0.8rem",
      top: "-0.7rem",
      padding: "0.25rem",
    },
    80
  );
});
$("#usernameError").focusout(function () {
  if ($(this).val() === "") {
    $("#usernameError ~ label").animate(
      {
        fontSize: "1rem",
        top: "1rem",
        padding: 0,
      },
      80
    );
  }
});
$("#usernameWarning").focusin(function () {
  $("#usernameWarning ~ label").animate(
    {
      fontSize: "0.8rem",
      top: "-0.7rem",
      padding: "0.25rem",
    },
    80
  );
});
$("#usernameWarning").focusout(function () {
  if ($(this).val() === "") {
    $("#usernameWarning ~ label").animate(
      {
        fontSize: "1rem",
        top: "1rem",
        padding: 0,
      },
      80
    );
  }
});

$("#selectLocation").change(function () {
  $("#selectLocation ~ label").animate(
    {
      fontSize: "0.8rem",
      top: "-0.7rem",
      padding: "0.25rem",
    },
    80
  );
});
$("#selectLocation").focusout(function () {
  if ($(this).val() === null) {
    $("#selectLocation ~ label").animate(
      {
        fontSize: "1rem",
        top: "1rem",
        padding: 0,
      },
      80
    );
  }
});

function sortTableByColumn(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
    const aColText = a
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();
    const bColText = b
      .querySelector(`td:nth-child(${column + 1})`)
      .textContent.trim();

    return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
  });

  // Remove all existing TRs from the table
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table
    .querySelectorAll("th")
    .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-asc", asc);
  table
    .querySelector(`th:nth-child(${column + 1})`)
    .classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach((headerCell) => {
  headerCell.addEventListener("click", () => {
    const tableElement = headerCell.parentElement.parentElement.parentElement;
    const headerIndex = Array.prototype.indexOf.call(
      headerCell.parentElement.children,
      headerCell
    );
    const currentIsAscending = headerCell.classList.contains("th-sort-asc");

    sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
  });
});
