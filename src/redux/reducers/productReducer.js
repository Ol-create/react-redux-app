import { ActionTypes } from "../constants/action-types"

const initialState = {
	products: [
		{
		id: 1,
		title: "God is good",
		category: "Testimony",
	},
],
}

export const productReducer = (state, {type, payload}) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return state;
		default:
			return state;

	}
}
