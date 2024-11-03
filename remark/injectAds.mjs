// We're gonna be non-invasive here and inject an ad every few sections
// It won't be anything crazy, just a simple banner ad that we won't stop if you
// block. We will tell you to please consider supporting the site, though.

const bannerAd = `<div class="ad-frame"></div>`;
const injectAfter = 6; // Number of sections after which to inject the ad

export function remarkInjectAds() {
    let sectionCount = injectAfter - 4; // Initialize section count

    return (tree, { data: { astro: { frontmatter } } }) => {
        // Ignore non-monetized pages
        if (!frontmatter.monetized) return;

        const adNode = {
            type: 'html',
            value: bannerAd,
        };

        // Get the total number of sections (paragraphs)
        const totalSections = tree.children.filter(node => node.type === 'paragraph').length;

        // Calculate the target number of ads based on total sections
        const targetAds = Math.floor(totalSections / injectAfter);

        // Track how many ads have been injected
        let adsInjected = 0;

        // Iterate over all nodes in the AST
        for (let pos = 0; pos < tree.children.length; pos++) {
            const node = tree.children[pos];
            const nextNode = tree.children[pos + 1];

            // If next node is image or html, skip
            if (nextNode && (nextNode.type === 'image' || nextNode.type === 'html')) {
                continue;
            }

            // Increment the section count for paragraphs
            if (node.type === 'paragraph') {
                sectionCount++;
            }

            // Check if we should inject an ad
            if (sectionCount === injectAfter && adsInjected < targetAds) {
                // Inject an ad after the current node
                tree.children.splice(pos + 1, 0, adNode);
                pos++; // Move past the newly injected ad
                sectionCount = 0; // Reset section count
                adsInjected++; // Increment ads injected count
            }
        }
    };
}