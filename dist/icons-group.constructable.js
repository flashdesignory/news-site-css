const sheet = new CSSStyleSheet();
sheet.replaceSync(`.icons-group {
    display: flex;
}

.icons-group .icons-group-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.icons-group .icons-group-item {
    position: relative;
}

.icons-group .icons-group-item:not(:last-child) {
    margin-right: var(--content-spacing-large);
}

.icons-group .icons-group-item button {
    cursor: pointer;
    display: flex;
    width: var(--icon-size-small);
    height: var(--icon-size-small);
}

.group-icon {
    display: flex;
    width: var(--icon-size-small);
    height: var(--icon-size-small);
    position: relative;
    background-color: var(--color-utils-black);
}

.group-icon svg path {
    fill: var(--color-utils-offwhite);
    transition: fill 0.3s ease;
}

.icons-group li:hover .group-icon svg path {
    fill: var(--color-utils-white);
}

html[dir="rtl"] .icons-group .icons-group-item:not(:last-child) {
    margin-left: var(--content-spacing-large);
    margin-right: unset;
}

`);
export default sheet;
