document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  //div-container
  const container = newDiv("div", "class", "container");
  //div-row
  const row = newDiv("div", "class", "row");
  //div-col-4
  const col4 = newDiv("div", "class", "col-3");
  //div-col-8
  const col8 = newDiv("div", "class", "col-9");

  /**COLUMN-4 FORM SUBMISSION START**/
  //form element
  const form = document.createElement("form");
  form.id = "myForm";
  const formTitle = newDiv("h3", "class", "form-title");
  formTitle.textContent = "Form Submit";
  //firstname
  const fLabel = createLabels("for", "firstname", "First Name:");
  const firstName = createInput(
    "text",
    "firstname",
    "Enter your firstname",
    true
  );
  //lastname
  const lLabel = createLabels("for", "lastname", "Last Name:");
  const lastName = createInput("text", "lastname", "Enter your lastname", true);
  //address
  const addressLabel = createLabels("for", "address", "Address:");
  const address = createInput("text", "address", "Enter your address", true);
  const brak1 = document.createElement("br");
  // gender-male
  const genderLabel = createLabels("for", "gender", "Gender:");
  const mbrak1 = document.createElement("br");

  //male
  const male = radioCheck("radio", "male", "male-female", "male", "true");
  const maleLabel = createLabels("for", "gender", "Male");
  const mbrak2 = document.createElement("br");
  //female
  const female = radioCheck("radio", "female", "male-female", "female", "true");
  const femaleLabel = createLabels("for", "gender", "Female");
  const brak2 = document.createElement("br");
  //favourite cuisines
  const favCusines = createLabels(
    "for",
    "cusinies",
    "Choose your cusinies: (Atleast two must be selected)"
  );
  const mbrak3 = document.createElement("br");
  //north-indian
  const ni = radioCheck(
    "checkbox",
    "north-indian",
    "cusinies",
    "north-indian",
    "true"
  );
  const northIndian = createLabels("for", "north-indian", "North Indian");
  const mbrak4 = document.createElement("br");
  //South Indian
  const si = radioCheck(
    "checkbox",
    "south-indian",
    "cusinies",
    "south-indian",
    "true"
  );
  const southIndian = createLabels("for", "south-indian", "South Indian");
  const mbrak5 = document.createElement("br");
  //Chinese
  const chi = radioCheck("checkbox", "chinese", "cusinies", "chinese");
  const chinese = createLabels("for", "chinese", "Chinese");
  const mbrak6 = document.createElement("br");

  //Italian
  const it = radioCheck("checkbox", "italian", "cusinies", "italian");
  const italian = createLabels("for", "italian", "Italian");
  const mbrak7 = document.createElement("br");

  //Japanese
  const jap = radioCheck("checkbox", "japanese", "cusinies", "japanese");
  const japanese = createLabels("for", "japanese", "Japanese");
  const brak3 = document.createElement("br");
  //Pincode
  const pincode = createLabels("for", "pincode", "Pincode:");
  const pin = createInput("number", "pincode", "Enter your pincode", true);
  //State
  const state = createLabels("for", "state", "State:");
  const st = createInput("text", "state", "Enter your state", true);
  //Country
  const country = createLabels("for", "country", "Country:");
  const cn = createInput("text", "country", "Enter your country", true);
  const brak4 = document.createElement("br");
  const brak5 = document.createElement("br");
  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  submitButton.addEventListener("click", submitForm);

  form.append(
    formTitle,
    fLabel,
    firstName,
    lLabel,
    lastName,
    addressLabel,
    address,
    brak1,
    genderLabel,
    mbrak1,
    male,
    maleLabel,
    female,
    femaleLabel,
    brak2,
    favCusines,
    mbrak3,
    ni,
    northIndian,
    mbrak4,
    si,
    southIndian,
    mbrak5,
    chi,
    chinese,
    mbrak6,
    it,
    italian,
    mbrak7,
    jap,
    japanese,
    brak3,
    pincode,
    pin,
    state,
    st,
    country,
    cn,
    brak4,
    brak5
  );
  /**COLUMN-4 FORM SUBMISSION ENDS**/

  /**COLUMN-8 DATA TABLE STARTS**/
  //Table heading
  const tableTitle = newDiv("h3", "class", "table-title");
  tableTitle.textContent = "Temporary Database";
  //<table></table>
  const mainTable = newDiv("table", "class", "table");
  //<thead></thead>
  const tableHead = newDiv("thead", "class", "thead-dark");
  //<tr></tr>
  const tableHrow = document.createElement("tr");
  //<th></th>
  const tableHeadData1 = newDiv("th", "scope", "col");
  tableHeadData1.textContent = "Firstname";
  const tableHeadData2 = newDiv("th", "scope", "col");
  tableHeadData2.textContent = "Lastname";
  const tableHeadData3 = newDiv("th", "scope", "col");
  tableHeadData3.textContent = "Address";
  const tableHeadData4 = newDiv("th", "scope", "col");
  tableHeadData4.textContent = "Gender";
  const tableHeadData5 = newDiv("th", "scope", "col");
  tableHeadData5.textContent = "Favourite Cuisine";
  const tableHeadData6 = newDiv("th", "scope", "col");
  tableHeadData6.textContent = "Pin Code";
  const tableHeadData7 = newDiv("th", "scope", "col");
  tableHeadData7.textContent = "State";
  const tableHeadData8 = newDiv("th", "scope", "col");
  tableHeadData8.textContent = "Country";
  //<tbody></tbody>
  const tableBody = document.createElement("tbody");
  //<tr></tr> // inside the submitForm function
  /**COLUMN-8 DATA TABLE ENDS**/
  /**SUBMIT FORM AND DISPLAY IN THE TABLE**/
  function submitForm() {
    const firstNameData = document.getElementById("firstname").value;
    const lastNameData = document.getElementById("lastname").value;
    const addressData = document.getElementById("address").value;
    const pincodeData = document.getElementById("pincode").value;
    const stateData = document.getElementById("state").value;
    const countryData = document.getElementById("country").value;
    const genderData = document.querySelectorAll('input[type="radio"]:checked');
    const favCusines = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    if (
      !firstNameData ||
      !lastNameData ||
      !addressData ||
      !pincodeData ||
      !stateData ||
      !countryData ||
      !genderData ||
      favCusines.length < 2
    ) {
      alert(
        "Please fill out all required fields and select at least two cuisines."
      );
      return;
    }
    //<tr></tr>
    const tableDrow = document.createElement("tr");
    //<td></td>
    const tableData1 = document.createElement("td");
    tableData1.textContent = firstNameData;
    const tableData2 = document.createElement("td");
    tableData2.textContent = lastNameData;
    const tableData3 = document.createElement("td");
    tableData3.textContent = addressData;
    const tableData4 = document.createElement("td");
    tableData4.textContent = Array.from(genderData).map(
      (el) => el.defaultValue
    );
    const tableData5 = document.createElement("td");
    tableData5.textContent = Array.from(favCusines).map(
      (el) => el.defaultValue
    );
    const tableData6 = document.createElement("td");
    tableData6.textContent = pincodeData;
    const tableData7 = document.createElement("td");
    tableData7.textContent = stateData;
    const tableData8 = document.createElement("td");
    tableData8.textContent = countryData;
    tableDrow.append(
      tableData1,
      tableData2,
      tableData3,
      tableData4,
      tableData5,
      tableData6,
      tableData7,
      tableData8
    );
    tableBody.appendChild(tableDrow);
    document.getElementById("myForm").reset();
  }
  //COLUMN_8 APPENDING
  // tableBody.appendChild(tableDrow);
  tableHrow.append(
    tableHeadData1,
    tableHeadData2,
    tableHeadData3,
    tableHeadData4,
    tableHeadData5,
    tableHeadData6,
    tableHeadData7,
    tableHeadData8
  );
  tableHead.appendChild(tableHrow);
  mainTable.append(tableHead, tableBody);
  col8.append(tableTitle, mainTable);
  //COLUMN_4 APPENDING
  col4.append(form, submitButton);
  row.append(col4, col8);
  container.appendChild(row);

  document.body.appendChild(container);
});
{
  /* <label for={forValue}>{label.textContent}</label> */
}
function createLabels(atname, forValue, labelText) {
  const label = document.createElement("label");
  label.setAttribute(atname, forValue);
  label.textContent = labelText;
  return label;
}

function createInput(type, id, placeHolder, required) {
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.name = id;
  input.placeholder = placeHolder;
  if (required) {
    input.required = true;
  }
  return input;
}
function radioCheck(type, id, name, value, required) {
  const radioChecked = document.createElement("input");
  radioChecked.type = type;
  radioChecked.id = id;
  radioChecked.name = name;
  radioChecked.value = value;
  radioChecked.required = required;
  return radioChecked;
}
function newDiv(tag, atclass, atvalue) {
  const div = document.createElement(tag);
  div.setAttribute(atclass, atvalue);
  return div;
}
