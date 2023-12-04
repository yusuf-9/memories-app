const {freeze} = Object

type typeMemoryRatings = {
    [key: number] : any 
}

export const memoryRatings : typeMemoryRatings = freeze({
    1: {label: "awful", colorClass: "rgb(185, 28, 28)"},
    2: {label: "bad", colorClass: "rgb(248, 113, 113)"},
    3: {label: "meh", colorClass: "rgb(234, 179, 8)"},
    4: {label: "interesting", colorClass: "rgb(134, 239, 172)"},
    5: {label: "good", colorClass: "rgb(34, 197, 94)"},
    6: {label: "epic", colorClass: "rgb(21, 128, 61)"},
})