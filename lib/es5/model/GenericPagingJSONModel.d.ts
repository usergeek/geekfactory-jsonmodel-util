import { GenericNumberValueJSONModel, GenericNumberValueJSONModelSerializedState } from "./GenericNumberValueJSONModel";
export declare type GenericPagingJSONModelSerializedState = {
    page: GenericNumberValueJSONModelSerializedState;
    limit: GenericNumberValueJSONModelSerializedState;
} | undefined;
export declare type GenericPagingJSONModelDefaults = {
    defaultLimit?: number;
    defaultPage?: number;
};
export declare class GenericPagingJSONModel {
    private pageJSONModel;
    private limitJSONModel;
    constructor(serializedState?: GenericPagingJSONModelSerializedState, defaults?: GenericPagingJSONModelDefaults);
    reset: () => void;
    overwriteFromSerializedState: (serializedState?: GenericPagingJSONModelSerializedState) => void;
    serialize: () => GenericPagingJSONModelSerializedState;
    getPageJSONModel: () => GenericNumberValueJSONModel;
    getLimitJSONModel: () => GenericNumberValueJSONModel;
    getPageValue: () => number;
    getLimitValue: () => number;
    setValue: (page: number | undefined, limit: number | undefined) => void;
}
