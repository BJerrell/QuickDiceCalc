# QuickDiceCalc

A dice roller and analyzer designed to take in a single string as input.

Dice String: Expected format of "{x}d{y}" or "{n}" separated by addition symbol ('+').
    Variables:
        'x': An integer greater than zero representing the number of dice of the given die type. Optional.
            Exclusion of this variable is the same as using a 1.
        'y': An integer greater than zero representing the number of sides of the die.
        'n': An integer that is a flat modifier that has no dice involved.
    Example 1: "3d6 + 1"
        Analyze rolling a total of three six-sided die and add one to the final result.
    Example 2: "d20"
        Analyze rolling a total of one twenty-sided die with no modifiers.
    Example 3: "1"
        Analyze rolling no dice and add one to the final result.
    Example 4: "d8 + 2d6"
        Analyze rolling a total of one eight-sided die and two six-sided die with no modifiers.
