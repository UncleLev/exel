import { ExcelComponent } from "../../core/ExcelComponent";

export class ToolBar extends ExcelComponent {
    static className = "excel__toolbar";

    toHTML() {
        return "<h1>ToolBar</h1>";
    }
}
