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
    border: 1px solid var(--color-utils-offwhite);
    background-color: var(--color-utils-offwhite);
    color: var(--color-utils-black);
}

.primary-button.dark {
    border: 1px solid var(--color-utils-black);
    background-color: var(--color-utils-black);
    color: var(--color-utils-offwhite);
}

.primary-button:hover {
    border-color: var(--color-utils-white);
    background-color: var(--color-utils-white);
    color: var(--color-utils-gray-light);
}

.primary-button.dark:hover {
    border-color: var(--color-utils-gray-light);
    background-color: var(--color-utils-gray-light);
    color: var(--color-utils-offwhite);
}

.secondary-button {
    border: 1px solid var(--color-utils-offwhite);
    color: var(--color-utils-offwhite);
    background-color: transparent;
}

.secondary-button.dark {
    border: 1px solid var(--color-utils-black);
    color: var(--color-utils-black);
    background-color: transparent;
}

.secondary-button:hover {
    border-color: var(--color-utils-white);
    color: var(--color-utils-white);
}

.secondary-button.dark:hover {
    border-color: var(--color-utils-gray-light);
    color: var(--color-utils-gray-light);
}
`);
export default sheet;
