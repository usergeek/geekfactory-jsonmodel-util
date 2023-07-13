import _ from "lodash";

type ValueType = boolean | undefined

export type GenericBooleanValueJSONModelSerializedState = ValueType

export class GenericBooleanValueJSONModel {
    private value: ValueType

    constructor(serializedState?: GenericBooleanValueJSONModelSerializedState) {
        this.reset()
        this.overwriteFromSerializedState(serializedState)
    }

    public reset = () => {
        this.value = undefined
    };

    public overwriteFromSerializedState = (serializedState?: GenericBooleanValueJSONModelSerializedState) => {
        this.setValue(serializedState)
    }

    public serialize = (): GenericBooleanValueJSONModelSerializedState | undefined => {
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