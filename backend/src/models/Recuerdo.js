const mongoose = require ('mongoose');
const { Schema } = mongoose;

const recuerdosSchema = new Schema ({
    tituloRecu: { type: String, required: true },
    descRecu: { type: String, required: true },
    imgRecu: { type: String, required: true}
},{
    timestamps: true
})

module.exports = mongoose.model('Recuerdos', recuerdosSchema);