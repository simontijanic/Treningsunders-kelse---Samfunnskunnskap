const Token = require("../models/tokenModel")
const Admin = require("../models/adminModel")
const crypto = require('crypto');

function generateShortToken(length = 6) {
    const buffer = crypto.randomBytes(Math.ceil(length / 2));
    
    const token = buffer
        .toString('hex')
        .slice(0, length)
        .toUpperCase()
        .replace(/O/g, '0')  // Replace O with 0 to avoid confusion
        .replace(/I/g, '1'); // Replace I with 1 to avoid confusion
    
    return token;
}

exports.generateToken = async (req, res) => {
    try {
        let token;
        let existingToken;
        
        do {
            token = generateShortToken();
            existingToken = await Token.findOne({ token });
        } while (existingToken);

        const newToken = new Token({ 
            token, 
            createdAt: new Date(),
            used: false
        });
        await newToken.save();

        return res.redirect("/admin/dashboard");
    } catch (error) {
        console.error('Token generation error:', error);
        return res.redirect("/admin/dashboard");
    }
}

exports.getLogin = (req, res)=> {
    res.render("adminLogin")
}   

exports.getDashboard = async (req, res)=> {
    const tokens = await Token.find();
    res.render("adminDashboard", { tokens })
}   


exports.loginAdmin = async (req, res)=> {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) {return}

    if (admin.password === password) {

        req.session.admin = {
            id: admin._id,
            username: admin.username,
        };

        return res.redirect("/admin/dashboard");
    }
}