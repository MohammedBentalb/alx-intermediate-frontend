/// <reference path="./crud.d.ts" />

import { RowId, RowElement } from "./interface";
import * as crud from "./crud.js";

let row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowId: RowId = crud.insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };

crud.updateRow(newRowId, updatedRow);
crud.deleteRow(newRowId);
