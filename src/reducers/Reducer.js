
const initialValue = 20;

export function IncreamentAndDecreament(state = initialValue, action) {

    switch (action.type) {
        case "INCREAMENT": return state + 1
        default: return state

    }

}