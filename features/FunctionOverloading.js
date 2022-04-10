function add(v1, v2) {
    if (typeof v1 === "string" && typeof v2 === "string") {
        return v1 + v2;
    }
    if (typeof v1 === "number" && typeof v2 === "number") {
        return v1 + v2;
    }
}
add(1, 2);
add("hello", "hi");
