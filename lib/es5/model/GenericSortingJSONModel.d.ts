import { GenericStringValueJSONModel, GenericStringValueJSONModelSerializedState } from "./GenericStringValueJSONModel";
import { GenericArrayValueJSONModel, GenericArrayValueJSONModelSerializedState } from "./GenericArrayValueJSONModel";
export declare const SORT_ODER_ASC = "asc";
export declare const SORT_ODER_DESC = "desc";
export declare type SortOrder = typeof SORT_ODER_ASC | typeof SORT_ODER_DESC;
export declare type GenericSortingJSONModelArrayValue<SortingItemKey> = GenericSortingItemJSONModelSerializedState<SortingItemKey>;
export declare type GenericSortingJSONModelSerializedState<SortingItemKey> = GenericArrayValueJSONModelSerializedState<GenericSortingJSONModelArrayValue<SortingItemKey>>;
export declare class GenericSortingJSONModel<SortingItemKey> {
    private sortValuesJSONModel;
    constructor(serializedState?: GenericSortingJSONModelSerializedState<SortingItemKey>);
    reset: () => void;
    overwriteFromSerializedState: (serializedState?: GenericSortingJSONModelSerializedState<SortingItemKey>) => void;
    serialize: () => GenericSortingJSONModelSerializedState<SortingItemKey>;
    getSortValuesJSONModel: () => GenericArrayValueJSONModel<GenericSortingJSONModelArrayValue<SortingItemKey>>;
}
export declare type GenericSortingItemKey<SortingItemKey> = SortingItemKey | undefined;
export declare type GenericSortingItemJSONModelSerializedState<SortingItemKey> = {
    key: GenericSortingItemKey<SortingItemKey>;
    order: GenericStringValueJSONModelSerializedState<SortOrder>;
};
export declare class GenericSortingItemJSONModel<SortingItemKey extends string> {
    private keyJSONModel;
    private orderJSONModel;
    constructor(serializedState?: GenericSortingItemJSONModelSerializedState<SortingItemKey>);
    reset: () => void;
    overwriteFromSerializedState: (serializedState?: GenericSortingItemJSONModelSerializedState<SortingItemKey>) => void;
    serialize: () => GenericSortingItemJSONModelSerializedState<SortingItemKey>;
    getKeyJSONModel: () => GenericStringValueJSONModel<SortingItemKey>;
    getOrderJSONModel: () => GenericStringValueJSONModel<SortOrder>;
}
