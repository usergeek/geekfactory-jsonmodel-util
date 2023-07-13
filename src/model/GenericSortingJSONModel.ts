import {GenericStringValueJSONModel, GenericStringValueJSONModelSerializedState} from "./GenericStringValueJSONModel";
import _ from "lodash"

export type SortOrder = "ascend" | "descend"
export type GenericSortingJSONModelSerializedState = {
    sortKey: GenericStringValueJSONModelSerializedState
    sortOrder: GenericStringValueJSONModelSerializedState
} | undefined

export class GenericSortingJSONModel {
    private sortKeyJSONModel = new GenericStringValueJSONModel()
    private sortOrderJSONModel = new GenericStringValueJSONModel<SortOrder>()

    constructor(serializedState?: GenericSortingJSONModelSerializedState) {
        this.reset()
        this.overwriteFromSerializedState(serializedState)
    }

    public reset = () => {
        this.sortKeyJSONModel.reset()
        this.sortOrderJSONModel.reset()
    }

    public overwriteFromSerializedState = (serializedState?: GenericSortingJSONModelSerializedState) => {
        if (serializedState) {
            this.sortKeyJSONModel.overwriteFromSerializedState(serializedState.sortKey)
            this.sortOrderJSONModel.overwriteFromSerializedState(serializedState.sortOrder)
        }
    }

    public serialize = (): GenericSortingJSONModelSerializedState => {
        const value = {
            sortKey: this.sortKeyJSONModel.serialize(),
            sortOrder: this.sortOrderJSONModel.serialize(),
        };
        if (_.every(value, _.isEmpty)) {
            return undefined
        }
        return value
    }

    public getSortKeyJSONModel = () => this.sortKeyJSONModel
    public getSortOrderJSONModel = () => this.sortOrderJSONModel

}