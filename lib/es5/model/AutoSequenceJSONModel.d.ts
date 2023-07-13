export declare type AutoSequenceJSONModelSerializedState = number;
export declare class AutoSequenceJSONModel {
    private value;
    constructor(serializedState?: AutoSequenceJSONModelSerializedState);
    reset: () => void;
    overwriteFromSerializedState: (serializedState?: AutoSequenceJSONModelSerializedState) => void;
    serialize: () => AutoSequenceJSONModelSerializedState | undefined;
    getValue: () => number;
    bumpValue: () => void;
    setValue: (value?: number) => void;
}
