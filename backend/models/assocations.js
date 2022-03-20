const User = require("./user");
const Housing = require("./housing");
const HousingAddress = require("./housingAddress");
const HousingImage = require("./housingImage");
const Tenant = require("./tenant");
const Marketplace = require("./marketplace");
const MarketplaceImage = require("./marketplaceImage");


// 1-to-1
HousingAddress.belongsTo(Housing, { onDelete: 'cascade', hooks: true });
Housing.hasOne(HousingAddress, { onDelete: 'cascade', hooks: true });

// 1-to-n
HousingImage.belongsTo(Housing, { onDelete: 'cascade', hooks: true });
Housing.hasMany(HousingImage, { onDelete: 'cascade', hooks: true });

// 1-to-n
Housing.belongsTo(User);
User.hasMany(Housing);

// 1-to-n
Tenant.belongsTo(User);
User.hasMany(Tenant);

// 1-to-n
Marketplace.belongsTo(User);
User.hasMany(Marketplace);

// 1-to-n
MarketplaceImage.belongsTo(Marketplace);
Marketplace.hasMany(MarketplaceImage);