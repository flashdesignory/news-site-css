const sheet = new CSSStyleSheet();
sheet.replaceSync(`.navbar {
    display: flex;
    align-items: center;
    z-index: var(--index-nav);
}

#navbar-toggle {
    display: none;
    border: 0;
    position: absolute;
    margin: 0;
    width: var(--icon-size);
    height: var(--icon-size);
    left: 24px;
    top: 4px;
    z-index: var(--index-nav-input);
}

.navbar-label {
    display: none;
    justify-content: center;
    align-items: center;
    width: var(--icon-size);
    height: var(--icon-size);
    cursor: pointer;
    background-color: var(--theme-ui-foreground);
    transition: var(--transition-default);
    border: 1px solid var(--color-utils-offwhite);
    border-radius: var(--border-radius-small);
    z-index: var(--index-nav-label);
}

.navbar-label-icon {
    --animated-icon-width: 24px;
    --animated-icon-background: transparent;
    --animated-icon-color: var(--theme-button-color-light);
    --animated-icon-hover: var(--theme-button-color-lighter);
}

#navbar-toggle:checked ~ .navbar-label div span span:nth-child(2) {
    transform: scale(0);
}

#navbar-toggle:checked ~ .navbar-label div span span:nth-child(1) {
    transform: rotate(45deg);
}

#navbar-toggle:checked ~ .navbar-label div span span:nth-child(3) {
    transform: rotate(-45deg);
}

.navbar-content {
    display: flex;
    flex-direction: column;
    margin-left: var(--content-spacing-large);
}

.navbar-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.navbar-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: fit-content;
    width: 100%;
}

.navbar-item:not(:last-child) {
    margin-right: var(--content-spacing-large);
}

.navbar-dropdown-item {
    margin-bottom: var(--content-spacing-small);
}

.navbar-dropdown-item:not(:last-child) {
    margin-right: 0;
}

.navbar-item a {
    text-decoration: none;
    color: var(--theme-navigation-text);
    background-color: var(--theme-navigation-background);
    position: relative;
    line-height: var(--nav-button-height);
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: var(--border-radius-small);
    padding: 0 8px;
    transition-property: color, background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
}

.navbar-item a:hover {
    color: var(--theme-navigation-text-hover);
    background-color: var(--theme-navigation-background-hover);
    text-decoration: var(--theme-text-decoration);
}

.navbar-item a.active {
    color: var(--theme-navigation-text-hover);
    background-color: var(--theme-navigation-background-active);
    border: var(--theme-small-border);
}

.navbar-active-path {
    display: none;
}

.navbar-icons {
    display: none;
}

html[dir="rtl"] #navbar-toggle {
    right: 24px;
    left: unset;
}

html[dir="rtl"] .navbar-content {
    margin-right: var(--content-spacing-large);
    margin-left: unset;
}

html[dir="rtl"] .navbar-item:not(:last-child) {
    margin-left: var(--content-spacing-large);
    margin-right: unset;
}

html[dir="rtl"] .navbar-dropdown-item:not(:last-child) {
    margin-left: 0;
    margin-right: unset;
}


@media (max-width: 767px) {
    #navbar-toggle,
    .navbar-label {
        display: flex;
    }

    .navbar-content {
        display: none;
    }

    .navbar-list {
        flex-direction: column;
        overflow-y: auto;
        margin-top: 41px;
        border-top: 1px solid var(--color-utils-gray);
        border-bottom: 1px solid var(--color-utils-gray);
    }

    .navbar-item {
        line-height: var(--nav-button-height-mobile);
        margin: var(--content-spacing-small) 0;
        align-items: center;
        padding: 0;
    }

    .navbar-item:not(:last-child) {
        margin-right: 0;
    }

    .navbar-item a {
        align-items: center;
    }

    #navbar-toggle:checked ~ .navbar-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: 0;
        position: absolute;
        left: 0;
        top: 0;
        background-color: var(--theme-ui-foreground);
        width: 100%;
        height: 100vh;         height: calc(var(--vh, 1vh) * 100);         padding: 0 var(--content-spacing-xlarge);
        overflow: hidden;
    }

        .navbar-active-path {
        display: flex;
        margin: 0 var(--content-spacing-small);
        color: var(--theme-text-lighter);
        background-color: var(--theme-button-color-active);
        line-height: var(--nav-button-height);
        border-radius: var(--border-radius-small);
        padding: 0 8px;
        text-transform: capitalize;
        z-index: var(--index-header-button);
        pointer-events: none;
    }

    .navbar-icons {
        display: flex;
        width: 100%;
        justify-content: center;
        margin: var(--content-spacing-xlarge) 0;
    }

        html[dir="rtl"] #navbar-toggle:checked ~ .navbar-content {
        right: 0;
        left: unset;
    }

    }

@media (forced-colors: active) {
    .navbar-label-icon {
        --animated-icon-color: var(---high-contrast-button-color-light, var(--color-system-linktext));
        --animated-icon-hover: var(--high-contrast-button-color-lighter, var(--color-system-linktext));
    }

    .navbar-item a {
        color: var(--high-contraste-navigation-text);
        background-color: var(--high-contrast-navigation-background);
    }

    .navbar-item a:hover {
        color: var(--high-contrast-navigation-text-hover);
        background-color: var(--high-contrastn-background-hover);
        text-decoration: var(--high-contrast-text-decoration);
    }

    .navbar-item a.active {
        border: var(--high-contrast-small-border);
        background-color: var(--high-contrast-navigation-background-active);
    }
}
`);
export default sheet;
