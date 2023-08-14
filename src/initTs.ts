import * as tssss from "typescript";

type TsType = typeof tssss;

export let ts: TsType = null;


export function init(tss: TsType) {
    ts = tss;
}