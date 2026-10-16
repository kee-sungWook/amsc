// let deferredPrompt: any = null;

// export function initPwaInstall() {
//     window.addEventListener("beforeinstallprompt", (e: any) => {
//         e.preventDefault();
//         deferredPrompt = e;
//         console.log("PWA 설치 가능 상태")
//     });
// }

// export function isPwaInstalled(): boolean {
//     return window.matchMedia("(display-mode: standalone)").matches
//         || (window.navigator as any).standalone === true;
// }

// export async function triggerPwaInstall() {
//     if (!deferredPrompt) return false;
//     deferredPrompt.prompt();
//     const result = await deferredPrompt.userChoice;
//     deferredPrompt = null;

//     return result.outcome === "accepted";
// }