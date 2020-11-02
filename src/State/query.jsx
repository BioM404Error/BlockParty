import Objects from "./Objects"

// syntax for must haves is an unlimited length of two element arrays [key, value]

function queryObjects(...mustHaves) {
    let add
    let qualified = new Set()

    for (let object of Objects) {
        add = true
        for (let [key, value] of mustHaves) {
            if (object[key] !== value) {
                add = false
                break
            }
        }
        if (add) {
            qualified.add(object)
        }
    }
    return qualified
}

export default queryObjects