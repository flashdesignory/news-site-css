const sheet = new CSSStyleSheet();
sheet.replaceSync(`.dropdown {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
}

.dropdown-toggle {
    display: flex;
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: calc(var(--nav-button-height) - 2px);
    left: 0;
    top: 1px;
    z-index: var(--index-dropdown-input);
    transition: none;
}

.dropdown-label {
    background-color: var(--theme-ui-foreground);
    color: var(--theme-navigation-text);
    height: var(--nav-button-height);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0 var(--content-spacing-small);
    border-radius: var(--border-radius-small);
    transition-property: color, background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    z-index: var(--index-dropdown-label);
}

.dropdown-label:hover {
    color: var(--theme-navigation-text-hover);
    background-color: var(--theme-navigation-background-hover);
    text-decoration: var(--theme-text-decoration);
}

.dropdown-label-text {
    margin-right: 8px;
}

.dropdown-toggle:checked ~ .dropdown-label div span span:nth-child(1) {
    transform: translate(calc(var(--animated-icon-height-half) * var(--language-direction-adjustment)), 0) rotate(-35deg);
}

.dropdown-toggle:checked ~ .dropdown-label div span span:nth-child(2) {
    transform: translate(calc(var(--animated-icon-center) * var(--language-direction-adjustment)), 0) rotate(215deg);
}

.dropdown-content {
    list-style-type: none;
    padding: 0 var(--content-spacing-small);
    margin: 0;
    display: none;
    position: absolute;
    top: 100%;
    left: calc(var(--content-spacing-small) * -1);
    min-width: 200px;
    background-color: var(--theme-ui-foreground);
    z-index: var(--index-dropdown);
    box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%);
}

html[dir="rtl"] .dropdown-content {
    right: calc(var(--content-spacing-small) * -1);
    left: unset;
}

.dropdown-toggle:checked ~ .dropdown-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.dropdown:hover .dropdown-button {
    color: var(--theme-button-color-lighter);
}

@media (max-width: 767px) {
    .dropdown-toggle {
        top: 0;
    }

    .dropdown-label {
                padding: 0 0 0 16px;
    }

    .dropdown-content {
        width: 100%;
        box-shadow: none;
        position: relative;
        left: auto;
        top: auto;
        padding: 0;
        margin-top: var(--content-spacing-small);
    }
}

html[dir="rtl"] .dropdown-toggle {
    right: 0;
    left: unset;
}

html[dir="rtl"] .dropdown-label-text {
    margin-left: 8px;
    margin-right: unset;
}


@media (forced-colors: active) {
    .dropdown-label-text {
        color: var(--high-contraste-navigation-text);
    }

    .dropdown-label:hover {
        color: var(--high-contrast-navigation-text-hover);
        background-color: var(--high-contrastn-background-hover);
        text-decoration: var(--high-contrast-text-decoration);
    }
}
`);
export default sheet;
