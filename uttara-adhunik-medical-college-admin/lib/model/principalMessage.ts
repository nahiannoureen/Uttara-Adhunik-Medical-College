import mongoose, { Schema } from "mongoose";

const principalMessageSchema = new Schema(
  {
    principalName: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    signatureImage: {
      type: String,
      required: true,
    },

    signaturePublicId: {
      type: String,
      required: true,
    },

    principalImage: {
      type: String,
      required: true,
    },

    principalImagePublicId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.PrincipalMessage;

export const PrincipalMessage =
  mongoose.models.PrincipalMessage ||
  mongoose.model("PrincipalMessage", principalMessageSchema);
