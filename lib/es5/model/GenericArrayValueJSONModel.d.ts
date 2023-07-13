export declare type GenericArrayValueJSONModelSerializedState<T> = Array<T> | undefined;
export declare class GenericArrayValueJSONModel<T> {
    private value;
    constructor(serializedState?: GenericArrayValueJSONModelSerializedState<T>);
    reset: () => void;
    overwriteFromSerializedState: (serializedState?: GenericArrayValueJSONModelSerializedState<T>) => void;
    serialize: () => GenericArrayValueJSONModelSerializedState<T>;
    getValue: () => GenericArrayValueJSONModelSerializedState<T>;
    setValue: (value?: Array<T>) => void;
}
