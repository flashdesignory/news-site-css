const sheet = new CSSStyleSheet();
sheet.replaceSync(`.sitemap {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.sitemap a {
    color: var(--color-utils-offwhite);
    transition: var(--transition-default);
    font-size: 14px;
    text-decoration: none;
}

.sitemap a:hover {
    color: var(--color-utils-white);
    text-decoration: underline;
}

.sitemap a.active,
.sitemap a.active:hover {
    color: var(--color-utils-red-light);
    text-decoration: none;
}

.sitemap-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.sitemap-item {
    margin-bottom: var(--content-spacing-large);
    width: calc(100% / 6);
}

.sitemap-header {
    font-size: var(--font-size-large);
    margin-bottom: var(--content-spacing-medium);
    font-weight: var(--font-weight-bold);
}

.sitemap-sublist {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.sitemap-subitem {
    line-height: var(--font-size-xlarge);
}

@media (max-width: 767px) {
    .sitemap-item {
        width: calc(100% / 2);
    }
}

@media (min-width: 768px) and (max-width: 1199px) {
    .sitemap-item {
        width: calc(100% / 4);
    }
}
`);
export default sheet;
