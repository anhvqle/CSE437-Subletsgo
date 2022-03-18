const User = require("./user");
const Housing = require("./housing");
const HousingAddress = require("./housingAddress");
const HousingImage = require("./housingImage");
const Tenant = require("./tenant");


// 1-to-1
HousingAddress.belongsTo(Housing);
Housing.hasOne(HousingAddress);

// 1-to-n
HousingImage.belongsTo(Housing);
Housing.hasMany(HousingImage);

// 1-to-n
Housing.belongsTo(User);
User.hasMany(Housing);

// 1-to-n
Tenant.belongsTo(User);
User.hasMany(Tenant);