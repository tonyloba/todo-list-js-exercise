// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title,description) {
  const task = {
    title: title,
    description:description,
    complete: false,

    logState: function (){
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    markCompleted: function (){
      this.complete = true;
    }
  };
  return task;

}



// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter"); // task 0
const task2 = newTask("Do Laundry"); // task 1
const tasks = [task1,task2]; // task 1

console.log(tasks);

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed


// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
