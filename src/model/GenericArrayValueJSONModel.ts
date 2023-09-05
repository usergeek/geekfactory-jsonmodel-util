import _ from "lodash";

export type GenericArrayValueJSONModelSerializedState<T> = Array<T> | undefined

export class GenericArrayValueJSONModel<T> {

    private value: GenericArrayValueJSONModelSerializedState<T>

    constructor(serializedState?: GenericArrayValueJSONModelSerializedState<T>) {
        this.reset()
        this.overwriteFromSerializedState(serializedState)
    }

    public reset = () => {
        this.value = undefined
    };

    public overwriteFromSerializedState = (serializedState?: GenericArrayValueJSONModelSerializedState<T>) => {
        this.setValue(serializedState ? serializedState as Array<T> : undefined)
    }

    public serialize = (): GenericArrayValueJSONModelSerializedState<T> => {
        if (this.value == undefined || this.value.length == 0) {
            return undefined
        }
        return [...this.value] as Array<T>
    }

    ////////////////////////////////////////////////
    // Name
    ////////////////////////////////////////////////

    public getValue = (): GenericArrayValueJSONModelSerializedState<T> => {
        return this.value;
    }

    public setValue = (value?: Array<T>) => {
        if (_.isArray(value)) {
            this.value = new Array(...value) as unknown as Array<T>
        } else {
            this.reset()
        }
    }

}