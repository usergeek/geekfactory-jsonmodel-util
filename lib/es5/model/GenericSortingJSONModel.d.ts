import { GenericStringValueJSONModel, GenericStringValueJSONModelSerializedState } from "./GenericStringValueJSONModel";
import { GenericArrayValueJSONModel, GenericArrayValueJSONModelSerializedState } from "./GenericArrayValueJSONModel";
export declare const SORT_ODER_ASC = "asc";
export declare const SORT_ODER_DESC = "desc";
export declare type SortOrder = typeof SORT_ODER_ASC | typeof SORT_ODER_DESC;
export declare type GenericSortingJSONModelArrayValue<Key> = GenericSortingItemJSONModelSerializedState<Key>;
export declare type GenericSortingJSONModelSerializedState<Value> = GenericArrayValueJSONModelSerializedState<GenericSortingJSONModelArrayValue<Value>>;
export declare class GenericSortingJSONModel<Key> {
    private sortValuesJSONModel;
    constructor(serializedState?: GenericSortingJSONModelSerializedState<Key>);
    reset: () => void;
    overwriteFromSerializedState: (serializedState?: GenericSortingJSONModelSerializedState<Key>) => void;
    serialize: () => GenericSortingJSONModelSerializedState<Key>;
    getSortValuesJSONModel: () => GenericArrayValueJSONModel<GenericSortingJSONModelArrayValue<Key>>;
}
export declare type GenericSortingItemKey<Key> = Key | undefined;
export declare type GenericSortingItemJSONModelSerializedState<Key> = {
    key: GenericSortingItemKey<Key>;
    order: GenericStringValueJSONModelSerializedState<SortOrder>;
};
export declare class GenericSortingItemJSONModel<Key extends string> {
    private keyJSONModel;
    private orderJSONModel;
    constructor(serializedState?: GenericSortingItemJSONModelSerializedState<Key>);
    reset: () => void;
    overwriteFromSerializedState: (serializedState?: GenericSortingItemJSONModelSerializedState<Key>) => void;
    serialize: () => GenericSortingItemJSONModelSerializedState<Key>;
    getKeyJSONModel: () => GenericStringValueJSONModel<Key>;
    getOrderJSONModel: () => GenericStringValueJSONModel<SortOrder>;
}
