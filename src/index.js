import { Excel } from "./components/excel/excel";
import "./scss/index.scss";
import { Table } from "./components/table/Table";
import { Header } from "./components/header/Header";
import { Formula } from "./components/formula/Formula";
import { ToolBar } from "./components/toolBar/ToolBar";

const excel = new Excel("#app", {
    components: [new Header(), Formula, Table, ToolBar],
});

excel.render();
console.log(excel);
