const sheet = new CSSStyleSheet();
sheet.replaceSync(`.input-container {
    display: flex;
    flex-direction: column;
    font-family: var(--font-family-default);
    max-width: 400px;
    position: relative;
    height: 40px;
}

.input-container .label {
    font-size: var(--font-size-small);
    padding: var(--content-spacing-medium);
}

.input-container .input {
    outline: 0;
    padding: 0 var(--content-spacing-medium);
    border-radius: var(--border-radius-small);
    border: var(--border-width-small) solid var(--color-utils-gray-light);
    color: var(--color-utils-gray-light);
    transition: var(--transition-default);
    width: 100%;
    height: 100%;
}

.input-container .input[type="submit"] {
    cursor: pointer;
    border-color: var(--theme-button-dark-background);
    background-color: var(--theme-button-dark-background);
    color: var(--theme-button-dark-text);
}

.input-container .input[type="submit"]:hover,
.input-container .input[type="submit"]:focus {
    border-color: var(--theme-button-dark-background-hover);
    background-color: var(--theme-button-dark-background-hover);
    color: var(--theme-button-dark-text-hover);
}

.input-container .input[type="date"] {
        appearance: none;
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg fill="%43000" fill-opacity="1" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/%3E%3Cpath d="M0 0h24v24H0z" fill="none"/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
}

.input-container .input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
}

.input-container .input-type-password {
    padding-right: calc(24px + var(--content-spacing-medium) * 2);
}

.input-container .input:hover {
    border-color: var(--color-utils-gray-dark);
    color: var(--color-utils-gray-dark);
}

.input-container .input:focus {
    border-color: var(--color-utils-gray-darker);
    color: var(--color-utils-gray-darker);
}

.input-container .input::placeholder {
    color: var(--color-utils-gray);
    opacity: 0.5;
}

.input-container .toggle {
    margin: 0;
    padding: 0;
    background-color: transparent;
    position: absolute;
    right: var(--content-spacing-medium);
    bottom: calc((40px - 24px) / 2);
}

@media (forced-colors: active) {
    .input-container .input[type="submit"] {
        border-color: var(--high-contrast-button-color-dark);
        background-color: var(--high-contrast-button-color-dark);
        color: var(--high-contrast-button-color-light);
    }
    
    .input-container .input[type="submit"]:hover,
    .input-container .input[type="submit"]:focus {
        border-color: var(--high-contrast-button-color-medium);
        background-color: var(--high-contrast-button-color-medium);
        color: var(--high-contrast-button-color-lighter);
    }
}`);
export default sheet;
