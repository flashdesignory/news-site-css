const sheet = new CSSStyleSheet();
sheet.replaceSync(`.toast {
    position: fixed;
    left: 0;
    bottom: 0;
    display: none;
    width: 100%;
    min-height: 100px;
    color: var(--theme-text-light);
    background-color: var(--theme-toast-background);
    font-family: var(--font-family-default);
    z-index: var(--index-important);
    padding: var(--content-spacing-xlarge);
    border-top: var(--theme-medium-border);
}

.toast:target,
.toast.open {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.toast-close-button {
    position: absolute;
    top: var(--content-spacing-small);
    right: var(--content-spacing-small);
    width: var(--icon-size-small);
    height: var(--icon-size-small);
    display: flex;
    align-items: center;
    cursor: pointer;
}

.toast-close-button-icon {
    --animated-icon-width: 24px;
    --animated-icon-background: transparent;
    --animated-icon-color: var(--theme-icon-fill-light);
    --animated-icon-hover: var(--theme-icon-fill-lighter);
}

.toast-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-size: var(--font-size-medium);
    text-transform: uppercase;
    margin-bottom: var(--content-spacing-large);
    width: 100%;
}

.toast-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.toast-description {
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    display: inline-block;
    text-align: center;
}

.toast-description a {
    color: var(--theme-navigation-text);
    transition: var(--transition-default);
}

.toast-description a:hover {
    color: var(--theme-navigation-text-hover);
}

.toast-actions {
    display: flex;
    margin: var(--content-spacing-large) 0;
}

.toast-actions .toast-actions-button {
    padding: 0 var(--content-spacing-large);
}

.toast-actions .toast-actions-button:not(:last-child) {
    margin-right: var(--content-spacing-large);
}

html[dir="rtl"] .toast-actions .toast-actions-button:not(:last-child) {
    margin-left: var(--content-spacing-large);
    margin-right: unset;
}

html[dir="rtl"] .toast-close-button {
    left: var(--content-spacing-small);
    right: unset;
}


@media (forced-colors: active) {
    .toast {
        border-top: var(--high-contrast-medium-border);
        background-color: var(--high-contrast-modal-background);
    }

    .toast-close-button-icon {
        --animated-icon-color: var(--high-contrast-icon-fill-light, var(--color-system-linktext));
        --animated-icon-hover: var(--high-contrast-icon-fill-lighter, var(--color-system-linktext));
    }
}
`);
export default sheet;
