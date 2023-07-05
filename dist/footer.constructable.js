const sheet = new CSSStyleSheet();
sheet.replaceSync(`.page-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 100%;
    min-height: var(--footer-height);
    padding: var(--content-spacing-small) 0;
    font-size: var(--font-size-small);
    background-color: var(--theme-ui-foreground);
    color: var(--theme-text-medium);
    position: relative;
}

.page-footer::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: calc(100% - (var(--content-spacing-xlarge) * 2));
    margin: auto;
    border-top: var(--theme-small-border);
}

.footer-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: 300px;
    max-width: 1440px;
    width: 100%;
    min-height: var(--content-spacing-xxlarge);
    padding-left: var(--content-spacing-xlarge);
    padding-right: var(--content-spacing-xlarge);
    position: relative;
}

.footer-row:not(:last-child) {
    margin-bottom: var(--content-spacing-large);
}

.footer-column-left,
.footer-column-center,
.footer-column-right {
    height: inherit;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.footer-column-left {
    justify-content: flex-start;
}

.footer-column-right {
    justify-content: flex-end;
}

.footer-column-center {
    flex: 1;
}

.footer-links .footer-links-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.footer-links .footer-links-item {
    position: relative;
}

.footer-links .footer-links-item:not(:last-child) {
    margin-right: var(--content-spacing-large);
}

.footer-links .footer-links-item a {
    color: var(--theme-navigation-text);
    transition: var(--transition-default);
    text-decoration: none;
}

.footer-links .footer-links-item a:hover {
    color: var(--theme-navigation-text-hover);
}

@media (max-width: 767px) {
    .page-footer {
        padding: var(--content-spacing-large) 0 0 0;
    }

    .footer-row {
        flex-direction: column;
    }

    .footer-row:not(:last-child) {
        margin-bottom: 0;
    }

    .footer-column-center,
    .footer-column-left,
    .footer-column-right {
        padding-bottom: var(--content-spacing-large);
        margin-bottom: var(--content-spacing-large);
        border-bottom: 1px solid var(--color-utils-gray);
        width: 100%;
        justify-content: center;
        line-height: 24px;
    }

    .footer-links .footer-links-list {
        flex-direction: column;
    }

    .footer-links .footer-links-item:not(:last-child) {
        margin-right: 0;
        margin-bottom: var(--content-spacing-large);
    }
}

/** RTL FOOTER START **/
html[dir="rtl"] .footer-links .footer-links-item:not(:last-child) {
    margin-left: var(--content-spacing-large);
    margin-right: unset;
}


@media (forced-colors: active) {
    .page-footer::before {
        border-top: var(--high-contrast-small-border);
    }
}
`);
export default sheet;
