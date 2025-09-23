document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = e.target.href;
            const targetPath = new URL(target).pathname;

            // Determine direction based on current and target paths
            const isGoingBack =
                targetPath.includes("index.html") || (targetPath === "/" && currentPath.includes("public"));

            // Add appropriate animation class
            requestAnimationFrame(() => {
                document.body.classList.add(isGoingBack ? "is-animating-right" : "is-animating-left");

                // Navigate to new page after transition
                setTimeout(() => {
                    window.location.href = target;
                }, 500);
            });
        });
    });
});
