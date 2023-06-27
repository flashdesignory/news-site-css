const sheet = new CSSStyleSheet();
sheet.replaceSync(`.dialog {
    position: fixed;
    min-width: 300px;
    max-width: 400px;
    width: 100%;
    height: 240px;
    bottom: 40px;
    left: 40px;
    right: unset;
    background-color: var(--color-utils-white);
    z-index: var(--index-important);
    border-radius: var(--border-radius-medium);
    box-shadow: 0 10px 18px var(--color-utils-gray);
    display: none;
    font-family: var(--font-family-default);
    color: var(--color-utils-black);
    padding: var(--content-spacing-xlarge);
}

.dialog:target,
.dialog.open {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.dialog-close-button {
    position: absolute;
    top: var(--content-spacing-medium);
    right: var(--content-spacing-medium);
    width: var(--icon-size-small);
    height: var(--icon-size-small);
    display: flex;
    align-items: center;
    cursor: pointer;
}

.dialog-close-button-icon {
    --animated-icon-width: 24px;
    --animated-icon-background: transparent;
    --animated-icon-color: var(--color-utils-black);
    --animated-icon-hover: var(--color-utils-gray-light);
}

.dialog-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-size: var(--font-size-medium);
    text-transform: uppercase;
    margin-bottom: var(--content-spacing-large);
    width: 100%;
}

.dialog-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.dialog-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.dialog-item:not(:last-child) {
    margin-bottom: var(--content-spacing-large);
}

html[dir="rtl"] .dialog {
    right: 40px;
    left: unset;
}

html[dir="rtl"] .dialog-close-button {
    left: var(--content-spacing-medium);
    right: unset;
}


@media (max-width: 767px) {
    .dialog {
        width: calc(100% - var(--content-spacing-xxxlarge) * 2);
        left: 0;
        right: 0;
        margin: 0 auto;
    }

        html[dir="rtl"] .dialog {
        left: 0;
        right: 0;
    }
}
`);
export default sheet;
