const sheet = new CSSStyleSheet();
sheet.replaceSync(`.sidebar {
    position: fixed;
    max-width: 300px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: var(--theme-dialog-background);
    z-index: var(--index-important);
    border-top-right-radius: var(--border-radius-medium);
    border-bottom-right-radius: var(--border-radius-medium);
    box-shadow: 0 10px 18px var(--color-utils-gray);
    display: none;
    font-family: var(--font-family-default);
    color: var(--theme-text-dark);
    border-right: var(--theme-medium-border);
}

.sidebar:target,
.sidebar.open {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: var(--content-spacing-xlarge);
}

.sidebar-close-button {
    position: absolute;
    top: var(--content-spacing-medium);
    right: var(--content-spacing-medium);
    width: var(--icon-size-small);
    height: var(--icon-size-small);
    display: flex;
}

.sidebar-close-button-icon {
    --animated-icon-width: 24px;
    --animated-icon-background: transparent;
    --animated-icon-color: var(--theme-icon-fill-dark);
    --animated-icon-hover: var(--theme-icon-fill-medium);
}

.sidebar-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-size: var(--font-size-medium);
    text-transform: uppercase;
    margin-bottom: var(--content-spacing-large);
    width: 100%;
}

.sidebar-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    overflow-y: auto;
}

.sidebar-group {
    width: 100%;
}

.sidebar-group:not(:last-child) {
    margin-bottom: var(--content-spacing-medium);
    padding-bottom: var(--content-spacing-medium);
    border-bottom: 1px solid var(--color-utils-offwhite);
}

.sidebar-list {
    list-style: none;
}

.sidebar-list-item {
    width: 100%;
    margin-top: var(--content-spacing-small);
}

.sidebar-list-item a {
    width: 100%;
    display: flex;
    padding: var(--content-spacing-xsmall) var(--content-spacing-medium);
    text-decoration: none;
    color: var(--theme-text-dark);
    transition: var(--transition-default);
}

.sidebar-list-item a:hover,
.sidebar-list-item a:focus {
    background-color: var(--theme-link-background);
    text-decoration: var(--theme-text-decoration);
}

.sidebar summary {
    cursor: pointer;
}

@media (max-width: 419px) {
    .sidebar {
        max-width: unset;
        border-radius: 0;
    }
}

html[dir="rtl"] .sidebar {
    right: 0;
    left: unset;
    border-top-left-radius: var(--border-radius-medium);
    border-top-right-radius: unset;
    border-bottom-left-radius: var(--border-radius-medium);
    border-bottom-right-radius: unset;
    border-left: var(--theme-medium-border);
    border-right: none;
}

html[dir="rtl"] .sidebar-close-button {
    left: var(--content-spacing-medium);
    right: unset;
}


@media (forced-colors: active) {
    .sidebar {
        border-right: var(--high-contrast-medium-border);
    }

    html[dir="rtl"] .sidebar {
        border-left: var(--high-contrast-medium-border);
        border-right: none;
    }

    .sidebar-close-button-icon {
        --animated-icon-color: var(--high-contrast-icon-fill-dark, var(--color-system-linktext));
        --animated-icon-hover: var(--high-contrast-icon-fill-medium, var(--color-system-linktext));
    }

    .sidebar-list-item a:hover,
    .sidebar-list-item a:focus {
        background-color: var(--high-contrast-link-background);
        text-decoration: var(--high-contrast-text-decoration);
    }
}
`);
export default sheet;
