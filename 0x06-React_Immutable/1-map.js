import { Map } from "./node_modules/immutable/dist/immutable";

const getImmutableObject = (object) => {
    return Map(object)
}

export default getImmutableObject