const sheet = new CSSStyleSheet();
sheet.replaceSync(`.modal {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: var(--theme-modal-background);
    z-index: var(--index-important);
    display: none;
}

.modal:target,
.modal.open {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.modal-content {
    position: absolute;
    min-width: 300px;
    max-width: 400px;
    width: 100%;
    min-height: 240px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--theme-dialog-background);
    border-radius: var(--border-radius-medium);
    box-shadow: 0 10px 18px var(--color-utils-gray);
    font-family: var(--font-family-default);
    color: var(--theme-text-dark);
    padding: var(--content-spacing-xlarge);
    border: var(--theme-medium-border);
}

.modal-close-button {
    position: absolute;
    top: var(--content-spacing-medium);
    right: var(--content-spacing-medium);
    width: var(--icon-size-small);
    height: var(--icon-size-small);
    display: flex;
    align-items: center;
    cursor: pointer;
}

.modal-close-button-icon {
    --animated-icon-width: 24px;
    --animated-icon-background: transparent;
    --animated-icon-color: var(--theme-icon-fill-dark);
    --animated-icon-hover: var(--theme-icon-fill-medium);
}

.modal-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-size: var(--font-size-medium);
    text-transform: uppercase;
    margin-bottom: var(--content-spacing-large);
    width: 100%;
}

.modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.modal-actions {
    display: flex;
    margin: var(--content-spacing-large) 0;
}

.modal-actions .modal-actions-button {
    padding: 0 var(--content-spacing-large);
}

.modal-actions .modal-actions-button:not(:last-child) {
    margin-right: var(--content-spacing-large);
}

@media (max-width: 419px) {
    .modal-content {
        width: calc(100% - var(--content-spacing-xxxlarge) * 2);
    }
}

html[dir="rtl"] .modal-actions .modal-actions-button:not(:last-child) {
    margin-left: var(--content-spacing-large);
    margin-right: unset;
}

html[dir="rtl"] .modal-close-button {
    left: var(--content-spacing-medium);
    right: unset;
}


@media (forced-colors: active) {
    .modal {
        border: var(--high-contrast-medium-border);
    }

    .modal-close-button-icon {
        --animated-icon-color: var(--high-contrast-icon-fill-dark, var(--color-system-linktext));
        --animated-icon-hover: var(--high-contrast-icon-fill-medium, var(--color-system-linktext));
    }
}
`);
export default sheet;
