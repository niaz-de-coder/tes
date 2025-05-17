document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('nav');
    const mainNav = document.getElementById('mainNav');
    const imgNav = document.getElementById('imgNav');
    const imgNavImg = imgNav.querySelector('img');
    const bgImage = document.querySelector('#bgImage img');
    const navLogoImg = document.querySelector('#imgLogo img');

    // Set transitions for all relevant elements
    nav.style.transition = 'all 0.5s';
    mainNav.style.transition = 'all 0.5s';
    imgNav.style.transition = 'all 0.5s';
    if (imgNavImg) imgNavImg.style.transition = 'width 0.5s';
    if (bgImage) bgImage.style.transition = 'filter 0.5s';
    if (navLogoImg) navLogoImg.style.transition = 'filter 0.5s';

    // Store original styles to restore on scroll to top
    const originalNavStyle = {
        position: nav.style.position,
        top: nav.style.top,
        left: nav.style.left,
        width: nav.style.width,
        height: nav.style.height,
        display: nav.style.display,
        zIndex: nav.style.zIndex,
        backgroundColor: nav.style.backgroundColor,
        overflow: nav.style.overflow
    };
    const originalMainNavStyle = {
        position: mainNav.style.position,
        top: mainNav.style.top,
        left: mainNav.style.left,
        width: mainNav.style.width,
        height: mainNav.style.height,
        display: mainNav.style.display,
        justifyContent: mainNav.style.justifyContent,
        alignItems: mainNav.style.alignItems,
        zIndex: mainNav.style.zIndex
    };
    const originalImgNavStyle = {
        position: imgNav.style.position,
        top: imgNav.style.top,
        left: imgNav.style.left,
        width: imgNav.style.width,
        height: imgNav.style.height,
        display: imgNav.style.display,
        justifyContent: imgNav.style.justifyContent,
        alignItems: imgNav.style.alignItems,
        zIndex: imgNav.style.zIndex
    };
    const originalImgNavImgWidth = imgNavImg ? imgNavImg.style.width : '';
    const originalbgImageFilter = bgImage ? bgImage.style.filter : '';
    const originalNavLogoImgFilter = navLogoImg ? navLogoImg.style.filter : '';

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            // Apply scrolled styles
            nav.style.position = 'fixed';
            nav.style.top = '0';
            nav.style.left = '0';
            nav.style.width = '100vw';
            nav.style.height = '10vh';
            nav.style.display = 'block';
            nav.style.zIndex = '1000';
            nav.style.backgroundColor = 'black';
            nav.style.overflow = 'visible';

            mainNav.style.position = 'absolute';
            mainNav.style.top = '0';
            mainNav.style.left = '0';
            mainNav.style.width = '100vw';
            mainNav.style.height = '10vh';
            mainNav.style.display = 'flex';
            mainNav.style.justifyContent = 'center';
            mainNav.style.alignItems = 'center';
            mainNav.style.zIndex = '2';

            imgNav.style.position = 'absolute';
            imgNav.style.top = '0';
            imgNav.style.left = '0';
            imgNav.style.width = '100vw';
            imgNav.style.height = '10vh';
            imgNav.style.display = 'flex';
            imgNav.style.justifyContent = 'center';
            imgNav.style.alignItems = 'center';
            imgNav.style.zIndex = '1';

            if (imgNavImg) imgNavImg.style.width = '5vw';
            if (bgImage) bgImage.style.filter = 'blur(4px)';
        } else {
            // Restore original styles
            nav.style.position = originalNavStyle.position;
            nav.style.top = originalNavStyle.top;
            nav.style.left = originalNavStyle.left;
            nav.style.width = originalNavStyle.width;
            nav.style.height = originalNavStyle.height;
            nav.style.display = originalNavStyle.display;
            nav.style.zIndex = originalNavStyle.zIndex;
            nav.style.backgroundColor = originalNavStyle.backgroundColor;
            nav.style.overflow = originalNavStyle.overflow;

            mainNav.style.position = originalMainNavStyle.position;
            mainNav.style.top = originalMainNavStyle.top;
            mainNav.style.left = originalMainNavStyle.left;
            mainNav.style.width = originalMainNavStyle.width;
            mainNav.style.height = originalMainNavStyle.height;
            mainNav.style.display = originalMainNavStyle.display;
            mainNav.style.justifyContent = originalMainNavStyle.justifyContent;
            mainNav.style.alignItems = originalMainNavStyle.alignItems;
            mainNav.style.zIndex = originalMainNavStyle.zIndex;

            imgNav.style.position = originalImgNavStyle.position;
            imgNav.style.top = originalImgNavStyle.top;
            imgNav.style.left = originalImgNavStyle.left;
            imgNav.style.width = originalImgNavStyle.width;
            imgNav.style.height = originalImgNavStyle.height;
            imgNav.style.display = originalImgNavStyle.display;
            imgNav.style.justifyContent = originalImgNavStyle.justifyContent;
            imgNav.style.alignItems = originalImgNavStyle.alignItems;
            imgNav.style.zIndex = originalImgNavStyle.zIndex;

            if (imgNavImg) imgNavImg.style.width = originalImgNavImgWidth;
            if (bgImage) bgImage.style.filter = originalbgImageFilter;
        }
    });
});