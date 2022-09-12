const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
    celular: {
        type: String,
            validator: function (v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} No es un número válido!`
        },
    email: {
        type: String,
        require: true,
        index: true,
        match: /.+\@.+\..+/
    },
    direccion: {
        type: String,
        require: true,
    },
    activo:{
        type: Boolean,
        default: true
    }
},{versionKey: false})
{
    timestamps: true // crea dos campos fecha de realización y actualización
}

module.exports = mongoose.model('User', userSchema)