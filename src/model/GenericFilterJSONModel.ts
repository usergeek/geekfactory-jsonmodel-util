import {GenericArrayValueJSONModel, GenericArrayValueJSONModelSerializedState} from "./GenericArrayValueJSONModel";
import {GenericStringValueJSONModel} from "./GenericStringValueJSONModel";
import _ from "lodash"

export type GenericFilterJSONModelSerializedState<Name, Value> = GenericArrayValueJSONModelSerializedState<GenericFilterJSONModelArrayValue<Name, Value>>

export type GenericFilterJSONModelArrayValue<Name, Value> = GenericFilterItemJSONModelSerializedState<Name, Value>

export class GenericFilterJSONModel<Name extends string, Value> {
    private filterValuesJSONModel = new GenericArrayValueJSONModel<GenericFilterJSONModelArrayValue<Name, Value>>()

    constructor(serializedState?: GenericFilterJSONModelSerializedState<Name, Value>) {
        this.reset()
        this.overwriteFromSerializedState(serializedState)
    }

    public reset = () => {
        this.filterValuesJSONModel.reset()
    }

    public overwriteFromSerializedState = (serializedState?: GenericFilterJSONModelSerializedState<Name, Value>) => {
        this.filterValuesJSONModel.overwriteFromSerializedState(serializedState)
    }

    public overwriteFromFilterValuesJSONModels = (filterValuesJSONModels?: Array<GenericFilterItemJSONModel<Name, Value>>) => {
        this.overwriteFromSerializedState(filterValuesJSONModels == undefined ? undefined : _.map<GenericFilterItemJSONModel<Name, Value>, GenericFilterJSONModelArrayValue<Name, Value>>(filterValuesJSONModels, v => v.serialize()))
    }

    public serialize = (): GenericFilterJSONModelSerializedState<Name, Value> => {
        return this.filterValuesJSONModel.serialize()
    }

    public getFilterItems = (): Array<GenericFilterItemJSONModel<Name, Value>> | undefined => {
        const filterValues = this.filterValuesJSONModel.getValue();
        if (filterValues?.length == 0) {
            return undefined
        }
        return _.compact(_.map<GenericFilterJSONModelArrayValue<Name, Value>, GenericFilterItemJSONModel<Name, Value> | undefined>(filterValues, filterValue => new GenericFilterItemJSONModel<Name, Value>(filterValue)))
    }
}

////////////////////////////////////////////////
// Item
////////////////////////////////////////////////

export type GenericFilterItemName<Name> = Name | undefined

export type GenericFilterItemJSONModelSerializedState<Name, Value> = {
    name: GenericFilterItemName<Name>
    values: GenericArrayValueJSONModelSerializedState<Value>
}

export class GenericFilterItemJSONModel<Name extends string, Value> {
    private nameJSONModel = new GenericStringValueJSONModel<Name>()
    private valuesJSONModel = new GenericArrayValueJSONModel<Value>()

    constructor(serializedState?: GenericFilterItemJSONModelSerializedState<Name, Value>) {
        this.reset()
        this.overwriteFromSerializedState(serializedState)
    }

    public reset = () => {
        this.nameJSONModel.reset()
        this.valuesJSONModel.reset()
    }

    public overwriteFromSerializedState = (serializedState?: GenericFilterItemJSONModelSerializedState<Name, Value>) => {
        if (serializedState) {
            this.nameJSONModel.overwriteFromSerializedState(serializedState.name)
            this.valuesJSONModel.overwriteFromSerializedState(serializedState.values)
        }
    }

    public serialize = (): GenericFilterItemJSONModelSerializedState<Name, Value> => {
        return {
            name: this.nameJSONModel.serialize() as GenericFilterItemName<Name>,
            values: this.valuesJSONModel.serialize(),
        }
    }

    public getNameJSONModel = () => this.nameJSONModel
    public getValuesJSONModel = () => this.valuesJSONModel

    public setNameAndValues = (name: Name, values: Array<Value>) => {
        this.nameJSONModel.setValue(name)
        this.valuesJSONModel.setValue(values)
    }
}