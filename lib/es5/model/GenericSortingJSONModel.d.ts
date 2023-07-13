import { GenericStringValueJSONModel, GenericStringValueJSONModelSerializedState } from "./GenericStringValueJSONModel";
export declare type SortOrder = "ascend" | "descend";
export declare type GenericSortingJSONModelSerializedState = {
    sortKey: GenericStringValueJSONModelSerializedState;
    sortOrder: GenericStringValueJSONModelSerializedState;
} | undefined;
export declare class GenericSortingJSONModel {
    private sortKeyJSONModel;
    private sortOrderJSONModel;
    constructor(serializedState?: GenericSortingJSONModelSerializedState);
    reset: () => void;
    overwriteFromSerializedState: (serializedState?: GenericSortingJSONModelSerializedState) => void;
    serialize: () => GenericSortingJSONModelSerializedState;
    getSortKeyJSONModel: () => GenericStringValueJSONModel<string>;
    getSortOrderJSONModel: () => GenericStringValueJSONModel<SortOrder>;
}
