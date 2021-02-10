async function tomthegeek_inject_css() {
    console.log('[Dark Meetings] Waiting to join call...');
    // Wait until in call
    while (document.querySelector(".d7iDfe") !== null) {
        await new Promise((r) => setTimeout(r, 500));
    }
    console.log('[Dark Meetings] Injecting dark theme...');
    const css_sheet = document.createElement('link');
    css_sheet.rel = 'stylesheet';
    css_sheet.href = chrome.runtime.getURL('dark.style.css');
    document.getElementsByTagName('html')[0].appendChild(css_sheet);
    console.log('[Dark Meetings] Dark theme injected!');
}

tomthegeek_inject_css();
