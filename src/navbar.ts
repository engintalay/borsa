class menuItem {
    name: string;
    link: string;
    constructor(name: string, link: string) {
        this.name = name;
        this.link = link;
    }
}
class Navigation {
    name: string;
    menuItems: menuItem[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addMenuItem(name: string, link: string) {
        this.menuItems.push(new menuItem(name, link));
    }

    generate(): HTMLElement {
        const navigationBar = document.createElement("nav");
        navigationBar.className = "navbar navbar-expand-lg bg-body-tertiary";
        const div = document.createElement("div");
        div.className = "container-fluid";
        navigationBar.appendChild(div);
        const a = document.createElement("a");
        a.className = "navbar-brand";
        a.innerText = this.name;
        a.href = "#";
        div.appendChild(a);
        const button = document.createElement("button");
        button.className = "navbar-toggler";
        button.type = "button";
        button.setAttribute("data-bs-toggle", "collapse");
        button.setAttribute("data-bs-target", "#navbarSupportedContent");
        button.setAttribute("aria-controls", "navbarSupportedContent");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Toggle navigation");

        const span = document.createElement("span");
        span.className = "navbar-toggler-icon";
        button.appendChild(span);
        div.append(button);

        return navigationBar;
    }
}