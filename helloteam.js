const names = ["Caroline", "Tyler" , "Christopher","Jose", "Ricky", "Brother Hamilton"]


names.forEach((person, index, array) => {
    console.log(person + " is table 1 member #" + index + " who is before team member #" + (index+1) + " named " + array[index + 1]);
}
);