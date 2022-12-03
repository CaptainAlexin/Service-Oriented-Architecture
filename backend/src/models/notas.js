const mongoose = require ('mongoose');
const { Schema } = mongoose;

const notasSchema = new Schema ({
    titulo: { type: String, required: true },
    desc: { type: String, required: true },
    fecha: { type: String, required: true}
},{
    timestamps: true
})

module.exports = mongoose.model('Notas', notasSchema);