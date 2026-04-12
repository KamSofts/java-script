function fnForInLoop() {
    const arr = ["Ram", 13, "GHSS", "Manapparai"];

    for (const idx in arr) {
        console.log("Index of", idx, "=", arr[idx]);
    }
}

fnForInLoop();

/*
Index of 0 = Ram
Index of 1 = 13
Index of 2 = GHSS
Index of 3 = Manapparai
*/