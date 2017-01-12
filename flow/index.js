declare module 'statuses' {
  declare var exports: {
    [code:number]:string;
    (status: string | number): number;
  };
  declare var codes: Array<number>;
  declare var status: { [msg:string]:number };
  declare var redirect: { [code:number]:boolean };
  declare var empty: { [code:number]:boolean };
  declare var retry: { [code:number]:boolean };
}
