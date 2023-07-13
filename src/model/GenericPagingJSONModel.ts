import {GenericNumberValueJSONModel, GenericNumberValueJSONModelSerializedState} from "./GenericNumberValueJSONModel";

export type GenericPagingJSONModelSerializedState = {
    currentPage: GenericNumberValueJSONModelSerializedState
    pageSize: GenericNumberValueJSONModelSerializedState
}

const DEFAULT_CURRENT_PAGE = 1
const DEFAULT_PAGE_SIZE = 10

export type GenericPagingJSONModelDefaults = {
    defaultPageSize?: number
    defaultCurrentPage?: number
}

export class GenericPagingJSONModel {
    private currentPageJSONModel = new GenericNumberValueJSONModel(undefined)
    private pageSizeJSONModel = new GenericNumberValueJSONModel(undefined)

    constructor(serializedState?: GenericPagingJSONModelSerializedState, defaults?: GenericPagingJSONModelDefaults) {
        const {defaultCurrentPage = DEFAULT_CURRENT_PAGE, defaultPageSize = DEFAULT_PAGE_SIZE} = defaults || {}
        if (defaultCurrentPage !== undefined) {
            this.currentPageJSONModel.setDefaultValue(defaultCurrentPage)
        }
        if (defaultPageSize !== undefined) {
            this.pageSizeJSONModel.setDefaultValue(defaultPageSize)
        }
        this.reset()
        this.overwriteFromSerializedState(serializedState)
    }

    public reset = () => {
        this.currentPageJSONModel.reset()
        this.pageSizeJSONModel.reset()
    }

    public overwriteFromSerializedState = (serializedState?: GenericPagingJSONModelSerializedState) => {
        if (serializedState) {
            this.currentPageJSONModel.overwriteFromSerializedState(serializedState.currentPage)
            this.pageSizeJSONModel.overwriteFromSerializedState(serializedState.pageSize)
        }
    }

    public serialize = (): GenericPagingJSONModelSerializedState => {
        return {
            currentPage: this.currentPageJSONModel.serialize(),
            pageSize: this.pageSizeJSONModel.serialize(),
        }
    }

    public getCurrentPage = () => this.currentPageJSONModel
    public getPageSize = () => this.pageSizeJSONModel

    public setValue = (currentPage: number | undefined, pageSize: number | undefined) => {
        this.currentPageJSONModel.setValue(currentPage)
        this.pageSizeJSONModel.setValue(pageSize)
    }
}