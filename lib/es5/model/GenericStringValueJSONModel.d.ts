declare type ValueType<T extends string> = T | string | undefined;
export declare type GenericStringValueJSONModelSerializedState<T extends string = string> = ValueType<T>;
export declare class GenericStringValueJSONModel<T extends string> {
    private value;
    constructor(serializedState?: GenericStringValueJSONModelSerializedState<T>);
    reset: () => void;
    overwriteFromSerializedState: (serializedState?: GenericStringValueJSONModelSerializedState<T>) => void;
    serialize: () => GenericStringValueJSONModelSerializedState<T> | undefined;
    getValue: () => T | undefined;
    setValue: (value?: ValueType<T>) => void;
}
export {};
