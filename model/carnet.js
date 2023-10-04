import mongoose from "mongoose";

const textSchema = new mongoose.Schema(
  {
    formData: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Carnet = mongoose.models.Carnet || mongoose.model("Carnet", textSchema);

export default Carnet;
