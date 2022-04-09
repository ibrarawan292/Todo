const users = [
    {
      "id": 11,
      "name": "ali",
      "age": 45
  
    },
    {
        "id": 11,
        "name": "ali",
        "age": 45
    
      }
  ]
  
exports.createNewUser = (req, res) => {
    
}


exports.getAllUsers = (req, res) => {
    res.json(users)

}

exports.getUserById = (req, res) => {
    const user = users.find(user => user.id == req.params.id)
    res.json(user)

}
exports.updateUser = (req, res) => {


}
exports.deleteUser = (req, res) => {


}