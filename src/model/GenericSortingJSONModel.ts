import {GenericStringValueJSONModel, GenericStringValueJSONModelSerializedState} from "./GenericStringValueJSONModel";
import {GenericArrayValueJSONModel, GenericArrayValueJSONModelSerializedState} from "./GenericArrayValueJSONModel";
import _ from "lodash"

export const SORT_ODER_ASC = "asc"
export const SORT_ODER_DESC = "desc"

export type SortOrder = typeof SORT_ODER_ASC | typeof SORT_ODER_DESC
export type GenericSortingJSONModelArrayValue<Key> = GenericSortingItemJSONModelSerializedState<Key>
export type GenericSortingJSONModelSerializedState<Value> = GenericArrayValueJSONModelSerializedState<GenericSortingJSONModelArrayValue<Value>>

export class GenericSortingJSONModel<Key> {
    private sortValuesJSONModel = new GenericArrayValueJSONModel<GenericSortingJSONModelArrayValue<Key>>()

    constructor(serializedState?: GenericSortingJSONModelSerializedState<Key>) {
        this.reset()
        this.overwriteFromSerializedState(serializedState)
    }

    public reset = () => {
        this.sortValuesJSONModel.reset()
    }

    public overwriteFromSerializedState = (serializedState?: GenericSortingJSONModelSerializedState<Key>) => {
        this.sortValuesJSONModel.overwriteFromSerializedState(serializedState)
    }

    public serialize = (): GenericSortingJSONModelSerializedState<Key> => {
        return this.sortValuesJSONModel.serialize()
    }

    public getSortValuesJSONModel = () => this.sortValuesJSONModel
}

////////////////////////////////////////////////
// Item
////////////////////////////////////////////////

export type GenericSortingItemKey<Key> = Key | undefined

export type GenericSortingItemJSONModelSerializedState<Key> = {
    key: GenericSortingItemKey<Key>
    order: GenericStringValueJSONModelSerializedState<SortOrder>
}

export class GenericSortingItemJSONModel<Key extends string> {
    private keyJSONModel = new GenericStringValueJSONModel<Key>()
    private orderJSONModel = new GenericStringValueJSONModel<SortOrder>()

    constructor(serializedState?: GenericSortingItemJSONModelSerializedState<Key>) {
        this.reset()
        this.overwriteFromSerializedState(serializedState)
    }

    public reset = () => {
        this.keyJSONModel.reset()
        this.orderJSONModel.reset()
    }

    public overwriteFromSerializedState = (serializedState?: GenericSortingItemJSONModelSerializedState<Key>) => {
        if (serializedState) {
            this.keyJSONModel.overwriteFromSerializedState(serializedState.key)
            this.orderJSONModel.overwriteFromSerializedState(serializedState.order)
        }
    }

    public serialize = (): GenericSortingItemJSONModelSerializedState<Key> => {
        const value: GenericSortingItemJSONModelSerializedState<Key> = {
            key: this.keyJSONModel.serialize() as GenericSortingItemKey<Key>,
            order: this.orderJSONModel.serialize(),
        };
        if (_.every(value, _.isEmpty)) {
            return undefined
        }
        return value
    }

    public getKeyJSONModel = () => this.keyJSONModel
    public getOrderJSONModel = () => this.orderJSONModel
}