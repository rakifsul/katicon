class KatIcon extends HTMLElement {
    connectedCallback() {
        const sm = this.getAttribute("sm") || "KI";
        const md = this.getAttribute("md") || "KIC";
        const lg = this.getAttribute("lg") || "KatIcon";

        this.innerHTML = `
        <span class="kat-icon-sm">${sm}</span>
        <span class="kat-icon-md">${md}</span>
        <span class="kat-icon-lg">${lg}</span>
        `;
    }
}

customElements.define("kat-icon", KatIcon);