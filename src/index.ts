import md5 from 'md5';
import { Helpers } from './helpers';

export default class UID {
  helpers = new Helpers();

  generateHeaderID = (): string => {
    const res: any[] = [];
    res.push(navigator.userAgent);
    res.push(navigator.platform);
    res.push(navigator.product);
    res.push(navigator.productSub);
    res.push(navigator.vendor);
    res.push(navigator.vendorSub);
    res.push(navigator.plugins.length);
    res.push(this.helpers.getPlugins(navigator.plugins));
    res.push(navigator.mimeTypes.length);
    res.push(this.helpers.getMimeTypes(navigator.mimeTypes));
    res.push(navigator.productSub);
    res.push(navigator.languages);
    res.push(navigator.hardwareConcurrency);
    res.push(Object.keys(navigator).length);
    return md5(JSON.stringify(res));
  };
  generateCanvasID = (): string => {
    const canvas = document.createElement('canvas');
    canvas.height = 100;
    canvas.width = 800;
    const ctx = canvas.getContext('2d');
    if (ctx !== null) {
      ctx.font = '30px Arial';
      ctx?.fillText('Hello World', 20, 90);
    }
    return md5(canvas.toDataURL());
  };
  generateWebGlID = (): string => {
    const res: any[] = [];
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2');
    res.push(gl?.getParameter(gl.RENDERER));
    res.push(gl?.getParameter(gl.VENDOR));
    const dbgRenderInfo = gl?.getExtension('WEBGL_debug_renderer_info');
    res.push(dbgRenderInfo?.UNMASKED_RENDERER_WEBGL);
    res.push(dbgRenderInfo?.UNMASKED_VENDOR_WEBGL);

    return md5(JSON.stringify(res));
  };
  completeID = (): string => md5(this.generateHeaderID() + this.generateCanvasID() + this.generateWebGlID());
}
