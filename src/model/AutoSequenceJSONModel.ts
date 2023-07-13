import _ from "lodash";

export type AutoSequenceJSONModelSerializedState = number

export class AutoSequenceJSONModel {
    private value: number

    constructor(serializedState?: AutoSequenceJSONModelSerializedState) {
        this.reset()
        this.overwriteFromSerializedState(serializedState)
    }

    public reset = () => {
        this.value = 0
    };

    public overwriteFromSerializedState = (serializedState?: AutoSequenceJSONModelSerializedState) => {
        this.setValue(serializedState)
    }

    public serialize = (): AutoSequenceJSONModelSerializedState | undefined => {
        return this.value
    }

    ////////////////////////////////////////////////
    // Name
    ////////////////////////////////////////////////

    public getValue = () => this.value

    public bumpValue = () => this.setValue(this.getValue() + 1)

    public setValue = (value?: number) => {
        if (_.isNil(value) || !_.isFinite(value)) {
            this.reset()
        } else {
            this.value = value
        }
    }

}