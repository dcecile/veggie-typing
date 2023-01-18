import { random } from "underscore"
import { vegetableNames, diseaseNames, pollinatorNames } from "./Dictionary"

export function initGameState() {
    return {
        started: false,
        freeze: 0,
        input: "",
        names: [],
        score: 0
    }
}

export function startGame(setGameState) {
    loop(setGameState)
}

function loop(setGameState) {
    setGameState((gameState) => {
        if (gameState.freeze) {
            return {
                ...gameState,
                freeze: gameState.freeze - 1
            }
        } else {
            let type = random(0, 2)
            let newName
            if (type === 0) {
                newName = {
                    type: "vegetable",
                    text: vegetableNames[random(0, vegetableNames.length -1)].substring(0, 5),
                    matched: false,
                }
            } else if (type === 1) {
                newName = {
                    type: "disease",
                    text: diseaseNames[random(0, diseaseNames.length -1)].substring(0, 5),
                    matched: false,
                }
            } else {
                newName = {
                    type: "pollinator",
                    text: pollinatorNames[random(0, pollinatorNames.length -1)].substring(0, 5),
                    matched: false,
                }
            }
            return {
                ...gameState,
                started: true,
                names: [...gameState.names, [newName]]
            }
        }
    })
    setTimeout(() => loop(setGameState), random(2000, 4000))
}
