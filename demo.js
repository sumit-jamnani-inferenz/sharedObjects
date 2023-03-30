const sequelize = require('./config/db/dbConfig')

// const demo = async (req, res) => {

//     const { productSKU } = 'abc';
//     var sql = `SELECT * FROM productVariants WHERE "productSKU"=${productSKU}`;
//     sequelize.query(sql, (err, data) => {
//         if (err) throw err;
//         else {
//             if (data.rowCount > 0) {
//                 res.status(200).json({ status: true, data: data.rows });
//             }
//             else {
//                 res.status(400).json({ status: true, message: "User Not Found!!" });
//             }
//         }
//     });
//     // const product = await models.productDetails.findOne({
//     //     where: { productSKU },
//     // });
//     // if (product) {
//     //     return res.status(200).json({ product });
//     // }
// };

// demo()