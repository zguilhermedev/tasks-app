require('../src/db/mongoose');
const User = require('../src/models/user');

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const userCount = await User.countDocuments({ age });
    return userCount;
}

updateAgeAndCount('61df58e9b5790b397faa24a0',  25).then(result => console.log(result)).catch( e => console.log(e) );