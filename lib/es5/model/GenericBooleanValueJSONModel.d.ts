declare type ValueType = boolean | undefined;
export declare type GenericBooleanValueJSONModelSerializedState = ValueType;
export declare class GenericBooleanValueJSONModel {
    private value;
    constructor(serializedState?: GenericBooleanValueJSONModelSerializedState);
    reset: () => void;
    overwriteFromSerializedState: (serializedState?: GenericBooleanValueJSONModelSerializedState) => void;
    serialize: () => GenericBooleanValueJSONModelSerializedState | undefined;
    getValue: () => ValueType;
    setValue: (value?: ValueType) => void;
}
export {};
