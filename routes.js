module.exports = (router) => {
  router.get('/', (req, res) => {
    res.send(`
      <form method=post action="http://localhost:8000/form" enctype="multipart/form-data">
        <input type=hidden name=cmd value=my_command>
        <input type=hidden name=email value="test@test.com">
        <input type=hidden name=item_name value="Multipart Item">
        <input type=hidden name=item_number value="1234">
        <input type=submit value="Multipart 01">
      </form>
    `);
  });

  router.post('/form', (req, res) => {
    console.log(`Form data: ${JSON.stringify(req.body)}`);
  });
}
