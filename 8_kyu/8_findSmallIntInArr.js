// my desicion

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallInt = args[0]
        for (let i = 0; i < args.length; i++) {
            if (args[i] < smallInt) {
                smallInt = args[i]
            }
        }
        return smallInt
    }
}

// the best desicion

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}