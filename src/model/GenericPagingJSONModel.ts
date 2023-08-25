import {GenericNumberValueJSONModel, GenericNumberValueJSONModelSerializedState} from "./GenericNumberValueJSONModel";

export type GenericPagingJSONModelSerializedState = {
    page: GenericNumberValueJSONModelSerializedState
    limit: GenericNumberValueJSONModelSerializedState
} | undefined

const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 10

export type GenericPagingJSONModelDefaults = {
    defaultLimit?: number
    defaultPage?: number
}

export class GenericPagingJSONModel {
    private pageJSONModel = new GenericNumberValueJSONModel(undefined)
    private limitJSONModel = new GenericNumberValueJSONModel(undefined)

    constructor(serializedState?: GenericPagingJSONModelSerializedState, defaults?: GenericPagingJSONModelDefaults) {
        const {defaultPage = DEFAULT_PAGE, defaultLimit = DEFAULT_LIMIT} = defaults || {}
        this.pageJSONModel.setDefaultValue(defaultPage)
        this.limitJSONModel.setDefaultValue(defaultLimit)
        this.reset()
        this.overwriteFromSerializedState(serializedState)
    }

    public reset = () => {
        this.pageJSONModel.reset()
        this.limitJSONModel.reset()
    }

    public overwriteFromSerializedState = (serializedState?: GenericPagingJSONModelSerializedState) => {
        this.pageJSONModel.overwriteFromSerializedState(serializedState?.page)
        this.limitJSONModel.overwriteFromSerializedState(serializedState?.limit)
    }

    public serialize = (): GenericPagingJSONModelSerializedState => {
        if (this.pageJSONModel.isDefaultValue() && this.limitJSONModel.isDefaultValue()) {
            return undefined
        }
        return {
            page: this.pageJSONModel.serialize(),
            limit: this.limitJSONModel.serialize(),
        }
    }

    public getPageJSONModel = () => this.pageJSONModel
    public getLimitJSONModel = () => this.limitJSONModel

    public getPageValue = (): number => this.pageJSONModel.getValue() ?? DEFAULT_PAGE
    public getLimitValue = (): number => this.limitJSONModel.getValue() ?? DEFAULT_LIMIT

    public setValue = (page: number | undefined, limit: number | undefined) => {
        this.pageJSONModel.setValue(page)
        this.limitJSONModel.setValue(limit)
    }
}