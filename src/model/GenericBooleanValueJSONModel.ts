import _ from "lodash";

type ValueType = boolean | undefined

export type GenericBooleanValueJSONModelSerializedState = ValueType

export class GenericBooleanValueJSONModel {
    private value: ValueType
    private defaultValue: ValueType

    constructor(serializedState?: GenericBooleanValueJSONModelSerializedState, defaultValue?: ValueType) {
        this.defaultValue = defaultValue
        this.reset()
        this.overwriteFromSerializedState(serializedState)
    }

    public setDefaultValue = (defaultValue?: ValueType) => {
        this.defaultValue = defaultValue
    }

    public isDefaultValue = () => {
        return this.value === this.defaultValue
    }

    public reset = () => {
        this.value = this.defaultValue
    };

    public overwriteFromSerializedState = (serializedState?: GenericBooleanValueJSONModelSerializedState) => {
        this.setValue(serializedState)
    }

    public serialize = (): GenericBooleanValueJSONModelSerializedState | undefined => {
        if (this.value === this.defaultValue) {
            return undefined
        }
        return this.value
    }

    ////////////////////////////////////////////////
    // Name
    ////////////////////////////////////////////////

    public getValue = (): ValueType => this.value

    public setValue = (value?: ValueType) => {
        if (_.isBoolean(value)) {
            this.value = value
        } else {
            this.reset()
        }
    }

}