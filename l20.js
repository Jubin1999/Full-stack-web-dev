let lecture = 10;
let section = 3;
let title = 'Javascript';

// console.log(lecture);


// const course = {
//     lecture: 10,
//     section: 3,
//     title : 'Javascript',
//     notes: {
//         introduction: "Welcome to JS course"
//     },
//     enroll(){
//         console.log('you are sucessfully enrolled');
//     }
// }

// course.enroll()
// console.log(course)
// course.price = 999

//Factory function
function createCourse(title){
    return {
        title: title,
        enroll(){
            console.log('you are sucessfully enrolled');
        }
    }
}

const newCourse = createCourse('Javascript');

//constructor function

function Course(title){
    this.title = title,
    this.enroll = function(){
        console.log('you are sucessfully enrolled');
    }
}


const Course_1 = new Function('title', `
this.title = title,
this.enroll = function(){
    console.log('you are sucessfully enrolled');
}`
)

// //primitive data type
// let number = 10;
// //pass by value
// let number_2 = number
// number = 15;


// //reference datatype
// let obj = {number : 10};
// //pass by reference
// let obj2 = obj;

// obj.number = 15;

const course = {
    title: 'Javascript',
    enroll() {
        console.log('you are sucessfully enrolled');
    }
}

// for(let key in course){
//     console.log(key, course[key]);
// }
const course_1 = {};
for(let key of Object.keys(course)){
    course_1[key] = course[key]
}
