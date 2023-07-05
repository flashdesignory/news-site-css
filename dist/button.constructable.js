const sheet = new CSSStyleSheet();
sheet.replaceSync(`.button {
    display: flex;
    text-decoration: none;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    border-radius: var(--border-radius-small);
    height: var(--nav-button-height);
    padding: 0 var(--content-spacing-small);
    transition-property: color, background-color, border-color;
    transition-duration: 0.3s;
    transition-timing-function: ease;
}

.primary-button {
    border: 1px solid var(--theme-button-light-background);
    background-color: var(--theme-button-light-background);
    color: var(--theme-button-light-text);
}

.primary-button:hover {
    border-color: var(--theme-button-light-background-hover);
    background-color: var(--theme-button-light-background-hover);
    color: var(--theme-button-light-text-hover);
}

.secondary-button {
    border: 1px solid var(--theme-button-light-background);
    background-color: transparent;
    color: var(--theme-button-light-background);
}

.secondary-button:hover {
    border-color: var(--theme-button-light-background-hover);
    color: var(--theme-button-light-background-hover);
}

.primary-button.dark {
    border: 1px solid var(--theme-button-dark-background);
    background-color: var(--theme-button-dark-background);
    color: var(--theme-button-dark-text);
}

.primary-button.dark:hover {
    border-color: var(--theme-button-dark-background-hover);
    background-color: var(--theme-button-dark-background-hover);
    color: var(--theme-button-dark-text-hover);
}

.secondary-button.dark {
    border: 1px solid var(--theme-button-dark-background);
    background-color: transparent;
    color: var(--theme-button-dark-background);
}

.secondary-button.dark:hover {
    border-color: var(--theme-button-dark-background-hover);
    color: var(--theme-button-dark-background-hover);
}

@media (forced-colors: active) {
    .primary-button {
        border-color: var(--high-contrast-button-color-light, var(--color-utils-black));
        background-color: var(--high-contrast-button-color-light, var(--color-utils-black));
        color: var(--high-contrast-button-color-dark, var(--color-utils-white));
    }

    .primary-button.dark {
        border-color: var(--high-contrast-button-color-dark, var(--color-utils-white));
        background-color: var(--high-contrast-button-color-dark, var(--color-utils-white));
        color: var(--high-contrast-button-color-light, var(--color-utils-black));
    }

    .primary-button:hover {
        border-color: var(--high-contrast-button-color-lighter, var(--color-utils-black));
        background-color: var(--high-contrast-button-color-lighter, var(--color-utils-black));
        color: var(--high-contrast-button-color-medium, var(--color-utils-white));
    }

    .primary-button.dark:hover {
        border-color: var(--high-contrast-button-color-medium, var(--color-utils-black));
        background-color: var(--high-contrast-button-color-medium, var(--color-utils-black));
        color: var(--high-contrast-button-color-lighter, var(--color-utils-white));
    }

    .secondary-button {
        border-color: var(--high-contrast-button-color-light, var(--color-utils-black));
        background-color: transparent;
        color: var(--high-contrast-button-color-light, var(--color-utils-black));
    }

    .secondary-button.dark {
        border-color: var(--high-contrast-button-color-dark, var(--color-utils-white));
        background-color: transparent;
        color: var(--high-contrast-button-color-dark, var(--color-utils-white));
    }

    .secondary-button:hover {
        border-color: var(--high-contrast-button-color-lighter, var(--color-utils-black));
        color: var(--high-contrast-button-color-lighter, var(--color-utils-black));
    }

    .secondary-button.dark:hover {
        border-color: var(--high-contrast-button-color-medium, var(--color-utils-white));
        color: var(--high-contrast-button-color-medium, var(--color-utils-white));
    }
}
`);
export default sheet;
