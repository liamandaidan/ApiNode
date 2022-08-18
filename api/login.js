const router = require('express').Router({ mergeParams: true });
/**
 * obv passwords will be encrpyted and stored in databases.
 */
const users = [
    {
        id: 1,
        email: "liam@test.com",
        password: "password"
    },
    {
        id: 2,
        email: "test@test.com",
        password: "password"
    }
]
//helper function to check validity of body, using DRY principles
const validUserInfo = (req, res, next) => {
    if (!(req.body.email && req.body.id)) {
        res.status(404).send('Invalid information');
    }

    next();
}

/**
 * Return all users
 */
router.get('/', (req, res, next) => {
    res.status(200).send(users);
})

/**
 * This will check all logic when we are getting routes and save user into req for later.
 */
router.use('/:id', (req, res, next) => {
    const userID = Number(req.params.id);
    const userIndex = users.findIndex(user => user.id === userID);
    if (userIndex === -1) {
        return res.status(404).send('user not found with that ID');
    } else {
        //req.user = users[userIndex];
        req.userIndex = userIndex;
        next();
    }
})

/**
 * Return one user by ID
 */
router.get('/:id', (req, res, next) => {
    res.send(users[req.userIndex]);
})
/**
 * Update user
 */
router.put('/:id', validUserInfo,(req, res, next) => {
    const newUser = req.body;
    users[req.userIndex] = req.body;
    res.send(newUser);
})
/**
 * Create user
 */
router.post('/', (req, res, next) => {
    const newUser = req.body;
    newUser.id = users[users.length-1].id+1;
    users.push(newUser);
    res.status(201).send(newUser);
})
/**
 * Delete user
 */
router.delete('/:id', (req, res, next) => {
    users.splice(req.userIndex, 1);
    res.status(204).send();
})

module.exports = router;