function Student(params) {
    if (params.id) this.id = params["id"];
    if (params.name) this.name = params["name"];
    if (params.phone) this.phone = params["phone"];
    if (params.email) this.email = params["email"];
    if (params.image) this.image = params["image"];
}

function Cuorse(params) {
    if (params.id) this.id = params["id"];
    if (params.name) this.name = params["name"];
    if (params.description) this.description = params["description"];
    if (params.image) this.image = params["image"];

}

module.exports.createModel = {
    Student: Student,
    Cuorse: Cuorse
}