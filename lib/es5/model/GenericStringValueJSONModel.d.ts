declare type ValueType<T extends string> = T | string | undefined;
export declare type GenericStringValueJSONModelSerializedState<T extends string = string> = ValueType<T>;
export declare class GenericStringValueJSONModel<T extends string> {
    private value;
    private defaultValue;
    constructor(serializedState?: GenericStringValueJSONModelSerializedState<T>, defaultValue?: ValueType<T>);
    setDefaultValue: (defaultValue?: ValueType<T>) => void;
    isDefaultValue: () => boolean;
    reset: () => void;
    overwriteFromSerializedState: (serializedState?: GenericStringValueJSONModelSerializedState<T>) => void;
    serialize: () => GenericStringValueJSONModelSerializedState<T> | undefined;
    getValue: () => T | undefined;
    setValue: (value?: ValueType<T>) => void;
}
export {};
