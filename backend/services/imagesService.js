const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
var credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
AWS.config.credentials = credentials;
const s3 = new AWS.S3({});

// Citation: https://raz-levy.medium.com/upload-images-to-aws-s3-using-react-js-and-node-js-express-server-bc15b959372c

/**
 * @description Uploads an image to S3
 * @param imageName Image name
 * @param base64Image Image body converted to base 64
 * @param type Image type
 * @return string S3 image URL or error accordingly
 */
async function upload(imageName, base64Image, bucket) {
    const params = {
        Bucket: bucket,
        Key: imageName,
        Body: new Buffer.from(base64Image.replace(/^data:image\/\w+;base64,/, ""), 'base64'),
        ContentType: base64Image.split("data:")[1].split(";base64")[0]
    };

    let data;

    try {
        data = await promiseUpload(params);
    } catch (err) {
        throw err;
    }

    return data.Location;
}
/**
 * @description Promise an upload to S3
 * @param params S3 bucket params
 * @return data/err S3 response object
 */
function promiseUpload(params) {
    return new Promise(function (resolve, reject) {
        s3.upload(params, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = upload;