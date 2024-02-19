export interface ShuffleResult {
    string: string,
    shuffleMade: number,
    shouldContinue: boolean,
};

export function shuffle (str: string, currentShuffle: string, shuffleDid: number, maxShuffle: number) : ShuffleResult {
    const strMap: string[] = str.split('');
    let result: string = '';
    if (shuffleDid === maxShuffle || str === currentShuffle) {
        return {
            string: str,
            shuffleMade: shuffleDid,
            shouldContinue: false,
        }
    } else {
        if (currentShuffle === "") {
            for (const c of strMap) {
                result += String.fromCharCode(Math.floor(Math.random() * 55203) + 1);
            }
        } else {
            const currentShuffleMap: string[] = currentShuffle.split('');
            for (let i = 0; i < currentShuffle.length; i++) {
                if (strMap[i] != currentShuffleMap[i]) {
                    result += String.fromCharCode(Math.floor(Math.random() * 55203) + 1);
                } else {
                    result += strMap[i];
                }
            }
        }
        return {
            string: result,
            shuffleMade: shuffleDid + 1,
            shouldContinue: true,
        };
    }
};