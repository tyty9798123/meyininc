const { Router } = require('express')
const router = Router();
const mysql = require('../connections/mysql');

router.get('/get_article_list', (req, res, next) => {
    let is_private = req.query.is_private || false;
    if (is_private == "false") is_private = false;
    

    if ( is_private ) {
        const uid = req.session.uid;
    }
    else{
        // get public
        const statment = `
        SELECT a.articleID, a.articleTitle, a.dateTime as created_at, a.updated_at, a.userID, c.userName, c.userAccount
        FROM articles a 
        INNER JOIN users c ON a.userID = c.userID
        LEFT JOIN privateArticle b ON a.articleID = b.articleID where b.articleID is null
        ORDER BY a.dateTime DESC;`;
        
        mysql.query(statment, (err, result) => {
            if (err){
                res.json({
                    success: false,
                    result: err
                })
            }
            else{
                res.json({
                    success: true,
                    result
                })
            }
        })
    }
})

module.exports = router;