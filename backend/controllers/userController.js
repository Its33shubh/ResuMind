let User = require('../models/users')

exports.getUserProfile = async (req, res) => {
    try {
        //check and find user in db 
        // req.user.id comes when we in middleware line is like that req.user = decoded  so decoded contain the user{} in that id fides
        const user = await User.findById(req.user.id).select("-password")

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        res.status(200).json({
            success: true,
            data: user
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
}

exports.updateUserProfile = async (req, res) => {
    try {

        let { headline, bio, skills, location, github, linkedin, portfolio, profileImage } = req.body

        let updateUser = await User.findByIdAndUpdate(
            req.user.id,
            {
                headline, bio, skills, location, github, linkedin, portfolio, profileImage
            },
            { returnDocument: "after" }
        )


        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            data: updateUser
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Server error"
          })
    }

}


