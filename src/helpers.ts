export class Helpers {
  getPlugins = (arr: PluginArray): any[] => {
    const res: any[] = [];
    for (const p in arr) {
      if ({}.hasOwnProperty.call(arr, p)) {
        const plugin: Plugin = arr[p];
        res.push([plugin.name, plugin.filename]);
      }
    }
    return res;
  };
  getMimeTypes = (arr: MimeTypeArray): any[] => {
    const res: any[] = [];
    for (const p in arr) {
      if ({}.hasOwnProperty.call(arr, p)) {
        const mimetype: MimeType = arr[p];
        res.push([mimetype.suffixes, mimetype.type]);
      }
    }
    return res;
  };
}
