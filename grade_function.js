// This function will tell the grade of a student out of 100 marks

function grade(mark) {

    switch (true) {
        case (mark < 40):
            console.log('F');
            break;

        case (mark >= 40 && mark <= 49):
            console.log('D');
            break;
        case (mark >= 50 && mark <= 64):
            console.log('C');
            break;
        case (mark >= 65 && mark <= 79):
            console.log('B');
            break;
        case (mark >= 80 && mark <= 100):
            console.log('A');
    }
}
grade(99);