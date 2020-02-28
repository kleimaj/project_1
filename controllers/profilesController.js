const db = require('../models')

const index = (req, res) => {
    db.Profile.find({}, (err, allProfiles) => {
        if (err) return res.status(400).json({status: 400, error: 'Profiles Not Found, please try again'});

        res.json(allProfiles);
    });
}

const show = (req, res) => {
    db.User.find({$and: [{username: req.body.username}, {password: req.body.password}]}, (err, foundUser) => {
        if (err) return res.status(400).json({status: 400, error: 'User Not Found, please try again'});
        console.log('User found')
        db.Profile.find({UserRef: foundUser}, (err, foundProfile) => {
            if (err) return res.status(400).json({status: 400, error: 'Profile Not Found, please try again'});
            if (foundProfile.length === 0) {
                res.status(400).json({status: 400, error: "Profile not found in Database"});
            }
            else {
                console.log('Profile Found');
                console.log(foundUser);
                res.json(foundProfile);
            }
        });
    });
    // db.Profile.findById({_id: req.params.id}, (err, foundProfile) => {
    //     if (err) return res.status(400).json({status: 400, error: 'Profile Not Found, please try again'});
    //     console.log('Profile found')
    //     res.json(foundProfile);
    // });
}

const create = (req, res) => {
    console.log('creating profile...');
    db.Profile.create(req.body, (err, newProfile) => {
        if (err) return res.status(400).json({status: 400, error: 'Unable to create Profile, please try again'});
        console.log('profile created...');
        res.json(newProfile);
    });
}
// const destroy = (req, res) => {
//     db.Profile.findByIdAndDelete({_id: req.params.id}, (err, deletedProfile) => {
//         if (err) return res.status(400).json({status: 400, error: 'Unable to delete Profile, please try again'});
//         // delete user
//         db.User.findByIdAndDelete
//         // res.json(newProfile);
//     });
// }

module.exports = {
    index,
    show,
    create,
}