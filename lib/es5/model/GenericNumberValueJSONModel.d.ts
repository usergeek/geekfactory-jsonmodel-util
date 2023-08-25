declare type ValueType = number | undefined;
export declare type GenericNumberValueJSONModelSerializedState = ValueType;
export declare class GenericNumberValueJSONModel {
    private value;
    private defaultValue;
    constructor(serializedState?: GenericNumberValueJSONModelSerializedState, defaultValue?: ValueType);
    setDefaultValue: (defaultValue?: ValueType) => void;
    isDefaultValue: () => boolean;
    reset: () => void;
    overwriteFromSerializedState: (serializedState?: GenericNumberValueJSONModelSerializedState) => void;
    serialize: () => GenericNumberValueJSONModelSerializedState | undefined;
    getValue: () => ValueType;
    setValue: (value?: ValueType) => void;
}
export {};
