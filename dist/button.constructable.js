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
    border: 1px solid var(--theme-button-color-light);
    background-color: var(--theme-button-color-light);
    color: var(--theme-button-color-dark);
}

.primary-button.dark {
    border: 1px solid var(--theme-button-color-dark);
    background-color: var(--theme-button-color-dark);
    color: var(--theme-button-color-light);
}

.primary-button:hover {
    border-color: var(--theme-button-color-lighter);
    background-color: var(--theme-button-color-lighter);
    color: var(--theme-button-color-medium);
}

.primary-button.dark:hover {
    border-color: var(--theme-button-color-medium);
    background-color: var(--theme-button-color-medium);
    color: var(--theme-button-color-lighter);
}

.secondary-button {
    border: 1px solid var(--theme-button-color-light);
    background-color: transparent;
    color: var(--theme-button-color-light);
}

.secondary-button.dark {
    border: 1px solid var(--theme-button-color-dark);
    background-color: transparent;
    color: var(--theme-button-color-dark);
}

.secondary-button:hover {
    border-color: var(--theme-button-color-lighter);
    color: var(--theme-button-color-lighter);
}

.secondary-button.dark:hover {
    border-color: var(--theme-button-color-medium);
    color: var(--theme-button-color-medium);
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
