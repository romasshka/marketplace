import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: "vegetables" },
            { id: 2, name: "meats" },
        ]

        this._brands = [
            { id: 1, name: "Samsung" },
            { id: 2, name: "Apple" },
        ]

        this._devices = [
            { id: 1, name: "Iphone 9s", price: "250", rating: 4 },
             { id: 2, name: "Iphone 9s", price: "250", rating: 4 },
              { id: 3, name: "Iphone 9s", price: "250", rating: 4 },
              { id: 4, name: "Iphone 9s", price: "250", rating: 4 },
        ]

        this._selectedType = {}
        makeAutoObservable(this)/* monitors changes and rerenders elements when they change */
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedTypes(type) {
        this._selectedType = type
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedTypes() {
        return this._selectedType
    }
}