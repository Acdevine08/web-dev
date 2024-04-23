let array = ["item", "thing", "stuff"];
let magic_number = 0;

for (let index = 0; index < 5; index++) {
    console.log(index);
}

while (magic_number < 10) {
    console.info("The magic number is " + magic_number + ".");
    magic_number++;
}

array.forEach((item) => {
    console.log(item)
});