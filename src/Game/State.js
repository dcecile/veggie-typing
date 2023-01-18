import { random } from "underscore"
import { vegetableNames, diseaseNames, pollinatorNames } from "./Dictionary"
import { v4 as uuidv4 } from 'uuid';

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
            let count = random(1, 2)
            const newNames = []
            for (let i = 0; i < count; i++) {
                let type = random(0, 9)
                let newName
                if (type < 8) {
                    newName = {
                        type: "vegetable",
                        text: vegetableNames[random(0, vegetableNames.length -1)],
                        matched: false,
                        partialMatch: 0,
                    }
                } else if (type === 8) {
                    newName = {
                        type: "disease",
                        text: diseaseNames[random(0, diseaseNames.length -1)],
                        matched: false,
                        partialMatch: 0,
                    }
                } else {
                    newName = {
                        type: "pollinator",
                        text: pollinatorNames[random(0, pollinatorNames.length -1)],
                        matched: false,
                        partialMatch: 0,
                    }
                }
                newNames.push(newName)
            }
            return {
                ...gameState,
                started: true,
                names: [...gameState.names, {
                    id: uuidv4(),
                    row: newNames
                }]
            }
        }
    })
    setTimeout(() => loop(setGameState), random(2000, 4000))
}
