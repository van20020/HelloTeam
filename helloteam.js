const names = ["Caroline", "Tyler" , "Christopher","Jose", "Ricky", "Brother Hamilton"]


names.forEach((person, index, array) => {
    console.log(person + " is table 1 member " + index + " who is before " + array[index + 1]);
}
);