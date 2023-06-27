const sheet = new CSSStyleSheet();
sheet.replaceSync(`.page-navigation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: var(--nav-height);
    position: sticky;
    top: 0;
    background-color: var(--color-utils-black);
    z-index: var(--index-header);
}

.page-navigation-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: 300px;
    max-width: 1440px;
    width: 100%;
    height: inherit;
    padding-left: var(--content-spacing-xlarge);
    padding-right: var(--content-spacing-xlarge);
    position: relative;
}

.page-navigation-column-left,
.page-navigation-column-right {
    height: inherit;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.page-navigation-logo {
    display: flex;
    width: var(--icon-size);
    height: var(--icon-size);
    z-index: var(--index-header-button);
    cursor: pointer;
}

.page-navigation-logo svg path {
    transition: var(--transition-default);
    fill: var(--color-utils-offwhite);
}

.page-navigation-logo:hover svg path {
    fill: var(--color-utils-white);
}

.page-navigation-button {
    border: 1px solid var(--color-utils-offwhite);
    color: var(--color-utils-offwhite);
    border-radius: var(--border-radius-small);
    height: var(--nav-button-height);
    background-color: transparent;
    transition: var(--transition-default);
    cursor: pointer;
}

.page-navigation-button:hover {
    color: var(--color-utils-white);
}

.nav-button {
    z-index: var(--index-header-button);
}

@media (max-width: 767px) {
    .page-navigation-logo {
        margin-left: var(--content-spacing-small);
    }

        html[dir="rtl"] .page-navigation-logo {
        margin-right: var(--content-spacing-small);
        margin-left: unset;
    }

    }
`);
export default sheet;
