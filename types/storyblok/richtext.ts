export interface RichtextSb {
  type: string;
  content?: RichtextSb[];
  marks?: RichtextSb[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}