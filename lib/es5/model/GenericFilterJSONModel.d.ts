import { GenericArrayValueJSONModel, GenericArrayValueJSONModelSerializedState } from "./GenericArrayValueJSONModel";
import { GenericStringValueJSONModel } from "./GenericStringValueJSONModel";
export declare type GenericFilterJSONModelSerializedState<Name, Value> = GenericArrayValueJSONModelSerializedState<GenericFilterJSONModelArrayValue<Name, Value>>;
export declare type GenericFilterJSONModelArrayValue<Name, Value> = GenericFilterItemJSONModelSerializedState<Name, Value>;
export declare class GenericFilterJSONModel<Name extends string, Value> {
    private filterValuesJSONModel;
    constructor(serializedState?: GenericFilterJSONModelSerializedState<Name, Value>);
    reset: () => void;
    overwriteFromSerializedState: (serializedState?: GenericFilterJSONModelSerializedState<Name, Value>) => void;
    overwriteFromFilterValuesJSONModels: (filterValuesJSONModels?: Array<GenericFilterItemJSONModel<Name, Value>>) => void;
    serialize: () => GenericFilterJSONModelSerializedState<Name, Value>;
    getFilterItems: () => Array<GenericFilterItemJSONModel<Name, Value>> | undefined;
}
export declare type GenericFilterItemName<Name> = Name | undefined;
export declare type GenericFilterItemJSONModelSerializedState<Name, Value> = {
    name: GenericFilterItemName<Name>;
    values: GenericArrayValueJSONModelSerializedState<Value>;
};
export declare class GenericFilterItemJSONModel<Name extends string, Value> {
    private nameJSONModel;
    private valuesJSONModel;
    constructor(serializedState?: GenericFilterItemJSONModelSerializedState<Name, Value>);
    reset: () => void;
    overwriteFromSerializedState: (serializedState?: GenericFilterItemJSONModelSerializedState<Name, Value>) => void;
    serialize: () => GenericFilterItemJSONModelSerializedState<Name, Value>;
    getNameJSONModel: () => GenericStringValueJSONModel<Name>;
    getValuesJSONModel: () => GenericArrayValueJSONModel<Value>;
    setNameAndValues: (name: Name, values: Array<Value>) => void;
}
