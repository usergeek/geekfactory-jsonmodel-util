declare type ValueType = boolean | undefined;
export declare type GenericBooleanValueJSONModelSerializedState = ValueType;
export declare class GenericBooleanValueJSONModel {
    private value;
    private defaultValue;
    constructor(serializedState?: GenericBooleanValueJSONModelSerializedState, defaultValue?: ValueType);
    setDefaultValue: (defaultValue?: ValueType) => void;
    isDefaultValue: () => boolean;
    reset: () => void;
    overwriteFromSerializedState: (serializedState?: GenericBooleanValueJSONModelSerializedState) => void;
    serialize: () => GenericBooleanValueJSONModelSerializedState | undefined;
    getValue: () => ValueType;
    setValue: (value?: ValueType) => void;
}
export {};
