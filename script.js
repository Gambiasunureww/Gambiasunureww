const questions = [
    // Round 1
    [
        {
            question: "Solve for x: 2x + 5 = 13",
            options: ["x = 4", "x = 8", "x = 6", "x = 3"],
            correct: 0,
        },
        {
            question: "Solve for x: 5x + 2 = 22",
            options: ["x = 4", "x = 5", "x = 6", "x = 3"],
            correct: 0,
        },
        {
            question: "Simplify: 3x + 5x - 7",
            options: ["8x - 7", "7x - 5", "6x - 7", "8x + 7"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 + 5x - 14",
            options: ["(x-2)(x+7)", "(x-3)(x+5)", "(x-1)(x+6)", "(x+2)(x-7)"],
            correct: 0,
        },
        {
            question: "Expand: (x + 4)(x - 3)",
            options: ["x^2 + x - 12", "x^2 - x + 12", "x^2 - 7x + 12", "x^2 + 7x - 12"],
            correct: 0,
        },
    ],
    // Round 2
    [
        {
            question: "Solve for x: 2x + 9 = 23",
            options: ["x = 7", "x = 8", "x = 6", "x = 5"],
            correct: 0,
        },
        {
            question: "Simplify: 6x - 4x + 5",
            options: ["2x + 5", "10x + 5", "6x - 5", "2x - 5"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 + 9x + 20",
            options: ["(x+4)(x+5)", "(x-4)(x+5)", "(x+3)(x+6)", "(x+2)(x+8)"],
            correct: 0,
        },
        {
            question: "Expand: (x - 1)(x + 5)",
            options: ["x^2 + 4x - 5", "x^2 - 4x - 5", "x^2 + 6x - 5", "x^2 - 6x + 5"],
            correct: 0,
        },
        {
            question: "Solve for x: 3x - 4 = 11",
            options: ["x = 5", "x = 6", "x = 7", "x = 8"],
            correct: 0,
        },
    ],
    // Round 3
    [
        {
            question: "Simplify: 9x + 2 - 4x",
            options: ["5x + 2", "13x - 2", "5x - 2", "13x + 2"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 8x + 16",
            options: ["(x-4)^2", "(x+4)^2", "(x-2)^2", "(x+2)^2"],
            correct: 0,
        },
        {
            question: "Solve for x: 7x + 3 = 38",
            options: ["x = 5", "x = 6", "x = 7", "x = 8"],
            correct: 0,
        },
        {
            question: "Simplify: 5x - 3(2x - 4)",
            options: ["x + 12", "2x - 12", "x - 12", "2x + 12"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 6x + 9",
            options: ["(x-3)^2", "(x+3)^2", "(x-4)^2", "(x+4)^2"],
            correct: 0,
        },
    ],
    // Round 4
    [
        {
            question: "Expand: (2x + 3)(x - 7)",
            options: ["2x^2 - 11x - 21", "2x^2 - 11x + 21", "2x^2 + 11x - 21", "2x^2 + 11x + 21"],
            correct: 0,
        },
        {
            question: "Solve for x: 4x + 6 = 26",
            options: ["x = 5", "x = 6", "x = 7", "x = 8"],
            correct: 0,
        },
        {
            question: "Simplify: 7x + 2x - 6",
            options: ["9x - 6", "7x - 6", "5x - 6", "9x + 6"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 3x - 28",
            options: ["(x-7)(x+4)", "(x+7)(x-4)", "(x-6)(x+5)", "(x+6)(x-5)"],
            correct: 0,
        },
        {
            question: "Solve for x: 9x - 5 = 40",
            options: ["x = 5", "x = 6", "x = 7", "x = 8"],
            correct: 0,
        },
    ],
     // Round 5
    [
        {
            question: "Simplify: 6x - 3(2x - 4)",
            options: ["6x - 12", "0x + 12", "6x + 12", "0x - 12"],
            correct: 3,
        },
        {
            question: "Factorize: x^2 + 7x - 30",
            options: ["(x+10)(x-3)", "(x+5)(x-6)", "(x+6)(x-5)", "(x-10)(x+3)"],
            correct: 0,
        },
        {
            question: "Solve for x: 3x + 7 = 19",
            options: ["x = 4", "x = 5", "x = 6", "x = 7"],
            correct: 1,
        },
        {
            question: "Expand: (x + 3)(x - 8)",
            options: ["x^2 - 5x - 24", "x^2 + 5x - 24", "x^2 - 5x + 24", "x^2 + 5x + 24"],
            correct: 0,
        },
        {
            question: "Simplify: 4x + 2(3x - 4)",
            options: ["10x - 8", "4x - 8", "6x + 4", "10x + 8"],
            correct: 0,
        },
    ],

    // Round 6
    [
        {
            question: "Solve for x: 5x - 9 = 26",
            options: ["x = 5", "x = 7", "x = 6", "x = 8"],
            correct: 3,
        },
        {
            question: "Factorize: x^2 - 10x + 25",
            options: ["(x-5)^2", "(x+5)^2", "(x-5)(x+5)", "(x-10)(x+10)"],
            correct: 0,
        },
        {
            question: "Expand: (2x - 1)(x + 3)",
            options: ["2x^2 + 5x - 3", "2x^2 + 6x - 3", "2x^2 - 5x + 3", "2x^2 - 6x + 3"],
            correct: 1,
        },
        {
            question: "Solve for x: 7x + 8 = 36",
            options: ["x = 4", "x = 5", "x = 6", "x = 7"],
            correct: 1,
        },
        {
            question: "Simplify: 9x + 3 - 4(2x - 1)",
            options: ["x + 7", "x - 7", "x + 3", "x - 3"],
            correct: 0,
        },
    ],
        // Round 7
    [
        {
            question: "Solve for x: 6x + 5 = 29",
            options: ["x = 4", "x = 5", "x = 6", "x = 7"],
            correct: 0,
        },
        {
            question: "Simplify: 3x + 4 - 2x",
            options: ["x + 4", "x - 4", "4x - 4", "4x + 4"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 9x + 14",
            options: ["(x-7)(x-2)", "(x-7)(x+2)", "(x+7)(x-2)", "(x+7)(x+2)"],
            correct: 0,
        },
        {
            question: "Expand: (x + 2)(x + 5)",
            options: ["x^2 + 7x + 10", "x^2 - 7x - 10", "x^2 + 7x - 10", "x^2 - 7x + 10"],
            correct: 0,
        },
        {
            question: "Solve for x: 8x - 3 = 13",
            options: ["x = 2", "x = 3", "x = 4", "x = 5"],
            correct: 0,
        },
    ],

    // Round 8
    [
        {
            question: "Simplify: 5x - 3x + 7",
            options: ["2x + 7", "8x - 7", "8x + 7", "2x - 7"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 + 6x + 9",
            options: ["(x+3)^2", "(x-3)^2", "(x+6)(x-9)", "(x-6)(x+9)"],
            correct: 0,
        },
        {
            question: "Expand: (2x - 3)(x + 4)",
            options: ["2x^2 + 5x - 12", "2x^2 - 5x - 12", "2x^2 + 5x + 12", "2x^2 - 5x + 12"],
            correct: 0,
        },
        {
            question: "Solve for x: 9x - 2 = 25",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 1,
        },
        {
            question: "Simplify: 7x + 5 - 2x",
            options: ["5x + 5", "5x - 5", "9x + 5", "9x - 5"],
            correct: 0,
        },
    ],

    // Round 9
    [
        {
            question: "Solve for x: 4x + 3 = 15",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 0,
        },
        {
            question: "Simplify: 3x - 7 + 5x",
            options: ["8x - 7", "7x - 8", "8x + 7", "7x + 8"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 2x - 8",
            options: ["(x-4)(x+2)", "(x-2)(x+4)", "(x-8)(x+2)", "(x-2)(x+8)"],
            correct: 0,
        },
        {
            question: "Expand: (x - 4)(x + 3)",
            options: ["x^2 - x - 12", "x^2 + x - 12", "x^2 - x + 12", "x^2 + x + 12"],
            correct: 0,
        },
        {
            question: "Solve for x: 7x + 4 = 39",
            options: ["x = 5", "x = 6", "x = 7", "x = 8"],
            correct: 0,
        },
    ],

    // Round 10
    [
        {
            question: "Simplify: 5x + 2(3x - 4)",
            options: ["11x - 8", "10x + 4", "11x + 4", "10x - 8"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 7x + 12",
            options: ["(x-3)(x-4)", "(x+3)(x+4)", "(x-6)(x+2)", "(x-2)(x+6)"],
            correct: 0,
        },
        {
            question: "Expand: (2x + 5)(x - 6)",
            options: ["2x^2 - 7x - 30", "2x^2 - 7x + 30", "2x^2 + 7x - 30", "2x^2 + 7x + 30"],
            correct: 0,
        },
        {
            question: "Solve for x: 3x - 4 = 20",
            options: ["x = 8", "x = 7", "x = 6", "x = 5"],
            correct: 0,
        },
        {
            question: "Simplify: 8x - 3(2x - 4)",
            options: ["2x + 12", "2x - 12", "6x + 12", "6x - 12"],
            correct: 0,
        },
    ],
        // Round 11
    [
        {
            question: "Solve for x: 2x + 8 = 20",
            options: ["x = 4", "x = 6", "x = 8", "x = 10"],
            correct: 1,
        },
        {
            question: "Simplify: 4x - 3(2x - 5)",
            options: ["-2x + 15", "2x - 15", "-2x - 15", "2x + 15"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 + 10x + 24",
            options: ["(x+6)(x+4)", "(x+6)(x-4)", "(x-6)(x+4)", "(x-6)(x-4)"],
            correct: 0,
        },
        {
            question: "Expand: (x - 3)(x + 7)",
            options: ["x^2 + 4x - 21", "x^2 - 4x - 21", "x^2 + 10x - 21", "x^2 - 10x + 21"],
            correct: 0,
        },
        {
            question: "Solve for x: 6x - 7 = 23",
            options: ["x = 5", "x = 6", "x = 7", "x = 8"],
            correct: 0,
        },
    ],

    // Round 12
    [
        {
            question: "Simplify: 3x + 2(4x - 5)",
            options: ["11x - 10", "8x - 5", "7x + 10", "11x + 10"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 11x + 24",
            options: ["(x-8)(x-3)", "(x+8)(x-3)", "(x-6)(x+4)", "(x+6)(x-4)"],
            correct: 0,
        },
        {
            question: "Expand: (2x - 5)(x + 3)",
            options: ["2x^2 + x - 15", "2x^2 - x - 15", "2x^2 + x + 15", "2x^2 - x + 15"],
            correct: 0,
        },
        {
            question: "Solve for x: 7x - 4 = 31",
            options: ["x = 5", "x = 6", "x = 7", "x = 8"],
            correct: 1,
        },
        {
            question: "Simplify: 9x + 3 - 4(2x - 1)",
            options: ["x + 7", "x - 7", "x + 3", "x - 3"],
            correct: 0,
        },
    ],

    // Round 13
    [
        {
            question: "Solve for x: 4x + 9 = 21",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 0,
        },
        {
            question: "Simplify: 3x - 7 + 5x",
            options: ["8x - 7", "7x - 8", "8x + 7", "7x + 8"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 4x - 12",
            options: ["(x-6)(x+2)", "(x-2)(x+6)", "(x-8)(x+2)", "(x-2)(x+8)"],
            correct: 0,
        },
        {
            question: "Expand: (x - 4)(x + 3)",
            options: ["x^2 - x - 12", "x^2 + x - 12", "x^2 - x + 12", "x^2 + x + 12"],
            correct: 0,
        },
        {
            question: "Solve for x: 8x + 5 = 45",
            options: ["x = 5", "x = 6", "x = 7", "x = 8"],
            correct: 0,
        },
    ],

    // Round 14
    [
        {
            question: "Simplify: 5x + 3(2x - 4)",
            options: ["11x - 12", "10x - 4", "11x + 4", "10x - 8"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 8x + 15",
            options: ["(x-5)(x-3)", "(x+5)(x+3)", "(x-6)(x+2)", "(x-2)(x+6)"],
            correct: 0,
        },
        {
            question: "Expand: (3x - 2)(x + 5)",
            options: ["3x^2 + 13x - 10", "3x^2 - 13x - 10", "3x^2 + 13x + 10", "3x^2 - 13x + 10"],
            correct: 0,
        },
        {
            question: "Solve for x: 5x - 7 = 23",
            options: ["x = 5", "x = 6", "x = 7", "x = 8"],
            correct: 0,
        },
        {
            question: "Simplify: 6x + 5 - 2x",
            options: ["4x + 5", "4x - 5", "8x + 5", "8x - 5"],
            correct: 0,
        },
    ],

    // Round 15
    [
        {
            question: "Solve for x: 9x + 2 = 29",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 0,
        },
        {
            question: "Simplify: 7x + 2 - 5x",
            options: ["2x + 2", "2x - 2", "12x + 2", "12x - 2"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 5x + 6",
            options: ["(x-3)(x-2)", "(x+3)(x+2)", "(x-6)(x+1)", "(x+6)(x-1)"],
            correct: 0,
        },
        {
            question: "Expand: (2x + 4)(x - 3)",
            options: ["2x^2 - 2x - 12", "2x^2 + 2x - 12", "2x^2 - 2x + 12", "2x^2 + 2x + 12"],
            correct: 0,
        },
        {
            question: "Solve for x: 10x - 3 = 47",
            options: ["x = 5", "x = 6", "x = 7", "x = 8"],
            correct: 0,
        },
    ],
        // Round 16
    [
        {
            question: "Solve for x: 4x + 7 = 31",
            options: ["x = 5", "x = 6", "x = 7", "x = 8"],
            correct: 1,
        },
        {
            question: "Simplify: 6x - 3(2x - 5)",
            options: ["0x + 15", "x + 15", "2x - 15", "0x - 15"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 + 9x + 20",
            options: ["(x+4)(x+5)", "(x-4)(x+5)", "(x-4)(x-5)", "(x+4)(x-5)"],
            correct: 0,
        },
        {
            question: "Expand: (x + 6)(x - 3)",
            options: ["x^2 + 3x - 18", "x^2 - 3x - 18", "x^2 + 3x + 18", "x^2 - 3x + 18"],
            correct: 0,
        },
        {
            question: "Solve for x: 8x - 5 = 27",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 0,
        },
    ],

    // Round 17
    [
        {
            question: "Simplify: 2x + 4(3x - 2)",
            options: ["14x - 8", "12x - 2", "14x + 8", "12x + 8"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 12x + 35",
            options: ["(x-7)(x-5)", "(x+7)(x+5)", "(x+7)(x-5)", "(x-7)(x+5)"],
            correct: 0,
        },
        {
            question: "Expand: (2x - 4)(x + 3)",
            options: ["2x^2 + 2x - 12", "2x^2 - 2x - 12", "2x^2 + 2x + 12", "2x^2 - 2x + 12"],
            correct: 0,
        },
        {
            question: "Solve for x: 5x - 6 = 24",
            options: ["x = 6", "x = 7", "x = 8", "x = 9"],
            correct: 0,
        },
        {
            question: "Simplify: 7x + 5 - 3x",
            options: ["4x + 5", "4x - 5", "10x + 5", "10x - 5"],
            correct: 0,
        },
    ],

    // Round 18
    [
        {
            question: "Solve for x: 3x + 9 = 21",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 0,
        },
        {
            question: "Simplify: 5x - 4 + 3x",
            options: ["8x - 4", "7x - 5", "8x + 4", "7x + 5"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 6x + 8",
            options: ["(x-4)(x-2)", "(x+4)(x-2)", "(x-4)(x+2)", "(x+4)(x+2)"],
            correct: 0,
        },
        {
            question: "Expand: (x + 2)(x - 5)",
            options: ["x^2 - 3x - 10", "x^2 + 3x - 10", "x^2 - 3x + 10", "x^2 + 3x + 10"],
            correct: 0,
        },
        {
            question: "Solve for x: 7x + 8 = 36",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 0,
        },
    ],

    // Round 19
    [
        {
            question: "Simplify: 6x + 3 - 2x",
            options: ["4x + 3", "4x - 3", "8x + 3", "8x - 3"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 10x + 21",
            options: ["(x-7)(x-3)", "(x+7)(x-3)", "(x-7)(x+3)", "(x+7)(x+3)"],
            correct: 0,
        },
        {
            question: "Expand: (3x - 1)(x + 2)",
            options: ["3x^2 + 5x - 2", "3x^2 - 5x - 2", "3x^2 + 5x + 2", "3x^2 - 5x + 2"],
            correct: 0,
        },
        {
            question: "Solve for x: 6x - 5 = 19",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 0,
        },
        {
            question: "Simplify: 8x + 4 - 5x",
            options: ["3x + 4", "3x - 4", "13x + 4", "13x - 4"],
            correct: 0,
        },
    ],

    // Round 20
    [
        {
            question: "Solve for x: 2x + 3 = 9",
            options: ["x = 2", "x = 3", "x = 4", "x = 5"],
            correct: 0,
        },
        {
            question: "Simplify: 4x - 3x + 8",
            options: ["x + 8", "x - 8", "7x + 8", "7x - 8"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 7x + 10",
            options: ["(x-5)(x-2)", "(x+5)(x+2)", "(x+5)(x-2)", "(x-5)(x+2)"],
            correct: 0,
        },
        {
            question: "Expand: (x + 3)(x - 4)",
            options: ["x^2 - x - 12", "x^2 + x - 12", "x^2 - x + 12", "x^2 + x + 12"],
            correct: 0,
        },
        {
            question: "Solve for x: 5x - 9 = 16",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 0,
        },
    ],
        // Round 21
    [
        {
            question: "Solve for x: 3x + 4 = 19",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 2,
        },
        {
            question: "Simplify: 2(3x - 4) + 5x",
            options: ["11x - 8", "6x - 8", "11x + 8", "6x + 8"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 + 5x + 6",
            options: ["(x+2)(x+3)", "(x-2)(x+3)", "(x+2)(x-3)", "(x-2)(x-3)"],
            correct: 0,
        },
        {
            question: "Expand: (2x + 1)(x - 3)",
            options: ["2x^2 - 5x - 3", "2x^2 - 5x + 3", "2x^2 + 5x - 3", "2x^2 + 5x + 3"],
            correct: 0,
        },
        {
            question: "Solve for x: 7x - 4 = 24",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 1,
        },
    ],

    // Round 22
    [
        {
            question: "Solve for x: 9x + 5 = 32",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 0,
        },
        {
            question: "Simplify: 4x + 6 - 2x",
            options: ["2x + 6", "2x - 6", "6x + 4", "6x - 4"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 9x + 14",
            options: ["(x-7)(x-2)", "(x+7)(x-2)", "(x-7)(x+2)", "(x+7)(x+2)"],
            correct: 0,
        },
        {
            question: "Expand: (3x - 2)(x + 4)",
            options: ["3x^2 + 10x - 8", "3x^2 - 10x - 8", "3x^2 + 10x + 8", "3x^2 - 10x + 8"],
            correct: 0,
        },
        {
            question: "Solve for x: 5x + 8 = 28",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 1,
        },
    ],

    // Round 23
    [
        {
            question: "Solve for x: 6x - 3 = 15",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 1,
        },
        {
            question: "Simplify: 8x - 4x + 7",
            options: ["4x + 7", "4x - 7", "12x + 7", "12x - 7"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 6x + 9",
            options: ["(x-3)(x-3)", "(x+3)(x+3)", "(x+3)(x-3)", "(x-3)(x+3)"],
            correct: 0,
        },
        {
            question: "Expand: (x + 3)(x - 3)",
            options: ["x^2 - 9", "x^2 + 9", "x^2 - 6", "x^2 + 6"],
            correct: 0,
        },
        {
            question: "Solve for x: 8x + 4 = 36",
            options: ["x = 4", "x = 5", "x = 6", "x = 7"],
            correct: 1,
        },
    ],

    // Round 24
    [
        {
            question: "Solve for x: 7x + 2 = 30",
            options: ["x = 4", "x = 5", "x = 6", "x = 7"],
            correct: 0,
        },
        {
            question: "Simplify: 3(2x - 5) + 7x",
            options: ["13x - 15", "6x - 15", "13x + 15", "6x + 15"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 4x + 3",
            options: ["(x-3)(x-1)", "(x+3)(x-1)", "(x-3)(x+1)", "(x+3)(x+1)"],
            correct: 0,
        },
        {
            question: "Expand: (2x - 1)(x + 2)",
            options: ["2x^2 + 3x - 2", "2x^2 - 3x - 2", "2x^2 + 3x + 2", "2x^2 - 3x + 2"],
            correct: 0,
        },
        {
            question: "Solve for x: 4x - 7 = 13",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 2,
        },
    ],

    // Round 25
    [
        {
            question: "Solve for x: 3x + 5 = 26",
            options: ["x = 6", "x = 7", "x = 8", "x = 9"],
            correct: 2,
        },
        {
            question: "Simplify: 5x - 2x + 8",
            options: ["3x + 8", "3x - 8", "7x + 8", "7x - 8"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 + 3x - 10",
            options: ["(x+5)(x-2)", "(x+2)(x-5)", "(x-5)(x-2)", "(x+5)(x+2)"],
            correct: 0,
        },
        {
            question: "Expand: (x + 4)(x - 5)",
            options: ["x^2 - x - 20", "x^2 + x - 20", "x^2 - x + 20", "x^2 + x + 20"],
            correct: 0,
        },
        {
            question: "Solve for x: 6x + 7 = 31",
            options: ["x = 4", "x = 5", "x = 6", "x = 7"],
            correct: 0,
        },
    ],
        // Round 26
    [
        {
            question: "Solve for x: 4x + 6 = 22",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 1,
        },
        {
            question: "Simplify: 7x - 3(2x - 4)",
            options: ["x + 12", "x - 12", "13x + 12", "13x - 12"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 5x + 4",
            options: ["(x-4)(x-1)", "(x+4)(x-1)", "(x-4)(x+1)", "(x+4)(x+1)"],
            correct: 0,
        },
        {
            question: "Expand: (2x + 5)(x - 3)",
            options: ["2x^2 - x - 15", "2x^2 + x - 15", "2x^2 - x + 15", "2x^2 + x + 15"],
            correct: 0,
        },
        {
            question: "Solve for x: 9x - 8 = 19",
            options: ["x = 2", "x = 3", "x = 4", "x = 5"],
            correct: 1,
        },
    ],

    // Round 27
    [
        {
            question: "Solve for x: 5x + 3 = 28",
            options: ["x = 4", "x = 5", "x = 6", "x = 7"],
            correct: 1,
        },
        {
            question: "Simplify: 8x + 4 - 3x",
            options: ["5x + 4", "5x - 4", "11x + 4", "11x - 4"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 + 6x + 8",
            options: ["(x+4)(x+2)", "(x-4)(x+2)", "(x+4)(x-2)", "(x-4)(x-2)"],
            correct: 0,
        },
        {
            question: "Expand: (x + 6)(x - 4)",
            options: ["x^2 + 2x - 24", "x^2 - 2x - 24", "x^2 + 2x + 24", "x^2 - 2x + 24"],
            correct: 0,
        },
        {
            question: "Solve for x: 3x - 7 = 14",
            options: ["x = 5", "x = 6", "x = 7", "x = 8"],
            correct: 2,
        },
    ],

    // Round 28
    [
        {
            question: "Solve for x: 2x - 5 = 13",
            options: ["x = 8", "x = 9", "x = 10", "x = 11"],
            correct: 1,
        },
        {
            question: "Simplify: 5x - 2(3x - 7)",
            options: ["x + 14", "x - 14", "7x + 14", "7x - 14"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 8x + 15",
            options: ["(x-5)(x-3)", "(x+5)(x-3)", "(x-5)(x+3)", "(x+5)(x+3)"],
            correct: 0,
        },
        {
            question: "Expand: (3x + 2)(x - 5)",
            options: ["3x^2 - 13x - 10", "3x^2 + 13x - 10", "3x^2 - 13x + 10", "3x^2 + 13x + 10"],
            correct: 0,
        },
        {
            question: "Solve for x: 7x + 4 = 25",
            options: ["x = 2", "x = 3", "x = 4", "x = 5"],
            correct: 2,
        },
    ],

    // Round 29
    [
        {
            question: "Solve for x: 6x - 2 = 28",
            options: ["x = 4", "x = 5", "x = 6", "x = 7"],
            correct: 1,
        },
        {
            question: "Simplify: 9x - 4x + 5",
            options: ["5x + 5", "5x - 5", "13x + 5", "13x - 5"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 7x + 10",
            options: ["(x-5)(x-2)", "(x+5)(x-2)", "(x-5)(x+2)", "(x+5)(x+2)"],
            correct: 0,
        },
        {
            question: "Expand: (2x - 3)(x + 4)",
            options: ["2x^2 + 5x - 12", "2x^2 - 5x - 12", "2x^2 + 5x + 12", "2x^2 - 5x + 12"],
            correct: 0,
        },
        {
            question: "Solve for x: 4x + 3 = 19",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 1,
        },
    ],

    // Round 30
    [
        {
            question: "Solve for x: 8x - 7 = 17",
            options: ["x = 2", "x = 3", "x = 4", "x = 5"],
            correct: 2,
        },
        {
            question: "Simplify: 3x + 2(5x - 4)",
            options: ["13x - 8", "10x - 8", "13x + 8", "10x + 8"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 10x + 24",
            options: ["(x-6)(x-4)", "(x+6)(x-4)", "(x-6)(x+4)", "(x+6)(x+4)"],
            correct: 0,
        },
        {
            question: "Expand: (x + 2)(2x - 3)",
            options: ["2x^2 + x - 6", "2x^2 - x - 6", "2x^2 + x + 6", "2x^2 - x + 6"],
            correct: 0,
        },
        {
            question: "Solve for x: 5x - 6 = 19",
            options: ["x = 4", "x = 5", "x = 6", "x = 7"],
            correct: 2,
        },
    ],
        // Round 31
    [
        {
            question: "Solve for x: 3x + 7 = 25",
            options: ["x = 5", "x = 6", "x = 7", "x = 8"],
            correct: 1,
        },
        {
            question: "Simplify: 6x - 4(2x - 3)",
            options: ["-2x + 12", "2x + 12", "-2x - 12", "2x - 12"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 + 9x + 20",
            options: ["(x+5)(x+4)", "(x-5)(x+4)", "(x+5)(x-4)", "(x-5)(x-4)"],
            correct: 0,
        },
        {
            question: "Expand: (3x + 1)(x - 2)",
            options: ["3x^2 - 5x - 2", "3x^2 + 5x - 2", "3x^2 - 5x + 2", "3x^2 + 5x + 2"],
            correct: 0,
        },
        {
            question: "Solve for x: 4x + 9 = 29",
            options: ["x = 4", "x = 5", "x = 6", "x = 7"],
            correct: 1,
        },
    ],

    // Round 32
    [
        {
            question: "Solve for x: 7x - 5 = 23",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 2,
        },
        {
            question: "Simplify: 5x + 2(3x - 6)",
            options: ["11x - 12", "11x + 12", "8x - 12", "8x + 12"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 3x - 28",
            options: ["(x-7)(x+4)", "(x+7)(x-4)", "(x+7)(x+4)", "(x-7)(x-4)"],
            correct: 0,
        },
        {
            question: "Expand: (x + 5)(2x - 3)",
            options: ["2x^2 + 7x - 15", "2x^2 - 7x - 15", "2x^2 + 7x + 15", "2x^2 - 7x + 15"],
            correct: 0,
        },
        {
            question: "Solve for x: 6x + 2 = 26",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 2,
        },
    ],

    // Round 33
    [
        {
            question: "Solve for x: 8x + 3 = 35",
            options: ["x = 4", "x = 5", "x = 6", "x = 7"],
            correct: 1,
        },
        {
            question: "Simplify: 7x - 3(2x - 5)",
            options: ["x + 15", "x - 15", "13x + 15", "13x - 15"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 + 4x - 21",
            options: ["(x+7)(x-3)", "(x-7)(x-3)", "(x+7)(x+3)", "(x-7)(x+3)"],
            correct: 0,
        },
        {
            question: "Expand: (2x - 4)(x + 3)",
            options: ["2x^2 + 2x - 12", "2x^2 - 2x - 12", "2x^2 + 2x + 12", "2x^2 - 2x + 12"],
            correct: 0,
        },
        {
            question: "Solve for x: 5x - 7 = 18",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 3,
        },
    ],

    // Round 34
    [
        {
            question: "Solve for x: 9x - 4 = 23",
            options: ["x = 2", "x = 3", "x = 4", "x = 5"],
            correct: 1,
        },
        {
            question: "Simplify: 6x - 2(3x - 7)",
            options: ["14", "12", "2x + 14", "2x - 14"],
            correct: 2,
        },
        {
            question: "Factorize: x^2 - 2x - 35",
            options: ["(x-7)(x+5)", "(x+7)(x+5)", "(x+7)(x-5)", "(x-7)(x-5)"],
            correct: 0,
        },
        {
            question: "Expand: (3x + 2)(2x - 3)",
            options: ["6x^2 - 5x - 6", "6x^2 + 5x - 6", "6x^2 - 5x + 6", "6x^2 + 5x + 6"],
            correct: 0,
        },
        {
            question: "Solve for x: 7x + 5 = 40",
            options: ["x = 4", "x = 5", "x = 6", "x = 7"],
            correct: 1,
        },
    ],

    // Round 35
    [
        {
            question: "Solve for x: 4x - 6 = 18",
            options: ["x = 4", "x = 5", "x = 6", "x = 7"],
            correct: 2,
        },
        {
            question: "Simplify: 8x - 3(2x - 9)",
            options: ["2x + 27", "2x - 27", "14x + 27", "14x - 27"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 + 10x + 21",
            options: ["(x+7)(x+3)", "(x-7)(x+3)", "(x+7)(x-3)", "(x-7)(x-3)"],
            correct: 0,
        },
        {
            question: "Expand: (2x + 5)(x - 4)",
            options: ["2x^2 - 3x - 20", "2x^2 + 3x - 20", "2x^2 - 3x + 20", "2x^2 + 3x + 20"],
            correct: 0,
        },
        {
            question: "Solve for x: 3x + 8 = 29",
            options: ["x = 6", "x = 7", "x = 8", "x = 9"],
            correct: 2,
        },
    ],
        // Round 36
    [
        {
            question: "Solve for x: 5x + 4 = 34",
            options: ["x = 6", "x = 5", "x = 4", "x = 7"],
            correct: 0,
        },
        {
            question: "Simplify: 9x - 4(2x + 5)",
            options: ["x - 20", "x + 20", "-x - 20", "-x + 20"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 6x + 8",
            options: ["(x-4)(x-2)", "(x-4)(x+2)", "(x+4)(x-2)", "(x+4)(x+2)"],
            correct: 0,
        },
        {
            question: "Expand: (x - 3)(x + 7)",
            options: ["x^2 + 4x - 21", "x^2 - 4x - 21", "x^2 + 4x + 21", "x^2 - 4x + 21"],
            correct: 0,
        },
        {
            question: "Solve for x: 2x + 3 = 19",
            options: ["x = 6", "x = 7", "x = 8", "x = 9"],
            correct: 0,
        },
    ],

    // Round 37
    [
        {
            question: "Solve for x: 6x + 5 = 29",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 1,
        },
        {
            question: "Simplify: 7x - 4(2x - 1)",
            options: ["x + 4", "x - 4", "-x + 4", "-x - 4"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 3x - 18",
            options: ["(x-6)(x+3)", "(x+6)(x-3)", "(x-6)(x-3)", "(x+6)(x+3)"],
            correct: 0,
        },
        {
            question: "Expand: (x + 4)(x - 5)",
            options: ["x^2 - x - 20", "x^2 - 9x - 20", "x^2 + x - 20", "x^2 - 9x + 20"],
            correct: 0,
        },
        {
            question: "Solve for x: 4x - 7 = 29",
            options: ["x = 6", "x = 7", "x = 8", "x = 9"],
            correct: 1,
        },
    ],

    // Round 38
    [
        {
            question: "Solve for x: 7x + 9 = 30",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 0,
        },
        {
            question: "Simplify: 3x - 5(2x + 7)",
            options: ["-7x - 35", "7x - 35", "-7x + 35", "7x + 35"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 + 5x - 24",
            options: ["(x-4)(x+6)", "(x+4)(x-6)", "(x-4)(x-6)", "(x+4)(x+6)"],
            correct: 0,
        },
        {
            question: "Expand: (x - 6)(x + 5)",
            options: ["x^2 - x - 30", "x^2 - 11x - 30", "x^2 + x - 30", "x^2 + 11x - 30"],
            correct: 0,
        },
        {
            question: "Solve for x: 6x - 3 = 21",
            options: ["x = 4", "x = 5", "x = 6", "x = 7"],
            correct: 1,
        },
    ],

    // Round 39
    [
        {
            question: "Solve for x: 4x - 8 = 16",
            options: ["x = 6", "x = 7", "x = 8", "x = 9"],
            correct: 0,
        },
        {
            question: "Simplify: 8x - 5(2x - 3)",
            options: ["-2x + 15", "2x - 15", "2x + 15", "-2x - 15"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 4x - 21",
            options: ["(x+3)(x-7)", "(x-3)(x-7)", "(x+3)(x+7)", "(x-3)(x+7)"],
            correct: 0,
        },
        {
            question: "Expand: (3x - 4)(x + 5)",
            options: ["3x^2 + 11x - 20", "3x^2 + 11x + 20", "3x^2 - 11x - 20", "3x^2 - 11x + 20"],
            correct: 0,
        },
        {
            question: "Solve for x: 5x + 7 = 27",
            options: ["x = 4", "x = 5", "x = 6", "x = 7"],
            correct: 1,
        },
    ],

    // Round 40
    [
        {
            question: "Solve for x: 8x - 5 = 27",
            options: ["x = 4", "x = 5", "x = 6", "x = 7"],
            correct: 2,
        },
        {
            question: "Simplify: 10x - 3(4x - 5)",
            options: ["2x + 15", "2x - 15", "6x + 15", "6x - 15"],
            correct: 0,
        },
        {
            question: "Factorize: x^2 - 6x - 16",
            options: ["(x-8)(x+2)", "(x+8)(x-2)", "(x-8)(x-2)", "(x+8)(x+2)"],
            correct: 0,
        },
        {
            question: "Expand: (x + 7)(2x - 5)",
            options: ["2x^2 - 5x + 14x - 35", "2x^2 + 5x - 14x + 35", "2x^2 - 5x + 14x + 35", "2x^2 - 5x - 14x + 35"],
            correct: 0,
        },
        {
            question: "Solve for x: 3x - 8 = 19",
            options: ["x = 6", "x = 7", "x = 8", "x = 9"],
            correct: 1,
        },
    ],
];
    

// Game State
let currentRound = 0;
let currentQuestion = 0;
let timer;
let timeLeft;
let isQuizActive = false;
let timeScore = 0;
let roundScore = 0;

// DOM Elements
const timerBar = document.querySelector('.timer-bar');
const timerDisplay = document.querySelector('.timer-display');
const questionElement = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const startButton = document.querySelector('.start-quiz');
const nextRoundButton = document.querySelector('.next-round');
const progressDots = document.querySelectorAll('.progress-dot');
const roundDisplay = document.querySelector('#currentRound');
const timeScoreDisplay = document.querySelector('#timeScore');
const roundScoreDisplay = document.querySelector('#roundScore');
const feedbackElement = document.querySelector('.feedback');
const finalScoresElement = document.querySelector('.final-scores');

// Timer Function
function startTimer() {
    timeLeft = 60;
    timerBar.style.width = '100%';
    
    timer = setInterval(() => {
        timeLeft -= 0.1;
        timerDisplay.textContent = Math.ceil(timeLeft);
        timerBar.style.width = `${(timeLeft / 60) * 100}%`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            showFeedback(false);
            setTimeout(() => nextQuestion(), 1000);
        }
    }, 100);
}

// Display Question Function
function displayQuestion() {
    const currentQuestionData = questions[currentRound][currentQuestion];
    questionElement.textContent = currentQuestionData.question;
    feedbackElement.classList.remove('show', 'correct', 'wrong');
    finalScoresElement.innerHTML = '';
    
    optionsContainer.innerHTML = '';
    currentQuestionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option fade-in';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    updateProgressDots();
}

// Check Answer Function
function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const currentQuestionData = questions[currentRound][currentQuestion];
    const isCorrect = selectedIndex === currentQuestionData.correct;
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.style.pointerEvents = 'none');
    
    options[selectedIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    options[currentQuestionData.correct].classList.add('correct');

    if (isCorrect) {
        roundScore++;
        timeScore += Math.ceil(timeLeft);
        roundScoreDisplay.textContent = roundScore;
        timeScoreDisplay.textContent = timeScore;
    }

    showFeedback(isCorrect);
    progressDots[currentQuestion].classList.add(isCorrect ? 'correct' : 'wrong');

    setTimeout(() => nextQuestion(), 1000);
}

// Show Feedback Function
function showFeedback(isCorrect) {
    feedbackElement.textContent = isCorrect ? 'Correct! 🎉' : 'Wrong! 😞';
    feedbackElement.className = `feedback show ${isCorrect ? 'correct' : 'wrong'}`;
}

// Next Question Function
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions[currentRound].length) {
        endRound();
    } else {
        displayQuestion();
        startTimer();
    }
}

// Update Progress Dots Function
function updateProgressDots() {
    progressDots.forEach((dot, index) => {
        if (index === currentQuestion) {
            dot.classList.add('active');
        } else if (index < currentQuestion) {
            dot.classList.remove('active');
        }
    });
}

// End Round Function
function endRound() {
    isQuizActive = false;
    timerDisplay.textContent = '60';
    timerBar.style.width = '100%';
    questionElement.textContent = 'Round Complete! 🎯';
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    
    finalScoresElement.innerHTML = `
        <div>Round Score: ${roundScore}/5 correct answers</div>
        <div>Time Bonus Points: ${timeScore}</div>
        <div>Great job! 🎉</div>
    `;
    
    nextRoundButton.style.display = 'block';
    startButton.style.display = 'none';
}

// Start New Round Function
function startNewRound() {
    currentQuestion = 0;
    currentRound++;
    roundScore = 0;
    roundDisplay.textContent = currentRound + 1;
    roundScoreDisplay.textContent = '0';
    nextRoundButton.style.display = 'none';
    startButton.style.display = 'block';
    questionElement.textContent = `Ready for Round ${currentRound + 1}? 🤩`;
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    finalScoresElement.innerHTML = '';
    
    // Reset progress dots
    progressDots.forEach(dot => {
        dot.className = 'progress-dot';
    });
    progressDots[0].classList.add('active');
}

// Event Listeners
startButton.addEventListener('click', () => {
    if (!isQuizActive) {
        isQuizActive = true;
        startButton.style.display = 'none';
        displayQuestion();
        startTimer();
    }
});

nextRoundButton.addEventListener('click', () => {
    if (currentRound < questions.length - 1) {
        startNewRound();
    } else {
        // End of all rounds
        questionElement.textContent = 'Quiz Complete! 🎉';
        finalScoresElement.innerHTML = `
            <div>Final Score: ${timeScore} points</div>
            <div>Thank you for playing! 🌟</div>
        `;
        nextRoundButton.style.display = 'none';
    }
});

// Initialize first round
questionElement.textContent = 'Ready for Round 1? 🏁';
