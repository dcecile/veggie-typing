import { random } from "underscore"
import { vegetableNames } from "./Dictionary"

export function initGameState() {
    return {
        started: false,
        input: "",
        names: [],
        score: 0
    }
}

export function startGame(setGameState) {
    loop(setGameState)
}

function loop(setGameState) {
    setGameState((gameState) => ({
        ...gameState,
        started: true,
        names: [...gameState.names, [vegetableNames[0]]]
    }))
    setTimeout(() => loop(setGameState), random(2000, 4000))
}
