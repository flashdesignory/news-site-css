const sheet = new CSSStyleSheet();
sheet.replaceSync(`.form-container {
    display: flex;
    flex-direction: column;
    background: var(--color-utils-offwhite);
    width: 100%;
    max-width: 400px;
    font-family: var(--font-family-default);
}

.form-content {
    max-width: 400px;
    width: 100%;
    background: var(--color-utils-white);
    border-radius: var(--border-radius-small);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.form-container form {
    display: flex;
    flex: 1;
    justify-content: space-between;
    flex-direction: column;
}

.form-item:not(:last-of-type) {
    margin-right: 0;
    margin-bottom: var(--content-spacing-medium);
}

.form-actions {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.form-actions .form-actions-item {
    height: 40px;
    flex-grow: 1;
}

.form-actions .form-actions-item:not(:last-child) {
    margin-right: var(--content-spacing-medium);
}

html[dir="rtl"] .form-actions .form-actions-item:not(:last-child) {
    margin-left: var(--content-spacing-medium);
    margin-right: unset;
}

`);
export default sheet;
