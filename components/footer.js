 // Footer HTML template
const footerHTML = `
<footer style="background-color: var(--color-card); border-top: 1px solid var(--color-border);" class="py-12">
    <div class="container mx-auto px-4">
        <div class="mb-8 flex flex-col md:flex-row justify-between items-center">
            <div class="flex items-center space-x-2 mb-4 md:mb-0">
                <img src="https://www.cursor.com/assets/videos/logo/placeholder-logo.webp" alt="Cursor Logo" class="h-8 w-8">
                <h2 class="text-2xl font-bold gradient-text">Cursor Insider</h2>
            </div>
            <div class="flex space-x-4">
                <a href="https://x.com/cursor_ai" target="_blank" class="social-icon text-xl"><i class="fab fa-twitter"></i></a>
                <a href="https://github.com/getcursor/cursor" target="_blank" class="social-icon text-xl"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/company/anysphereinc/" target="_blank" class="social-icon text-xl"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
        <div class="text-center" style="color: var(--color-text-light);">
            <p>作者：杨文</p>
            <p>Twitter/X：<a href="https://twitter.com/talkgo_night" target="_blank" class="hover:text-blue-500 transition">@talkgo_night</a></p>
            <p class="mt-4">&copy; 2025 Cursor Insider。保留所有权利。</p>
            PV/UV: <span
                id="urlstat-page-pv"><!-- info will be inserted --></span>/<span
                id="urlstat-page-uv"><!-- info will be inserted --></span>
        </div>
    </div>
</footer>
`;

// Function to load footer
function loadFooter() {
// Create a container for the footer
const footerContainer = document.createElement('div');
footerContainer.innerHTML = footerHTML;

// Append the footer to the body
document.body.appendChild(footerContainer.firstElementChild);
}

// Export the function
window.loadFooter = loadFooter;