// 把pc端页面按照1920的尺寸做开发后，在其他尺寸的屏幕下做压缩
function resetRootStyle() {
    let windowWidth = window.innerWidth;
    if (windowWidth.length <= 1500) {
        windowWidth.length = 1500;
    }
    if (windowWidth.length > 1920) {
        windowWidth = 1920;
    }
    document.documentElement.style.cssText = `zoom: ${windowWidth / 1920}`;
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        .mapboxgl-map {
            zoom: ${1920 / windowWidth}
        }
    `;
    document.head.appendChild(style);
}
resetRootStyle();
window.onresize = resetRootStyle;