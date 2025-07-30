function logResult(expression, result, explanation) {
    console.table([`${expression} => ${result}  // ${explanation}`]);
}

// BASIC NUMBER COMPARISONS
logResult("2 > 1", 2 > 1, "2 is greater than 1");
logResult("2 >= 1", 2 >= 1, "2 is greater than or equal to 1");
logResult("2 < 1", 2 < 1, "2 is not less than 1");
logResult("2 == 1", 2 == 1, "2 is not equal to 1 (loose equality)");
logResult("2 != 1", 2 != 1, "2 is not equal to 1");

// STRING-NUMBER COMPARISON (coercion happens!)
logResult('"2" > 1', "2" > 1, '"2" coerced to 2, so true');
logResult('"02" > 1', "02" > 1, '"02" coerced to 2, so true');

// COMPARISONS WITH null
logResult("null > 0", null > 0, "null converts to 0; 0 > 0 is false");
logResult("null == 0", null == 0, "null only loosely equals undefined, not 0");
logResult("null >= 0", null >= 0, "null converts to 0; 0 >= 0 is true");

// COMPARISONS WITH undefined
logResult("undefined == 0", undefined == 0, "undefined equals only null or itself, not 0");
logResult("undefined === 0", undefined === 0, "strict types differ (undefined vs number)");
logResult("undefined > 0", undefined > 0, "undefined converts to NaN; comparison false");
logResult("undefined < 0", undefined < 0, "undefined converts to NaN; comparison false");

// STRICT VS LOOSE EQUALITY
logResult('"2" == 2', "2" == 2, "'==' coerces string to number: true");
logResult('"2" === 2', "2" === 2, "'===' requires same type, so false");
