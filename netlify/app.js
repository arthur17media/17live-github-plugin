(function() {
  let curPathname;

  injectPreviewNetlify();

  function injectPreviewNetlify() {
    if (window.location.pathname === curPathname) {
      return;
    }

    curPathname = window.location.pathname;

    const branchElem = document.querySelector('.head-ref .css-truncate-target');

    if (!branchElem) {
      return;
    }

    const { innerText: branch } = branchElem;
    const previewUrl = `https://${branch.replace('/', '-')}--17live.netlify.com`;
    const logoNetlify = chrome.extension.getURL('assets/logo-netlify.png');
    const previewHTML = `
      <a class="LogoNetlify__Wrapper" target="_blank" href=${previewUrl}>
        <img class="LogoNetlify__Logo" src=${logoNetlify}>
      </a>
    `;

    branchElem.parentElement.insertAdjacentHTML('afterend', previewHTML);
  }
})();
