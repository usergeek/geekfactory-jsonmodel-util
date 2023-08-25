import {GenericStringValueJSONModel, GenericStringValueJSONModelSerializedState} from "./GenericStringValueJSONModel";
import {GenericArrayValueJSONModel, GenericArrayValueJSONModelSerializedState} from "./GenericArrayValueJSONModel";
import _ from "lodash"

export const SORT_ODER_ASC = "asc"
export const SORT_ODER_DESC = "desc"

export type SortOrder = typeof SORT_ODER_ASC | typeof SORT_ODER_DESC
export type GenericSortingJSONModelArrayValue<SortingItemKey> = GenericSortingItemJSONModelSerializedState<SortingItemKey>
export type GenericSortingJSONModelSerializedState<SortingItemKey> = GenericArrayValueJSONModelSerializedState<GenericSortingJSONModelArrayValue<SortingItemKey>>

export class GenericSortingJSONModel<SortingItemKey> {
    private sortValuesJSONModel = new GenericArrayValueJSONModel<GenericSortingJSONModelArrayValue<SortingItemKey>>()

    constructor(serializedState?: GenericSortingJSONModelSerializedState<SortingItemKey>) {
        this.reset()
        this.overwriteFromSerializedState(serializedState)
    }

    public reset = () => {
        this.sortValuesJSONModel.reset()
    }

    public overwriteFromSerializedState = (serializedState?: GenericSortingJSONModelSerializedState<SortingItemKey>) => {
        this.sortValuesJSONModel.overwriteFromSerializedState(serializedState)
    }

    public serialize = (): GenericSortingJSONModelSerializedState<SortingItemKey> => {
        return this.sortValuesJSONModel.serialize()
    }

    public getSortValuesJSONModel = () => this.sortValuesJSONModel
}

////////////////////////////////////////////////
// Item
////////////////////////////////////////////////

export type GenericSortingItemKey<SortingItemKey> = SortingItemKey | undefined

export type GenericSortingItemJSONModelSerializedState<SortingItemKey> = {
    key: GenericSortingItemKey<SortingItemKey>
    order: GenericStringValueJSONModelSerializedState<SortOrder>
}

export class GenericSortingItemJSONModel<SortingItemKey extends string> {
    private keyJSONModel = new GenericStringValueJSONModel<SortingItemKey>()
    private orderJSONModel = new GenericStringValueJSONModel<SortOrder>()

    constructor(serializedState?: GenericSortingItemJSONModelSerializedState<SortingItemKey>) {
        this.reset()
        this.overwriteFromSerializedState(serializedState)
    }

    public reset = () => {
        this.keyJSONModel.reset()
        this.orderJSONModel.reset()
    }

    public overwriteFromSerializedState = (serializedState?: GenericSortingItemJSONModelSerializedState<SortingItemKey>) => {
        if (serializedState) {
            this.keyJSONModel.overwriteFromSerializedState(serializedState.key)
            this.orderJSONModel.overwriteFromSerializedState(serializedState.order)
        }
    }

    public serialize = (): GenericSortingItemJSONModelSerializedState<SortingItemKey> => {
        const value: GenericSortingItemJSONModelSerializedState<SortingItemKey> = {
            key: this.keyJSONModel.serialize() as GenericSortingItemKey<SortingItemKey>,
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