export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.components = options.component || [];
    }

    getRoot() {
        const $root = document.createElement("div");

        this.components.forEach((Component) => {
            console.log(new Component());

            const component = new Component();
            $root.insertAdjacentHTML("beforeend", component.toHTML());
        });

        return $root;
    }

    render() {
        this.$el.append(this.getRoot());
    }
}
