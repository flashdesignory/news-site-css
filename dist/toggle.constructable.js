const sheet = new CSSStyleSheet();
sheet.replaceSync(`.toggle-outer {
    display: flex;
    justify-content: space-between;
    padding: var(--content-spacing-small);
    border-radius: var(--border-radius-medium);
    border: 2px solid var(--color-utils-gray-light);
    color: var(--theme-text-dark);
    width: 100%;
    height: 40px;
    align-items: center;
}

.toggle-description {
    margin-right: 16px;
}

.toggle-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 42px;
    height: 22px;
    position: relative;
}

.toggle-container .label {
    width: 42px;
    height: 16px;
    display: flex;
    background-color: var(--theme-toggle-background);
    border-radius: 22px;
    cursor: pointer;
    border: var(--theme-medium-border);
}

.toggle-container .switch {
    position: absolute;
    left: 0;
    top: 3px;
    background-color: var(--theme-toggle-foreground);
    border-radius: 22px;
    transition: var(--transition-default);
    width: 45%;
    height: 16px;
    pointer-events: none;
    border: var(--theme-medium-border);
}

.toggle-container .switch::before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    top: 50%;
    left: calc(var(--theme-border-width-medium) * -1);
    transform: translateY(-11px);
    background-color: var(--theme-toggle-switch);
    border-radius: var(--border-radius-50);
    transition: var(--transition-default);
}

.toggle-container .label input[type="checkbox"] {
    width: 44px;
    height: 16px;
    z-index: -1;
    position: absolute;
    left: -6px;
    top: 0;
}

.toggle-container .label input[type="checkbox"]:checked + .switch::before {
    transform: translate(20px, -11px);
}

.toggle-container .label input[type="checkbox"]:checked + .switch {
    width: 100%;
}


@media (forced-colors: active) {
    .toggle-container {
        forced-color-adjust: none;
    }
}

@media (forced-colors: active) {
    .toggle-container .label {
        background-color: var(--high-contrast-toggle-background);
        border: var(--high-contrast-medium-border);
    }

    .toggle-container .switch {
        background-color: var(--high-contrast-toggle-foreground);
        border: var(--high-contrast-medium-border);
    }

    .toggle-container .switch::before {
        left: calc(var(--high-contrast-border-width-medium) * -1);
        background-color: var(--high-contrast-toggle-switch, var(--color-system-linktext));
    }

    }
`);
export default sheet;
