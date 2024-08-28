import { json } from "stream/consumers";
import path from "path";
import { File } from "buffer";

import {Teacher, Student} from "./type";

let student:Student = {
    name: 'xiao hong',
    age: 12
}

let teacher: Teacher = {
    name: "wang lao shi",
    age: 22
}

console.log("student name = " + student.name)
console.log("teacher name = " + teacher.name)

