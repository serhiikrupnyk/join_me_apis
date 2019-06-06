async function action(req, res) {
    try {
        res.send(await req.user);
    } catch (err) {
        res.sendStatus(400);
    }
}

module.exports = action;