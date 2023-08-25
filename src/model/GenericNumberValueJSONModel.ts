import _ from "lodash";

type ValueType = number | undefined

export type GenericNumberValueJSONModelSerializedState = ValueType

export class GenericNumberValueJSONModel {
    private value: ValueType
    private defaultValue: ValueType

    constructor(serializedState?: GenericNumberValueJSONModelSerializedState, defaultValue?: ValueType) {
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

    public overwriteFromSerializedState = (serializedState?: GenericNumberValueJSONModelSerializedState) => {
        this.setValue(serializedState)
    }

    public serialize = (): GenericNumberValueJSONModelSerializedState | undefined => {
        return this.value
    }

    ////////////////////////////////////////////////
    // Name
    ////////////////////////////////////////////////

    public getValue = (): ValueType => this.value

    public setValue = (value?: ValueType) => {
        if (_.isNumber(value) && _.isFinite(value)) {
            this.value = value
        } else {
            this.reset()
        }
    }

}