const mongoose = require("mongoose");
const { Schema } = mongoose;

const gigSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true
    },
    images: {
      type: [String], //it stores array of image uri as strings..
      required: false,
    },
    desc: {
      type: String,
      required: true,
    },
    totalStars: {
      type: Number,
      default: 0
    },
    stars: {
      type: Number,
      default: 0
    },
    shortTitle:{
      type: String,
      required: true
    },
    shortDesc:{
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
    },
    deliveryTime: {
      type: Number,
      required: true,
    },
    revisionTime: {
      type: Number,
      required: true,
    },
    features:{
      type: [String],
      required: false
    },
    sales: {
      type: Number,
      default: 0
    },
  },
  {
    timestamps: true,
  },
);

const Gig = mongoose.model("Gig", gigSchema);

module.exports = Gig;
