router.route('/')
       .post(function (req, res) {
           conn.connect().then(function () {
               var transaction = new sql.Transaction(conn);
               transaction.begin().then(function () {
                   var request = new sql.Request(transaction);
                   request.input("ProductName", sql.VarChar(50), req.body.ProductName)
                   request.input("ProductPrice", sql.Decimal(18, 0), req.body.ProductPrice)
                   request.execute("Usp_InsertProduct").then(function () {
                       transaction.commit().then(function (recordSet) {
                           conn.close();
                           res.status(200).send(req.body);
                       }).catch(function (err) {
                           conn.close();
                           res.status(400).send("Error while inserting data");
                       });
                   }).catch(function (err) {
                       conn.close();
                       res.status(400).send("Error while inserting data");
                   });
               }).catch(function (err) {
                   conn.close();
                   res.status(400).send("Error while inserting data");
               });
           }).catch(function (err) {
               conn.close();
               res.status(400).send("Error while inserting data");
           });
       });
