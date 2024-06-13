import mongoose from "mongoose";

const CasestudySchema = new mongoose.Schema({
  logo: { type: String, required: true },
  casetitle: { type: String, required: true },
  casecontent: { type: String, required: true },
  tstacktitle: { type: String, required: true },
  rightbanner: { type: String, required: true },
});

export const Casestudy = mongoose.models.Casestudy || mongoose.model('Casestudy', CasestudySchema);
