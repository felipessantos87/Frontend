function area({base, height}) {
    return base * height;
}

const rectangles = [
    {
        base: 30,
        height:15
    },
    {
        base: 45,
        height: 22
    },
    {
        base: 33,
        height: 11
    },
]
for (const rectangle of rectangles) {
    console.log(area(rectangle));
};