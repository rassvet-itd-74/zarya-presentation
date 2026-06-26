declare module "*.css" {
  const styles: Record<string, string>;
  export default styles;
}

declare module "*.scss" {
  const styles: Record<string, string>;
  export default styles;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "reveal.js-mermaid-plugin/plugin/mermaid/mermaid.esm.js" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MermaidPlugin: any;
  export default MermaidPlugin;
}

declare module "reveal.js-menu/menu.esm.js" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const RevealMenu: any;
  export default RevealMenu;
}
