// Open links in new tabs. Keeps us on the page when clicking links, which is a better
// user experience than navigating away from the page and gives us more page time.

export function remarkLinksNewTab() {
    return (tree) => {
        function visit(node) {
            // Check if the node is a link
            if (node.type === 'link') {
                // Ensure the link has the `data` and `hProperties` objects for HTML attributes
                node.data = node.data || {};
                node.data.hProperties = node.data.hProperties || {};

                // Add `target="_blank"` to open the link in a new tab
                node.data.hProperties.target = '_blank';
            }

            // Recursively visit child nodes if they exist
            if (node.children) {
                node.children.forEach(visit);
            }
        }

        // Start traversal from the root
        visit(tree);
    };
}
