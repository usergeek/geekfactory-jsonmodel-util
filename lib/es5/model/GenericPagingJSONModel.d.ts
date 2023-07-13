import { GenericNumberValueJSONModel, GenericNumberValueJSONModelSerializedState } from "./GenericNumberValueJSONModel";
export declare type GenericPagingJSONModelSerializedState = {
    currentPage: GenericNumberValueJSONModelSerializedState;
    pageSize: GenericNumberValueJSONModelSerializedState;
};
export declare type GenericPagingJSONModelDefaults = {
    defaultPageSize?: number;
    defaultCurrentPage?: number;
};
export declare class GenericPagingJSONModel {
    private currentPageJSONModel;
    private pageSizeJSONModel;
    constructor(serializedState?: GenericPagingJSONModelSerializedState, defaults?: GenericPagingJSONModelDefaults);
    reset: () => void;
    overwriteFromSerializedState: (serializedState?: GenericPagingJSONModelSerializedState) => void;
    serialize: () => GenericPagingJSONModelSerializedState;
    getCurrentPage: () => GenericNumberValueJSONModel;
    getPageSize: () => GenericNumberValueJSONModel;
    setValue: (currentPage: number | undefined, pageSize: number | undefined) => void;
}
