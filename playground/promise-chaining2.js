require('../src/db/mongoose');
const Task = require('../src/models/task');

const deleteAndCountIncompleteTasks = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const countIncompleteTasks = await Task.countDocuments({completed: false});
    return countIncompleteTasks;
}

deleteAndCountIncompleteTasks('61df7171dea0b1e322f784a5').then( result => console.log(result)).catch( e => console.log(e));