import _ from "lodash";

type ValueType<T extends string> = T | string | undefined

export type GenericStringValueJSONModelSerializedState<T extends string = string> = ValueType<T>

export class GenericStringValueJSONModel<T extends string> {
    private value: ValueType<T>
    private defaultValue: ValueType<T>

    constructor(serializedState?: GenericStringValueJSONModelSerializedState<T>, defaultValue?: ValueType<T>) {
        this.defaultValue = defaultValue
        this.reset()
        this.overwriteFromSerializedState(serializedState)
    }

    public setDefaultValue = (defaultValue?: ValueType<T>) => {
        this.defaultValue = defaultValue
    }

    public isDefaultValue = () => {
        return this.value === this.defaultValue
    }

    public reset = () => {
        this.value = this.defaultValue
    };

    public overwriteFromSerializedState = (serializedState?: GenericStringValueJSONModelSerializedState<T>) => {
        this.setValue(serializedState)
    }

    public serialize = (): GenericStringValueJSONModelSerializedState<T> | undefined => {
        return this.value
    }

    ////////////////////////////////////////////////
    // Name
    ////////////////////////////////////////////////

    public getValue = (): T | undefined => this.value as T

    public setValue = (value?: ValueType<T>) => {
        if (_.isString(value)) {
            this.value = value
        } else {
            this.reset()
        }
    }

}