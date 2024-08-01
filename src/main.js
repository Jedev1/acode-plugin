import plugin from '../plugin.json';

class gdscript {

  async init() {
    window.alert("intalando")
    window.toast("instalado", 4000)
  }

  async destroy() {

  }
}

if (window.acode) {
  const acodePlugin = new gdscript();
  acode.setPluginInit(plugin.id, async (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
    if (!baseUrl.endsWith('/')) {
      baseUrl += '/';
    }
    acodePlugin.baseUrl = baseUrl;
    await acodePlugin.init($page, cacheFile, cacheFileUrl);
  });
  acode.setPluginUnmount(plugin.id, () => {
    acodePlugin.destroy();
  });
}
